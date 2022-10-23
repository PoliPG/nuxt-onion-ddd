import { ProductDTO } from './ProductDTO'

export class Product {
  readonly id: number
  readonly name: string
  readonly price: number

  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }

  /**
   * Create a Product from a DTO Object
   * @param data
   * @returns
   */
  static fromPrimitives(data: ProductDTO): Product {
    return new Product(data.id, data.name, data.price)
  }
}
