
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_movie"; ALTER SEQUENCE character_movie_id_seq RESTART WITH 18;')
    .then(function () {
      // Inserts seed entries
      return knex('character_movie').insert([
        {id: 1, character_id: 1, movie_id: 1},
        {id: 2, character_id: 1, movie_id: 2},
        {id: 3, character_id: 1, movie_id: 3},
        {id: 4, character_id: 1, movie_id: 5},
        {id: 5, character_id: 2, movie_id: 1},
        {id: 6, character_id: 2, movie_id: 2},
        {id: 7, character_id: 2, movie_id: 3},
        {id: 8, character_id: 2, movie_id: 4},
        {id: 9, character_id: 2, movie_id: 5},
        {id: 10, character_id: 3, movie_id: 1},
        {id: 11, character_id: 3, movie_id: 2},
        {id: 12, character_id: 3, movie_id: 3},
        {id: 13, character_id: 4, movie_id: 1},
        {id: 14, character_id: 4, movie_id: 2},
        {id: 15, character_id: 4, movie_id: 3},
        {id: 16, character_id: 4, movie_id: 4},
        {id: 17, character_id: 4, movie_id: 5}
      ]);
    });
};
