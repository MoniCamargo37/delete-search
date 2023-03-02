import './App.css';
import productData from './products.json';
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import SearchInput from './components/SearchInput';
import AddProduct from './components/AddProduct';


////INFELIZMENTE PARA SACARLO HE TENIDO QUE REVISAR LOS SCREENSHOTS QUE HE HECHO DURANTE LA CLASE DE JUEVES :(.... ENTIENDO LO QUE PASA CUANDO EXPLICAS PERO CUANDO HAY QUE HACER LOS LABS SE ME MEZCLA LAS TODAS INFO ... PERO ME ESTÁ GUSTANDO REACT :)

function App() {
  const [products, setProducts] = useState(productData);
  const [searchValue, setSearchValue] = useState('');

  // task 2 ************************
  const handleDelete = (id) => {
    // console.log(id);  
    const cleanProducts = [...products].filter(elem => elem._id !== id);
    setProducts(cleanProducts);
  }

  // task 3 *************************
  const handleSearch = (value) => {
    setSearchValue(value)
  }

  // task 4 *************************
  const handleAddProduct = (product) => {
    const newProduct = { ...product, _id: products.length + 1 };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch} />
      <div className="cart">
        {/******************task 1 ***********************/}
        {products
          .filter(item => item.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
          .map(item => {
            return <ProductCard product={item} key={item._id} handleDelete={handleDelete} />
          })}
      </div>
      <AddProduct handleAddProduct={handleAddProduct} />
    </>
  );
}
export default App;