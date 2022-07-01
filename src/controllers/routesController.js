import Route from "../models/routes.js";

const get = async (request, reply) => {
  try {
    const routes = await Route.find({});
    if (routes) reply.code(200).send(routes);
  } catch (error) {
    console.error(error);
    reply.code(500).send(error);
  }
};

const insertRoute = async (request, reply) => {
  try {
    const idRoute = uuidv4();
    const newRoute = { ...request.body, idRoute };
    const insertedRoute = await Route.create(newRoute);
    reply.code(201).send(insertedRoute);
  } catch (error) {
    reply.code(500).send(error);
  }
};

const getSingle = async (request, reply) => {
  try {
    const routeSlug = request.params.slug;
    const route = await Route.find({ slug: routeSlug });
    reply.code(201).send(route[0]);
  } catch (error) {
    reply.code(500).send(error);
  }
};

export default { get, insertRoute, getSingle };
