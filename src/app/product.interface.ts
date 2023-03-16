export interface Product {
  id: number,
  image: string,
  title: string,
  description: string,
  quantity?: number
  price:number
  totalPrice: number,
  category: string
}
