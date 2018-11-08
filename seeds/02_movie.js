
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "movie"; ALTER SEQUENCE movie_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {id: 1, title: 'A New Hope'},
        {id: 2, title: 'Empire Strikes Back'},
        {id: 3, title: 'Return of the Jedi'},
        {id: 4, title: 'The Force Awakens'},
        {id: 5, title: 'The Last Jedi'}
      ]);
    });
};
