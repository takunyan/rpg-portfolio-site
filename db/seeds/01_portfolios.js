
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('portfolios').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolios').insert([
        { name: 'rowValue1', description: 'rowValue1', url: 'rowValue1' },
        { name: 'rowValue1', description: 'rowValue1', url: 'rowValue1' },
        { name: 'rowValue1', description: 'rowValue1', url: 'rowValue1' },
      ]);
    });
};
