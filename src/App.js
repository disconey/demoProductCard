

import ProductCard from './ProductCard';

const dataProducts = [
  {
    id: 1,
    img: "https://i1.sndcdn.com/artworks-qwcEJFTTtBNlsSBv-z58rRg-t500x500.jpg",
    price: 200000,
    productName: "Suit & Tie"
  },
  {
    id: 2,
    img: "https://i.ytimg.com/vi/6fzH7a3XQW0/maxresdefault.jpg",
    price: 250000,
    productName: "Thôi Em Đừng Đi"
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/9f1u_U3Hvf4/maxresdefault.jpg",
    price: 350000,
    productName: "Ai là kẻ xấu xa"
  }
]
function App() {
  const renderProducts = (products) => {
      return products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })
  }
  return <div style={{ display: 'flex', gap: 20}}>{renderProducts(dataProducts)}</div>
   
  
}

export default App;
