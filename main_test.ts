// import { assertEquals } from "@std/assert";
import { expect } from "@std/expect";
import app from "./main.ts";
// import { add } from "./main.ts";

// global config
const CHAIN = 'ahp'
const COLLECTION_ID = '10'
const ITEM_ID = '10-1'
const ADDRESS = '14BZFbYEGoWWPjbbZUdLZ1TqDtdXvdeCy3R3t4QXqJmS91Dx'
const NAME = 'Polkadot'
const INTERACTION = 'MINT'
const CID = 'QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG'

Deno.test('GET /collections/:id', async () => {
  const res = await app.request(`/${CHAIN}/collections/${COLLECTION_ID}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('collection')
})

Deno.test('GET /collections/issuer/:address', async () => {
  const res = await app.request(`/${CHAIN}/collections/issuer/${ADDRESS}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('collections')
})

Deno.test('GET /collections/name/:name', async () => {
  const res = await app.request(`/${CHAIN}/collections/name/${NAME}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('collections')
})

Deno.test('GET /collections/owner/:address', async () => {
  const res = await app.request(`/${CHAIN}/collections/owner/${ADDRESS}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('collections')
})

Deno.test('GET /events', async () => {
  const res = await app.request(`/${CHAIN}/events`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('events')
})

Deno.test('GET /events/address/:address', async () => {
  const res = await app.request(`/${CHAIN}/events/address/${ADDRESS}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('events')
})

Deno.test('GET /events/collection/:id', async () => {
  const res = await app.request(`/${CHAIN}/events/collection/${COLLECTION_ID}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('events')
})

Deno.test('GET /events/interaction/:interaction', async () => {
  const res = await app.request(`/${CHAIN}/events/interaction/${INTERACTION}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('events')
})

Deno.test('GET /events/item/:id', async () => {
  const res = await app.request(`/${CHAIN}/events/item/${ITEM_ID}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('events')
})

Deno.test('GET /items/:id', async () => {
  const res = await app.request(`/${CHAIN}/items/${ITEM_ID}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('item')
})

Deno.test('GET /items/collection/:id', async () => {
  const res = await app.request(`/${CHAIN}/items/collection/${COLLECTION_ID}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})

Deno.test('GET /items/collection/:id/owner/:address', async () => {
  const res = await app.request(`/${CHAIN}/items/collection/${COLLECTION_ID}/owner/${ADDRESS}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})

Deno.test('POST /items/collections', async () => {
  const res = await app.request(`/${CHAIN}/items/collections`, {
    method: 'POST',
    body: JSON.stringify({ ids: [COLLECTION_ID] }),
  })
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})

Deno.test('GET /items/issuer/:address', async () => {
  const res = await app.request(`/${CHAIN}/items/issuer/${ADDRESS}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})

Deno.test('GET /items/name/:name', async () => {
  const res = await app.request(`/${CHAIN}/items/name/${NAME}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})

Deno.test('GET /items/metadata/:id', async () => {
  const res = await app.request(`/${CHAIN}/items/metadata/${CID}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})

Deno.test('GET /items/metadata/match/:cid', async () => {
  const res = await app.request(`/${CHAIN}/items/metadata/match/${CID}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})

Deno.test('GET /items/owner/:address', async () => {
  const res = await app.request(`/${CHAIN}/items/owner/${ADDRESS}`)
  expect(res.status).toBe(200)
  const { data } = await res.json()
  expect(data).toHaveProperty('items')
})