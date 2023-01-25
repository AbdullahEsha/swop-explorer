import Image from 'next/image'
import Link from 'next/link'
import { FaChartPie } from 'react-icons/fa'
import { BsPeopleFill, BsBoxSeam } from 'react-icons/bs'
import { MdOutlineEventNote } from 'react-icons/md'
import { RxDragHandleDots2 } from 'react-icons/rx'
import { RiMoneyDollarCircleLine, RiErrorWarningLine } from 'react-icons/ri'
import useWindowDimensions from './useWindowDimensions'

const Sidebar = () => {
  const { width } = useWindowDimensions()

  return (
    <>
      {width > 991 && (
        <div className="side-bar">
          <div className="side-bar-top">
            <Link
              href="https://swopnew.netlify.app"
              target="_blank"
              className="swop-logo"
            >
              <Image
                src="/image/dapp-logo.png"
                alt="dapp-logo"
                height={42}
                width={168}
              />
            </Link>
            <ul>
              <li id="active-menu">
                <Link href="/dapp-store">
                  <FaChartPie size={20} />
                  DApp Store
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsPeopleFill size={20} /> Explorer
                </Link>
              </li>
              <li>
                <Link href="/">
                  <MdOutlineEventNote size={20} /> Prices
                </Link>
              </li>
              <li>
                <Link href="/">
                  <RxDragHandleDots2 size={20} /> Accounting
                </Link>
              </li>
              <li>
                <Link href="/">
                  <RiMoneyDollarCircleLine size={20} /> Swop Pay
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsBoxSeam size={20} /> Mint Machine
                </Link>
              </li>
              <li>
                <Link href="/">
                  <RiErrorWarningLine size={20} /> Purchase
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-side-bar">
            <div className="footer-side-bar-bottom">
              <Image
                src="/image/travis.png"
                alt="travis"
                height={66}
                width={66}
                className="travis"
              />
              <div className="footer-side-bar-travis">
                <h4>Travis Herron</h4>
                <label>$travis_herron</label>
              </div>
            </div>
            <Image
              src="/image/footer-qrcode.png"
              alt="qrcode"
              height={122}
              width={122}
              className="footer-qrcode"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
