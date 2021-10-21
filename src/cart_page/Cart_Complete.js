import React from 'react'
import Banner from '../Cart_components/Banner'
function Cart_Complete(props) {
  return (
    <>
      <Banner />
      <div class="container confirmtitle my-5 text-center">
        <h1>訂單已送出，感謝您的訂購</h1>
      </div>
      <div class="container confirmnumber my-5 text-center">
        <h3>訂單編號: AA202109190038</h3>
      </div>

      <div
        class="
        container
        col-lg-8
        confirm
        mt-5
        d-lg-flex
        justify-content-around
        text-center
      "
      >
        <button class="info col-lg-4 col-10 my-3">返回商城</button>
        <button class="info col-lg-4 col-10 my-3">查看其他訂單</button>
      </div>
    </>
  )
}

export default Cart_Complete
