import { Resolver } from "../types";
import { checkExistence } from "../utils";
import { ProductByIdInput } from "../types";

const products: Resolver<{}> = (_, args, { db }) => db.Product.find();

const productById: Resolver<ProductByIdInput> = async (_, args, { db }) => {
  const { Product } = db;
  const { _id } = args;

  await checkExistence({
    db,
    model: "Product",
    field: "_id",
    value: _id
  });

  return Product.findById(_id);
};

export default { products, productById };
