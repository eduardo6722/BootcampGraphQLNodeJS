import { Schema, Types } from "mongoose";
import { Product } from "./productTypes";

export interface OrderItem {
  _id: Schema.Types.ObjectId;
  product: Product;
  quatity: Number;
  total: Number;
  createdAt: String;
  updatedAt: String;
}

export interface OrderItemSubdocument extends OrderItem, Types.Embedded {
  _id: Schema.Types.ObjectId;
}
