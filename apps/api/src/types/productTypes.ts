import { Schema, Document } from "mongoose";

export interface Product {
  _id: Schema.Types.ObjectId;
  name: String;
  description: String;
  price: Number;
  unit: String;
}

export interface ProductDocument extends Product, Document {
  _id: Schema.Types.ObjectId;
}
