import { Product } from '../Domain/Product'
import { ProductDTO } from '../Domain/ProductDTO'
import { ProductRepository } from '../Domain/ProductRepository'

export class ProductMemoryRepository implements ProductRepository {
  /** Products  */
  private products: ProductDTO[] = [
    { id: 1, name: 'Pañales', price: 10 },
    { id: 2, name: 'Freidora', price: 100 },
    { id: 3, name: 'Leche', price: 0.8 }
  ]

  find(): Product[] {
    return this.products.map((productData: ProductDTO) => Product.fromPrimitives(productData))
  }

  findOne(): Product {
    return Product.fromPrimitives(this.products[0])
  }
}
