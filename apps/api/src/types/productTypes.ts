import { Schema, Document } from "mongoose";
import { OmitId } from "./utilityTypes";

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

export interface ProductCreateInput {
  params: OmitId<Product>;
}

export interface ProductByIdInput {
  _id: Schema.Types.ObjectId;
}

export interface ProductUpdateInput
  extends ProductCreateInput,
    ProductByIdInput {}
