import React from 'react';
import type { Product } from '../types/product';
type ProductProps = {
  person: Product
}

const Products = (props: ProductProps ) => {
  return (
    <div>Show Info Product

      <p>{props.person.name}</p>
      <p>{props.person.age}</p>
    </div>

  )
}

export default Products