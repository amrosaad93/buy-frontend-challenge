/**
 * Core type definitions for the shopping cart challenge
 */

export type Product = {
  id: string;
  name: string;
  price: number;
  brand: string;
  imageUrl?: string;
};

export type User = {
  id: string;
  email: string;
  isGuest: boolean;
} | null;

export type CartItem = {
  product: Product;
  quantity: number;
  addedAt: number;
};

export type ApiResponse<T> = {
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  httpStatus?: number;
};
