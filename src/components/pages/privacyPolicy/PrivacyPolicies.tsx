import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { privacyPolicies } from "../../common/enum/policies";
import Icon from "../../common/icon/Icon";
import { useHistory } from "react-router-dom";

const PrivacyPolicies: FC = () => {
  const history = useHistory();
  return (
    <section className="bg-white align-items-center d-flex justify-content-center flex-column">
      <Col className="justify-content-center align-self-center d-flex">
        <Row
          onClick={() => history.goBack()}
          className={
            "position-absolute pointer top-0 start-0 col-4 m-0 justify-content-start align-items-center p-0"
          }
        >
          <Icon name="back" className="m-0 justify-content-start p-0 w-10" />
          Back
        </Row>
        <span className="fs-1 my-5 pl-4 text-decoration-underline col-12 text-dark fw-bold">
          Privacy Policy
        </span>
      </Col>

      {/* <Col className="col-10 d-flex flex-column pb-4">
        {" "}
        <Card.Text className="">
          <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
            {privacyPolicies.description}
          </div>
        </Card.Text>
      </Col> */}
      <Col className="col-10 d-flex flex-column">
        {/* {privacyPolicies.policies.map((policy: any, index: number) => {
          return (
            <Col className="pb-4">
              <Card.Title style={{ fontSize: "2dvi" }}>
                {policy.policy}
              </Card.Title>
              <Card.Text className="">
                {policy.text.map((text: any, index: number) => (
                  <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
                    {text}
                  </div>
                ))}
              </Card.Text>
            </Col>
          );
        })} */}
        <Card.Title style={{ fontSize: "2dvi" }}>Introduction:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Lyamii (India) Private Limited (hereinafter &ldquo;LYAMII&rdquo;)
          recognizes the importance of privacy of its users and also of
          maintaining confidentiality of the information provided by its users
          as a responsible data controller and data processer.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This Privacy Policy provides for the practices for handling and
          securing user&apos;s Personal Information (defined hereunder) by
          LYAMII and its subsidiaries and affiliates.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This Privacy Policy is applicable to any person (&lsquo;User&rsquo;)
          who purchase, intend to purchase, or inquire about any product(s) or
          service(s) made available by LYAMII through any of LYAMII&rsquo;s
          customer interface channels including its website, mobile site, mobile
          app &amp; offline channels including call centers and offices
          (collectively referred herein as{" "}
          <strong>&quot;Sales Channels&quot;</strong>).
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          For the purpose of this Privacy Policy, wherever the context so
          requires &quot;you&quot; or &quot;your&quot; shall mean User and the
          term &quot;we&quot;, &quot;us&quot;, &quot;our&quot; shall mean
          LYAMII. For the purpose of this Privacy Policy, Website means the
          website(s), mobile site(s) and mobile app(s).
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          By using or accessing the Website or other Sales Channels, the User
          hereby agrees with the terms of this Privacy Policy and the contents
          herein. If you disagree with this Privacy Policy please do not use or
          access our Website or other Sales Channels.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This Privacy Policy does not apply to any website(s), mobile sites and
          mobile apps of third parties, even if their websites/products are
          linked to our Website. User should take note that information and
          privacy practices of LYAMII&rsquo;s business partners, advertisers,
          sponsors or other sites to which LYAMII provides hyperlink(s), may be
          materially different from this Privacy Policy. Accordingly, it is
          recommended that you review the privacy statements and policies of any
          such third parties with whom they interact.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This Privacy Policy is an integral part of your User Agreement with
          LYAMII and all capitalized terms used, but not otherwise defined
          herein, shall have the respective meanings as ascribed to them in the
          User Agreement.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          USERS OUTSIDE THE GEOGRAPHICAL LIMITS OF INDIA
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Please note that the data shared with LYAMII shall be primarily
          processed in India and such other jurisdictions where a third party
          engaged by LYAMII may process the data on LYAMII&rsquo;s behalf. By
          agreeing to this policy, you are providing LYAMII with your explicit
          consent to process your personal information for the purpose(s)
          defined in this policy. The data protection regulations in India or
          such other jurisdictions mentioned above may differ from those of your
          country of residence.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you have any concerns in the processing your data and wish to
          withdraw your consent, you may do so by writing to the following email
          id: support@lyamii.com. However, if such processing of data is
          essential for us to be able to provide service to you, then we may not
          be able to serve or confirm your bookings after your withdrawal of
          consent. For instance, if you want to book any international holiday
          package in fixed departures (group bookings), then certain personal
          information of yours like contact details, gender, dietary
          preferences, choice of room with smoking facility, any medical
          condition which may require specific attention or facility etc. may
          have to be shared by us with our vendors in each city where you will
          stay, and they may further process this information for making
          suitable arrangements for you during the holiday. Such sharing and
          processing of information may extend to the hotel where you will stay
          or the tour manager who will be your guide during the travel.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          A withdrawal of consent by you for us to process your information may:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            severely inhibit our ability to serve you properly and in such case,
            we may have to refuse the booking altogether, or
          </li>
          <li>
            unreasonably restrict us to service your booking (if a booking is
            already made) which may further affect your trip or may compel us to
            cancel your booking.
          </li>
        </ul>
        <Card.Title style={{ fontSize: "2dvi" }}>
          TYPE OF INFORMATION WE COLLECT AND ITS LEGAL BASIS
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          The information as detailed below is collected for us to be able to
          provide the services chosen by you and also to fulfill our legal
          obligations as well as our obligations towards third parties as per
          our User Agreement.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          &quot;Personal Information&quot;
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          of User shall include the information shared by the User and collected
          by us for the following purposes:
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Registration on the Website:&nbsp;
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Information which you provide while subscribing to or registering on
          the Website, including but not limited to information about your
          personal identity such as name, gender, marital status, religion, age,
          profile picture etc., your contact details such as your email address,
          postal addresses, frequent flyer number, telephone (mobile or
          otherwise) and/or fax numbers. The information may also include
          information such as your banking details (including credit/debit card)
          and any other information relating to your income and/or lifestyle;
          billing information payment history etc. (as shared by you).
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Other information:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          We many also collect some other information and documents including
          but not limited to:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            Transactional history (other than banking details) about your
            e-commerce activities, buying behavior.
          </li>
          <li>
            Your usernames, passwords, email addresses and other
            security-related information used by you in relation to our
            Services.
          </li>
          <li>
            Data either created by you or by a third party and which you wish to
            store on our servers such as image files, documents etc.
          </li>
          <li>
            Data available in public domain or received from any third party
            including social media channels, including but not limited to
            personal or non-personal information from your linked social media
            channels (like name, email address, friend list, profile pictures or
            any other information that is permitted to be received as per your
            account settings) as a part of your account information.
          </li>
          <li>
            Information pertaining any other traveler(s) for who you make a
            booking through your registered LYAMII account. In such case, you
            must confirm and represent that each of the other traveler(s) for
            whom a booking has been made, has agreed to have the information
            shared by you disclosed to us and further be shared by us with the
            concerned service provider(s).
          </li>
          <li>
            If you request LYAMII to provide visa related services, then copies
            of your passport, bank statements, originals of the filled in
            application forms, photographs, and any other information which may
            be required by the respective embassy to process your visa
            application.
          </li>
          <li>
            For international bookings, Users, in compliance with the
            Liberalized Remittance Scheme(LRS) of RBI or any other law may be
            required to provide details such as their PAN information or
            passport details number or any such information required by Service
            Provider. Such information shall be strictly used as per the
            aforesaid requirements only. In case a User does not wish to provide
            this information, LYAMII may not be able to process the booking.
            LYAMII will never share User&rsquo;s PAN details without their prior
            consent unless otherwise such action is required by any law
            enforcement authority for investigation, by court order or in
            reference to any legal process.
          </li>
          <li>
            In case you opt for contactless check-in at Hotels, then copies of
            your government identification like aadhar, driving license,
            election card etc., Self-declaration and any other information like
            date of birth, destination/origin of travel and place of residence
            that may be required by the concerned Hotel to honor your hotel
            booking.
          </li>
          <li>
            For international bookings, Users, in compliance with the
            Liberalized Remittance Scheme(LRS) of RBI or any other law may be
            required to provide details such as their PAN information or
            passport details number or any such information required by Service
            Provider.
          </li>
          <li>
            In case you opt for contactless check-in at Hotels, then copies of
            your government identification like aadhar, driving license,
            election card etc., Self-declaration and any other information like
            date of birth, destination/origin of travel and place of residence
            that may be required by the concerned Hotel to honor your hotel
            booking.
          </li>
          <li>
            Your Covid-19 Vaccination status and certificate in case you wish to
            avail any service for provision of which such Covid-19 vaccination
            related information is required or want to access your vaccination
            certificate at a later stage for travel related or any other
            purpose. LYAMII will never process the beneficiary id and other id
            details contained in the vaccination certificate.
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Such information shall be strictly used for the aforesaid specified
          &amp; lawful purpose only. User further understands that LYAMII may
          share this information with the end service provider or any other
          third party for provision and facilitation of the desired booking.
          LYAMII will always redact all/any sensitive &amp; confidential
          information contained in the vaccination certificate, passbook, bank
          statement or any other identity card submitted for the purpose of
          availing a service, promotional offer or booking a product on the
          Website. In case a User does not wish to provide this information or
          opts for deletion of the information already provided, LYAMII may not
          be able to process the desired booking request. LYAMII will never
          share any of the above information collected including PAN card
          details, Vaccination status &amp; certificate , Passport details ,
          Aadhar Card details without their prior consent unless otherwise such
          action is required by any law enforcement authority for investigation,
          by court order or in reference to any legal process.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          HOW WE USE YOUR PERSONAL INFORMATION:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          The Personal Information collected maybe used in the following manner:
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          While making a booking
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          While making a booking, we may use Personal Information including,
          payment details which include cardholder name, credit/debit card
          number (in encrypted form) with expiration date, banking details,
          wallet details etc. as shared and allowed to be stored by you. We may
          also use the information of travelers list as available in or linked
          with your account. This information is presented to the User at the
          time of making a booking to enable you to complete your bookings
          expeditiously.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          We may also use your Personal Information for several reasons
          including but not limited to:
        </Card.Title>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>confirm your reservations with respective service providers;</li>
          <li>keep you informed of the transaction status;</li>
          <li>
            send booking confirmations either via sms or Whatsapp or any other
            messaging service;
          </li>
          <li>send any updates or changes to your booking(s);</li>
          <li>allow our customer service to contact you, if necessary;</li>
          <li>
            customize the content of our website, mobile site and mobile app;
          </li>
          <li>
            request for reviews of products or services or any other
            improvements;
          </li>
          <li>send verification message(s) or email(s);</li>
          <li>
            validate/authenticate your account and to prevent any misuse or
            abuse.
          </li>
          <li>
            contact you on your birthday/anniversary to offer a special gift or
            offer.
          </li>
        </ul>
        <Card.Title style={{ fontSize: "2dvi" }}>Surveys:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We value opinions and comments from our Users and frequently conduct
          surveys, both online and offline. Participation in these surveys is
          entirely optional. Typically, the information received is aggregated,
          and used to make improvements to Website, other Sales Channels,
          services and to develop appealing content, features and promotions for
          members based on the results of the surveys. Identity of the survey
          participants is anonymous unless otherwise stated in the survey.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Marketing Promotions, Research and Programs:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Marketing promotions, research and programs help us to identify your
          preferences, develop programs and improve user experience. LYAMII
          frequently sponsors promotions to give its Users the opportunity to
          win great travel and travel related prizes. Personal Information
          collected by us for such activities may include contact information
          and survey questions. We use such Personal Information to notify
          contest winners and survey information to develop promotions and
          product improvements. As a registered User, you will also occasionally
          receive updates from us about fare sales in your area, special offers,
          new LYAMII services, other noteworthy items (like savings and benefits
          on airfares, hotel reservations, holiday packages, car rentals and
          other travel services) and marketing programs.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In addition, you may look forward to receiving periodic marketing
          emails, newsletters and exclusive promotions offering special deals.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          From time to time we may add or enhance services available on the
          Website. To the extent these services are provided, and used by you,
          we will use the Personal Information you provide to facilitate the
          service(s) requested. For example, if you email us with a question, we
          will use your email address, name, nature of the question, etc. to
          respond to your question. We may also store such Personal Information
          to assist us in making the Website the better and easier to use for
          our Users.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII may from time to time launch reward programs by way of which
          users may stand to win travel related rewards or other rewards. We may
          use your Personal Information to enroll you in the rewards program and
          status of the same will be visible each time you log in to the
          Website. Depending on the reward program, each time you win a reward,
          LYAMII may share your Personal Information with a third party that
          will be responsible for fulfilling the reward to you. You may however
          choose to opt out of such reward programs by writing to us. For
          various purposes such as fraud detection, offering bookings on credit
          etc., we at times may verify information of customers on selective
          basis, including their credit information. Additionally, LYAMII may
          share your Personal Information, anonymized and/ or aggregated data to
          a third party that LYAMII may engage to perform certain tasks on its
          behalf, including but not limited to payment processing, data hosting,
          data processing and assessing credit worthiness for offering bookings
          on credit.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          HOW LONG DO WE KEEP YOUR PERSONAL INFORMATION?{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII will retain your Personal Information on its servers for as
          long as is reasonably necessary for the purposes listed in this
          policy. In some circumstances we may retain your Personal Information
          for longer periods of time, for instance where we are required to do
          so in accordance with any legal, regulatory, tax or accounting
          requirements.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Where your personal data is no longer required we will ensure it is
          either securely deleted or stored in a way which means it will no
          longer be used by the business.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In case user wishes to delete their account, they can do so using this{" "}
          <a href="https://lyamii.com/">
            Link
          </a>
          .
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          COOKIES AND SESSION DATA{" "}
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Cookies:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII uses cookies to personalize your experience on the Website and
          the advertisements that maybe displayed. LYAMII&rsquo;s use of cookies
          is similar to that of any other reputable online companies.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Cookies are small pieces of information that are stored by your
          browser on your device&apos;s hard drive. Cookies allow us to serve
          you better and more efficiently. Cookies also allow ease of access, by
          logging you in without having to type your login name each time (only
          your password is needed); we may also use such cookies to display any
          advertisement(s) to you while you are on the Website or to send you
          offers (or similar emails &ndash; provided you have not opted out of
          receiving such emails) focusing on destinations which may be of your
          interest.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          A cookie may also be placed by our advertising servers, or third party
          advertising companies. Such cookies are used for purposes of tracking
          the effectiveness of advertising served by us on any website, and also
          to use aggregated statistics about your visits to the Website in order
          to provide advertisements in the Website or any other website about
          services that may be of potential interest to you. The third party
          advertising companies or advertisement providers may also employ
          technology that is used to measure the effectiveness of the
          advertisements. All such information is anonymous. This anonymous
          information is collected through the use of a pixel tag, which is an
          industry standard technology and is used by all major websites. They
          may use this anonymous information about your visits to the Website in
          order to provide advertisements about goods and services of potential
          interest to you. No Personal Information is collected during this
          process. The information so collected during this process, is
          anonymous, and does not link online actions to a User
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Most web browsers automatically accept cookies. Of course, by changing
          the options on your web browser or using certain software programs,
          you can control how and whether cookies will be accepted by your
          browser. LYAMII supports your right to block any unwanted Internet
          activity, especially that of unscrupulous websites. However, blocking
          LYAMII cookies may disable certain features on the Website, and may
          hinder an otherwise seamless experience to purchase or use certain
          services available on the Website. Please note that it is possible to
          block cookie activity from certain websites while permitting cookies
          from websites you trust.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Automatic Logging of Session Data:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Each time you access the Website your session data gets logged.
          Session data may consist of various aspects like the IP address,
          operating system and type of browser software being used and the
          activities conducted by the User while on the Website. We collect
          session data because it helps us analyze User&rsquo;s choices,
          browsing pattern including the frequency of visits and duration for
          which a User is logged on. It also helps us diagnose problems with our
          servers and lets us better administer our systems. The aforesaid
          information cannot identify any User personally. However, it may be
          possible to determine a User&apos;s Internet Service Provider (ISP),
          and the approximate geographic location of User&apos;s point of
          connectivity through the above session data.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          WITH WHOM YOUR PERSONAL INFORMATION IS SHARED{" "}
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Service Providers and suppliers:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Your information shall be shared with the end service providers like
          airlines, hotels, bus service providers, cab rental, railways or any
          other suppliers who are responsible for fulfilling your booking. You
          may note that while making a booking with LYAMII you authorize us to
          share your information with the said service providers and suppliers.
          It is pertinent to note that LYAMII does not authorize the end service
          provider to use your information for any other purpose(s) except as
          may be for fulfilling their part of service. However, how the said
          service providers/suppliers use the information shared with them is
          beyond the purview and control of LYAMII as they process Personal
          Information as independent data controllers, and hence we cannot be
          made accountable for the same. You are therefore advised to review the
          privacy policies of the respective service provider or supplier whose
          services you choose to avail.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII does not sell or rent individual customer names or other
          Personal Information of Users to third parties except sharing of such
          information with our business / alliance partners or vendors who are
          engaged by us for providing various referral services and for sharing
          promotional and other benefits to our customers from time to time
          basis their booking history with us.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          COMPANIES IN THE SAME GROUP:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In the interests of improving personalization and service efficiency,
          we may, under controlled and secure circumstances, share your Personal
          Information with our affiliate or associate entities. This will enable
          us to provide you with information about various products and
          services, both leisure- and travel-related, which might interest you;
          or help us address your questions and requests in relation to your
          bookings.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If the assets of LYAMII are acquired, our customer information may
          also be transferred to the acquirer depending upon the nature of such
          acquisition. In addition, as part of business
          expansion/development/restructuring or for any other reason
          whatsoever, if we decide to sell/transfer/assign our business, any
          part thereof, any of our subsidiaries or any business units, then as
          part of such restructuring exercise customer information including the
          Personal Information collected herein shall be transferred
          accordingly.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          BUSINESS PARTNERS and THIRD-PARTY VENDORS:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We may also share certain filtered Personal Information to our
          corporate affiliates or business partners who may contact the
          customers to offer certain products or services, which may include
          free or paid products / services, which will enable the customer to
          have better travel experience or to avail certain benefits specially
          made for LYAMII customers. Examples of such partners are entities
          offering co-branded credit cards, travel insurance, insurance cover
          against loss of wallet, banking cards or similar sensitive information
          etc. If you choose to avail any such services offered by our business
          partners, the services so availed will be governed by the privacy
          policy of the respective service provider.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII may share your Personal Information to third party that LYAMII
          may engage to perform certain tasks on its behalf, including but not
          limited to payment processing, data hosting, and data processing
          platforms.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We use non-identifiable Personal Information of Users in aggregate or
          anonymized form to build higher quality, more useful online services
          by performing statistical analysis of the collective characteristics
          and behavior of our customers and visitors, and by measuring
          demographics and interests regarding specific areas of the Website. We
          may provide anonymous statistical information based on this data to
          suppliers, advertisers, affiliates and other current and potential
          business partners. We may also use such aggregate data to inform these
          third parties as to the number of people who have seen and clicked on
          links to their websites. Any Personal Information which we collect and
          which we may use in an aggregated format is our property. We may use
          it, in our sole discretion and without any compensation to you, for
          any legitimate purpose including without limitation the commercial
          sale thereof to third parties.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Occasionally, LYAMII will hire a third party for market research,
          surveys etc. and will provide information to these third parties
          specifically for use in connection with these projects. The
          information (including aggregate cookie and tracking information) we
          provide to such third parties, alliance partners, or vendors are
          protected by confidentiality agreements and such information is to be
          used solely for completing the specific project, and in compliance
          with the applicable regulations.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          DISCLOSURE OF INFORMATION
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In addition to the circumstances described above, LYAMII may disclose
          User&apos;s Personal Information if required to do so:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            by law, required by any enforcement authority for investigation, by
            court order or in reference to any legal process;
          </li>
          <li>to conduct our business;</li>
          <li>for regulatory, internal compliance and audit exercise(s)</li>
          <li>to secure our systems; or</li>
          <li>
            to enforce or protect our rights or properties of LYAMII or any or
            all of its affiliates, associates, employees, directors or officers
            or when we have reason to believe that disclosing Personal
            Information of User(s) is necessary to identify, contact or bring
            legal action against someone who may be causing interference with
            our rights or properties, whether intentionally or otherwise, or
            when anyone else could be harmed by such activities.
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Such disclosure and storage may take place without your knowledge. In
          that case, we shall not be liable to you or any third party for any
          damages howsoever arising from such disclosure and storage.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          USER GENERATED CONTENT{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII provides an option to its users to post their experiences by
          way of reviews, ratings and general poll questions. The customers also
          have an option of posting questions w.r.t a service offered by LYAMII
          or post answers to questions raised by other users. LYAMII may also
          hire a third party to contact you and gather feedback about your
          recent booking with LYAMII. Though the participation in the feedback
          process is purely optional, you may still receive emails,
          notifications (app, sms, Whatsapp or any other messaging service) for
          you to share your review(s), answer questions posted by other users or
          a. The reviews may be written or in a video format. The reviews
          written or posted may also be visible on other travel or travel
          related platforms.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          The UGC that LYAMII collects may be of the following kinds:{" "}
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>Review and Ratings</li>
          <li>Question and Answers</li>
          <li>Crowd Source Data Collection (poll questions).</li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Each User who posts review or ratings, Q&amp;A, photographs shall have
          a profile, which other Users will be able to access. Other Users may
          be able to view the number of trips, reviews written, questions asked
          and answered and photographs posted.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          HOW CAN YOU OPT-OUT OF RECEIVING OUR PROMOTIONAL E-MAILS?{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You will occasionally receive e-mail updates from us about fare sales
          in your area, special offers, new LYAMII services, and other
          noteworthy items. We hope you will find these updates interesting and
          informative. If you wish not to receive them, please click on the
          &quot;unsubscribe&quot; link or follow the instructions in each e-mail
          message.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          PERMISSIONS REQUIRED FOR USING OUR MOBILE APPLICATIONS{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          When the LYAMII app is installed on your phone or tablet, a list of
          permissions appear and are needed for the app to function effectively.
          There is no option to customize the list. The permissions that LYAMII
          requires and the data that shall be accessed and its use is as below:
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Android permissions:
        </Card.Title>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Device &amp; App history:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          We need your device permission to get information about your device,
          like OS (operating system) name, OS version, mobile network, hardware
          model, unique device identifier, preferred language, etc. Basis these
          inputs, we intend to optimize your travel booking experience, use OS
          specific capabilities to drive great in-funnel experiences using
          components of device&rsquo;s OS, etc.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Camera:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables you to use your camera from within the
          application to upload a new profile picture, upload an image for
          sharing hotel reviews and also allows you to take videos to upload as
          video reviews on our application. This permission will also enable you
          to scan QR codes for easy UPI payments.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Identity:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables us to know about details of your account(s) on
          your mobile device. We use this info to auto-fill your email
          ID&rsquo;s and provide a typing free in-funnel experience. It helps us
          map email ID&rsquo;s to a particular user to give you the benefit of
          exclusive travel offers, wallet cash-backs, etc. It also allows
          facilitating your Facebook and Google+ login.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Location:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables us to give you the benefit of location
          specific deals and provide you a personalized in-funnel experience.
          When you launch LYAMII app to make a travel booking, we auto-detect
          your location so that your nearest airport or city is auto-filled. We
          also require this permission to recommend you nearest hotels in case
          you are running late and want to make a quick last minute booking for
          the nearest hotel. Your options are personalized basis your locations.
          For international travel, this enables us to determine your time zone
          and provide information accordingly
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>SMS:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          If you allow us to access your SMS, we read your SMS to autofill or
          prepopulate &lsquo;OTP&rsquo; while making a transaction and to
          validate your mobile number. This provides you a seamless purchase
          experience while making a booking and you don&rsquo;t need to move out
          of the app to read the SMS and then enter it in the app.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Phone:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          The app requires access to make phone calls so that you can make phone
          calls to hotels, airlines and our customer contact centers directly
          through the app.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Contacts:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          If you allow us to access your contacts, it enables us to provide a
          lot of social features to you such as sharing your hotel/ flight/
          holidays with your friends, inviting your friends to try our app, send
          across referral links to your friends, etc. We may also use this
          information to make recommendations for hotels where your friends have
          stayed. This information will be stored on our servers and synced from
          your phone.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Photo/ Media/ Files:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          The libraries in the app use these permissions to allow map data to be
          saved to your phone&apos;s external storage, like SD cards. By saving
          map data locally, your phone doesn&apos;t need to re-download the same
          map data every time you use the app. This provides you a seamless Map
          based Hotel selection experience, even on low bandwidth network.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Wi-Fi connection information:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          When you allow us the permission to detect your Wi-Fi connection, we
          optimize your experience such as more detailing on maps, better image
          loading, more hotel/ flights/ package options to choose from, etc.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Device ID &amp; Call information:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission is used to detect your Android ID through which we can
          uniquely identify users. It also lets us know your contact details
          using which we pre-populate specific fields to ensure a seamless
          booking experience.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Calendar:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables us to put your travel plan on your calendar.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Bluetooth:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables us to provide you services of the third
          parties that make available certain features of their
          products/services on our application. The permission specifically
          enables our third party service providers whose services you book on
          the application to permit you to lock and unlock your self-driven
          vehicles seamlessly.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Video/Audio:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables you to upload videos on our application or to
          submit video reviews of your hotel/property stays and thereby
          providing you with new ways of providing reviews of your experience on
          our application. The audio permission enables us to ensure that the
          video content that you upload has a clear audio in its background.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Phone Number:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          We need the permission of access to phone number to provide a seamless
          login experience, to optimize your travel booking experience and to
          enable you to obtain UPI services and to prevent fraud in some cases
          on our application.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>IMEI/IMSI:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables us to identifying different users uniquely and
          helps us to prevent frauds on our application.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Subscription Information:
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          Your subscription information enables to provide you a seamless
          experience depending upon your network and to optimize the
          application&rsquo;s performance. In addition, this also enables us in
          providing to you the train status even in an offline mode and
          additionally even in a no network area you can get fully aware of the
          status of the train you want to search for.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>SIM Serial Number:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables us to read your sim serial number and helps us
          in authenticating your mobile number for UPI registration. It helps us
          to ensure that the mobile number you are using is actually present on
          your device that you are using to register for UPI.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>IOS Permissions:</Card.Title>
        <Card.Title style={{ fontSize: "2dvi" }}>Notifications:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          If you opt in for notifications, it enables us to send across
          exclusive deals, promotional offers, travel related updates, etc. on
          your device. If you do not opt for this, updates for your travel like
          PNR status, booking confirmation, refund (in case of cancellation),
          etc. will be sent through SMS.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Contacts:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          If you opt in for contacts permission, it enables us to provide a lot
          of social features to you such as sharing your hotel/ flight/ holidays
          with your friends, inviting your friends to try our app, send across
          referral links to your friends, etc. We will also use this information
          to make recommendations for hotels where your friends have stayed.
          This information will be stored on our servers and synced from your
          phone.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Location:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          {" "}
          This permission enables us to give you the benefit of location
          specific deals and provide you a personalized in-funnel experience.
          When you launch our app to make a travel booking, we auto-detect your
          location so that your nearest Airport or City is auto-filled. We
          require this permission to recommend your nearest hotels in case you
          are running late and want to make a quick last minute booking for the
          nearest hotel. Your options are personalized basis your locations. For
          international travel, this enables us to determine your time zone and
          provide information accordingly.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          HOW WE PROTECT YOUR PERSONAL INFORMATION?{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          All payments on the Website are secured. This means all Personal
          Information you provide is transmitted using TLS (Transport Layer
          Security) encryption. TSL is a proven coding system that lets your
          browser automatically encrypt, or scramble, data before you send it to
          us. Website has stringent security measures in place to protect the
          loss, misuse, and alteration of the information under our control.
          Whenever you change or access your account information, we offer the
          use of a secure server. Once your information is in our possession we
          adhere to strict security guidelines, protecting it against
          unauthorized access.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          WITHDRAWAL OF CONSENT AND PERMISSION{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You may withdraw your consent to submit any or all Personal
          Information or decline to provide any permissions on its Website as
          covered above at any time. In case, you choose to do so then your
          access to the Website may be limited, or we might not be able to
          provide the services to you. You may withdraw your consent by sending
          an email to&nbsp;support@lyamii.com&nbsp;
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          YOUR RIGHTS QUA PERSONAL INFORMATION{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You may access your Personal Information from your user account with
          LYAMII. You may also correct your personal information or delete such
          information (except some mandatory fields) from your user account
          directly. If you don&rsquo;t have such a user account, then you write
          to <a href="mailto:support@lyamii.com">support@lyamii.com</a>
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          ELIGIBILITY TO TRANSACT WITH LYAMII{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You must atleast 18 years of age to transact directly with LYAMII and
          also to consent to the processing of your personal data.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          CHANGES TO THE PRIVACY POLICY{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We reserve the rights to revise the Privacy Policy from time to time
          to suit various legal, business and customer requirement. We will duly
          notify the users as may be necessary.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You may always submit concerns regarding this Privacy Policy via email
          to us at
          <a href="mailto:support@lyamii.com">support@lyamii.com</a> LYAMII
          shall endeavor to respond to all reasonable concerns and inquires.
          Privacy Policy (EU, UK and US){" "}
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Introduction:</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Lyamii (India) Private Limited (hereinafter referred as
          &lsquo;LYAMII&rsquo; or &lsquo;the Company&rsquo; or &lsquo;we&rsquo;)
          is committed to our client&rsquo;s privacy and security and to taking
          steps designed to secure your personal and financial information. We
          believe your private details should be kept just that and when you
          share personal information with us, we will make all reasonable
          endeavors to keep your details secure and private. We are committed to
          ensuring that your personal information is protected.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This document describes how we use and process your personal data,
          provided in a readable and transparent manner. It also tells you what
          rights you can exercise in relation to your personal data and how you
          can contact us. Please also read our Cookie Statement, which tells you
          how LYAMII uses cookies and other similar tracking technologies.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          The processing of personal data when using the Services{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII collects and uses information you provide to us. When you make
          a reservation, you are (at a minimum) asked for your name and email
          address.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Depending on the reservation, we may also ask for your home address,
          telephone number, payment information, date of birth, current location
          (in the case of on-demand services), the names of the people
          travelling/staying with you and any preferences you might have for
          your trip/stay (such as dietary or accessibility requirements). In
          some cases, you may also be able to check-in online with the Booking
          agency, for which we will ask you to share passport information or a
          driving license and signatures.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you need to contact our customer service team, contact your booking
          agency through us, or reach out to us in a different way (such as
          social media or via a chatbot) we&rsquo;ll collect information from
          you there, too. This applies whether you are contacting us with
          feedback or asking for help using our services.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You might also be invited to write reviews to help inform others about
          the experiences you had on your trip/stay. When you write a review on
          the LYAMII platform, we&rsquo;ll collect any information you&rsquo;ve
          included, along with your display name.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you create a user account, we&rsquo;ll also store your personal
          settings, uploaded photos, and reviews of previous bookings. This
          saved data can be used to help you plan and manage future reservations
          or benefit from other features only available to account holders (such
          as incentives or other benefits).
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Personal data you give us about others
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Of course, you might not simply be making a reservation for yourself.
          You might be taking a trip/stay with other people or making a
          reservation on someone else&rsquo;s behalf. In both those scenarios,
          you will provide their details as part of the reservation.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you have a LYAMII for Business account, you can keep an address
          book there to make it easier to plan and manage business travel/stay
          arrangements for others.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In some cases, you might use LYAMII to share information with others.
          This can take the form of sharing a Wishlist, taking part in a travel
          community or participating in a referral program, as described when
          you use the relevant feature.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          At this point, we have to make it clear that it&rsquo;s your
          responsibility to ensure that the person or people you have provided
          personal data about are aware that you&rsquo;ve done so, and that they
          have understood and accepted how LYAMII uses their information (as
          described in this Privacy Policy).
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Personal data we collect automatically.
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Whether or not you end up making a reservation, when you visit our
          websites or apps, we automatically collect certain information. This
          includes your IP address, the date and time you accessed our services,
          and information about your computer&rsquo;s hardware and software
          (such as the operating system, the internet browser used,
          software/application version data and your language settings). We also
          collect information about clicks and which pages have been shown to
          you.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you&rsquo;re using a mobile device, we collect data that identifies
          the device, as well as data about your device-specific settings and
          characteristics, app crashes and other system activity. When you make
          a booking arrangement using this kind of device, our system registers
          how you made your reservation (on which website), and/or which site
          you came from when you entered the LYAMII website or app.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Personal data we receive from other sources.
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          It&rsquo;s not just the things you tell us, though &ndash; we may also
          receive information about you from other sources. These include
          business partners, such as affiliate partners, subsidiaries of the
          LYAMII corporate group, other companies in the LYAMII (India) Private
          Limited. corporate group and other independent third parties.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Anything we receive from these partners may be combined with
          information provided by you. For example, LYAMII Reservation services
          are not only made available via LYAMII and the LYAMII apps but are
          also integrated into services of affiliate partners you can find
          online. When you use any of these services, you provide the
          reservation details to our business partners who then forward your
          details to us.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We also integrate with third party service providers to facilitate
          payments between you and booking agencies. These service providers
          share payment information so we can administer and manage your Booking
          arrangement, making sure everything goes as smoothly as possible for
          you.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Additionally, we collect information in the regrettable case that we
          receive a complaint about you from a Booking agency, for example in
          the case of misconduct.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Another way we might receive data about you, is through the
          communication services integrated into our platforms. These
          communication services offer you a way to contact the booking agency
          you&rsquo;ve booked with to discuss your stay. In some cases, we
          receive metadata about these communication activities (such as who you
          are, where you called from, and the date and length of the call).
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Why do we collect and use your personal data?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We use the information collected about you for a variety of purposes.
          Your personal data may be used in the following ways:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            <strong>Booking Arrangement:</strong> First and foremost, we use
            your personal data to complete and administer your online booking
            arrangement&ndash; which is essential for us to provide this service
            for you. This includes sending you communications that relate to
            your booking arrangement, such as confirmations, modifications, and
            reminders. In some cases, this may also include processing your
            personal data to enable online check-in with the booking agency or
            processing personal data in relation to damage deposits.
          </li>
          <li>
            <strong>Customer service:</strong> We provide international customer
            service from our local offices in more than twenty languages, and
            we&rsquo;re here to help 24 hours a day, 7 days a week. Sharing
            relevant details, such as reservation information or information
            about your user account with our global customer service staff
            allows us to respond when you need us. This includes helping you to
            contact the right booking agency and responding to any questions you
            might have about your booking arrangement (or any other queries, for
            that matter).
          </li>
          <li>
            <strong>Account facilities:</strong> LYAMII users can create an
            account on our website or apps. We use the information you give us
            to administer this account, allowing you to do several useful
            things. You can manage your booking arrangements, take advantage of
            unique offers, make future booking arrangements easily and manage
            your personal settings.
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Managing personal settings gives you the ability to keep and share
          lists, share photos, easily see trip/stay Services you&rsquo;ve
          searched for and check travel-related information you&rsquo;ve
          provided. You can also see any reviews you&rsquo;ve written.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you want to, you can share certain information as part of your user
          account, by creating a public profile under your own first name or a
          screen name you choose.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you&rsquo;re a LYAMII for Business account holder, you can also
          save contact details under that account, manage business reservations
          and link other account holders to the same LYAMII for Business
          account.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Online groups: We give account holders the chance to connect and
          interact with each other through online groups or forums, such as
          travel communities.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Marketing activities: We use your information for marketing
          activities. These activities include:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            Using your contact information to send you regular news about
            travel-related products and services. You can unsubscribe from email
            marketing communications quickly, easily and at any time. All you
            need to do is click on the &lsquo;Unsubscribe&rsquo; link included
            in each newsletter or other communication.
          </li>
          <li>
            Based on your information, individualised offers might be shown to
            you on the LYAMII website, in mobile apps or on third-party
            websites/apps (including social media sites) and the content of the
            site displayed to you might be personalised. These could be offers
            that you can book directly on the LYAMII website, on co-branded
            sites, or other third-party offers or products we think you might
            find interesting.
          </li>
          <li>
            When you participate in other promotional activities (such as
            sweepstakes, referral programmes or competitions), only relevant
            information will be used to administer these promotions.
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Communicating with you: There might be other times when we get in
          touch, including by email, by chatbot, by post, by phone or by texting
          you. Which method we choose depends on the contact information
          you&rsquo;ve previously shared.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We process the communications you send to us. There could be several
          reasons for this, including:
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Responding to and handling any requests you or your booking agency
          have made. LYAMII also offers customers and booking agencies several
          ways to exchange information, requests, and comments about Booking
          agencies and existing booking arrangements via LYAMII.
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            Providing the best price applicable to you, depending on where you
            are based: When you search our apps or website, for example to find
            an accommodation, a rental car, or a flight, we process your IP
            address to confirm whether you are in the European Economic Area
            (EEA) or in another country. We do this to offer you the best price
            for the region (EEA) or country (non-EEA) where you are based.
          </li>
          <li>
            Customer reviews and other destination-related information: During
            and after your trip/stay, we might invite you to submit a review. We
            can also make it possible for the people you&rsquo;re
            travelling/staying with or whom you&rsquo;ve booked a reservation
            for to do this instead. This invite asks for information about the
            booking agency or the destination.
          </li>
          <li>
            Call monitoring: When you make calls to our customer service team,
            LYAMII uses an automated telephone number detection system to match
            your telephone number to your existing reservations. This can help
            save time for both you and our customer service staff. However, our
            customer service staff may still ask for authentication, which helps
            to keep your reservation details confidential.
            <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
              <li>
                During calls with our customer service team, live listening
                might be carried out or calls might be recorded for quality
                control and training purposes. This includes the usage of the
                recordings for the handling of complaints, legal claims and for
                fraud detection.
              </li>
              <li>
                We do not record all calls. In the case that a call is recorded,
                each recording is kept for a limited amount of time before being
                automatically deleted. This is unless we have determined that
                it&rsquo;s necessary to keep the recording for fraud
                investigation or legal purposes. You can read more about this
                below.
              </li>
              <li>
                Promotion of a safe and trustworthy service: To create a
                trustworthy environment for you, the people you bring with you
                on your trip/stay, LYAMII&rsquo;s business partners and our
                booking agencies, we continuously analyse and use certain
                personal data to detect and prevent fraud and other illegal or
                unwanted activities.
              </li>
              <li>
                Legal purposes: Finally, in certain cases, we may need to use
                your information to handle and resolve legal claims and
                disputes, for regulatory investigations and compliance, to
                enforce the LYAMII online reservation service terms of use or to
                comply with lawful requests from law enforcement.
              </li>
            </ul>
          </li>
        </ul>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Data sharing with third parties
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In certain circumstances, we&rsquo;ll share your personal data with
          third parties. These third parties include:
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          The booking agency you booked: To complete your booking arrangement,
          we transfer relevant reservation details to the booking agency you
          have booked. This is one of the most essential things we do for you.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Depending on the booking arrangement and the Booking agency, the
          details we share can include your name, contact and payment details,
          the names of the people accompanying you and any other information or
          preferences you specified when you made your booking arrangement.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In certain cases, we also provide some additional historical
          information about you to the Booking agency. This includes whether
          you&rsquo;ve already booked with them in the past, the number of
          completed bookings you&rsquo;ve made with LYAMII, a confirmation that
          no misconduct has been reported about you, the percentage of bookings
          you&rsquo;ve cancelled in the past or whether you&rsquo;ve given
          reviews about past bookings.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you have a query about your trip/stay, we may contact the booking
          agency to handle your request. Unless payment is made during the
          booking process, via the LYAMII website, we will forward your credit
          card details to the booking agency for further handling (assuming
          you&rsquo;ve provided us with those details).
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In cases of Booking arrangement-related claims or disputes, we may
          provide the booking agency with your contact details and other
          information about the booking process, as needed to resolve the
          situation. This can include, but might not be limited to, your email
          address and a copy of your reservation confirmation as proof that a
          booking arrangement was made or to confirm reasons for cancellation.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          For completeness, booking agencies will further process your personal
          data outside of the control of LYAMII. Booking agencies may also ask
          for additional personal data, for instance to provide additional
          services, or to comply with local restrictions. If available, please
          read the Privacy Statement of the booking agency to understand how
          they process your personal data.
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            Connectivity Providers: Please note that certain booking agencies
            may need us to share your personal data with a contracted
            Connectivity Provider to be able to finalise and administer your
            reservation. Connectivity providers act on behalf of booking
            agencies and help them to manage their reservations.
          </li>
          <li>
            Your local LYAMII office: To support the use of LYAMII services,
            your details may be shared with subsidiaries of the LYAMII corporate
            group, including for customer service.
          </li>
          <li>
            Third-party service providers: We use service providers from outside
            of the LYAMII corporate group to support us in providing our
            services. These include:
            <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
              <li>Customer support</li>
              <li>Market research</li>
              <li>
                Fraud detection and prevention (including anti-fraud screening)
              </li>
              <li>Insurance claims</li>
              <li>Payment</li>
            </ul>
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We use third parties to process payments, handle chargebacks or
          provide billing collection services. When a chargeback is requested
          for your booking arrangement, either by you or by the holder of the
          credit card used to make your reservation, we need to share certain
          reservation details with the payment service provider and the relevant
          financial institution so they can handle the chargeback. This may also
          include a copy of your reservation confirmation, or the IP address
          used to make your reservation. We may share information with relevant
          financial institutions if we consider it strictly necessary for fraud
          detection and prevention purposes.
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            Marketing services: We share personal data with advertising
            partners, including your email address, as part of marketing LYAMII
            services via third parties (to ensure that relevant advertisements
            are shown to the right audience). We use techniques such as hashing
            to enable the matching of your email address with an existing
            customer database, so that your email address cannot be used for
            other purposes. For information on other personalised advertisements
            and your choices, please read our cookie policy.
          </li>
          <li>
            Advertising partners: We use advertising partners, such as
            metasearch providers, to allow you to compare our offers with offers
            from other Online Travel Agencies (OTAs). When you make a
            reservation on LYAMII after using an advertising partner, we will
            send the details of the reservation that you made on LYAMII to that
            partner.
            <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
              <li>
                Advertisers from Third Parties and Links to Other Websites: The
                LYAMII Services may have ads from third parties and links to
                other websites and apps. Advertising partners from outside our
                site may get information about you when you use their services,
                ads, and content.
              </li>
              <li>
                Use of Third-Party Advertising Services: We give ad companies
                information that helps them show you more useful and relevant
                ads and figure out how well they&apos;re doing. When we do this,
                we never give out your name or any other information that could
                be used to find you. We instead use an advertising identifier
                like a cookie, a device identifier, or a code that we get from
                encrypting other information, like an email address, in a way
                that can&apos;t be reversed. Even though we don&apos;t tell ad
                companies exactly what you searched for, we may give them an
                advertising identifier and an idea of how much the ads they show
                you are worth so they can show you more appropriate and
                effective ads. You may also see ads from other advertisers that
                are more useful to you from some ad companies.
              </li>
            </ul>
          </li>
          <li>
            Competent authorities: We disclose personal data to law enforcement
            to the extent that it is required by law or is strictly necessary
            for the prevention, detection or prosecution of criminal acts and
            fraud, or if we are otherwise legally obliged to do so. We may need
            to further disclose personal data to competent authorities to
            protect and defend our rights or properties, or the rights and
            properties of our business partners.
          </li>
          <li>
            Business partners: We work with many business partners around the
            world. These business partners distribute and advertise LYAMII
            services, including the services and products of our booking
            agencies. When you make a reservation on one of our business
            partners&rsquo; websites or apps, certain personal data that you
            give them, such as your name and email address, your address,
            payment details and other relevant information, will be forwarded to
            us to finalise and manage your booking arrangement. If customer
            service is provided by the business partner, LYAMII will share
            relevant reservation details with them (as and when needed) to
            provide you with appropriate and efficient support.
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          When you make a reservation through one of our business
          partners&rsquo; websites, the business partners can receive certain
          parts of your personal data related to the specific reservation and
          your interactions on these partner websites. This is for their
          commercial purposes. When you make a reservation on a business
          partners&rsquo; website, please also take the time to read their
          privacy notice if you&rsquo;d like to understand how they process your
          personal data.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          For fraud detection and prevention purposes, we may also exchange
          information about our users with business partners &ndash; but only
          when strictly necessary If an insurance claim is made, concerning you
          and a Booking agency, we may provide the necessary data (including
          personal data) to the insurance company for further processing.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Partner Offer: We may present you with a &lsquo;Partner Offer. When
          you book a stay marked &lsquo;Partner Offer,&rsquo; your reservation
          will be facilitated by a booking agency who is separate from the
          accommodation you&rsquo;re booking. As part of the reservation
          process, we&rsquo;ll need to share some relevant personal data with
          this business partner. If you book a Partner Offer, please review the
          information provided in the booking process or check your reservation
          confirmation for more information about the booking agency and how
          your personal data will be further processed by them.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII is a global business. The data that we collect from you, as
          described in this Privacy Statement, could be made accessible from,
          transferred to, or stored in countries which may not have the same
          data protection laws as the country in which you initially provided
          the information. In such cases, we will protect your data as described
          in this Privacy Statement.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This may also be applicable if you are in the European Economic Area
          (EEA). Countries your data may be transferred to may not have laws
          that provide the same level of protection for your personal data as
          laws within the EEA. Where this is the case, we will put appropriate
          safeguards in place to make sure that these transfers comply with
          European privacy law.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          When your data is transferred to third-party service providers, we
          establish and implement appropriate contractual, organisational, and
          technical measures with them. This is done by putting in place
          Standard Contractual Clauses as approved by the European Commission,
          by examining the countries to which the data may be transferred, and
          by imposing specific technical and organisational security measures.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In certain specific cases, we transfer your data outside the EEA
          because it is in your interest or is necessary to conclude or perform
          the contract, we have with you. For instance, when you make a
          reservation on LYAMII or through a business partner, we might need to
          transfer your data to a booking agency or business partner who is
          located outside the EEA
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          How is personal data shared within the LYAMII corporate group?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We may receive personal data about you from other companies in the
          LYAMII (India) Private Limited. corporate group, or share your
          personal data with them, for the following purposes:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            To provide services (including to make, administer and manage
            reservations or handle payments);
          </li>
          <li>To provide customer service;</li>
          <li>
            To detect, prevent and investigate fraudulent, other illegal
            activities and data breaches;
          </li>
          <li>For analytical and product improvement purposes;</li>
          <li>
            To provide personalised offers or send you marketing with your
            consent or as otherwise permitted by applicable law;
          </li>
          <li>
            For hosting, technical support, overall maintenance and maintaining
            security of such shared data;
          </li>
          <li>To ensure compliance with applicable laws;</li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          As applicable and unless indicated otherwise, for purposes A to F,
          LYAMII relies on its legitimate interests to share and receive
          personal data. For purpose G, LYAMII relies, where applicable, on
          compliance with legal obligations (such as lawful law enforcement
          requests).
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          How is your personal data shared and further processed for insurance
          services?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          When offering insurance, LYAMII may have to use and share personal
          data that is relevant to the insurance product. This data relates to
          you as a potential or actual policyholder, the beneficiaries under a
          policy, family members, claimants and other parties involved in a
          claim:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            To provide offers, arrange insurance cover and handle insurance
            claims, some personal data, provided to us during the booking
            process, (&lsquo;General Order Data&rsquo;) may have to be shared
            with LYAMII. You may also be asked to provide additional
            information, such as names of family members or other beneficiaries
            or details about a claim (&lsquo;Insurance-Specific Data&rsquo;).
          </li>
          <li>
            If you make a claim under an insurance policy, this claim may be
            directly handled by the insurer. This means that you may be asked to
            provide personal data to submit the claim directly to them. The
            insurer will inform you accordingly at the point of collection of
            your information. When your claim is handled by the insurer, LYAMII
            may receive information about the status of your claim to provide
            you with customer support services.
          </li>
        </ul>
        <Card.Title style={{ fontSize: "2dvi" }}>
          How does LYAMII process communications that you and your booked agency
          may send via LYAMII?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII can offer you and booking agencies several ways to communicate
          about the trip/stay Services and existing booking arrangements,
          directing the communications via LYAMII. This also allows you and your
          booking agency to contact LYAMII with questions about your booking
          arrangement through the website, our apps, and the other channels that
          we make available.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII accesses communications and may use automated systems to
          review, scan, and analyse communications for the following reasons:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>Security purposes;</li>
          <li>Fraud prevention;</li>
          <li>Compliance with legal and regulatory requirements;</li>
          <li>Investigations of potential misconduct;</li>
          <li>Product development and improvement;</li>
          <li>Research;</li>
          <li>
            Customer engagement (including to provide you with information and
            offers that we believe may be of interest to you)
          </li>
          <li>Customer or technical support</li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We reserve the right to review or block the delivery of communications
          that we, in our sole discretion, believe might contain malicious
          content or spam, or pose a risk to you, booking agencies, LYAMII or
          others.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          All communications sent or received using LYAMII communication tools
          will be received and stored by LYAMII. Booking agencies and Business
          partners you&rsquo;ve booked a booking arrangement through might also
          choose to communicate with you directly by email or through other
          channels that LYAMII does not control.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          How does LYAMII make use of social media?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          At LYAMII, we use social media in separate ways. We use it to
          facilitate the use of online reservation services, but also to promote
          our booking agencies&rsquo; travel-related products and services and
          to advertise, improve and facilitate our own services.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Note that the use of social media features can result in the exchange
          of personal data between LYAMII and the social media service provider,
          as we describe below. You are free not to use any of the social media
          features available to you.
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            Sign in with your social media account. We offer you the opportunity
            to sign in to a LYAMII user account with one of your social media
            accounts. We do this to reduce the need for you to remember
            different usernames and passwords for different online services.
            After you&rsquo;ve signed in once, you&rsquo;ll be able to use your
            social media account to sign into your LYAMII account. You can
            decouple your LYAMII user account from your chosen social media
            account any time you want to.
          </li>
          <li>
            Integration of social media plugins. We have also integrated social
            media plugins into the LYAMII website and apps. This means that when
            you click or tap on one of the buttons (such as Facebook&rsquo;s
            &lsquo;Like&rsquo; button), certain information is shared with these
            social media providers. If you&rsquo;re logged into your social
            media account when you click or tap one of these buttons, your
            social media provider may relate this information to your social
            media account. Depending on your settings, they might also display
            these actions on your social media profile, to be seen by others in
            your network.
          </li>
          <li>
            Other social media services and features. We may integrate other
            social media services (like social media messaging) for you to
            interact with LYAMII or with your contacts about our services. We
            may maintain social media accounts and offer apps on several social
            media sites. Whenever you connect with LYAMII through social media,
            your social media service provider may allow you to share
            information with us.
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you choose to share, your social media provider will inform you
          about which information will be shared. For example, when you sign
          into a LYAMII user account using your social media account, certain
          information from that account may be shared with LYAMII. This includes
          your email address, your age, and the profile pictures you&rsquo;ve
          saved &ndash; depending on what you authorize in your social media
          account.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          When you register with a LYAMII social media app or connect to a
          social media messaging service without a LYAMII user account, the
          information you choose to share with us may include the basic
          information available in your social media profile (including your
          email address, status updates and a list of your contacts).
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We&rsquo;ll use this information to help provide you with the service
          you requested &ndash; for example, to forward a message you want to
          send to your contacts, or to create a personalised user experience in
          the app or on our websites. It means that if you want us to, we can
          tailor our services to suit your needs, connecting you and your
          friends with the best travel destinations and analysing and improving
          our travel-related services.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Your social media provider will be able to tell you more about how
          they use and process your data when you connect to LYAMII through
          them. This can include combining the personal data they collect when
          you use LYAMII through them with information they collect when you use
          other online platforms you have also linked to your social media
          account.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you decide to connect using your Facebook or Google account, please
          review the following links for information about how these parties use
          data they receive: Facebook and Google.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          What security and retention procedures does LYAMII put in place to
          safeguard your personal data?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We have procedures in place to prevent unauthorized access to, and the
          misuse of, personal data.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We use appropriate business systems and procedures to protect and
          safeguard the personal data you give us. We also use security
          procedures and technical and physical restrictions for accessing and
          using the personal data on our servers. Only authorized personnel are
          permitted to access personal data in the course of their work.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We&rsquo;ll keep your personal data for as long as is necessary to
          enable you to use our services or to provide our services to you
          (including maintaining any LYAMII user accounts you may have), to
          comply with applicable laws, resolve any disputes and otherwise to
          allow us to conduct our business, including to detect and prevent
          fraud and/or other illegal activities. All personal data we keep about
          you as a LYAMII customer is covered by this Privacy Statement.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          For added protection, we strongly recommend that you set up two-factor
          authentication for your LYAMII user account. This adds an extra
          authentication step, to make sure that anyone who gets hold of your
          username and password (e.g., through phishing or social engineering)
          won&rsquo;t be able to get into your account. You can set this up in
          the Security section of your account settings.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          How does LYAMII treat personal data belonging to children?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Our services aren&rsquo;t intended for children under 16 years old,
          and we&rsquo;ll never collect their data unless it&rsquo;s provided by
          (and with the consent of) a parent or guardian. The limited
          circumstances we might need to collect the personal data of children
          under 16 years old include: as part of a reservation, the purchase of
          other travel-related services, or in other exceptional circumstances
          (such as features addressed to families). Again, this will only be
          used and collected as provided by a parent or guardian and with their
          consent.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If we become aware that we&rsquo;ve processed the information of a
          child under 16 years old without the valid consent of a parent or
          guardian, we will delete it.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Your rights{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You have the following rights with respect to your personal data:{" "}
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>General rights</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You have the right to information, access, correction, deletion,
          restriction of processing, objection to processing, and data
          portability. If processing is based on your consent, you have the
          right to revoke it at any time.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Rights to object to processing of data based on legitimate interests
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Article 21(1) EU General Data Protection Regulation (EU) 2016/679
          (&ldquo;GDPR&rdquo;) gives you the right to object at any time for
          reasons arising out of your particular situation against the
          processing of personal data relating to you when your data is
          processed under Article 6(1)(e) or Article 6 (1)(f) GDPR. This also
          applies to profiling. If you object, we will no longer process your
          personal data unless we can establish compelling and legitimate
          grounds for processing that outweigh your interests, rights, and
          freedoms, or if the processing aids the enforcing, exercising, or
          defending of legal claims.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Rights to object to direct marketing
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If we process your personal data for the purpose of direct marketing
          Article 21(2) GDPR gives you the right to object at any time to the
          processing of your personal data for the purpose of direct marketing;
          this also applies to profiling, as far as it is associated with direct
          marketing.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you object to processing for the purpose of direct marketing, we
          will no longer process your personal data for this purpose.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          The Data Rights of the Citizens of California
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          You may have certain data rights under state privacy laws, such as the
          ability to request information regarding the manner in which LYAMII
          collects your personal information, to obtain your personal
          information in a portable format, and to have your personal
          information amended or deleted.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Additionally, you may have the right to opt out of the processing of
          your personal data for targeted advertising, by managing your browser
          settings or by contacting us at support@LYAMII.com
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Consent is required for customers under the age of 16 to be exposed to
          cross-context behavioural advertising. We do not serve cross-context
          behavioural ads in customers&apos; child profiles.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If we deny a data request, you to appeal the denial of any of these
          rights by completing a form that we will furnish you with. Depending
          on the data options selected, specific services might be restricted or
          inaccessible. We will typically request that you authenticate your
          request using the contact information you have already provided in
          order to safeguard your LYAMII account.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          No sale of personal information.
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Personal information of consumers, as defined by the California
          Consumer Privacy Rights Act, has not been sold by LYAMII as of now.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Sensitive Personal Information Disclosure.
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII gathers and divulges certain types of data for some business
          purposes which includes &quot;sensitive personal information&quot; but
          this Sensitive personal information is not utilized or disclosed by
          LYAMII for any purpose that is not explicitly authorized by the
          California Consumer Privacy Rights Act.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Retention Disclosure
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          In order to facilitate your ongoing utilization of LYAMII Services, we
          shall retain your personal information for the duration necessary to
          fulfil the objectives outlined in this Privacy Notice, in accordance
          with legal requirements, as otherwise instructed to you.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Non-discrimination Declaration
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Any consumer who exercises their rights under the California Consumer
          Privacy Rights Act will not be subject to discrimination at LYAMII.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          How can you exercise your rights and control the personal data
          you&rsquo;ve given to LYAMII?
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We want you to be in control of how your personal data is used by us.
          You can do this in the following ways:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            You can ask us for a copy of the personal data we hold about you,
          </li>
          <li>
            You can inform us of any changes to your personal data, or you can
            ask us to correct any of the personal data we hold about you. As
            explained below, you can make some of these changes yourself,
            online, when you have a user account,
          </li>
          <li>
            In certain situations, you can ask us to erase, block, or restrict
            the processing of the personal data we hold about you, or object to
            ways in which we are using your personal data,
          </li>
          <li>
            In certain situations, you can also ask us to send the personal data
            you have given us to a third party,
          </li>
          <li>
            Where we are using your personal data based on your consent, you are
            entitled to withdraw that consent at any time subject to applicable
            law, and
          </li>
          <li>
            Where we process your personal data based on legitimate interest or
            the public interest, you have the right to object to that use of
            your personal data at any time, subject to applicable law.
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We rely on you to make sure that your personal information is
          complete, accurate and current. Please do let us know about any
          changes to, or inaccuracies in, your personal information as soon as
          possible.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          If you have a LYAMII user account, you can access a lot of your
          personal data through our website or apps. You&rsquo;ll find the
          option to add, update or remove information we have about you in your
          account settings.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Contact by e-mail</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          When you contact us by e-mail, we will store the data you provide
          (your e-mail address, possibly your name and telephone number) so we
          can answer your questions. As far as we use our contact form to
          request entries that are not required for contacting you, we have
          always marked these as optional. This information serves to
          substantiate your inquiry and improve the handling of your request.
          Your message may be linked to various actions taken by you on the
          LYAMII website. Information collected will be solely used to provide
          you with support relating to your booking and better understand your
          feedback. A statement of this information is expressly provided on a
          voluntary basis and with your consent, art. 6 par. 1a GDPR. As far as
          this concerns information about communication channels (such as your
          e-mail address or telephone number), you also agree that we may also,
          where appropriate, contact you via this communication channel to
          answer your request. You may of course revoke this consent for the
          future at any time.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We delete the data that arises in this context after saving is no
          longer required, or limit processing if there are statutory retention
          requirements.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Use of cookies</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Cookies will be stored on your device during the use of our website.
          Cookies are small text files that are stored on your hard drive
          assigned to the browser you use, and through which the place where the
          cookie is set accrues certain information. They serve to make the
          website more user-friendly and efficient overall. We also use cookies
          to be able to identify you in subsequent visits.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This website uses the following types of cookies, whose extent and
          function are explained in the following:
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            <strong>Persistent / Permanent cookies:</strong>Persistent cookies
            helps us recognise you as an existing user, so it&rsquo;s easier for
            you to return to our sales channel without signing in again. After
            signing in, the persistent cookies stay on your browser and will be
            read when you return to our sales channel. These remain on your
            computer/device for a pre-defined period.
          </li>
          <li>
            <strong>Session cookies:</strong>Session cookies only last for as
            long as the session exists, (they are erased when the user closes
            the browser).
          </li>
        </ul>
        <Card.Title style={{ fontSize: "2dvi" }}>Data transmission</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          When we use service providers who process data outside the EU/EEA, we
          use appropriate safeguards such as standard data protection clauses
          adopted by the EU, or an EU adequacy decision to transfer and process
          your personal data outside of the EU.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Data security</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We have taken extensive technical and operational security precautions
          to protect your data from being accidentally or intentionally
          manipulated, lost, destroyed, or accessed by unauthorized persons. Our
          security measures are reviewed regularly and updated in keeping with
          technological advances.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Data Storage</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We retain your personal data for as long as it is required for you to
          use our Services, to provide our Services to you, to comply with laws.
          We will anonymize and/or aggregate your data if we intend to use it
          for analytical statistical purposes over longer periods.
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>Data Retention</Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We will retain the personal information we collect from you where we
          have a justifiable business need to do so and/or for as long as is
          needed to fulfil the purposes outlined in this Privacy Policy, unless
          a longer retention period is required or permitted by law (such as
          tax, legal, accounting, or other purposes).
        </div>
        <Card.Title style={{ fontSize: "2dvi" }}>
          Notice for Individuals Located in Europe
        </Card.Title>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          &lsquo;If you are in the European Economic Area, United Kingdom and/or
          Switzerland, the policies in this section are specific to you. They
          describe how we market to you, our legal bases for processing your
          information and your rights.&rsquo;
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          This section only applies to individuals that access or use our
          Services while located in the European Economic Area, United Kingdom
          and/or Switzerland (collectively &ldquo;Europe&rdquo;). We may ask you
          to identify which country you are in when you use some of the Services
          or we may rely on your IP address to identify in which country you are
          located. When we rely on your IP address, we cannot apply the terms of
          this section to any individual that masks or otherwise hides their
          location information from us so as not to appear located in Europe.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          We are a controller regarding any personal information collected from
          individuals accessing or using our Services. A
          &ldquo;controller&rdquo; is an entity that determines the purposes for
          which and the way any personal information is processed.
        </div>
        <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <li>
            Marketing. We will only contact individuals located in Europe by
            electronic means (including email or SMS) based on our legitimate
            interests, as permitted by applicable law or the individual&rsquo;s
            consent. When we rely on legitimate interest, we will only send you
            information about our Services that are like those which were the
            subject of a previous offer or negotiations of an offer to you. If
            you do not want us to use your personal information in this way or
            to disclose your personal information to third parties for marketing
            purposes. You can object to direct marketing at any time and free of
            charge. Direct marketing includes any communications to you that are
            only based on advertising or promoting products and services.
          </li>
          <li>
            Legal Bases for Processing. Our legal bases for the processing
            activities identified in this Policy are:
            <ul className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
              <li>
                We rely on our contract with you as our legal basis for
                processing in relation to the following: to provide and maintain
                our services, to provide customer support or respond to you, to
                enforce compliance with our Terms, agreements, or policies, and
                to share your information with service providers.
              </li>
              <li>
                Depending on the specific circumstances, we rely on your consent
                or legitimate interest in relation to the following processing
                activities: to send you marketing and promotional emails, to
                advise you of other services, and to share your information with
                business partners, sponsors, or within our corporate
                organization.
              </li>
              <li>
                We rely on legitimate interest in relation to the following
                processing activities: to personalize your experience, for
                research and development, and when we share your information
                with board members or volunteers or in relation to business
                transfers or bankruptcy.
              </li>
            </ul>
          </li>
        </ul>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          How to contact us{" "}
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          LYAMII&rsquo;s Data Protection Officer is responsible for monitoring
          compliance with relevant legislation in relation to the protection of
          personal data. Please contact us at support@lyamii.com&nbsp;You can
          contact us for any concerns or questions about your personal
          information, those we process or store.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          Our cookie statement may also be updated from time to time. If these
          updates are substantial, particularly relevant to you or impact your
          data protection rights, we&rsquo;ll contact you about them. However,
          we recommend that you visit this page regularly to stay up to date
          with any other (less substantial or relevant) updates.
        </div>
        <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
          <br />
        </div>
      </Col>
    </section>
  );
};

export default PrivacyPolicies;
