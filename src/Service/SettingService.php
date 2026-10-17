<?php

namespace App\Service;

use App\Repository\SettingRepository;

/**
 * Provides access to application settings stored in the database.
 */
class SettingService
{
    public const PUBLIC_AR_REQUIRES_LOGIN = 'public_ar_requires_login';

    public function __construct(private SettingRepository $repository)
    {
    }

    /**
     * Public AR is login-protected unless an administrator disables it.
     */
    public function isPublicArLoginRequired(): bool
    {
        return $this->repository->get(self::PUBLIC_AR_REQUIRES_LOGIN, '1') === '1';
    }

    public function setPublicArLoginRequired(bool $required): void
    {
        $this->repository->set(self::PUBLIC_AR_REQUIRES_LOGIN, $required ? '1' : '0');
    }
}
