import { Hono } from '@hono/hono'
import { getClient } from '@kodadot1/uniquery'
import { object, number, string, optional, parse } from '@valibot/valibot'

const app = new Hono()

// Helper function to get the client
const getUniqueryClient = (chain: string) => {
  // deno-lint-ignore no-explicit-any
  return getClient(chain as any)
}

// Valibot schema for options
const OptionsSchema = object({
  limit: optional(number()),
  offset: optional(number()),
  orderBy: optional(string()),
})

// deno-lint-ignore no-explicit-any
type MaybeEntity<T = Record<string, any>> = T | null
// deno-lint-ignore no-explicit-any
type MaybeList<T = Record<string, any>> = T[]

// Helper function to parse and validate options
const getOptions = (query: Record<string, string>) => {
  const options = {
    limit: query.limit ? Number(query.limit) : undefined,
    offset: query.offset ? Number(query.offset) : undefined,
    orderBy: query.orderBy,
  }
  return parse(OptionsSchema, options)
}

// Collection routes
app.get('/:chain/collections/:id', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const id = c.req.param('id')
  const query = client.collectionById(id)
  const result = await client.fetch<{ collection: MaybeEntity }>(query)
  return c.json(result)
})

app.get('/:chain/collections/issuer/:address', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const address = c.req.param('address')
  const options = getOptions(c.req.query())
  const query = client.collectionListByIssuer(address, options)
  const result = await client.fetch<{ collections: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/collections/name/:name', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const name = c.req.param('name')
  const options = getOptions(c.req.query())
  const query = client.collectionListByName(name, options)
  const result = await client.fetch<{ collections: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/collections/owner/:address', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const address = c.req.param('address')
  const options = getOptions(c.req.query())
  const query = client.collectionListByOwner(address, options)
  const result = await client.fetch<{ collections: MaybeList }>(query)
  return c.json(result)
})

// Event routes
app.get('/:chain/events', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const options = getOptions(c.req.query())
  const query = client.eventList(options)
  const result = await client.fetch<{ events: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/events/address/:address', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const address = c.req.param('address')
  const options = getOptions(c.req.query())
  const query = client.eventListByAddress(address, options)
  const result = await client.fetch<{ events: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/events/collection/:id', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const id = c.req.param('id')
  const options = getOptions(c.req.query())
  const query = client.eventListByCollectionId(id, options)
  const result = await client.fetch<{ events: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/events/interaction/:interaction', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const interaction = c.req.param('interaction')
  const options = getOptions(c.req.query())
  const query = client.eventListByInteraction(interaction, options)
  const result = await client.fetch<{ events: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/events/item/:id', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const id = c.req.param('id')
  const options = getOptions(c.req.query())
  const query = client.eventListByItemId(id, options)
  const result = await client.fetch<{ events: MaybeList }>(query)
  return c.json(result)
})

// Item routes
app.get('/:chain/items/:id', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const id = c.req.param('id')
  const query = client.itemById(id)
  const result = await client.fetch<{ item: MaybeEntity }>(query)
  return c.json(result)
})

app.get('/:chain/items/collection/:id', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const id = c.req.param('id')
  const options = getOptions(c.req.query())
  const query = client.itemListByCollectionId(id, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/items/collection/:id/owner/:address', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const id = c.req.param('id')
  const address = c.req.param('address')
  const options = getOptions(c.req.query())
  const query = client.itemListByCollectionIdAndOwner(id, address, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

app.post('/:chain/items/collections', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const { ids } = await c.req.json()
  const options = getOptions(c.req.query())
  const query = client.itemListByCollectionIdList(ids, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/items/issuer/:address', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const address = c.req.param('address')
  const options = getOptions(c.req.query())
  const query = client.itemListByIssuer(address, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/items/name/:name', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const name = c.req.param('name')
  const options = getOptions(c.req.query())
  const query = client.itemListByName(name, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/items/metadata/:id', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const id = c.req.param('id')
  const options = getOptions(c.req.query())
  const query = client.itemListByMetadataId(id, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/items/metadata/match/:cid', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const cid = c.req.param('cid')
  const options = getOptions(c.req.query())
  const query = client.itemListByMetadataIdMatch(cid, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

app.get('/:chain/items/owner/:address', async (c) => {
  const client = getUniqueryClient(c.req.param('chain'))
  const address = c.req.param('address')
  const options = getOptions(c.req.query())
  const query = client.itemListByOwner(address, options)
  const result = await client.fetch<{ items: MaybeList }>(query)
  return c.json(result)
})

export default app