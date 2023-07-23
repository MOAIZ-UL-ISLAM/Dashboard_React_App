import Single from "../../components/Single/Single";
import { singleProduct } from "../../data";
import "./Product.scss"

const Pro = () => {
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  )
}

export default Pro;