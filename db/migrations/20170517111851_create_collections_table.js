exports.up = (knex) => {
  return knex.schema.createTable('collections', (table) => {
    table.increments()
    table.string('name')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('collections')
}
