import { useState, useEffect } from 'react'
import axios from 'axios'
import $ from 'jquery'
// import { MapContainer } from 'react-leaflet'

// import Iframe from 'react-iframe'
import { FaChevronDown } from 'react-icons/fa'

function Cart_Store(props) {
  const options = props.pathOptions ?? {}

  let { StoreInfo, setStoreInfo, CityArr, setCityArr } = props
  let [StoreCity, setStoreCity] = useState([])
  let [GetAddress, setGetAddress] = useState([])
  let [GetStoreInfo, setGetStoreInfo] = useState([])
  let [test, settest] = useState(0)
  let SearchInfo = 'SearchRoad'
  // console.log(CityArr)
  // console.log('店名資訊', StoreCity)
  // console.log('路段資訊', GetAddress)

  useEffect(() => {
    if (StoreCity[0] && StoreCity[1]) {
      DataAxios()
    }
  }, [StoreCity, test])

  useEffect(() => {
    console.log('有抓到 GetAddress', GetAddress)
  }, [])

  async function DataAxios() {
    if (StoreCity[2]) {
      SearchInfo = 'SearchStore'
    }
    // console.log('City', StoreCity[0])
    // console.log('District', StoreCity[1])
    // console.log('更改的Data', SearchInfo)
    console.log('SearchINfo狀態', SearchInfo)

    let r = await axios.post('http://localhost:3001/cart/store', {
      commandid: SearchInfo,
      city: StoreCity[0],
      town: StoreCity[1],
      roadname: StoreCity[2],
    })
    if (r.status === 200) {
      // console.log('DataX', r.data)
      const jqRoadName = $(r.data)
      jqRoadName.find('RoadName rd_name_1').each((i, el) => {
        // console.log('路名', el.innerText)
        GetAddress[i] = { RoadName: el.innerText }
      })
      jqRoadName.find('RoadName section_1').each((i, el) => {
        // console.log('地址', el)
        GetAddress[i].RoadName += el.innerText
      })

      const jqStoreInfo = $(r.data)
      jqStoreInfo.find('GeoPosition POIName').each((i, el) => {
        console.log('路名', el.innerText)
        GetStoreInfo[i] = { POIName: el.innerText, X: '', Y: '' }
      })
      jqStoreInfo.find('GeoPosition X').each((i, el) => {
        // console.log('路名', el.innerText)
        GetStoreInfo[i].X = parseInt(el.innerText) * 0.000001
      })
      jqStoreInfo.find('GeoPosition Y').each((i, el) => {
        // console.log('路名', el.innerText)
        GetStoreInfo[i].Y = parseInt(el.innerText) * 0.000001
      })
      SearchInfo = 'SearchRoad'
      console.log('路段', GetAddress)
      console.log('店鋪資訊', GetStoreInfo)
    }
  }

  function UpdateInfo(value, index) {
    let NewStoreCIty = [...StoreCity]
    NewStoreCIty[index] = value
    // console.log('123', NewStoreCIty)
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
            <h4>門市地址:{StoreCity[2]}</h4>
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
                // console.log('選到的A', e.target.value)
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
                // console.log('選到的B', e.target.value)
                if (StoreCity[2]) {
                  StoreCity.splice(2, 1, '')
                  console.log('第二層資料刪除', StoreCity)
                }
                UpdateInfo(e.target.value, 1)
                GetAddress = []
                setGetAddress(GetAddress)

                // SearchInfo = 'SearchStore'
                // console.log('更改的資料', SearchInfo)
                // DataAxios()
              }}
            >
              {console.log('第二層', StoreCity)}
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
            <select
              name="roadname"
              id="roadname"
              onClick={(e) => {
                settest(test + 1)
                console.log('測試數量', test)
              }}
              onChange={(e) => {
                GetAddress = []

                console.log('選到的C', e.target.value)
                UpdateInfo(e.target.value, 2)
              }}
            >
              {GetAddress.map((v, i) => {
                return <option value={v.RoadName}>{v.RoadName}</option>
              })}
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
