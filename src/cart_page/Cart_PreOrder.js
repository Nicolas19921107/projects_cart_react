import React from 'react'
import {
  FaTrash,
  FaPlusCircle,
  FaMinusCircle,
  FaAngleDoubleRight,
} from 'react-icons/fa'
import Banner from '../Cart_components/Banner'
import ProcessChart from '../Cart_components/ProcessChart'
import StoreCard from '../Cart_components/PreOrder/StoreCard'
import StoreCardMobile from '../Cart_components/PreOrder/StoreCardMobile'

//示意圖
import product1 from '../image/image 94.png'
import product2 from '../image/image 95.png'
import product3 from '../image/image 96.png'

function Cart_PreOrder(props) {
  return (
    <>
      <Banner />

      <ProcessChart />

      <div className="container shoppingtitle my-5 col-lg-10">
        <span>SHOPPING CART</span>
        <div className="bottom-line col-lg-6 col-10 mx-lg-0 mx-auto"></div>
      </div>

      <div className="container ordercheck col-lg-10 d-lg-flex">
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

        <div className="orderinfolist col-lg-3 mx-lg-3 mt-3">
          <h4>訂單資訊</h4>
          <table className="table table-borderless">
            <tbody>
              <tr scope="row" className="border-top">
                <th>商品小計</th>
                <td>NT$4,708</td>
              </tr>
              <tr scope="row">
                <th>運費</th>
                <td>未選擇</td>
              </tr>
              <tr scope="row">
                <th>帳戶折抵</th>
                <td>-NT$100</td>
              </tr>
              <tr scope="row" className="border-bottom">
                <th>優惠</th>
                <td>-NT$100</td>
              </tr>
              <tr scope="row">
                <th>商品總計</th>
                <td>NT$4,608</td>
              </tr>
              <tr scope="row">
                <th>優惠代碼</th>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="promotion d-flex justify-content-between">
            <input type="text" />
            <button>使用</button>
          </div>

          <div className="my-3">
            <button
              className="orderconfirm col-12 my-3"
              onclick="location.href='./Cart_Manage.html'"
            >
              結帳去
            </button>
            <button className="returnstore col-12 my-3">返回商城</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart_PreOrder
