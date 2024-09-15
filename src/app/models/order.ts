import { DairyProduct } from "./dairy-product";

export type Order = {
  product?: DairyProduct;
  order?: {
    name?: string;
    email?: string;
    phoneNumber?: number;
    quantity?: number;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: number;
    }
  }
}