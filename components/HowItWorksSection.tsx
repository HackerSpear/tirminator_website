'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<'company' | 'driver'>('company')

  return (
    <section className="how-it-work-section contan" id="how-it-work-section">
      <div className="container-sm">
        <div className="how-it-main">
          <div className="how-it-title">
            <h2>HOW IT WORKS FOR A TRANSPORT COMPANY ?</h2>
          </div>
          <div className="how-it-detail">
            <div className={`how-it-mobile-view square ${activeTab === 'company' ? 'sho' : 'hid d-none'}`}>
              <Image
                className="w-249"
                src="/assets/images/how-it-work-mobile-view.png"
                alt="how-it-mobile-view"
                width={294}
                height={600}
              />
            </div>
            <div className={`how-it-mobile-view square ${activeTab === 'driver' ? 'sho' : 'hid d-none'}`}>
              <Image
                className="w-249"
                src="/assets/images/iphone.png"
                alt="how-it-mobile-view"
                width={294}
                height={600}
              />
            </div>

            <div className="comp-tabs">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'company' ? 'active' : ''}`}
                    id="pills-home-tab"
                    onClick={() => setActiveTab('company')}
                    type="button"
                    role="tab"
                  >
                    Company
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'driver' ? 'active' : ''}`}
                    id="pills-profile-tab"
                    onClick={() => setActiveTab('driver')}
                    type="button"
                    role="tab"
                  >
                    Driver
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade ${activeTab === 'company' ? 'show active' : ''}`}
                  id="pills-home"
                  role="tabpanel"
                >
                  <div className="how-it-cards">
                    <div className="cards-sector">
                      <div className="hw-it-crd1">
                        <div className="cir-box">1</div>
                        <h2>Buy Plan</h2>
                        <p>Buy our subscription plan and explore our application.</p>
                      </div>

                      <div className="hw-it-crd1">
                        <div className="cir-box">2</div>
                        <h2>Post Job</h2>
                        <p>Here you can post a job and find out the resources you are looking for.</p>
                      </div>
                    </div>

                    <div className="cards-sector pt-50">
                      <div className="hw-it-crd1">
                        <div className="cir-box">3</div>
                        <h2>Schedule Interview</h2>
                        <p>Schedule interviews with drivers and hire them.</p>
                      </div>

                      <div className="hw-it-crd1">
                        <div className="cir-box">4</div>
                        <h2>Hire Drivers</h2>
                        <p>Hire drivers according to your requirements easily.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'driver' ? 'show active' : ''}`}
                  id="pills-profile"
                  role="tabpanel"
                >
                  <div className="how-it-cards">
                    <div className="cards-sector">
                      <div className="hw-it-crd1">
                        <div className="cir-box">1</div>
                        <h2>Download App</h2>
                        <p>Download App for IOS & Android. Visit your app store and install.</p>
                      </div>

                      <div className="hw-it-crd1">
                        <div className="cir-box">2</div>
                        <h2>Complete profile</h2>
                        <p>Complete your profile and get chances of being noticed.</p>
                      </div>
                    </div>

                    <div className="cards-sector pt-50">
                      <div className="hw-it-crd1">
                        <div className="cir-box">3</div>
                        <h2>Apply for job</h2>
                        <p>Search job, apply & submit application.</p>
                      </div>

                      <div className="hw-it-crd1">
                        <div className="cir-box">4</div>
                        <h2>Get Hired</h2>
                        <p>Accept interviews & get hired if a company find your profile suitable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
