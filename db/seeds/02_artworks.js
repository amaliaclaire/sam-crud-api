exports.seed = (knex) => {
  return knex('artworks').insert([
    // {
    //   id: 1,
    //   first_name: 'Jackson',
    //   last_name: 'Pollack',
    //   nationality: 'American'
    // },
    // {
    //   id: 2,
    //   first_name: 'Francis',
    //   last_name: 'Picabia',
    //   nationality: 'French'
    // },
    // {
    //   id: 3,
    //   first_name: 'Jacob',
    //   last_name: 'Lawrence',
    //   nationality: 'American'
    // }
    {
      id: 1,
      name: 'Sea Change',
      description: `Sea Change, 1947, was created at the beginning of Jackson Pollock's most iconic period: the "drip-period," from 1947 to 1950. The painting was owned by the art dealer and patron Peggy Guggenheim until its donation to SAM in 1958.`,
      year: 1947,
      artist_id: 1
    },
    {
      id: 2,
      name: 'Barcelona',
      description: `Picabia is an artist who has historically been associated with Dada and Surrealism, but his output is so wide-ranging and multifaceted that his modernist peers and observers often did not believe he was true to the cause. This work more faithfully fits within definitions of Surrealism, with its complex layering of contrasting imagery and text that defies easy explanation.`,
      year: 1924,
      artist_id: 2
    },
    {
      id: 3,
      name: 'Number 20',
      description: ``,
      year: 1949,
      artist_id: 1
    },
    {
      id: 4,
      name: 'Study for the Munich Olympic Games Poster',
      description: ``,
      year: 1971,
      artist_id: 3
    },
    {
      id: 5,
      name: 'Confrontation at the Bridge',
      description: ``,
      year: 1976,
      artist_id: 3
    },
    {
      id: 6,
      name: 'The Studio',
      description: `This self-portrait shows Jacob Lawrence on the steps of his attic studio in the house in which he and his wife Gwendolyn lived, the first of two studios he created in Seattle. The painting expresses Lawrence's expert command of flat color shapes, combined with diagonal lines that create the illusion of space. The strong Z-shape of the banister and stairwell frame relate to the similar visual impact created by wood planks, tools and sawhorses in Lawrence's Builders compositions, casually displayed in the background of the painting. The artist seems to gesture to us to survey the surroundings. The scene out of the window is the biggest surprise: Lawrence has depicted a view of Harlem tenement buildings just beyond his Seattle studio, bringing together the two cities that had the most profound impact on his life and his career.`,
      year: 1977,
      artist_id: 3
    }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('artworks_id_seq', (SELECT MAX(id) FROM artworks));"
    )
  })
}
