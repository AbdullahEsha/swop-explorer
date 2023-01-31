import { useState, useEffect } from 'react'
import HeadComponent from '@/components/HeadComponent'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import useWindowDimensions from '../components/useWindowDimensions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
  const { width } = useWindowDimensions()
  const [menu, setMenu] = useState(false)

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  SwiperCore.use([Autoplay])
  const sliderData = [
    {
      title: 'Uniswap',
      image: 'dappSliderimg1.png',
      icon_app: 'iconapp3.png',
      sub_title: 'Kart Racing',
    },
    {
      title: 'Ethereum',
      image: 'dappSliderimg2.png',
      icon_app: 'iconapp2.png',
      sub_title: 'BlockBet',
    },
    {
      title: 'Polygon',
      image: 'dappSliderimg3.png',
      icon_app: 'iconapp3.png',
      sub_title: 'Metamask',
    },
  ]
  const categories = [
    {
      image: 'category_payment.png',
      title: 'Payment',
    },
    {
      image: 'category_games.png',
      title: 'Games',
    },
    {
      image: 'category_defi.png',
      title: 'Defi',
    },
    {
      image: 'category_tools.png',
      title: 'Tools',
    },
    {
      image: 'category_music.png',
      title: 'Music',
    },
  ]

  const cryptoexchange = [
    {
      id: 1,
      name: 'Aave',
      image: 'aave.png',
    },
    {
      id: 2,
      name: 'Open Sea',
      image: 'openSea.png',
    },
    {
      id: 3,
      name: 'Swop Pay',
      image: 'swoppay.png',
    },
    {
      id: 4,
      name: 'DyDx',
      image: 'dyDx.png',
    },
    {
      id: 4,
      name: '',
      image: 'bigCross.png',
    },
  ]

  return (
    <>
      <HeadComponent />
      <div className="container">
        {width > 991 && <Sidebar />}
        <div className="main-content">
          <div className="main-container">
            <div className="search-connect">
              <Image
                src="/image/dapp-rocket.png"
                alt="dapp-rocket"
                height={117}
                width={180}
                className="dapp-rocket"
              />
              {menu === false ? (
                <Image
                  src="/image/dappthreeline.png"
                  alt="dapp-three-line"
                  height={117}
                  width={180}
                  className="dapp-three-line"
                  onClick={() => {
                    setMenu(true)
                    document.querySelector(
                      '.mobilenav-menu-hidden',
                    ).style.display = 'grid'
                    document.querySelector(
                      '.search-connect input',
                    ).style.border = 'none'
                    document.querySelector(
                      '.search-connect input',
                    ).style.boxShadow = 'none'
                    document.querySelector('.search-connect').style.boxShadow =
                      '0px 0px 31px rgb(0 0 0 / 12%)'
                    document.querySelector(
                      '.search-connect input',
                    ).style.borderTopRightRadius = '15px'
                    document.querySelector(
                      '.search-connect input',
                    ).style.borderTopLeftRadius = '15px'
                  }}
                />
              ) : (
                <Image
                  src="/image/dappcross.png"
                  alt="dapp-three-line"
                  height={25}
                  width={25}
                  className="dapp-cross"
                  onClick={() => {
                    setMenu(false)
                    document.querySelector(
                      '.mobilenav-menu-hidden',
                    ).style.display = 'none'
                    document.querySelector(
                      '.search-connect input',
                    ).style.borderRadius = '15px'
                  }}
                />
              )}
              <Image
                src="/image/dappmidline.png"
                alt="dapp-mid-line"
                height={25}
                width={3}
                className="dapp-mid-line"
              />
              <Image
                src="/image/dappsearch.png"
                alt="dappsearch-icon"
                height={37}
                width={37}
                className="dappsearch-icon"
              />
              <input type="text" placeholder="Search app" />
              <Image
                src="/image/connect-icon.png"
                alt="connect-icon"
                height={33}
                width={33}
                className="connect-icon"
              />
              <button>Connect</button>
              {width < 992 && <Sidebar />}
            </div>

            <div className="dapp-slider">
              <h2>Trending</h2>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                effect="coverflow"
                autoplay={true}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 3,
                  slideShadows: false,
                }}
                slidesPerView={width < 767 ? 1.5 : 2.6}
                spaceBetween={35}
                pagination={{
                  dynamicBullets: true,
                }}
                initialSlide={1.6}
                style={{
                  width: '100%',
                  margin: 'auto',
                  padding: '20px',
                }}
              >
                {sliderData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="dapp-slider-card">
                      <Image
                        src={`/image/${item.image}`}
                        alt="no_image"
                        height={324}
                        width={548}
                        className="main_img"
                      />
                      <div className="dapp-card-content">
                        <Image
                          src={`/image/${item.icon_app}`}
                          width={60}
                          height={60}
                        />
                        <div className="dapp-card-content-inside">
                          <h4>{item.sub_title}</h4>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="dapp-viewed">
              <div className="heading-dapp">
                <h2>Previously Viewed</h2> <label>See all</label>
              </div>

              <div className="crypto_exchange">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={false}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: false,
                  }}
                  spaceBetween={-10}
                  slidesPerView={width < 767 ? 2.8 : 5}
                  pagination
                  style={{ width: '100%', margin: 'auto', padding: '20px' }}
                >
                  {cryptoexchange.map((crypto) => (
                    <SwiperSlide key={crypto.id}>
                      <div className="crypto_exchange_card">
                        <Image
                          src={`/image/${crypto.image}`}
                          alt={crypto.name}
                          height={184}
                          width={184}
                        />
                        <h4>{crypto.name}</h4>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="dapp-categories">
              <div className="heading-dapp">
                <h2>Top Categories</h2> <label>See all</label>
              </div>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                effect="coverflow"
                autoplay={true}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 3,
                  slideShadows: false,
                }}
                slidesPerView={width < 767 ? 2.8 : 5}
                spaceBetween={35}
                pagination={{
                  dynamicBullets: true,
                }}
                initialSlide={1.6}
                style={{
                  width: '100%',
                  margin: 'auto',
                  padding: '20px',
                }}
              >
                {categories.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="dapp-slider-card">
                      <Image
                        src={`/image/${item.image}`}
                        alt="no_image"
                        height={324}
                        width={548}
                        className="main_img"
                      />
                      <h6>{item.title}</h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
