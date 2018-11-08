
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character"; ALTER SEQUENCE character_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        { 
          id: 1,
          name: "Luke Skywalker",
          height: 172,
          mass: 77,
          force_id: 1
        },
        {
          id: 2,
          name: "R2-D2",
          height: 96,
          mass: 32,
          force_id: 1
        },
        {
          id: 3,
          name: "Darth Vader",
          height: 202,
          mass: 136,
          force_id: 2
        },
        {
          id: 4,
          name: "Leia Organa",
          height: 150,
          mass: 49,
          force_id: 1
        }
      ])
    })
}
