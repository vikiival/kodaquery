# KodaQuery

KodaQuery is a flexible and powerful REST API built on top of the Uniquery client, designed to facilitate easy access to blockchain data across various chains. It provides a comprehensive set of endpoints for querying collections, items, and events, with support for pagination and sorting.

## API Routes

All routes are prefixed with `/:chain`, where `:chain` is the identifier for the blockchain you're querying.

### Collections

- `GET /collections/:id`: Fetch a specific collection by its ID.
- `GET /collections/issuer/:address`: List collections created by a specific address.
- `GET /collections/name/:name`: List collections containing the specified name.
- `GET /collections/owner/:address`: List collections owned by a specific address.

### Events

- `GET /events`: List all events.
- `GET /events/address/:address`: List events associated with a specific address.
- `GET /events/collection/:id`: List events for NFTs in a specific collection.
- `GET /events/interaction/:interaction`: List events of a specific interaction type.
- `GET /events/item/:id`: List events associated with a specific NFT.

### Items (NFTs)

- `GET /items/:id`: Fetch a specific NFT by its ID.
- `GET /items/collection/:id`: List NFTs in a specific collection.
- `GET /items/collection/:id/owner/:address`: List NFTs from a specific collection owned by a specific address.
- `POST /items/collections`: List NFTs from multiple collections (collection IDs provided in request body).
- `GET /items/issuer/:address`: List NFTs created by a specific address.
- `GET /items/name/:name`: List NFTs containing the specified name.
- `GET /items/metadata/:id`: List NFTs with a specific metadata URI.
- `GET /items/metadata/match/:cid`: List NFTs with metadata matching the provided CID.
- `GET /items/owner/:address`: List NFTs owned by a specific address.

### Query Parameters

All list endpoints support the following query parameters:

- `limit`: Number of results to return (default varies by endpoint)
- `offset`: Number of results to skip (for pagination)
- `orderBy`: Field and direction to sort results (e.g., `name_ASC` or `createdAt_DESC`)

## Development

> [!IMPORTANT]
> This project requires Deno

To run the project locally, clone the repository and run the following command:

```bash
deno task dev
```

To run the tests 

```bash
deno task test
```