import React from 'react'
import { useState } from 'react'
import Cart_OrderDetail from '../Cart_components/Manage/Cart_OrderDetail'
import Cart_OrderInfoInput from '../Cart_components/Manage/Cart_OrderInfoInput'
import Cart_CreditPay from '../Cart_components/Manage/Cart_CreditPay'
import Cart_Store from '../Cart_components/Manage/Cart_Store'
import Cart_CheckOut from '../Cart_components/Manage/Cart_CheckOut'
import Cart_Invoice from '../Cart_components/Manage/Cart_Invoice'
import {
  FaShoppingCart,
  FaLongArrowAltRight,
  FaRegEdit,
  FaCheck,
} from 'react-icons/fa'

function Cart_Manage() {
  return (
    <>
      <div className="container-fluid Banner col-xs-10">
        <div className="bannerTitle col-lg-8 col-xs-8 ">
          <h1 className="bannerTitle1 col-xs-6">只差一步</h1>
          <h1 className="bannerTitle2 col-xs-6">眼前所及全部歸你</h1>
        </div>
      </div>
      <div className="Process col-lg-8 col-xs-6 d-flex justify-content-around align-content-end">
        <div className="CartImage col-lg-3 col-xs-1">
          <FaShoppingCart className="icons first" />
          <h3 className="first">確認購物車</h3>
        </div>
        <FaLongArrowAltRight className="arrow firstArrow" />
        <div className="EditInfo col-lg-3 col-xs-1">
          <FaRegEdit className="icons second" />
          <h3 className="second">填寫資料</h3>
        </div>
        <FaLongArrowAltRight className="arrow" />
        <div className="FinishInfo col-lg-3 col-xs-1">
          <FaCheck className="icons" />
          <h3>完成訂單</h3>
        </div>
      </div>
      <div class="titleBorder col-lg-6 col-10">
        <h4 class="res-title title-fz fw-700">確認訂單資訊</h4>
      </div>
      <Cart_OrderDetail />
      <div class="titleBorder col-lg-6 col-10">
        <h4 class="res-title title-fz fw-700">付款方式</h4>
      </div>
      <Cart_CheckOut />
      <div class="titleBorder col-lg-6 col-10">
        <h4 class="res-title title-fz fw-700">取貨資料</h4>
      </div>
      <Cart_Store />
      {/* <Cart_CreditPay /> */}
      {/* <Cart_OrderInfoInput /> */}
      <div class="titleBorder col-lg-6 col-10">
        <h4 class="res-title title-fz fw-700">發票方式</h4>
      </div>
      <Cart_Invoice />
      <div class="container col-lg-7 col-12 confirm my-5 d-lg-flex text-center justify-content-around">
        <button class="returninfo col-lg-4 col-10">返回購物車</button>
        <button class="confirminfo col-lg-4 col-10">確認訂單</button>
      </div>
    </>
  )
}

export default Cart_Manage
