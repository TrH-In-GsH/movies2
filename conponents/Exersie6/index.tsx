// import React from 'react'
import { products } from '../../data/product'
function ProductList() {
  return (
        <div className='produc_list flex m-9 gap-6 justify-around'>
            {products.map((product)=>{
                return(
                    <div className='w-96 flex flex-col'>
                        <img className=' rounded-xl h-36 w-96' src= {product.img} alt= {product.information} />
                        <p className='font-bold text-base font-sans'>{product.information}</p>
                        <p className='text-orange-500 text-sm'>{product.view}</p>
                    </div>
                )
            })}
        </div>
  )
}
export default ProductList