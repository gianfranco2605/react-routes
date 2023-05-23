import { Link, useParams } from "react-router-dom"

const ProductsDetails = () => {
  const params = useParams();

  return (
    <>
    <h1>Product Details</h1>
    <p>{params.productId}</p>
    {/* GET BACK BUTTON important relative path */}
    <p><Link to=".." relative="path">Back</Link></p>
    </>
  )
}

export default ProductsDetails