import React from 'react'
import {
  FaShoppingCart,
  FaArrowRight,
  FaTrash,
  FaPlusCircle,
  FaMinusCircle,
  FaRegEdit,
  FaCheck,
} from 'react-icons/fa'

import product1 from '../image/image 94.png'
import product2 from '../image/image 95.png'
import product3 from '../image/image 96.png'
import productlike1 from '../image/商品圖.png'

function Cart_PreOrder(props) {
  return (
    <>
      {/* Banner */}
      <div className="container-fluid Banner col-xs-10">
        <div className="bannerTitle col-lg-8 col-xs-8 ">
          <h1 className="bannerTitle1 col-xs-6">只差一步</h1>
          <h1 className="bannerTitle2 col-xs-6">眼前所及全部歸你</h1>
        </div>
      </div>

      <div className="Process col-lg-8 col-xs-6 d-flex justify-content-around align-content-end">
        <div className="CartImage col-lg-3 col-xs-1">
          <FaShoppingCart className="icons" />
          <h3 className="first">確認購物車</h3>
        </div>
        <FaArrowRight className="arrow first" />
        <div className="EditInfo col-lg-3 col-xs-1">
          <FaRegEdit className="icons second" />
          <h3 className="second">填寫資料</h3>
        </div>
        <FaArrowRight className="arrow second" />
        <div className="FinishInfo col-lg-3 col-xs-1">
          <FaCheck className="icons third" />
          <h3 className="third">完成訂單</h3>
        </div>
      </div>

      <div className="container shoppingtitle my-5 col-xs-6">
        <span>SHOPPING CART</span>
        <div className="bottom-line col-lg-6 col-xs-6"></div>
      </div>

      <div className="container ordercheck col-xs-6">
        <div className="orderlist col-lg-8 col-xs-6">
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
                <td className="text-start">- 50P</td>
                <td className="text-start">
                  <FaMinusCircle />2
                  <FaPlusCircle />
                </td>
                <td className="text-start">2000</td>
                <td>
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={product2} alt="" />
                </td>
                <td className="text-start">名富米酒(保)</td>
                <td className="text-start">- 50P</td>
                <td className="text-start">
                  <FaMinusCircle />2
                  <FaPlusCircle />
                </td>
                <td className="text-start">354</td>
                <td>
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={product3} alt="" />
                </td>
                <td className="text-start">奧利塔冷壓純橄欖油 1L</td>
                <td className="text-start">- 50P</td>
                <td className="text-start">
                  <FaMinusCircle />2
                  <FaPlusCircle />
                </td>
                <td className="text-start">354</td>
                <td>
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>

          <table className="tablemobile table-borderless table-responsive-sm">
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
                <td className="text-start">- 50P</td>
                <td className="text-start col-4 text-center">
                  <i className="fas fa-minus-circle"></i>2
                  <i className="fas fa-plus-circle"></i>
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
                <td className="text-start">- 50P</td>
                <td className="text-start col-4 text-center">
                  <i className="fas fa-minus-circle"></i>2
                  <i className="fas fa-plus-circle"></i>
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
                <td className="text-start">- 50P</td>
                <td className="text-start col-4 text-center">
                  <i className="fas fa-minus-circle"></i>2
                  <i className="fas fa-plus-circle"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bottomline"></div>

          <h4 className="col-lg-10 text-lg-start text-center">
            你可能也會喜歡
          </h4>
          <div className="storelike col-12 d-lg-flex justify-content-around align-content-center my-5">
            <div className="storecard col-lg-3 col-10 position-relative">
              <img src={productlike1} className="position-absolute" />
              <div className="storeproduct">
                <div className="body py-3">
                  <p className="text ps-5 text-center">
                    【減醣料理】
                    <br />
                    三杯嫩雞 3 包
                  </p>
                  <p className="text ps-5 text-center">NT$ 290</p>
                  <div
                    className="storeicon text-center"
                    onclick="heartclick(event)"
                  >
                    <i className="far fa-heart ms-5"></i>
                    <i className="fas fa-heart ms-5 fullheart"></i>
                    <i className="fas fa-cart-plus ms-4"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="storecard col-lg-3 col-10 position-relative">
              <img src={productlike1} className="position-absolute" />
              <div className="storeproduct">
                <div className="body py-3">
                  <p className="text ps-5 text-center">
                    【減醣料理】
                    <br />
                    三杯嫩雞 3 包
                  </p>
                  <p className="text ps-5 text-center">NT$ 290</p>
                  <div
                    className="storeicon text-center"
                    onclick="heartclick(event)"
                  >
                    <i className="far fa-heart ms-5"></i>
                    <i className="fas fa-heart ms-5 fullheart"></i>
                    <i className="fas fa-cart-plus ms-4"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="morecard my-auto">
              <i className="fas fa-angle-double-right"></i>
              <h1>MORE</h1>
            </div>
          </div>

          <div className="storelikemobile">
            <div className="storecardmobile position-relative my-5 mx-2">
              <img src={productlike1} className="position-absolute" />
              <div className="storeproductmobile col-10 mx-2">
                <div className="body d-flex justify-content-end">
                  <p className="text my-auto me-4">
                    【減醣料理】
                    <br />
                    三杯嫩雞 3 包
                  </p>
                  <div
                    className="storeiconmobile my-auto me-3"
                    onclick="heartclick(event)"
                  >
                    <i className="far fa-heart mx-2" id="heart1"></i>
                    <i className="fas fa-heart mx-2 fullheart" id="heartA"></i>
                    <i className="fas fa-cart-plus mx-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="storecardmobile position-relative my-5 mx-2">
              <img src={productlike1} className="position-absolute" />
              <div className="storeproductmobile col-10 mx-2">
                <div className="body d-flex justify-content-end">
                  <p className="text my-auto me-4">
                    【減醣料理】
                    <br />
                    三杯嫩雞 3 包
                  </p>
                  <div
                    className="storeiconmobile my-auto me-3"
                    onclick="heartclick(event)"
                  >
                    <i className="far fa-heart mx-2" id="heart2"></i>
                    <i className="fas fa-heart mx-2 fullheart" id="heartB"></i>
                    <i className="fas fa-cart-plus mx-2"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="morecardmobile my-5">
              <h1>MORE</h1>
            </div>
          </div>
        </div>

        <div class="orderinfolist col-lg-3 col-xs-6 ml-4 mx-auto mt-2 text-center">
          <h4>訂單資訊</h4>
          <table class="table table-borderless">
            <tbody>
              <tr scope="row" class="border-top">
                <th class="text-start">商品小計</th>
                <td class="text-end">NT$4,708</td>
              </tr>
              <tr scope="row">
                <th class="text-start">運費</th>
                <td class="text-end">未選擇</td>
              </tr>
              <tr scope="row">
                <th class="text-start">帳戶折抵</th>
                <td class="text-end">-NT$100</td>
              </tr>
              <tr scope="row" class="border-bottom">
                <th class="text-start">優惠</th>
                <td class="text-end">-NT$100</td>
              </tr>
              <tr scope="row">
                <th class="text-start">商品總計</th>
                <td class="text-end">NT$4,608</td>
              </tr>
              <tr scope="row">
                <th class="text-start">優惠代碼</th>
                <td class="text-end"></td>
              </tr>
            </tbody>
          </table>
          <div class="promotion d-flex justify-content-around">
            <input type="text" />
            <button>使用</button>
          </div>

          <div class="my-3">
            <button
              class="orderconfirm col-10 my-3"
              onclick="location.href='./Cart_Manage.html'"
            >
              結帳去
            </button>
            <button class="returnstore col-10 my-3">返回商城</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart_PreOrder
