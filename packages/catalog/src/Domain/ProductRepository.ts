import { Product } from './Product'

export interface ProductRepository {
  find(): Product[]
  findOne(): Product
}
