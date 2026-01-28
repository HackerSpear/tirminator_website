import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-section pt-80">
      <div className="container">
        <div className="hero-sec-main-title contan">
          <div>
            <h1>You&apos;ll be Back in <span>Busines !</span></h1>
            <p>
              &quot;Welcome to TIRMINATOR, the ultimate tool empowering transport companies and drivers to thrive in the industry.
            </p>
            <div className="header-social-icon">
              <Link className="apl-btn" href="#">
                <Image width={180} height={60} src="/assets/images/apple.png" alt="apple" />
              </Link>
              <Link href="#">
                <Image width={180} height={60} src="/assets/images/play-store.png" alt="play-store" />
              </Link>
            </div>
          </div>
          <div className="dpp" style={{ margin: '0 auto' }}>
            <Image
              className="resp-im square"
              src="/assets/images/header-mobile.png"
              alt=""
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
      <Image className="crv" width={1280} height={152} src="/assets/images/curve-line.png" alt="" />
    </section>
  )
}
