import dotenv from "dotenv";
import Fastify from "fastify";
import mongoose from "mongoose";
import routeRoutes from "./routes/routeRoutes.js";
import fastifyCors from "@fastify/cors";

// Environment variables generation
dotenv.config();

// Server options
const PORT = process.env.PORT || 8080;

// Fastify starting configuration
const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyCors);
routeRoutes(fastify);

try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("⚡ Connection to MongoDB Success!");
} catch (error) {
  console.error(error);
}

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
