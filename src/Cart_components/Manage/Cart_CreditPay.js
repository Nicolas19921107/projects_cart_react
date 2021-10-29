import React from 'react'

function Cart_CreditPay(props) {
  let { Credit, setCredit } = props

  function UpdateInfo(value, index) {
    let NewCredit = [...Credit]
    NewCredit[index] = value
    console.log('123', NewCredit)
    setCredit(NewCredit)
  }

  return (
    <>
      <form action="" class="container creditcard col-lg-6 col-10 px-0">
        <div class="creditcard_number">
          <label for="">
            <span class="star">*</span>信用卡號
          </label>
          <input
            type="text"
            class="cardnumber mx-1"
            name="cardnumber"
            id="cardnumber"
            onChange={(e) => {
              console.log(e.target.value)
              UpdateInfo(e.target.value, 0)
            }}
          />
          <span>/</span>
          <input
            type="text"
            class="cardnumber mx-1"
            name="cardnumber"
            id="cardnumber"
            onChange={(e) => {
              console.log(e.target.value)
              UpdateInfo(e.target.value, 1)
            }}
          />
          <span>/</span>
          <input
            type="text"
            class="cardnumber mx-1"
            name="cardnumber"
            id="cardnumber"
            onChange={(e) => {
              console.log(e.target.value)
              UpdateInfo(e.target.value, 2)
            }}
          />
          <span>/</span>
          <input
            type="text"
            class="cardnumber mx-1"
            name="cardnumber"
            id="cardnumber"
            onChange={(e) => {
              console.log(e.target.value)
              UpdateInfo(e.target.value, 3)
            }}
          />
        </div>
        <div class="creditcard_duedate">
          <label for="">
            <span class="star">*</span>有效期限
          </label>
          <input
            type="text"
            class="cardduedate mx-lg-1 mx-2"
            name="cardduedate"
            id="cardduedate"
            placeholder="MM"
            onChange={(e) => {
              console.log(e.target.value)
              UpdateInfo(e.target.value, 4)
            }}
          />
          <span>/</span>
          <input
            type="text"
            class="cardduedate mx-lg-1 mx-2"
            name="cardduedate"
            id="cardduedate"
            placeholder="YY"
            onChange={(e) => {
              console.log(e.target.value)
              UpdateInfo(e.target.value, 5)
            }}
          />
        </div>
        <div class="creditcard_checkcode">
          <label for="">
            <span class="star">*</span>背面末三碼
          </label>
          <input
            type="text"
            class="cardcheckcode mx-1"
            name="cardcheckcode"
            id="cardcheckcode"
            placeholder="***"
            onChange={(e) => {
              console.log(e.target.value)
              UpdateInfo(e.target.value, 6)
            }}
          />
        </div>

        <div class="container warning_text my-5">
          <h6>
            ※
            提供VISA丶MasterCard丶JCB信用卡交易，全程使用安全加密，信用卡資料將不會儲存於網站，您可以安心使用信用卡付款。
          </h6>
        </div>
      </form>
    </>
  )
}

export default Cart_CreditPay
