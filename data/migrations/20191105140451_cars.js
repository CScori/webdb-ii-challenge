
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments();
        table.string('car_make', 64).notNullable();
        table.string('car_model', 64).notNullable();
        table.float('vin').notNullable();
        table.float('mileage').notNullable();
        table.string('transmission_type', 64);
        table.string('title_status', 64)
        table.timestamps(true, true);
      })
  
};

 /*
        vin integer not null
        make string not null /
        model string not null/
        miles integer not null
        trans string 
        title string
        */
exports.down = function(knex) {
    return knex.schema.table('cars', function (table) {
        table.dropColumn('name');
        table.string('first_name');
        table.string('last_name');
      })
  
};
