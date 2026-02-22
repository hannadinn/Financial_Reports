import { api } from "./api";

// Example: fetch a user by ID
export const generateStockReport = (ticker: string) => {
  return api.get("/reports/v1", {
    params: {
        symbol: ticker
    }
  });
};