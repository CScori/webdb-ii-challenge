
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments();
        table.string('car_make', 64).notNullable();
        table.string('car_model', 64).notNullable();
        table.string('car_vin', 64).notNullable();
        table.float('car_miles', 64).notNullable();
        table.string('trans_type', 64);
        table.string('title_status', 64)
        table.timestamps(true, true);
      })
  
};

exports.down = function(knex) {
    return knex.schema.table('cars', function (table) {
        table.dropColumn('name');
    
      })
  
};
