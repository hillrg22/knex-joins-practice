
exports.up = function(knex, Promise) {
  return knex.schema.createTable('force', function (table) {
    table.increments()
    table.string('side')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('force')
}