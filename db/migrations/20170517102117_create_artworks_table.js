exports.up = (knex) => {
  return knex.schema.createTable('artworks', (table) => {
    table.increments()
    table.string('name')
    table.text('description')
    table.integer('year')
    table.integer('artist_id')
    table.foreign('artist_id').references('artists.id')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('artworks')
}
