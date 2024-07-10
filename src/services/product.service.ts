import { IProduct } from "@/types/product.interface";
import axios from "axios";

const PRODUCTS = 'http://localhost:4200/products';


export const ProductService = {
    async getAll() {
        const {data} = await axios<IProduct[]>({
            url: PRODUCTS,
            method: 'GET'
        })
        return data
    },
    async getById(id: string){
        const {data} = await axios<IProduct>({
            url: `${PRODUCTS}/${id}`,
            method: 'GET'
        })
        return data
    }
}
