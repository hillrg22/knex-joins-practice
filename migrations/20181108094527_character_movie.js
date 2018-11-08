
exports.up = function (knex, Promise) {
  return knex.schema.createTable('character_movie', function (table) {
    table.increments()
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade')
    table.integer('movie_id').references('movie.id').unsigned().onDelete('cascade')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('character_movie')
}