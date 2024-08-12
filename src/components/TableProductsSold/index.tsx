"use client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ProductSoldService } from '@/services/productsSoldService';
import { ProductSold } from '@/types/productSoldType';

export default function TableProductsSold(){
    const productSoldService = new ProductSoldService()
    const [data, setData] = useState<ProductSold[]>([])

    const fetchProductsSold = async () =>{
      const response = await productSoldService.getProductSold()
      setData(response.data)
    }
    useEffect(()=>{
      if(data.length === 0){
        fetchProductsSold()
      }
    }, [data])
    const handleExport = useCallback(() => {
      if(data.length === 0){
        return
      }
        // Converte os dados para uma planilha
        let ws = XLSX.utils.json_to_sheet(data);
        let wb = XLSX.utils.book_new();
      
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.utils.sheet_add_aoa(ws, [['SubTotal']], {origin: 'F1'});
    
        data.forEach( (product, index) => {
          let productIndex = index + 2
          return ws[`F${productIndex}`] = { f: `=C${productIndex}*E${productIndex}` };
        })
    
        XLSX.utils.sheet_add_aoa(ws, [['Total']], {origin: 'H1'});
        ws[`H2`] = { f: `SUM(F2:F${data.length+1})`};
        
        // Gera um arquivo Excel
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        
        // Salva o arquivo
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        const now = new Date()
        const date = now.toLocaleDateString('pt-BR')
        saveAs(blob, `${date}.xlsx`);
      }, [data]);
    
    return(
        <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Codigo de barras</TableCell>
              <TableCell align="right">Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="data">
                  {data.name}
                </TableCell>
                <TableCell align="right">{data.price}</TableCell>
                <TableCell align="right">{data.barCode || ""}</TableCell>
                <TableCell align="right">{data.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleExport}>Gerar Relatório no excel</Button>
      </div>
    )
}