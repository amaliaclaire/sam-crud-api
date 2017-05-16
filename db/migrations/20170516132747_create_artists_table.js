exports.up = (knex, Promise) => {
  return knex.schema.createTable('artists',  (table) => {
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.string('nationality')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('artists')
}
