import mongoose from "mongoose";

const { Schema } = mongoose;

const routeSchema = new Schema({
  idRoute: { type: String, required: true },
  slug: { type: String, required: true },
  title: { type: String, required: true },
  city: { type: String, required: true },
  distance: { type: Number, required: true },
  features: { type: Object, required: true },
  rating: { type: Number, required: true },
  images: [{ type: String, required: true }],
  thumbs: [{ type: String }],
  description: { type: String, required: true },
  level: { type: String, required: true },
});

// Create the model

export default mongoose.model("Route", routeSchema);
