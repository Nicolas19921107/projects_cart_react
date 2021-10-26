import React, { useState, useEffect } from 'react'
import StoreCard from './StoreCard'
import StoreCardMobile from './StoreCardMobile'
import axios from 'axios'
// import CartItem from './CartItem'
// import CartMobile from './CartMobile'
import {
  FaTrash,
  FaPlusCircle,
  FaMinusCircle,
  FaAngleDoubleRight,
} from 'react-icons/fa'
// import CART from '../../config'
//示意圖

function OrderDetail(props) {
  const [Likeicon, setLikeicon] = useState('full')
  const [unLikeicon, setunLikeicon] = useState('heart')
  let { data, Count, setCount, Judge, setJudge, DeleteProduct } = props
  let NewCount = [...Count]
  console.log('第二層', NewCount)
  console.log('第二層判斷', Judge)

  async function ModifyProduct(SCount, Order_Sid, i) {
    console.log(SCount, Order_Sid, i)
    let Mod = await axios.put(`http://localhost:3001/cart/${Order_Sid}`, {
      Order_Amount: SCount,
    })
    if (Mod.status === 200) {
      console.log('第二層的 Modify', NewCount)
      setCount(NewCount)
      setJudge(true)
      console.log('第二層_修改判斷', Judge)
    }
    return NewCount
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
              ? data.map((v, i) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={`http://localhost:3000/image/${v.cate_sid}/${v.Product_id}.jpg`}
                          alt=""
                        />
                      </td>
                      <td className="text-start">{v.name}</td>
                      <td className="text-start ">{v.Promotion_Number}</td>
                      <td className="text-start">
                        <FaMinusCircle
                          className="countIcon"
                          onClick={() => {
                            // setTotal(parseInt(el.Order_Amount) - 1)
                            // ModifyProduct(el, total)
                          }}
                        />
                        {NewCount[i]}
                        <FaPlusCircle
                          className="countIcon"
                          onClick={() => {
                            NewCount[i] += 1
                            ModifyProduct(NewCount[i], v.Order_Sid, i)
                          }}
                        />
                      </td>
                      <td className="text-start">{v.price}</td>
                      <td>
                        <FaTrash
                          className="trashIcon"
                          onClick={() => {
                            // console.log(el.Order_Sid)
                            // DeleteProduct(Order_Sid)
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
            {data.map
              ? data.map((v, i) => {
                  {
                    /* ;<CartMobile /> */
                  }
                })
              : ''}

            {/* <tr>
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
                  }}
                />
                10
                <FaPlusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                  }}
                />
              </td>
            </tr> */}
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
