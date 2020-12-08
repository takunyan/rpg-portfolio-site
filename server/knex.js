const knex = require("knex");

const db = knex({
    client: "pg",
    connection:
        process.env.DATABASE_URL ||
        `postgres://@127.0.0.1:5432/portfolio`,
    searchPath: "public",
});

module.exports = db;
