const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();

app.use(express.json());

// Setup Logger
app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/portfolios", async (req, res) => {
    try {
        const portfolios = await db.select().table("portfolios");
        res.json(portfolios);
    } catch (err) {
        console.error("Error loading portfolios!", err);
        res.sendStatus(500);
    }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
