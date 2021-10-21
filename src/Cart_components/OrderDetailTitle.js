import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

function OrderDetailTitle() {
  return (
    <>
      <div class="square d-flex justify-content-center position-relative">
        <h3>訂單詳細</h3>
        <FaChevronDown className="ChevronDown position-absolute" />
      </div>
    </>
  )
}

export default OrderDetailTitle
