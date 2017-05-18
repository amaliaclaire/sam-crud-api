exports.seed = (knex) => {
  return knex('artworks_collections').insert([
    { artwork_id: 1, collection_id: 1 },
    { artwork_id: 3, collection_id: 1 },
    { artwork_id: 4, collection_id: 2 },
    { artwork_id: 5, collection_id: 2 },
    { artwork_id: 6, collection_id: 2 }
  ])
}
