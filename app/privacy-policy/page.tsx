import { getSEOTags } from '@/lib/seo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = getSEOTags({
  title: 'Privacy Policy – TIRMINATOR',
  description:
    'TIRMINATOR Privacy Policy. General provisions, definitions, data processing, and your rights under GDPR.',
  canonicalUrlRelative: '/privacy-policy',
  openGraph: { url: '/privacy-policy' },
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <section className="privacy-policy-section pt-80 contan">
        <div className="container">
          <div className="privacypolicy-main">
            <h1>1. GENERAL PROVISIONS</h1>
            <p className="pt-5">
              The general terms and conditions govern access to the Tirminator application and represent the contract
              to which the User consents and accepts in its entirety. By using the application, the User gives their
              consent that they accept the present &quot;Terms and Conditions.&quot; SC Logistic Mango Rm S.R.L.,
              hereinafter referred to as &quot;the Company,&quot; may revise this document at any time by updating this
              page. We recommend visiting this page periodically to read the &quot;Terms and Conditions&quot; as this
              document is legally binding. Continued use of the application constitutes acceptance of changes made to
              this contract. After creating the Account, using the content signifies acceptance of the changes made to
              the application&apos;s Terms and Conditions and/or the updated versions of the Terms and Conditions.
              Right of Revocation: We inform users that they have the right to revoke their consent for the processing
              of their personal data in accordance with the applicable legislation.
            </p>

            <div>
              <h2 className="pt-5">2. DEFINITIONS</h2>
              <p className="pt-5">
                Company = Logistic Mango Rm S.R.L., Registration Number in R.C.: J35/2129/2020, CUI: 42880296.
                <br />
                User: any natural or legal person who holds an account on the application.
                <br />
                Application: the Tirminator application, which is the exclusive property of the Company.
                <br />
                Account: the account created by natural or legal persons on the application.
                <br />
                Contract: represents the present document to which the User has consented by accessing the Site. The
                contract is considered concluded between the Company and the User at the time of downloading the
                Application and creating the Account.
                <br />
                Copyright and Trademark: All trademarks, logos, and content of the application are the exclusive
                property of the Company. Users are granted only the right to use the application according to the
                terms and conditions. Communications and Notifications: Any communication or notification sent by the
                Company to users will be considered received by the users after its dispatch.
              </p>
            </div>

            <div>
              <h3 className="pt-4">3. DESCRIPTION OF SERVICES</h3>
              <p className="pt-5">
                The services offered by the Application are intended for:
                <br />
                (i) Users, natural persons, qualified as drivers in the transportation sector, who download the
                application and can upload their personal data, professional experience, and details about obtained
                certificates to their personal account.
                <br />
                (ii) Users, legal entities, or authorized individuals who want to post job advertisements. The User
                expressly agrees to comply with all clauses of this set of terms and conditions, as well as any other
                specific terms and conditions applicable to the services.
                <br />
                Job advertisements can be displayed on the Application for a specified period. The advertisements can be
                valid for 2 weeks, with the possibility of extension by reactivating the published ad through the
                Account. The legal entity User assumes responsibility for the use of personal data entered by the legal
                entity user during the hiring process.
                <br />
                The User is solely responsible for the content published on the Application. Therefore, postings and
                message transmissions through the Application are actions subject to the following conditions and
                limitations: Job advertisements must be complete, containing all information or conditions related to
                the advertisement. You may not publish, transmit, or refer in any way to messages containing illegal,
                threatening, abusive, indecent, discriminatory texts, or those that infringe upon the rights of third
                parties or legal provisions. You may not publish materials that contradict any other provisions of this
                set of Terms and Conditions, and the Company may, at its discretion, remove them from the Application
                without any explanation.
              </p>
            </div>

            <div>
              <h3 className="pt-5">4. ACCOUNT CREATION, RESPONSIBILITIES</h3>
              <p className="pt-5">
                To benefit from all the Services offered by the Application, Users must create an account after
                downloading the application by completing the forms available in the &quot;NEW ACCOUNT&quot; section
                interface. The User account is created by entering the phone number or email address and creating a
                password. By entering the phone number or email address, the User consents to the processing of this
                information by the Company. The Company is not obligated to pre-verify materials published by Users. The
                Company is not responsible in any way for the information and data posted, disseminated, or transmitted
                by its Users. To use the Services offered by the Application, the User assumes responsibility for
                providing accurate and complete data, and the Company is not liable for the truthfulness and accuracy of
                the information posted by Users. The User must consider that the contact details (name, email, phone,
                address) entered on the Application will be available to legal entity Users who publish job
                advertisements, these being used in the recruitment process. Given the legitimacy of the purpose, by
                accepting these terms and conditions, you agree to receive SMS messages as part of the
                application/recruitment process. The Company does not confirm the identity of Users. Since the Company
                cannot be involved in user-to-user relationships or control the behavior of Users, in the event of a
                dispute with one or more Users, the Company (through its agents, administrators, and employees) is
                absolved of any liability or compensation (direct or indirect) of any kind and nature, known or
                unknown, suspected or not, disclosed or not, arising in any way related to the disputes.
              </p>

              <h3 className="pt-4">5. SERVICE EVALUATION</h3>
              <p className="pt-5">
                1. Evaluation by Individual Users
                <br />
                Individual users, as drivers, have the opportunity to evaluate the transport companies that have
                employed them through the application. In this regard, the questions that employees answer are: To what
                extent were you satisfied with the working conditions provided by the transport company, including the
                condition of the vehicles and related equipment? How do you rate the company&apos;s reliability in
                terms of paying drivers according to the agreement? To what extent are you satisfied with how the
                dispatchers cooperate with the drivers and respect the work schedule?
                <br />
                2. Evaluation by Legal Entity Users Regarding the Services Provided
                <br />
                On the other hand, transport companies have the opportunity to evaluate the drivers employed through the
                application. In this context, the questions that companies answer are: How do you evaluate the
                driver&apos;s level of experience and technical skills in the field of road transport? To what extent
                are you satisfied with the driver, considering the absence of major incidents such as theft (goods,
                fuel, etc.), truck abandonment, illegal trafficking, or accidents that could have affected the
                collaboration with the company? To what extent are you satisfied with the driver&apos;s collaboration
                with dispatchers and adherence to the work schedule?
                <br />
                RESPONSIBILITIES AND LIABILITY FOR SERVICE EVALUATIONS
                <br />
                Logistic Mango Rm S.R.L. cannot be held responsible for the evaluations received from users, whether
                they are drivers or companies. The evaluations reflect the personal opinion and experience of the users
                and do not imply any commitment or guarantee from the Company regarding the truthfulness or accuracy of
                the information provided. Additionally, the Company cannot be held responsible for any disputes or
                litigation that may arise between drivers and companies as a result of the evaluations posted on the
                platform. Any dispute or litigation between Users is their exclusive responsibility, and the Company is
                absolved of any liability or compensation (direct or indirect) of any kind and nature, known or
                unknown, suspected or not, disclosed or not, arising in any way related to disputes. In conclusion, by
                using the Tirminator application, Users fully assume responsibility for the content of the posted
                evaluations and for any consequences that may arise as a result of these evaluations. Logistic Mango Rm
                S.R.L. only provides the platform for communication between Users and has no responsibility for the
                content or consequences of the posted evaluations.
              </p>
            </div>

            <div>
              <h3 className="pt-4">6. ACCESS TO THE APPLICATION</h3>
              <p className="pt-5">
                Access to some Services provided to Users is free. The account of an individual User can be accessed
                by a legal entity User or an authorized individual. The legal entity User is responsible for collecting
                personal data from individuals, particularly for informing and obtaining consent (or identifying another
                legitimate basis) for transmitting personal data to the Company for such communications. The Company is
                a communication platform between Users, who are responsible for the content published on the
                Application. The Company reserves the right (which can be exercised at any chosen time and without
                prior notice) to delete, move, or edit these messages or to restrict some Users&apos; access to one of
                its communication platforms. These measures may be taken as a result of Users&apos; failure to comply
                with legal provisions or the terms and conditions of using the Application. The User is solely
                responsible for the content published on the Application.
              </p>

              <h3 className="pt-4">7. CHATS AND MESSAGES</h3>
              <p className="pt-5">
                The application allows Users to communicate through the chat feature available within the downloaded
                Application. The Company is not responsible for the truthfulness and accuracy of the information
                transmitted by Users through the chat section.
              </p>
            </div>

            <div>
              <h3 className="pt-4">8. ACCOUNT PROTECTION</h3>
              <p className="pt-5">
                Access to the User account in the Application is protected by a password. The User is responsible for
                maintaining the confidentiality of their information and password within the Application. Users are
                accountable for the use of their registration, whether the use is with or without their consent. The
                Company will not be liable for any moral or material damage caused by the failure to comply with this
                provision. The Company may also, at any time and without explanation, interrupt the provision of
                services, or any part of them, with or without prior notice.
              </p>

              <h3 className="pt-4">9. INTELLECTUAL PROPERTY RIGHTS</h3>
              <p className="pt-5">
                The content and design of the Application, as well as any other material related to the Application
                sent to the User, belong to the Company, regardless of whether the author is specified or not, and are
                protected by intellectual property legislation. You may not use, reproduce, or allow anyone to use or
                reproduce the materials without obtaining written permission from the Company or its collaborators who
                hold intellectual property rights over the respective content section of the Application. Additionally,
                it is forbidden to reproduce, in any form, in whole or in part, the information contained in User
                accounts and the recruitment advertisements of legal entities or authorized individuals without prior
                written consent from the Company. Except as stated above, the content of the Application may not be
                reproduced, modified, or exploited, regardless of the commercial or non-commercial purpose of such
                exploitation. The following actions are not permitted without obtaining prior written permission from
                the Company: a. reproducing or storing the content, as well as sending this content to any other site.
                b. modifying, publishing, transmitting, as well as participating in the transfer, sale, distribution of
                materials made by reproducing, modifying, or displaying the content, without obtaining prior written
                permission from us. c. removing marks that signify the Application&apos;s copyright over the content.
              </p>

              <h3 className="pt-4">10. CONFIDENTIALITY OF APPLICATION INFORMATION</h3>
              <p className="pt-5">
                The Company will maintain the confidentiality of any information provided by the User. Disclosure of
                the information provided will only be made under the conditions mentioned in this Contract. By
                transmitting information or materials through the Application, the User grants the Company unrestricted
                and irrevocable access to them, as well as the right to use, reproduce, display, modify, transmit, and
                distribute these materials or information. Legal entity users who post job advertisements act as
                personal data operators in accordance with applicable legislation, and as such, they have a series of
                rights and obligations concerning the personal data of individual Users accessed through the
                Application. When using the services offered through the Application, Users who post job advertisements
                accept and agree to comply with the terms and conditions stipulated in the personal data processing
                agreement, which is an integral part of this set of terms and conditions. The Company reserves the
                right to periodically update and modify the Terms and Conditions of the Application to reflect
                operational updates or any other changes in legal requirements. The document is binding on the User from
                the moment it is displayed in the application.
              </p>

              <h3 className="pt-4">11. DATA PRIVACY POLICY</h3>
              <p className="pt-5">
                The Company processes a range of personal data of Users, both individual Users and legal entity Users
                (i.e., representatives), when using the Application. This privacy policy describes the types of
                personal data that are processed, how they are used, what options are available regarding these
                processes, and how the Company will respect your rights as a data subject under personal data
                protection legislation, including Regulation (EU) 2016/679 (&quot;GDPR&quot;). The Company is the
                controller of personal data, according to personal data protection legislation including GDPR,
                regarding the personal data of Users collected and processed through the Application. The Company
                processes the following categories of personal data: Name, surname, phone number/email address, company
                data, professional experience data, photographs of personal documents, and skills. We retain personal
                data as long as necessary to fulfill the purposes for which they were collected, in compliance with our
                internal data retention procedures, including applicable archiving rules. Generally, Users&apos; data are
                retained as long as they have a User account in the Application.
              </p>

              <h3 className="pt-4">12. FORCE MAJEURE</h3>
              <p className="pt-5">
                Neither party will be liable for the non-performance of its contractual obligations if such
                non-performance, whether timely and/or proper, in whole or in part, is due to an event of force
                majeure. Force majeure is an unforeseeable event beyond the control of the parties and cannot be
                avoided. If, within 15 (fifteen) days from the date of its occurrence, the respective event does not
                cease, each party will have the right to notify the other party of the termination of the contract by
                operation of law, without either party being able to claim any damages from the other.
              </p>

              <h3 className="pt-4">13. APPLICABLE LAW – JURISDICTION. AMICABLE DISPUTE RESOLUTION</h3>
              <p className="pt-5">
                These Terms and Conditions are subject to Romanian law. In the event of any disputes arising between
                the Company and the User, an attempt will first be made to resolve them amicably. This chapter and the
                procedure below demonstrate the Company&apos;s willingness to resolve complaints, claims, and disputes
                quickly, efficiently, amicably, alternatively, and extra-judicially, using all applicable legal
                mechanisms and measures in Romania. If an amicable resolution of disagreements is not possible, the
                disputes will be resolved by the competent courts of Romania.
              </p>

              <h3 className="pt-4">14. FINAL PROVISIONS</h3>
              <p className="pt-5">
                If, for any reason, any clause in these Terms and Conditions is found to be null, unenforceable, or
                invalid, it will be replaced with a valid clause that is as close in meaning as possible to the
                original clause.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
