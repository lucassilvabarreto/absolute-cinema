import express from "express";
import filmes from "./filmesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Absolute Cinema"));
    app.use(express.json(), filmes);
};

export default routes;