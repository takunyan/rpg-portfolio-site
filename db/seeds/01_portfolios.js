
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('portfolios').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolios').insert([
        { name: 'Truck Stop App', description: 'Truck Stop App', url: 'https://truck-stop-app-production.herokuapp.com/' },
      ]);
    });
};
