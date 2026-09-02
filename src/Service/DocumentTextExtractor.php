<?php

namespace App\Service;

use App\Exception\ValidationException;
use PhpOffice\PhpWord\IOFactory;
use Smalot\PdfParser\Parser;
use Throwable;

final class DocumentTextExtractor
{
    public function __construct()
    {
        $autoload = __DIR__ . '/../../rag-parser/vendor/autoload.php';
        if (!is_file($autoload)) {
            throw new \RuntimeException('Chybí lokální závislosti v rag-parser/vendor.');
        }
        require_once $autoload;
    }

    public function extract(string $path, string $extension): string
    {
        try {
            $text = match (strtolower($extension)) {
                'txt', 'ttx', 'md' => file_get_contents($path),
                'pdf' => (new Parser())->parseFile($path)->getText(),
                'docx' => $this->extractDocx($path),
                default => throw new ValidationException('Nepodporovaný typ dokumentu.'),
            };
        } catch (ValidationException $e) {
            throw $e;
        } catch (Throwable $e) {
            throw new ValidationException('Text dokumentu se nepodařilo načíst: ' . $e->getMessage(), 400, $e);
        }

        $text = trim((string)$text);
        if ($text === '') {
            throw new ValidationException('Dokument neobsahuje žádný čitelný text.');
        }
        return $text;
    }

    private function extractDocx(string $path): string
    {
        $document = IOFactory::load($path, 'Word2007');
        $lines = [];
        foreach ($document->getSections() as $section) {
            foreach ($section->getElements() as $element) {
                $this->collectElementText($element, $lines);
            }
        }
        return implode("\n", array_filter(array_map('trim', $lines)));
    }

    /** @param string[] $lines */
    private function collectElementText(object $element, array &$lines): void
    {
        if (method_exists($element, 'getRows')) {
            foreach ($element->getRows() as $row) {
                foreach ($row->getCells() as $cell) {
                    foreach ($cell->getElements() as $child) {
                        $this->collectElementText($child, $lines);
                    }
                }
            }
            return;
        }
        if (method_exists($element, 'getElements')) {
            foreach ($element->getElements() as $child) {
                $this->collectElementText($child, $lines);
            }
            return;
        }
        if (method_exists($element, 'getText')) {
            $text = $element->getText();
            if (is_string($text) && trim($text) !== '') {
                $lines[] = $text;
            } elseif (is_object($text)) {
                $this->collectElementText($text, $lines);
            }
        }
    }
}
