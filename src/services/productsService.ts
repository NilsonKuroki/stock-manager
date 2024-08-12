import { ProductSold } from "@/types/productSoldType";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3333"
})

export class ProductService {
    getProduct(){
        return axiosInstance.get("/products")
    }

    postProduct(data: ProductSold){
        return axiosInstance.post("/producs", data)
    }
}