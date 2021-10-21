import React from 'react'
import { FaRegHeart, FaCartPlus } from 'react-icons/fa'
import productimg from '../../image/商品圖.png'

function StoreCard(props) {
  return (
    <>
      <div className="storecard col-lg-4 col-10 position-relative">
        <img src={productimg} className="position-absolute" />
        <div className="storeproduct">
          <div className="body py-2">
            <p className="text ps-5 text-center">
              【減醣料理】
              <br />
              三杯嫩雞 3 包
            </p>
            <p className="text ps-5 text-center">NT$ 290</p>
            <div className="storeicon text-center" onclick="heartclick(event)">
              <FaRegHeart className="heart" />
              <FaCartPlus className="cartlike" />
              {/* <i className="far fa-heart ms-5"></i>
                    <i className="fas fa-heart ms-5 fullheart"></i>
                    <i className="fas fa-cart-plus ms-4"></i> */}
            </div>
          </div>
        </div>
      </div>
      <div className="storecard col-lg-4 col-10 position-relative">
        <img src={productimg} className="position-absolute" />
        <div className="storeproduct">
          <div className="body py-2">
            <p className="text ps-5 text-center">
              【減醣料理】
              <br />
              三杯嫩雞 3 包
            </p>
            <p className="text ps-5 text-center">NT$ 290</p>
            <div className="storeicon text-center" onclick="heartclick(event)">
              <FaRegHeart className="heart" />
              <FaCartPlus className="cartlike" />
              {/* <i className="far fa-heart ms-5"></i>
                    <i className="fas fa-heart ms-5 fullheart"></i>
                    <i className="fas fa-cart-plus ms-4"></i> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreCard
