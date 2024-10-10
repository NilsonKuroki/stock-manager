import ProductForm from '@/components/ProductForm'
import TableProductsSold from '@/components/TableProductsSold';

export default function DailyCost() {
  
  return (
    <main className='bg-slate-300 h-screen'>
      <ProductForm/>
      <h1 className='text-center'>Produtos vendidos</h1>
      <TableProductsSold/>
    </main>
  );
}
