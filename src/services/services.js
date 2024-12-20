// src/services/productService.js

export const fetchHotels = async () => {
    const response = await fetch("/products.json");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  };
  