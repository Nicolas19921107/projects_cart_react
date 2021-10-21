import React from 'react'
import { useState } from 'react'
import Banner from '../Cart_components/Banner'
import OrderDetailTitle from '../Cart_components/OrderDetailTitle'
import ProcessChart from '../Cart_components/ProcessChart'
import SectionTitle from '../Cart_components/SectionTitle'
import Cart_OrderDetail from '../Cart_components/Manage/Cart_OrderDetail'
import Cart_OrderInfoInput from '../Cart_components/Cart_OrderInfoInput'
import Cart_Button from '../Cart_components/Cart_Button'
import Cart_Store from '../Cart_components/Manage/Cart_Store'
import icon1 from '../image/cc-apple-pay-brands.svg'
import icon2 from '../image/cc-mastercard-brands.svg'
import icon3 from '../image/cc-visa-brands.svg'
import icon4 from '../image/google-pay-brands.svg'

function Cart_Manage() {
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

      <form className="container col-lg-6 checkout" action="">
        <div className="check d-flex justify-content-between">
          <div className="choose">
            <input type="radio" name="delivery" id="delivery" value="A" />
            <label for="">7-11取貨付款</label>
          </div>
          <div className="choose">
            <input type="radio" name="delivery" id="delivery" value="B" />
            <label for="">全家取貨付款</label>
          </div>
          <div className="choose">
            <input
              type="radio"
              name="delivery"
              id="delivery"
              value="C"
              checked
            />
            <label for="">
              宅配 貨到付款<span>(僅限台灣本島)</span>
            </label>
          </div>
        </div>
        <div className="check d-flex justify-content-around">
          <div className="choose d-flex">
            <input type="radio" name="delivery" id="delivery" value="D" />
            <label for="">信用卡支付</label>
            <div className="payicon mx-2">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
            </div>
          </div>
          <div className="choose">
            <input type="radio" name="delivery" id="delivery" value="E" />
            <label for="">LINE PAY 支付</label>
          </div>
        </div>
      </form>

      <form className="container checkoutmobileform col-10" action="">
        <div className="checkmobile d-flex justify-content-between align-content-center">
          <input
            type="radio"
            name="delivery"
            id="delivery"
            value="A"
            onclick="radiochange(event)"
          />
          <label for="">7-11取貨付款</label>
        </div>
        <div className="checkmobile d-flex justify-content-between align-content-center">
          <input type="radio" name="delivery" id="delivery" value="B" />
          <label for="">全家取貨付款</label>
        </div>
        <div className="checkmobile d-flex justify-content-between align-content-center">
          <input type="radio" name="delivery" id="delivery" value="C" checked />
          <label for="">
            宅配 貨到付款<span>(僅限台灣本島)</span>
          </label>
        </div>
        <div className="checkmobile d-flex justify-content-between align-content-center">
          <input
            type="radio"
            name="delivery"
            id="delivery"
            value="D"
            onclick="radiochange(event)"
          />
          <div className="payicon d-flex align-content-center">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
          </div>
          <label for="">信用卡支付</label>
        </div>
        <div className="checkmobile d-flex justify-content-between align-content-center">
          <input type="radio" name="delivery" id="delivery" value="E" />
          <label for="">LINE PAY 支付</label>
        </div>
      </form>

      <SectionTitle />

      <div
        className="
        container
        importinfo
        d-flex
        justify-content-lg-between
        justify-content-sm-center
        col-lg-6 col-10
        mb-5
      "
      >
        <h2>收件人資訊</h2>
        <button
          className="import col-lg-3 col-10"
          onclick="importMember(event)"
        >
          匯入會員資料
        </button>
      </div>

      <Cart_OrderInfoInput />

      <Cart_Store />

      <SectionTitle />

      <form class="container col-lg-6 col-10 invoice" action="">
        <div class="invoice d-lg-flex justify-content-between">
          <input
            type="button"
            class="info1 col-lg-3 col-12"
            value="電子發票 - 個人"
          />
          <input
            type="button"
            class="info1 col-lg-3 col-12"
            value="電子發票 - 公司"
          />
          <input
            type="button"
            class="info_mobile col-lg-3 col-12"
            value="手機條碼載具"
          />
        </div>
        <input
          type="hidden"
          class="infoinput col-12 px-3 mt-lg-5"
          placeholder="/請輸入預設載具"
        />
        <input
          type="hidden"
          class="infoinput col-12 px-3 mt-lg-5"
          placeholder="/請輸入統一編號"
        />
      </form>

      <Cart_Button />
    </>
  )
}

export default Cart_Manage
