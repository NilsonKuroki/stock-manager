"use client"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useCallback, useEffect, useState } from 'react';
import { ProductService } from '@/services/productsService';
import { Product, ProductName } from '@/types/product';
import { Button } from '@mui/material';

export default function ProductForm() {
    const [products, setProducts] = useState<Product[]>([])
    const [quantity, setQuantity] = useState<string|number>(0)
    const [productsName, setProductsName] = useState<ProductName[]>([])
    const productService = new ProductService()

    const fetchProducts = useCallback( async () => {
        const response = await productService.getProduct()
        const arrayName = response.data.map((product: Product) => {
            return product.name
        })
        setProductsName(arrayName)
        setProducts(response.data)
    }, [products, productsName])

    const addProduct = useCallback(()=>{

    }, [])

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts()
        }
    }, [products])

    return (
        <div className='flex justify-evenly'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={productsName}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Produto em estoque" />}
            />
            <TextField 
                id="outlined-basic" 
                label="Quantidade" 
                variant="outlined"
                value={quantity}
                onChange={(e)=>{setQuantity(e.target.value)}}
                type="number" 
                className='w-28'
            />
            <Button 
            variant="contained" 
            onClick={addProduct}>
                Adicionar
            </Button>

        </div>
    )
}