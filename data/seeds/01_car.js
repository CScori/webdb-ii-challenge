
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {car_make: 'TESLA', car_model: 'S',car_vin: '5YJSA1E48HF188853', car_miles: '5', trans_type: 'ELECTRIC'},
        {car_make: 'FIAT', car_model: '500E',car_vin: '3C3CFFGE7HT524104', car_miles: '24507', title_status: 'CLEAN'},
        {car_make: 'MINI', car_model: 'COUNTRYMAN',car_vin: 'WMWZC5C59GWU21254', car_miles: '39999', trans_type: 'AUTOMATIC'}
      ]);
    });
};
