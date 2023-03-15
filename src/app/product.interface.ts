export interface Product {
  id: number,
  productLink: string,
  image: string,
  title: string,
  description: string,
  quantity?: number
  price:number
  totalPrice: number,
  category: string
}
