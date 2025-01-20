import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import banner from "../schemas/banner";
import product from "../schemas/product";
import category from "../schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema ,banner, product, category],
}
