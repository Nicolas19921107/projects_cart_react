import React from 'react'
import { useState, useEffect } from 'react'
function OrderInfo(props) {
  let [data, setData] = useState([{}])

  useEffect(() => {
    ;(async () => {
      let r = await fetch('http://localhost:3001/cart/')
      let j = await r.json()
      setData(j)
    })()
  }, [setData])
  return (
    <>
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
    </>
  )
}

export default OrderInfo
