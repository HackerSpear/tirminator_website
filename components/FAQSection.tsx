export default function FAQSection() {
  return (
    <section className="fre-ask-question-section contan" id="fre-ask-question-section">
      <div className="container-sm">
        <div className="fre-ask-main">
          <div className="fre-question">
            <div className="faq-box">
              <p>FAQ</p>
            </div>
            <div className="fre-ques-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Flex is the only saas business platform that lets you run your business on one platform, seamlessly
                across all digital channels.
              </p>
            </div>
          </div>
          <div className="fre-content">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How does TIRMINATOR work?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    TIRMINATOR is a platform that connects transport companies with drivers. It simplifies the process by allowing companies to post job listings, and drivers to create profiles and apply for jobs. The platform facilitates the interview process and helps both parties find the right match.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do I download and install the TIRMINATOR app?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can download the TIRMINATOR app by visiting your app store (such as the Apple App Store or Google Play Store) and searching for &quot;TIRMINATOR.&quot; Once you find the app, simply follow the instructions to download and install it on your mobile device. or you can find it at : LINK
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What information should I include in my driver profile?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    In your driver profile, you should include relevant details such as your experience, qualifications, endorsements, certifications, and any other information that showcases your skills and suitability for the job. A complete and detailed profile increases your chances of attracting the attention of transport companies.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can I search for specific types of driving jobs on TIRMINATOR?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, TIRMINATOR allows you to search for specific types of driving jobs. You can use the search filters within the app to narrow down the job listings based on criteria such as location, driving type (local, regional, long-haul), and other specific requirements.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How do I apply for a job listing?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    To apply for a job listing, simply browse through the available listings on TIRMINATOR and select the job that interests you. Click on it to view more details and follow the instructions provided to submit your application. This may involve uploading your resume or providing additional information as requested by the company.
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
