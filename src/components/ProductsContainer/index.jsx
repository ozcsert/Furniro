import "./style.scss"
import ProductCard from "./ProductCard/index.jsx"
import useSWR from "swr"

async function fetcher(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Product not found")
  return response.json()
}

const ProductsContainer = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(
    `https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures`,
    fetcher
  )
  console.log(products)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsContainer
