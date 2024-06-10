import React, { FC } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { internationalTours } from "../enum/enum";
const AboutUs: FC = () => {
  return (
    <Col md={11} lg={11} className="position-relative">
      <Row className="" id="#aboutus">
        <Col className="mt-5 justify-content-end align-self-end d-flex">
          <span className="display-3 text-dark fw-bold">AboutUs</span>
        </Col>
        <div className="product-list" onScroll={(e) => {}}>
          {internationalTours.map((option, idx) => (
            <Col onClick={() => {}} key={idx} sm={12} xs={12}>
              <Card className={`my-2 mx-1`} style={{ background: "#d9b246" }}>
                <Card.Body className="p-0 w-md-75 justify-content-end">
                  <p className="text-wrap text-white p-3">
                    Driven by a shared belief that travel has the power to
                    broaden lifes, and is the key to self exploration, a group
                    of passionate travel enthusiasts from India set out to
                    develop Lyamii, a platform to simplify foreign tourism
                    presenting every possible corner of our planet on your
                    screen. Team Lyamii harnessed the power of technology and
                    the love for exploration to create a complete system to
                    benefit the passionate travellers worldwide. Lyamii started
                    its journey as a world tourism business for Indian
                    travellers back in 2022, catering world tours in 15
                    countries. With time and love from our users we grew bigger
                    and started operating tours in 35 countries online from May,
                    2023. Indian tours for our foreign guests went live from
                    15th August, 2023. In 2024 we're looking forward to expand
                    our vacation chains in all continents. Currently Lyamii
                    covers 50+ countries connecting more than 300+ destinations
                    around the globe. So far Lyamii has opened two office
                    locations, 18 bootcamps and 64 helpdesks across India. With
                    a completely upgraded Java backend Lyamii also has received
                    the startup recognition from the Indian government. Our
                    Startup Recognition No is DIPP167414. Team Lyamii is
                    composed of diverse individuals, from seasoned world
                    travellers, tech heads to active customer support and
                    friendly volunteers, we have assembled a collective of
                    talents who bring unique perspectives and skills to the
                    platform.
                  </p>
                  <p className="text-wrap text-dark p-3 pt-0">
                    Lyamii covers all possible details of a foreign tour, from
                    domestic flights to accommodations and from entry passes to
                    authentic culinary experiences. From easy check-ins to the
                    support of offline volunteers on the go, our users
                    experience seamless vacations away from home. In Lyamii the
                    operations team is called Nexus. Our Nexus team is more than
                    just a department; it's a commitment to excellence. It has 4
                    wings and 4 houses. The four wings are Documentation &
                    Verification, Booking & Cancellation, Payment & Refund,
                    Shipment & Warehouse. The wings handle the backend
                    operations, and The houses work on Live Tour Assistance &
                    Problem Solving. Four houses are virtually formed to provide
                    round-the-clock multilingual support to our Users worldwide.
                    Nexus operates a chain of actions for the traveller, and is
                    dedicated to a seamless experience for the user from the
                    beginning to the end with precision and care. Lyamii is
                    always there to ensure the travellers' needs are met at
                    every stage of their Journey.
                  </p>
                  <p className="text-wrap text-dark p-3 pt-0">
                    The travellers unit of Lyamii carefully curated a selection
                    of backpacking tours that take you off the beaten path and
                    allow you to truly immerse yourself in the local culture.
                    Whether you're exploring the ancient ruins of Greece,
                    cruising through the breathtaking landscapes of New Zealand,
                    or traversing the vibrant markets of Egypt, our tours offer
                    an authentic and enriching experience that goes beyond
                    typical tourist attractions. We understand that
                    affordability is a crucial factor when it comes to travel.
                    That's why we have worked tirelessly to create partnerships
                    with local businesses, accommodations, and transportation
                    providers in each country, allowing us to offer competitive
                    prices without compromising on quality. Our aim is to make
                    world tourism accessible to everyone, regardless of their
                    budget, so that more people can experience the joy of
                    discovering new places and forging lifelong memories.
                  </p>
                  <p className="text-wrap text-dark p-3 pt-0">
                    At Lyamii, we also prioritise sustainability and responsible
                    tourism practices. We strive to minimise our environmental
                    impact by promoting eco-friendly accommodations, supporting
                    local conservation efforts, and encouraging responsible
                    behaviour among our travellers. We believe that by
                    experiencing the beauty of our planet firsthand, we can
                    inspire a deeper appreciation and commitment to its
                    preservation. Join us on this incredible adventure as we
                    connect countries, break down barriers, and make world
                    tourism affordable for everyone. Let Lyamii be your trusted
                    companion as you embark on a journey of discovery, cultural
                    exchange, and personal growth. Together, let's create
                    memories that will last a lifetime and contribute to a more
                    interconnected and compassionate world.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </Col>
  );
};

export default AboutUs;
