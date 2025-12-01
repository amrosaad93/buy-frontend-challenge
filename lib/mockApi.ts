/**
 * Mock API functions that simulate backend calls
 */

import { Product, ApiResponse } from "./types";

// Simulates network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic White Shirt",
    price: 49.99,
    brand: "Fashion Co",
    imageUrl:
      "https://images.pexels.com/photos/2537658/pexels-photo-2537658.jpeg",
  },
  {
    id: "2",
    name: "Blue Denim Jeans",
    price: 79.99,
    brand: "Denim Brand",
    imageUrl:
      "https://images.pexels.com/photos/18533668/pexels-photo-18533668.jpeg",
  },
  {
    id: "3",
    name: "Black Sneakers",
    price: 89.99,
    brand: "Sport Wear",
    imageUrl:
      "https://images.pexels.com/photos/26902737/pexels-photo-26902737.jpeg",
  },
  {
    id: "4",
    name: "Leather Jacket",
    price: 199.99,
    brand: "Premium",
    imageUrl:
      "https://images.pexels.com/photos/18978811/pexels-photo-18978811.png",
  },
];

/**
 * Fetches all products from the "backend"
 * Simulates a 800ms network delay
 */
export const fetchProducts = async (): Promise<ApiResponse<Product[]>> => {
  await delay(800);

  // Simulate occasional errors (uncomment to test error handling)
  // if (Math.random() > 0.8) {
  //   return {
  //     error: { code: 'NETWORK_ERROR', message: 'Failed to fetch products' },
  //     httpStatus: 500,
  //   };
  // }

  return {
    data: mockProducts,
    httpStatus: 200,
  };
};

/**
 * Fetches a single product by ID
 */
export const fetchProductById = async (
  id: string
): Promise<ApiResponse<Product>> => {
  await delay(300);

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return {
      error: { code: "PRODUCT_NOT_FOUND", message: "Product not found" },
      httpStatus: 404,
    };
  }

  return {
    data: product,
    httpStatus: 200,
  };
};
