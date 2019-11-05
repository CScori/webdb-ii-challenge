
exports.up = function(knex) {
  
};


exports.down = function(knex) {
    return knex.schema.table('pets', function (table) {
        table.dropColumn('name');
        table.string('first_name');
        table.string('last_name');
      })
  
};
