import IAddress from './address.interface'
import IShipment from './shipment.interface'

export default interface ICart {
  token: string
  user: Object
  products: Object[]
  address: IAddress
  shipment: IShipment
}
