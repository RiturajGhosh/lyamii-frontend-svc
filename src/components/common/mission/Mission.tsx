import React, { FC } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { internationalTours } from "../enum/enum";
import { useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";

const Mission: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  return (
    <Row md={12} lg={12} className="position-relative">
      {screenSize.screenSize > 767 && <Col className="col-1"></Col>}
      <Col md={11} lg={11} className="col-12 p-0 m-0">
        <Col className="mt-3" id="#mission">
          <Col className="mt-5 mx-4 justify-content-start align-self-end d-flex">
            <span className="display-3 text-dark text-start fw-bold">
              Mission
            </span>
          </Col>
          <Col className="product-list" onScroll={(e) => {}}>
            {internationalTours.map((option, idx) => (
              <Col onClick={() => {}} key={idx} sm={12} xs={12}>
                <Card className={`my-2 mx-1`} style={{ background: "#d9b246" }}>
                  <Card.Body className="p-0">
                    <p className="text-wrap text-dark p-3">
                      Throughout history, our ancestors traversed vast terrains,
                      crossing continents in search of sustenance, shelter, and
                      new opportunities. The spirit of exploration flows within
                      our DNA, intertwining with our curiosity and thirst for
                      knowledge. It is encoded in the very fabric of our being,
                      urging us to step outside of our comfort zones and immerse
                      ourselves in the wonders that lie beyond our horizons.
                      This genetic connection with travel fuels our desire to
                      encounter diverse cultures, witness awe-inspiring
                      landscapes, and engage with the intricate tapestry of
                      humanity. With boundless vision and an insatiable
                      curiosity for the World, we're aiming to redefine the
                      world of World Tourism and inspire a new generation of
                      Wanderers. We believe in the growth of the Travellers
                      community, and its impact around the globe.{" "}
                    </p>
                    <p className="text-wrap text-dark p-3">
                      Lyamii started its journey with a vision, a vision to
                      bring some major upgrades in the world of world tourism
                      for the betterment of our backpacking community worldwide.
                      With many interactions with foreign backpackers visiting
                      India we realised the diverse energy our country contains
                      is very powerful and different. Our guests were lacking a
                      little assistance in order to experience the best of this
                      ancient land. Keeping this problem in mind, on Lyamii we
                      have simplified foreign destinations with pre-loaded
                      vacation chains. Besides travelling abroad often carries
                      the misconception of being prohibitively expensive.
                      However, with strategic planning and a backpacker's
                      spirit, exploring foreign lands can be surprisingly
                      affordable. Lyamii has connected hundreds of hostels in
                      multiple nations and promises to cater affordable foreign
                      backpacking tours for our traveller friends.
                    </p>
                    <p className="text-wrap text-dark p-3">
                      On our platform we cater foreign destinations in two
                      segments, the Incredible India segment covers backpacking
                      and luxury tours in India for foreign travellers and the
                      Beyond Obvious segment covers backpacking tours outside
                      India for our Indian explorers. To register a vacation the
                      visitor only needs to sign up and generate his/her own
                      Traveller ID on Lyamii, then proceed to verify the ID with
                      the passport. Once the visitor has the identity verified
                      they now have access to buyout any vacation from the list
                      directly. Visitors with yet to verify accounts do not have
                      access to the direct purchase option, although the visitor
                      may place the book now option to initiate the process. The
                      desired vacation will be reflected on the Upcoming Tours
                      section once the traveller buys or book an item. From
                      Lyamii the confirmation call, video call presentation and
                      documentation will be conducted accordingly. After the
                      documentation the Tour ID will be shared with the user and
                      hosts. This ID will cover every possible requirement of
                      the traveller once the tour gets live.
                    </p>
                    <p className="text-wrap text-dark p-3">
                      Team Lyamii will take care of your air tickets, travel
                      insurance, currency exchange, energetic, comfortable &
                      safe accommodations, sidescenes, activities like
                      snorkelling, kayaking, desert stay, morning hiking, local
                      food tours and others. We work with no middleman to
                      guarantee the best pricing in every segment. Join us to
                      execute your perfect vacation abroad. To expand our reach
                      and capabilities, Lyamii partners with key stakeholders in
                      the tourism industry, including hostels, hotels, local
                      guides, and transportation providers. These strategic
                      alliances enable us to offer competitive prices, exclusive
                      deals, and a wide array of options to our customers.
                      Moreover, collaborating with local businesses in various
                      destinations allows us to offer authentic experiences,
                      further enhancing our appeal to international travelers.
                      Lyamii leverages cutting-edge technology to streamline
                      operations and enhance user experience. Our online
                      platform, equipped with advanced booking systems,
                      real-time analytics and recommendations, ensures
                      efficiency and reliability. By automating routine
                      processes and utilising data analytics, Lyamii can handle
                      increased customer volumes without compromising on service
                      quality.
                    </p>
                    <p className="text-wrap text-dark p-3">
                      During the ongoing tour Lyamii updates the user dashboard
                      with assigned volunteer details and information on the
                      upcoming sightseeings. The dashboard is your one stop
                      interface. From receiving live updates on the day to day
                      itinerary to verification codes and 24×7 support, now also
                      stay informed on local guidelines, customs on your
                      dashboard. The live tour dashboard also offers handpicked
                      souvenir items and delivery updates of Lyamii boxes. With
                      the tourID you enjoy basic language lessons on your user
                      dashboard on a live tour. In the Lyamii box, a mini
                      language kit also gets delivered to boost your confidence
                      in foreign language while you're exploring overseas. Be
                      rest assured you face zero barriers communicating with
                      Lyamii's multilingual support, that is always there to
                      ensure the smoothness of your journey. Our support team is
                      dedicated to providing exceptional customer service and
                      ensuring that every aspect of your backpacking journey is
                      smooth and memorable. From detailed itineraries to expert
                      local guides, we go above and beyond to ensure that your
                      trip with Lyamii is nothing short of extraordinary.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

export default Mission;
