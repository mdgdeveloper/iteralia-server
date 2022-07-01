import routesController from "../controllers/routesController.js";

const routeRoutes = (app) => {
  app.get("/api/routes", routesController.get);
  app.get("/api/routes/:slug", routesController.getSingle);
  app.post("/api/routes", routesController.insertRoute);
};

export default routeRoutes;
