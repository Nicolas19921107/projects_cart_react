import { useState, useEffect } from 'react'
import axios from 'axios'
import $ from 'jquery'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet'
import markerIconPng from '../../../node_modules/leaflet/dist/images/marker-icon.png'
import { Icon } from 'leaflet'
import '../../../node_modules/leaflet/dist/leaflet.css'

// import { MapContainer } from 'react-leaflet'

// import Iframe from 'react-iframe'
import { FaChevronDown } from 'react-icons/fa'
import { position } from 'dom-helpers'

function Cart_Store(props) {
  let { StoreInfo, setStoreInfo, CityArr, setCityArr } = props
  let [StoreCity, setStoreCity] = useState([])
  let [GetAddress, setGetAddress] = useState([])
  let [GetStoreInfo, setGetStoreInfo] = useState([])
  let [test, settest] = useState(0)
  let SearchInfo = 'SearchRoad'
  let [GetPosition, setGetPosition] = useState([24, 121])
  console.log('店鋪資訊', GetStoreInfo)

  // console.log(CityArr)
  // console.log('店名資訊', StoreCity)
  // console.log('路段資訊', GetAddress)

  useEffect(() => {
    // GetCurrentPosition()
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
        // console.log('路名', el.innerText)
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
      setGetStoreInfo(GetStoreInfo)
    }
  }

  function UpdateInfo(value, index) {
    let NewStoreCIty = [...StoreCity]
    NewStoreCIty[index] = value
    console.log('123', NewStoreCIty)
    setStoreCity(NewStoreCIty)
  }

  function addMarker() {}

  // function GetCurrentPosition() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log('緯度是', position.coords.latitude)
  //     console.log('經度是', position.coords.longitude)
  //     GetPosition[0] = position.coords.latitude
  //     GetPosition[1] = position.coords.longitude
  //     setGetPosition(GetPosition)
  //   })
  // }

  function MyComponent() {
    const map = useMap()
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('緯度是', position.coords.latitude)
      console.log('經度是', position.coords.longitude)
      GetPosition[0] = position.coords.latitude
      GetPosition[1] = position.coords.longitude
      setGetPosition(GetPosition)
    })
    map.setView(GetPosition, 17)
    console.log('map center:', map.getCenter())
    return null
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
        <div className="storeform" action="">
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
                GetStoreInfo = []
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
          <div className="Map">
            <MapContainer
              style={{ height: '400px', width: '100%' }}
              center={[GetPosition[0], GetPosition[1]]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {GetStoreInfo.map((v, i) => {
                return (
                  (
                    <Marker
                      position={[v.Y, v.X]}
                      icon={
                        new Icon({
                          iconUrl: markerIconPng,
                          iconSize: [25, 41],
                          iconAnchor: [12, 41],
                        })
                      }
                    >
                      <Popup>
                        {v.POIName} <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  ),
                  (<MyComponent />)
                )
              })}
            </MapContainer>
          </div>
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
        </div>
      </div>
    </>
  )
}

export default Cart_Store
