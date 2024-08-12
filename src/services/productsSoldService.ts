import { ProductSold } from "@/types/productSoldType";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3333"
})

export class ProductSoldService {
    getProductSold(){
        return axiosInstance.get("/productsSold")
    }

    postProductSold(data: ProductSold){
        return axiosInstance.post("/producsSold", data)
    }
}