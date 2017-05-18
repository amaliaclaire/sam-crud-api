exports.up = (knex) => {
  return knex.schema.createTable('artworks_collections', (table) => {
    table.integer('artwork_id').notNullable()
    table.foreign('artwork_id').references('artworks.id')
    table.integer('collection_id').notNullable()
    table.foreign('collection_id').references('collections.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('artworks_collections')
}
