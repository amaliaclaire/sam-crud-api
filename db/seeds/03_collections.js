exports.seed = (knex) => {
  return knex('collections').insert([
    { id: 1, name: 'Modern & Contemporary' },
    { id: 2, name: 'American' },
    { id: 3, name: 'Pacific Northwest' },
    { id: 4, name: 'Ancient American' }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('collections_id_seq', (SELECT MAX(id) FROM collections));"
    )
  })
}
