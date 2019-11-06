import { Schema, Document, Types } from "mongoose";
import { User } from ".";
import { OrderItemSubdocument } from "./orderItemTypes";

export enum OrderStatus {
  WAITING_PAYMENT,
  IN_QUEUE,
  PREPARING,
  READY,
  ON_THE_WAY,
  DELIVERED
}

export interface Order {
  _id: Schema.Types.ObjectId;
  user: User;
  total: Number;
  status: OrderStatus;
  items: Types.DocumentArray<OrderItemSubdocument>;
  createdAt: String;
  updatedAt: String;
}

export interface OrderDocument extends Order, Document {
  _id: Schema.Types.ObjectId;
}
