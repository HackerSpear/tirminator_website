import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="footer contan">
      <div className="container">
        <div className="main-footer">
          <Link href="/">
            <Image
              className="footer-logo"
              src="/assets/images/footer-logo.png"
              alt="footer-logo"
              width={192}
              height={34}
            />
          </Link>
          <div className="nav-items footer-items">
            <a href="#feacture-section" className="nav-link">
              Features
            </a>
            <a href="#fre-ask-question-section" className="nav-link">
              FAQ&apos;s
            </a>
            <a href="#how-it-work-section" className="nav-link">
              How it works
            </a>
          </div>
          <div className="footer-social-icon">
            <a href="https://www.facebook.com/profile.php?id=61553122541518" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/Facebook.svg" alt="footer-Facebook" width={24} height={24} />
            </a>
            <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/Instagram.svg" alt="footer-Instagram" width={24} height={24} />
            </a>
            <a href="https://www.Twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/Twitter.svg" alt="footer-Twitter" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/company/tirminator/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/LinkedIn.svg" alt="footer-Linkdin" width={24} height={24} />
            </a>
          </div>
        </div>
        <hr style={{ border: '1px solid #2F3D86', opacity: '100%' }} />
        <div className="footer-bar">
          <div className="footer-bar-address">
            <h2>Address</h2>
            <p>Strada Vasile Loichita, Timisoara, Romania</p>
          </div>
          <div className="footer-bar-title">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms and Conditions</Link>
            <p>©2026, All right reserved.</p>
          </div>
          <div className="footer-bar-contact">
            <h2>Contact</h2>
            <p className="f-bar-detail">
              <Image
                src="/assets/images/footer-bar-mail.svg"
                alt="footer-bar-mail"
                width={20}
                height={20}
              />
              Contact@TIRminator.com
            </p>
            <p className="f-bar-detail">
              <Image
                src="/assets/images/footer-bar-call.svg"
                alt="footer-bar-call"
                width={20}
                height={20}
              />
              +40729798960
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
