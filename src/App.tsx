import { useState } from 'react'

import Products from './components/Product';
import type { Product } from './types/product'

function App() {
  const [count, setCount] = useState<Number>(0)
  const [info, setInfo] = useState<Product>({
    name: "nguyen thi van",
    age: 20,
  })

  return (
    <div className="App">
      <Products person={info} />
     
    </div>
  )
}

export default App
