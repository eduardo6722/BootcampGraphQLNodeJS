import {
  Resolver,
  ProductCreateInput,
  ProductByIdInput,
  ProductUpdateInput
} from "../types";

import { checkExistence } from "../utils";

const createProduct: Resolver<ProductCreateInput> = (_, args, { db }) => {
  const { Product } = db;
  const { params } = args;

  const product = new Product(params);
  return product.save();
};

const updateProduct: Resolver<ProductUpdateInput> = async (_, args, { db }) => {
  const { Product } = db;
  const { _id, params } = args;

  await checkExistence({
    db,
    model: "Product",
    field: "_id",
    value: _id
  });

  return Product.findByIdAndUpdate(_id, params, { new: true });
};

const deleteProduct: Resolver<ProductByIdInput> = async (_, args, { db }) => {
  const { Product } = db;
  const { _id } = args;

  await checkExistence({
    db,
    model: "Product",
    field: "_id",
    value: _id
  });

  return Product.findByIdAndDelete(_id);
};

export default {
  createProduct,
  deleteProduct,
  updateProduct
};
