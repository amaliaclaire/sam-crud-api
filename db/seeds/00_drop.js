exports.seed = (knex) => {
  return knex('artworks_collections').del()
    .then(() => knex('artworks').del())
    .then(() => knex('artists').del())
    .then(() => knex('collections').del())
}
