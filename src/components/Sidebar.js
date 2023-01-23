import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="side-bar-top">
          <Image
            src="/image/dapp-logo.png"
            alt="dapp-logo"
            height={42}
            width={168}
          />
          <ul>
            <li id="active-menu">
              <Link href="/dapp-store">DApp Store</Link>
            </li>
            <li>
              <Link href="/">Explorer</Link>
            </li>
            <li>
              <Link href="/">Prices</Link>
            </li>
            <li>
              <Link href="/">Accounting</Link>
            </li>
            <li>
              <Link href="/">Swop Pay</Link>
            </li>
            <li>
              <Link href="/">Mint Machine</Link>
            </li>
            <li>
              <Link href="/">Purchase</Link>
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
    </>
  )
}

export default Sidebar
