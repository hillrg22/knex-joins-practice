
exports.up = function (knex, Promise) {
  return knex.schema.createTable('movie', function (table) {
    table.increments()
    table.string('title')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('movie')
}