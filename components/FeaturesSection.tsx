import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <>
      <section className="feacture-section contan" id="feacture-section">
        <div className="container-sm">
          <div className="feacture-main">
            <div className="feac-title">
              <p>FEATURES</p>
            </div>
            <div className="fea-titles">
              <h2>Drivers</h2>
              <p>
                Are you a skilled and passionate driver looking for your next adventure on the road? Look no further than TIRMINATOR! Our platform is dedicated to connecting drivers like you with a world of exciting opportunities in the transportation industry. Creating your driver profile on TIRMINATOR allows you to showcase your expertise, experience, and certifications. This detailed profile helps transport companies make informed decisions when selecting drivers, ensuring that you are matched with the opportunities that best align with your skills and preferences.
              </p>
            </div>
            <div className="driver-main-detail-descri">
              <div className="dri-decri">
                <div className="sub-decri">
                  <div className="decri-color-bx">
                    <Image src="/assets/images/mail-icon.svg" alt="mail-icon" width={24} height={24} />
                  </div>
                  <h2>Get hired by best companies</h2>
                </div>
                <p>
                  &quot;Welcome to TIRMINATOR, the ultimate tool empowering transport companies and drivers to thrive in the industry.
                </p>

                <div className="sub-decri">
                  <div className="decri-color-bx">
                    <Image src="/assets/images/edit.svg" alt="edit-icon" width={24} height={24} />
                  </div>
                  <h2>Preffered location</h2>
                </div>
                <p>
                  We connect you with job opportunities in the locations you desire. Whether it&apos;s local, regional, or long-haul routes, we strive to match you with companies that meet your location preferences. Start your journey with TIRMINATOR and find driving assignments in your preferred locations.
                </p>

                <div className="sub-decri">
                  <div className="decri-color-bx">
                    <Image src="/assets/images/grid.svg" alt="grid-icon" width={24} height={24} />
                  </div>
                  <h2>Schedule interview</h2>
                </div>
                <p>
                  TIRMINATOR, schedule your interview, and have your video call at the designated time. It&apos;s that easy!
                </p>
              </div>
              <div className="dri-images mx-615">
                <Image
                  className="square"
                  src="/assets/images/feacture-mobile-view.png"
                  alt="feacture-mobile-view"
                  width={294}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feacture-section comp-fect contan pt-62">
        <div className="container-sm">
          <div className="feacture-main">
            <div className="feac-title">
              <p>FEATURES</p>
            </div>
            <div className="fea-titles">
              <h2>Company</h2>
              <p>
                Transport companies love using TIRMINATOR because it makes finding drivers incredibly easy. Our platform simplifies the process, allowing companies to quickly and efficiently connect with the right drivers for their needs. With TIRMINATOR, companies can easily browse through driver profiles, find qualified candidates, and streamline their hiring process. Join TIRMINATOR today and discover how simple it is to find the perfect drivers for your transport company.
              </p>
            </div>
            <div className="driver-main-detail-descri">
              <div className="dri-images">
                <Image
                  className="tras-image square"
                  src="/assets/images/feacture-mobile-view.png"
                  alt="feacture-mobile-view"
                  width={294}
                  height={600}
                />
              </div>

              <div className="dri-decri">
                <div className="sub-decri">
                  <div className="decri-color-bx">
                    <Image src="/assets/images/mail-icon.svg" alt="mail-icon" width={24} height={24} />
                  </div>
                  <h2>Post jobs</h2>
                </div>
                <p>
                  Posting jobs on TIRMINATOR is simple and effective for transport companies. With just a few clicks, companies can easily create job listings, specifying job details, requirements, and location. This attracts qualified drivers who are actively seeking opportunities. Drivers can apply directly through the platform, streamlining the hiring process for companies.
                </p>

                <div className="sub-decri">
                  <div className="decri-color-bx">
                    <Image src="/assets/images/edit.svg" alt="edit-icon" width={24} height={24} />
                  </div>
                  <h2>Hire experienced drivers</h2>
                </div>
                <p>
                  Our platform connects companies with a pool of skilled and seasoned drivers, making it easy to find the right talent. Companies can browse driver profiles, assess their experience, and confidently hire drivers with the expertise they need.
                </p>

                <div className="sub-decri">
                  <div className="decri-color-bx">
                    <Image src="/assets/images/grid.svg" alt="grid-icon" width={24} height={24} />
                  </div>
                  <h2>Schedule interview</h2>
                </div>
                <p>
                  With TIRMINATOR, transport companies can easily schedule video interviews with potential drivers using Zoom. There&apos;s no need for face-to-face meetings, making the process convenient and efficient. Companies can also create a shortlist of candidates and conduct interviews within the app. Simplify your hiring process with TIRMINATOR&apos;s easy-to-use platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
