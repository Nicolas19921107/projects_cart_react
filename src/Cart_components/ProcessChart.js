import React from 'react'
import {
  FaShoppingCart,
  FaLongArrowAltRight,
  FaRegEdit,
  FaCheck,
} from 'react-icons/fa'

function ProcessChart(props) {
  return (
    <>
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
        <FaLongArrowAltRight className="arrow secondArrow" />
        <div className="FinishInfo col-lg-3 col-xs-1">
          <FaCheck className="icons third" />
          <h3 className="third">完成訂單</h3>
        </div>
      </div>
    </>
  )
}

export default ProcessChart
