import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

function Cart_OrderDetail(props) {
  let { data } = props
  let a = []
  console.log('這是裡面的', data)
  a = JSON.parse(localStorage.getItem('測試'))
  return (
    <>
      <div className="container col-lg-6 col-10">
        <div class="square d-flex justify-content-center position-relative">
          <h3>訂單詳細</h3>
          <FaChevronDown className="ChevronDown position-absolute" />
        </div>
        <div className="orderdetail">
          <div className="detail col-lg-11 col-12 mx-auto mt-3">
            <table className="table detailinfo table-borderless">
              <thead>
                <tr className="border-bottom">
                  <th scope="col"></th>
                  <th scope="col">商品資訊</th>
                  <th scope="col">數量</th>
                  <th scope="col">單價</th>
                </tr>
              </thead>
              <tbody>
                {data.map((v) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={`http://localhost:3000/image/${v.cate_sid}/${v.Product_id}.jpg`}
                          alt=""
                        />
                      </td>
                      <td>{v.name}</td>
                      <td>{v.Order_Amount}</td>
                      <td>{v.price}</td>
                    </tr>
                  )
                })}

                {/* <tr>
                  <td>
                    <img src="../../../image/product1.png" alt="" />
                  </td>
                  <td>名富米酒(保)</td>
                  <td>1</td>
                  <td>354</td>
                </tr>
                <tr>
                  <td>
                    <img src="../../../image/product1.png" alt="" />
                  </td>
                  <td>奧利塔冷壓純橄欖油 1L</td>
                  <td>2</td>
                  <td>354</td>
                </tr> */}
              </tbody>
            </table>

            <table className="table detailinfomobile table-borderless">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="../../../image/product1.png" alt="" />
                  </td>
                  <td>
                    Optimum Nutrition 100% 乳清蛋白
                    <br />
                    NT$2000
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src="../../../image/product1.png" alt="" />
                  </td>
                  <td>
                    名富米酒(保)
                    <br />
                    NT$354
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img src="../../../image/product1.png" alt="" />
                  </td>
                  <td>
                    奧利塔冷壓純橄欖油 1L
                    <br />
                    NT$354
                  </td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>

            <table className="table detailcheck table-borderless mx-auto">
              <tbody>
                <tr className="border-top"></tr>
                <tr>
                  <th>商品小計</th>
                  <td className="detailtd">{a[2]}</td>
                </tr>
                <tr>
                  <th>優惠</th>
                  <td className="detailtd">{a[1]}</td>
                </tr>
                <tr>
                  <th>運費</th>
                  <td className="detailtd">0</td>
                </tr>
                <tr className="border-top">
                  <th>總計</th>
                  <td className="detailtd">{a[0]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart_OrderDetail
