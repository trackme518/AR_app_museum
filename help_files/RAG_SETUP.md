# MariaDB RAG setup

## Requirements

- PHP 8.1+ with `curl`, `fileinfo`, `mbstring`, `pdo_mysql`, `xml`, and `zip`
- MariaDB 11.8 LTS or newer
- An OpenAI-compatible embeddings HTTP endpoint producing 768-dimensional vectors

PDF and DOCX parser dependencies are already installed in `rag-parser/vendor`.
Composer is not required on the web host; deploy the complete `rag-parser` directory.

## Database upgrade

For an existing installation, run:

```sql
SOURCE help_files/migrate_mariadb_rag.sql;
```

For a clean installation, `help_files/setup_db.sql` already contains the RAG tables.

## Configuration

Copy `.env.example` to `.env` and set database credentials, endpoint URLs, tokens,
models, vector dimension, and chunking options. Runtime environment variables override
values in the file.

The embedding endpoint receives batches of up to 32 strings:

```json
{
  "model": "embeddinggemma-300m",
  "input": ["first chunk", "second chunk"]
}
```

It must return an OpenAI-compatible response:

```json
{
  "data": [
    {"index": 0, "embedding": [0.1, 0.2]},
    {"index": 1, "embedding": [0.3, 0.4]}
  ]
}
```

The actual vectors must contain 768 numbers. If the model dimension changes, both
`EMBEDDING_DIMENSION` and the MariaDB `knowledge_chunks.embedding VECTOR(...)` column
must be migrated together, followed by re-indexing all documents.

Users with the `editCharacters` permission can manage the shared corpus through
**Knowledge Base** in the navigation. Documents can be global or scoped to one
exhibition. Retrieval combines global knowledge with the active exhibition's knowledge.
Uploading is synchronous, so the PHP/web-server
request timeout must accommodate extraction and embedding of the largest allowed file.
