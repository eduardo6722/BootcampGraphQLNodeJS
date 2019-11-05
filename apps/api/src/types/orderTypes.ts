import { Schema, Document } from "mongoose";
import { User } from ".";

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
}

export interface OrderDocument extends Order, Document {
  _id: Schema.Types.ObjectId;
}
