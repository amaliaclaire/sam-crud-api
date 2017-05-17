exports.seed = (knex) => {
  return knex('artists').insert([
    {
      id: 1,
      first_name: 'Jackson',
      last_name: 'Pollack',
      nationality: 'American'
    },
    {
      id: 2,
      first_name: 'Francis',
      last_name: 'Picabia',
      nationality: 'French'
    },
    {
      id: 3,
      first_name: 'Jacob',
      last_name: 'Lawrence',
      nationality: 'American'
    }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('artists_id_seq', (SELECT MAX(id) FROM artists));"
    )
  })
}
