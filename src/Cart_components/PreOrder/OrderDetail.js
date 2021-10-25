import React, { useState, useEffect } from 'react'
import {
  FaTrash,
  FaPlusCircle,
  FaMinusCircle,
  FaAngleDoubleRight,
} from 'react-icons/fa'
import StoreCard from './StoreCard'
import StoreCardMobile from './StoreCardMobile'
// import CART from '../../config'
import axios from 'axios'
//示意圖

function OrderDetail(props) {
  const { AmountChange, setAmountChange } = props
  const [Likeicon, setLikeicon] = useState('full')
  const [unLikeicon, setunLikeicon] = useState('heart')
  let [data, setData] = useState([{}])
  const [total, setTotal] = useState(0)
  const [deleteProduct, setdeleteProduct] = useState()

  useEffect(() => {
    // ;(async () => {
    //   let r = await fetch(CART)
    //   let j = await r.json()
    //   setData(j)
    // })()

    ;(async () => {
      let r = await axios.get('http://localhost:3001/cart/')
      console.log(r)
      if (r.status === 200) {
        setData(r.data)
      }
    })()
  }, [deleteProduct])

  function deletProduct(e) {
    ;(async () => {
      let del = await axios.delete(`http://localhost:3001/cart/${e}`)
      if (del.status === 200) {
        setTotal(total - 1)
      }
    })()
  }

  return (
    <>
      <div className="orderlist col-lg-8 col-12">
        {/* 桌機版 */}
        <table className="table table-borderless table-responsive">
          <thead>
            <tr className="border-bottom">
              <th scope="col"></th>
              <th scope="col">商品資訊</th>
              <th scope="col">優惠</th>
              <th scope="col">商品數量</th>
              <th scope="col">商品單價</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map
              ? data.map((el) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={`http://localhost:3000/image/${el.cate_sid}/${el.Product_id}.jpg`}
                          alt=""
                        />
                      </td>
                      <td className="text-start">{el.name}</td>
                      <td className="text-start ">{el.Promotion_Number}</td>
                      <td className="text-start">
                        <FaMinusCircle
                          className="countIcon"
                          onClick={() => {
                            // console.log(e.target)
                            setAmountChange(
                              AmountChange < 1 ? 0 : AmountChange - 1
                            )
                          }}
                        />
                        {el.Order_Amount}
                        <FaPlusCircle
                          className="countIcon"
                          onClick={() => {
                            setAmountChange(
                              AmountChange > 9 ? 10 : AmountChange + 1
                            )
                          }}
                        />
                      </td>
                      <td className="text-start">{el.price}</td>
                      <td>
                        <FaTrash
                          className="trashIcon"
                          total={total}
                          onClick={() => {
                            console.log(el.Order_Sid)
                            deletProduct(el.Order_Sid)
                            setTotal(total - 1)
                          }}
                        />
                      </td>
                    </tr>
                  )
                })
              : 'No Result'}

            {/* <tr>
              <td>
                <img src="http://localhost:3000/image/product1.png" alt="" />
              </td>
              <td className="text-start">Optimum Nutrition 100% 乳清蛋白</td>
              <td className="text-start ">- 50P</td>
              <td className="text-start">
                <FaMinusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                    setAmountChange(AmountChange < 1 ? 0 : AmountChange - 1)
                  }}
                />
                {AmountChange}
                <FaPlusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                    setAmountChange(AmountChange > 9 ? 10 : AmountChange + 1)
                  }}
                />
              </td>
              <td className="text-start">NT$2,000</td>
              <td>
                <FaTrash className="trashIcon" />
              </td>
            </tr> */}
          </tbody>
        </table>

        {/* 手機板 */}
        <table className="tablemobile table-borderless">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <img src="../../../image/product1.png" alt="" />
              </td>
              <td className="text-start">
                Optimum Nutrition 100% 乳清蛋白
                <br />
                NT$2,000
              </td>
              <td className="text-start col-4 text-center">
                <FaMinusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                    setAmountChange(AmountChange < 1 ? 0 : AmountChange - 1)
                  }}
                />
                {AmountChange}
                <FaPlusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                    setAmountChange(AmountChange > 9 ? 10 : AmountChange + 1)
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="bottomline col-lg-9"></div>

        <h4 className="col-lg-10 text-lg-start">你可能也會喜歡</h4>
        <StoreCard
          Likeicon={Likeicon}
          setLikeicon={setLikeicon}
          unLikeicon={unLikeicon}
          setunLikeicon={setunLikeicon}
        />

        <StoreCardMobile />
      </div>
    </>
  )
}

export default OrderDetail
