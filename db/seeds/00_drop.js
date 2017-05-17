exports.seed = (knex) => {
  return knex('artworks').del()
    .then(() => knex('artists').del())
    .then(() => knex('collections').del())
}
