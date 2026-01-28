import { getSEOTags } from '@/lib/seo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = getSEOTags({
  title: 'Terms and Conditions – TIRMINATOR',
  description:
    'TIRMINATOR Terms and Conditions. General provisions, definitions, services, account creation, and applicable law.',
  canonicalUrlRelative: '/terms-conditions',
  openGraph: { url: '/terms-conditions' },
})

export default function TermsConditionsPage() {
  return (
    <>
      <Navigation />
      <section className="privacy-policy-section pt-80 contan">
        <div className="container">
          <div className="privacypolicy-main">
            <h1>General Provisions</h1>
            <p className="pt-5">
              The General Terms and Conditions govern access to the Tirminator App and represent the contract to
              which the User fully consents and accepts.
            </p>
            <p className="pt-3">
              By using the App, the User agrees to accept these &quot;Terms and Conditions&quot;.
            </p>
            <p className="pt-3">
              SC Logistic Mango Rm S.R.L., hereinafter referred to as the &quot;Company&quot;, may revise this
              document at any time by updating this page. We recommend that you visit this page periodically to read
              the &quot;Terms and Conditions&quot; as this document is legally binding on you. Your continued use of
              the App constitutes your acceptance of the changes to this Agreement.
            </p>
            <p className="pt-3">
              Subsequent to creating the Account, using the content constitutes the acceptance of the changes to the
              app&apos;s Terms and Conditions and/or updated versions of the Terms and Conditions.
            </p>

            <div>
              <h2 className="pt-5">Definitions</h2>
              <p className="pt-2">
                Company = means Logistic Mango Rm S.R.L., with Trade Register No.: J35/2129/2020, TIN: 42880296.
              </p>
              <p className="pt-3">
                User = means any natural or legal person who has an account in the application.
              </p>
              <p className="pt-3">
                App = means the Tirminator application, which is exclusively owned by the Company.
              </p>
              <p className="pt-3">
                Account = means the account created by individuals or legal entities in the application.
              </p>
              <p className="pt-3">
                Agreement = means this document to which the User has consented by accessing the Website. The Contract
                is deemed to be concluded between the Company and the User at the moment of downloading the App and
                creating the Account.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Description of services</h2>
              <p className="pt-4">
                The services offered by the App address: (i) Users consisting of natural persons holding a transport
                driver qualification, who download the App and can upload in their account personal data, professional
                experience, details of certificates obtained; (ii) Users who are legal entities or self-employed
                persons who wish to publish job advertisements.
              </p>
              <p className="pt-4">
                The User expressly agrees to be bound by all of the clauses in this set of terms and conditions, as
                well as any other specific terms and conditions applicable to the services.
              </p>
              <p className="pt-3">
                Job ads may be posted in the App for a fixed period. Ads may be valid for 2 weeks, with the possibility
                to extend by reactivating the published ad via the Account. The legal entity user shall be responsible
                for how the personal data entered by the legal entity user in the recruitment process is used.
              </p>
              <p className="pt-4">
                The User is solely responsible for the Content published on the Application. Job advertisements
                published must be complete and contain all information or conditions related to the advertisement. You may
                not post, transmit or refer in any way to messages that contain illegal, threatening, abusive,
                indecent, discriminatory or otherwise violate the rights of third parties or legal provisions. You may
                not post any material that contravenes any other provision of these Terms and Conditions, and the
                Company may, in its sole discretion, remove such material from the App without any explanation.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Creation of the Account, Responsibilities</h2>
              <p className="pt-3">
                In order to benefit from all the Services offered by the App, Users must create an account after
                downloading the application, by filling in the forms available in the &quot;NEW ACCOUNT&quot; section
                interface.
              </p>
              <p className="pt-3">
                A User Account shall be created by entering a telephone number and creating a password. By entering
                the telephone number, the User shall consent to the processing of this information by the Company.
              </p>
              <p className="pt-3">
                The Company has no obligation to verify in advance the materials published by Users. The Company is not
                responsible for the information and data posted, disseminated, or transmitted by its Users.
              </p>
              <p className="pt-3">
                The User should be aware that the contact details (name, e-mail, telephone, address) entered in the
                App will be available to legal entity Users who publish job advertisements, for use in the recruitment
                process. With your acceptance of these Terms and Conditions, you consent to receive SMS messages as part
                of the application/recruitment process.
              </p>
              <p className="pt-3">
                The Company shall not confirm the identity of Users. In the event of a dispute with one or more Users,
                the Company (through its agents, directors and employees) shall be held harmless of any liability or
                compensation (direct or indirect) of any kind or nature whatsoever arising in connection with such
                disputes.
              </p>
              <p className="pt-3">
                Using the App to commit fraud or other illegal activities shall be strictly prohibited. Any attempt to
                commit fraud shall result in legal and administrative action being taken against those involved.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Access to the App</h2>
              <p className="pt-3">
                Access to some Services provided to natural person Users shall be free of charge. Access to the
                Services for legal entities or self-employed persons wishing to publish job advertisements shall be
                allowed based on a subscription.
              </p>
              <p className="pt-3">
                The Company is a communication platform between Users, who are responsible for the content published
                in the App. The Company reserves the right to delete, move or edit messages or to restrict access by
                some Users to one of its communication platforms. The User shall be solely responsible for the Content
                published in the App.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Chats and Messages</h2>
              <p className="pt-3">
                The App shall allow Users to communicate via the chat that is within the downloaded App. The Company
                shall not be responsible for the truthfulness and accuracy of information submitted by Users through
                the chat section.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Account Protection</h2>
              <p className="pt-3">
                Access to the User account in the App is password-protected. The User shall be responsible for
                maintaining the confidentiality of the information and password in the App. The Company may also, at any
                time at its sole discretion and without notice, discontinue providing the Services, or any part
                thereof.
              </p>
            </div>

            <div>
              <h2 className="pt-5">User Rating</h2>
              <p className="pt-3">
                The App shall include a rating system that allows users to give ratings to other users based on their
                collaboration experiences. Rating shall be done by answering a specific set of questions, with a
                star-based rating from 0 to 5. The Company shall not be responsible for user ratings and cannot be held
                responsible for modifying and/or deleting user reviews. Any negative reviews or other responses
                provided by Users shall not be the responsibility of the Company and/or the App.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Intellectual Property Rights</h2>
              <p className="pt-3">
                The content and design of the App, as well as any other material related to the App sent to the User,
                shall belong to the Company and are protected by intellectual property laws. No one may use,
                reproduce or allow anyone else to use or reproduce the materials without the written permission of the
                Company or its collaborators who own an intellectual property right in the respective section of
                content of the App.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Confidentiality of App Information</h2>
              <p className="pt-3">
                The Company shall keep confidential the information of any nature provided by the User. By submitting
                information or materials through the App, the User shall grant the Company unrestricted and irrevocable
                access to them and the right to use, reproduce, display, modify, transmit and distribute such materials
                or information. The Company reserves the right to update and amend the App Terms and Conditions from
                time to time to reflect changes in the App&apos;s operating conditions or legal requirements.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Data Privacy Policy</h2>
              <p className="pt-3">
                The Company processes the personal data of Users, whether natural persons or legal entities (i.e.
                representatives) when using the App. This Privacy policy describes what types of personal data are
                processed, how they are used, your choices regarding such processing, and how the Company will respect
                your rights as a data subject under personal data protection legislation, including Regulation (EU)
                2016/679 (&quot;GDPR&quot;). The company is designated as a data controller for the purposes of GDPR.
                By using the App, the User explicitly consents to the Company&apos;s collection, storage, and
                processing of their personal data. The Company shall collect identification data, log-in data,
                localisation data, and information related to App usage. Personal data will be kept only for as long as
                necessary to fulfil the purposes specified; in general, User data are kept as long as the User has a
                User account in the App.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Force Majeure</h2>
              <p className="pt-3">
                Neither party shall be liable for any failure to perform its contractual obligations, if such failure is
                due to an event of force majeure. Force majeure is an unforeseeable event beyond the control of the
                parties and which cannot be avoided. If within fifteen (15) days from the date of its occurrence the
                event of force majeure does not cease, either party shall be entitled to notify the other party of the
                termination of the contract without either party being entitled to claim any further damages from the
                other party.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Applicable Law – Jurisdiction. Amicable Settlement of Disputes</h2>
              <p className="pt-3">
                These Terms and Conditions are subject to Romanian law. In the event of any disputes arising between
                the Company and the User, an attempt shall first be made to resolve them amicably. If it is not
                possible to settle the disagreements amicably, disputes shall be settled by the Romanian courts holding
                jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="pt-5">Final Provisions</h2>
              <p className="pt-3">
                If, for any reason whatsoever, any clause in these Terms and Conditions proves to be void, unenforceable
                or invalid, it shall be replaced by a valid clause, as close in meaning to the original clause as
                possible.
              </p>
              <p className="pt-3">
                The Company reserves the right to suspend or terminate the accounts of Users who violate the Terms and
                Conditions without prior notice. This includes, but is not limited to, cases of spam, fraud, system abuse
                and posting illegal or inappropriate content.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
