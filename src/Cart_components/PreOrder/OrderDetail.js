import React from 'react'
import {
  FaTrash,
  FaPlusCircle,
  FaMinusCircle,
  FaAngleDoubleRight,
} from 'react-icons/fa'
import StoreCard from './StoreCard'
import StoreCardMobile from './StoreCardMobile'
//示意圖
import product1 from '../../image/image 94.png'
import product2 from '../../image/image 95.png'
import product3 from '../../image/image 96.png'
function OrderDetail(props) {
  return (
    <>
      <div className="orderlist col-lg-8 col-12">
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
            <tr>
              <td>
                <img src={product1} alt="" />
              </td>
              <td className="text-start">Optimum Nutrition 100% 乳清蛋白</td>
              <td className="text-start ">- 50P</td>
              <td className="text-start">
                <FaMinusCircle className="countIcon" />2
                <FaPlusCircle className="countIcon" />
              </td>
              <td className="text-start">NT$2,000</td>
              <td>
                <FaTrash className="trashIcon" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={product2} alt="" />
              </td>
              <td className="text-start">名富米酒(保)</td>
              <td className="text-start">- 50P</td>
              <td className="text-start">
                <FaMinusCircle className="countIcon" />2
                <FaPlusCircle className="countIcon" />
              </td>
              <td className="text-start">NT$354</td>
              <td>
                <FaTrash className="trashIcon" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={product3} alt="" />
              </td>
              <td className="text-start">奧利塔冷壓純橄欖油 1L</td>
              <td className="text-start">- 50P</td>
              <td className="text-start">
                <FaMinusCircle className="countIcon" />2
                <FaPlusCircle className="countIcon" />
              </td>
              <td className="text-start">NT$354</td>
              <td>
                <FaTrash className="trashIcon" />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="tablemobile table-borderless">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <img src={product1} alt="" />
              </td>
              <td className="text-start">
                Optimum Nutrition 100% 乳清蛋白
                <br />
                NT$2,000
              </td>
              <td className="text-start col-4 text-center">
                <FaMinusCircle className="countIcon" />2
                <FaPlusCircle className="countIcon" />
              </td>
            </tr>
            <tr>
              <td scope="row">
                <img src={product2} alt="" />
              </td>
              <td className="text-start">
                名富米酒(保)
                <br />
                NT$354
              </td>
              <td className="text-start col-4 text-center">
                <FaMinusCircle className="countIcon" />2
                <FaPlusCircle className="countIcon" />
              </td>
            </tr>
            <tr>
              <td scope="row">
                <img src={product3} alt="" />
              </td>
              <td className="text-start">
                奧利塔冷壓純橄欖油 1L
                <br />
                NT$354
              </td>
              <td className="text-start col-4 text-center">
                <FaMinusCircle className="countIcon" />2
                <FaPlusCircle className="countIcon" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="bottomline col-lg-9"></div>

        <h4 className="col-lg-10 text-lg-start">你可能也會喜歡</h4>
        <div className="storelike col-12 d-lg-flex justify-content-around align-content-center my-5">
          <StoreCard />
          <div className="morecard my-auto">
            <FaAngleDoubleRight className="DoubleRight" />
            <h1>MORE</h1>
          </div>
        </div>

        <div className="storelikemobile">
          <StoreCardMobile />
          <div className="morecardmobile my-5">
            <h1>MORE</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetail
