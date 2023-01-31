const express = require("express");
const bodyParser = require("body-parser");

const nationRouter = express.Router();

nationRouter.use(bodyParser.json());

nationRouter
  .route("/:nationId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "Will send details of the nation: " + req.params.nationId + " to you!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /nations/" + req.params.nationId);
  })
  .put((req, res, next) => {
    res.write("Updating the nation: " + req.params.nationId + "\n");
    res.end(
      "Will update the nation: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting nation: " + req.params.nationId);
  });

module.exports = nationRouter;
