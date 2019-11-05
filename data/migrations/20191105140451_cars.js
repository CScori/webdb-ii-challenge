
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments();
        table.string('name');
        
        /*
        vin integer not null
        make string not null
        model string not null
        miles integer not null
        trans string 
        title string
        */
        table.timestamps();
      })
  
};


exports.down = function(knex) {
    return knex.schema.table('cars', function (table) {
        table.dropColumn('name');
        table.string('first_name');
        table.string('last_name');
      })
  
};
