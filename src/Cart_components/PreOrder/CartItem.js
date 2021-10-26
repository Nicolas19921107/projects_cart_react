import React from 'react'
import {
  FaTrash,
  FaPlusCircle,
  FaMinusCircle,
  FaAngleDoubleRight,
} from 'react-icons/fa'

function CartItem(props) {
  const {
    Order_Sid,
    Product_id,
    Promotion_Number,
    name,
    cate_sid,
    price,
    Order_Amount,
    Count,
    setCount,
    DeleteProduct,
    ModifyProduct,
  } = props
  return (
    <>
      <tr>
        <td>
          <img
            src={`http://localhost:3000/image/${cate_sid}/${Product_id}.jpg`}
            alt=""
          />
        </td>
        <td className="text-start">{name}</td>
        <td className="text-start ">{Promotion_Number}</td>
        <td className="text-start">
          <FaMinusCircle
            className="countIcon"
            onClick={() => {
              // setTotal(parseInt(el.Order_Amount) - 1)
              // ModifyProduct(el, total)
            }}
          />
          {Order_Amount}
          <FaPlusCircle
            className="countIcon"
            onClick={() => {
            //   ModifyProduct(Order_Amount + 1)
            }}
          />
        </td>
        <td className="text-start">{price}</td>
        <td>
          <FaTrash
            className="trashIcon"
            onClick={() => {
              // console.log(el.Order_Sid)
              DeleteProduct(Order_Sid)
            }}
          />
        </td>
      </tr>
    </>
  )
}

export default CartItem
