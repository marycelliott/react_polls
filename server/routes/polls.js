const controller = require("./../controllers/polls");

module.exports = app => {
  // GET ALL POLLS
  app.get("/api/polls", controller.index);
  //   // GET ONE POLL BY ID
  app.get("/api/polls/:id", controller.show);
  // CREATE POLL
  app.post("/api/polls", controller.create);
  // UPDATE POLL BY ID
  app.put("/api/polls/:id", controller.update);
  //   // DELETE POLL BY ID
  app.delete("/api/polls/:id", controller.delete);
};
