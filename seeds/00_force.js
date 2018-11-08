
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "force"; ALTER SEQUENCE force_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      return knex('force').insert([
        {id: 1, side: 'light'},
        {id: 2, side: 'dark'}
      ]);
    });
};
