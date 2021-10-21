import React from 'react'
import Banner from '../Cart_components/Banner'
import ProcessChart from '../Cart_components/ProcessChart'
import SectionTitle from '../Cart_components/SectionTitle'
import OrderDetailTitle from '../Cart_components/OrderDetailTitle'
import Cart_OrderDetail from '../Cart_components/Manage/Cart_OrderDetail'
import Cart_Button from '../Cart_components/Cart_Button'
import { FaCcVisa } from 'react-icons/fa'
function Cart_ConfimOrder(props) {
  return (
    <>
      <Banner />
      <ProcessChart />
      <SectionTitle />

      <div className="container col-lg-6 col-10">
        <OrderDetailTitle />

        <div className="orderdetail">
          <div className="detail col-lg-11 col-12 mx-auto mt-3">
            <Cart_OrderDetail />
          </div>
        </div>
      </div>

      <SectionTitle />

      <div className="container confirmorderdetail mx-auto col-lg-6 col-10">
        <div className="container importinfo d-flex justify-content-between">
          <div className="importinfotitle col-lg-9 col-6">
            <h2>以下列方式支付金額</h2>
            <h6>信用卡/現金卡</h6>
          </div>
          <FaCcVisa className="favisa" />
        </div>
        <table className="table text-center table-borderless mx-auto">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="title text-end col-lg-5">訂單編號</td>
              <td className="text-start col-lg-6">AA202109190038</td>
            </tr>
            <tr>
              <td className="title text-end col-lg-5">訂單時間</td>
              <td className="text-start col-6">UTC+8 2021-09-19 00:38:40</td>
            </tr>
            <tr>
              <td className="title text-end col-lg-5">配送方式</td>
              <td className="text-start col-6">宅配運送</td>
            </tr>
            <tr>
              <td className="title text-end col-lg-5">收件人方式</td>
              <td className="text-start col-6">Nicolas</td>
            </tr>
            <tr>
              <td className="title text-end col-5">手機號碼</td>
              <td className="text-start col-6">0912-345-678</td>
            </tr>
            <tr>
              <td className="title text-end col-5">電子信箱</td>
              <td className="text-start col-6">st880517@gmail.com</td>
            </tr>
            <tr>
              <td className="title text-end col-5">收件地址</td>
              <td className="text-start col-6">
                台北市北投區石牌路 2 段 123 號 1 樓
              </td>
            </tr>
            <tr>
              <td className="title text-end col-5">發票方式</td>
              <td className="text-start col-6">手機載具條碼 / QK2TUU2</td>
            </tr>
            <tr className="border-bottom">
              <td className="title text-end col-5">備註</td>
              <td className="text-start col-6"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="container confirmorderdetail mx-auto text-center">
        <h1>準備完成你的訂單了嗎?</h1>
      </div>

      <Cart_Button />
    </>
  )
}

export default Cart_ConfimOrder
