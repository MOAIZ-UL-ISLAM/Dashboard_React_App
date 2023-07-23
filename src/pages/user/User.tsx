import Single from "../../components/Single/Single"
import { singleProduct } from "../../data"
import "./user.scss"

const User = () => {
  return (
    <div className="user">
      <Single {...singleProduct}/>
    </div>
  )
}

export default User