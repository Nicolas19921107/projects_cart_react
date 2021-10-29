import { useState, useEffect } from 'react'
import axios from 'axios'
import $, { data } from 'jquery'
// import Iframe from 'react-iframe'
import { FaChevronDown } from 'react-icons/fa'

function Cart_Store(props) {
  let { StoreInfo, setStoreInfo, CityArr, setCityArr } = props
  let [StoreCity, setStoreCity] = useState([])
  let Address = []
  console.log(CityArr)
  useEffect(() => {
    if (StoreCity[0] && StoreCity[1]) {
      DataAxios()
    }
  }, [StoreCity])

  async function DataAxios() {
    console.log('City', StoreCity[0])
    console.log('District', StoreCity[1])
    let r = await axios.post('http://localhost:3001/cart/store', {
      commandid: 'SearchStore',
      city: StoreCity[0],
      town: StoreCity[1],
      // roadname: '臨沂街',
    })
    if (r.status === 200) {
      console.log('DataX', r.data)
      const jqAddress = $(r.data)
      const jqPOIName = $(r.data)
      jqPOIName.find('GeoPosition POIName').each((i, el) => {
        console.log('店名', el.innerText)
        Address[i] = { Name: el.innerText + '門市', Address: '' }
      })
      jqAddress.find('GeoPosition Address').each((i, el) => {
        console.log('地址', el)
        Address[i].Address = el.innerText
      })

      console.log('店名陣列', Address)
    }
  }

  function UpdateInfo(value, index) {
    let NewStoreCIty = [...StoreCity]
    NewStoreCIty[index] = value
    console.log('123', NewStoreCIty)
    setStoreCity(NewStoreCIty)
  }

  return (
    <>
      <div className="container store_711 col-lg-6 col-10">
        <div className="storeinfo d-lg-flex justify-content-around ">
          <div className="store_711_image col-lg-2 col-10 text-center mx-auto">
            <img src="http://localhost:3000/image/711icon.png" alt="" />
          </div>
          <div className="store_711_info col-lg-5 col-10 my-auto">
            <h4>已選擇門市店號:155083</h4>
            <h4>已選擇門市名稱:鑫復門市</h4>
          </div>
          <div className="store_711_address col-lg-5 col-10">
            <h4>門市地址:台北市大安區信義路三段178號1樓</h4>
          </div>
        </div>
        <form className="storeform" action="">
          <label for="">
            <span>*</span>請選擇縣市
          </label>
          <div className="dropdown">
            <select
              name="city"
              id="city"
              onChange={(e) => {
                console.log('選到的A', e.target.value)
                UpdateInfo(e.target.value, 0)
              }}
            >
              {CityArr.map((v, i) => {
                return <option value={v.City}>{v.City}</option>
              })}
            </select>
            <FaChevronDown className="ChevronDown position-absolute" />
          </div>
          <label for="">
            <span>*</span>請選擇行政區
          </label>
          <div className="dropdown">
            <select
              name="districts"
              id="districts"
              onChange={(e) => {
                console.log('選到的B', e.target.value)
                UpdateInfo(e.target.value, 1)
              }}
            >
              {CityArr.map((v, i) => {
                if (v.City === StoreCity[0]) {
                  return v.districts.map((a) => {
                    return <option value={a.name}>{a.name}</option>
                  })
                }
              })}
            </select>
            <FaChevronDown className="ChevronDown position-absolute" />
          </div>
          <label for="">
            <span>*</span>請選擇街道名稱
          </label>
          <div className="dropdown">
            <select name="city" id="city">
              <option value="1">台北市</option>
              <option value="2">新北市</option>
            </select>
            <FaChevronDown className="ChevronDown position-absolute" />
          </div>
          {/* <Iframe
            className="col-12 my-5"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.5132236306938!2d121.54191407519947!3d25.033176522941467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd49963984b%3A0x57f2f5ed99bc208!2zNy1FTEVWRU4g6ZGr5b6p6ZaA5biC!5e0!3m2!1szh-TW!2stw!4v1634475462113!5m2!1szh-TW!2stw"
            height="300px"
            display="initial"
          ></Iframe> */}
          <div className="storeinput name">
            <label for="">
              <span>*</span>姓名
            </label>
            <input
              type="text"
              className="ordername px-3"
              name="ordername"
              id="ordername"
            />
          </div>
          <div className="storeinput phone">
            <label for="">
              <span>*</span>手機號碼
            </label>
            <input
              type="text"
              className="ordername px-3"
              name="ordername"
              id="ordername"
            />
          </div>
          <div className="storeinput email">
            <label for="">
              <span>*</span>電子郵件
            </label>
            <input
              type="text"
              className="emailname px-3"
              name="emailname"
              id="emailname"
            />
          </div>
          <div className="storeinput notice">
            <label for="">是否需填寫備註</label>
            <input
              type="text"
              className="noticename px-3"
              name="noticename"
              id="noticename"
              placeholder="請在此填寫，最多 200 字"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Cart_Store
