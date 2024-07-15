import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./MapAndEscape.module.scss";
import Globe from "../../common/globe/Globe";
import { IoIosPaperPlane } from "react-icons/io";
import { escapeRoute } from "../../common/enum/escapePlanRoute";

import About from "../../../Assets/About.png";
import "./MapAndEscape.module.scss";
import { useDispatch } from "react-redux";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { useHistory } from "react-router-dom";

const MapAndEscape: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = [
    "Domestic Flights",
    "Lounge Access",
    "Airport drop-pickup",
    "Currency Exchange ",
    "Travel Insurance",
    "Health Insurance",
    "UPI Wallet",
    "Accommodations",
    "Cuisines",
    "Transfers",
    "Guides",
    "Entry Tickets ",
    "Show Tickets",
    "Activities",
    "Round the clock Multilingual Support",
  ];
  const fetchTours = (location: string) => {
    dispatch({
      type: SET_SELECTED_LOCATION,
      payload: {
        city: location,
        id: "",
        value: "",
        coordinates: "",
        color: "",
      },
    });
    window.scroll(0, 0);
    history.push("/explore");
  };
  const countries = [
    {
      name: "Norway",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1UIVoIsZB1I6_2ku1ci6JwGDzmlwYd-8u",
    },
    {
      name: "India",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1a0ihfVPTywsq2S4GWYEaM_fg28kazDc1",
    },
    {
      name: "Egypt",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1jNjhj41BLQ8zs3v1_BV66c4JXWzar3mg",
    },
    {
      name: "Malaysia",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1XAq3t4SkFaXhN59ea6IRBG1jObYdRGSU",
    },
    {
      name: "Japan",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1QXyTFtnbOypR8gIhYhEgoLj11nfI6Mgg",
    },
    {
      name: "France",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1PIUQRnR6A7vT1TOWhKCNbVC7bUgeASGi",
    },
    {
      name: "Iceland",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1UwGr3tGAqRLsp0DyiQwB9JN_Rb1RRzcf",
    },
    {
      name: "Norway",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1UIVoIsZB1I6_2ku1ci6JwGDzmlwYd-8u",
    },
    {
      name: "Egypt",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1jNjhj41BLQ8zs3v1_BV66c4JXWzar3mg",
    },
    {
      name: "Malaysia",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1XAq3t4SkFaXhN59ea6IRBG1jObYdRGSU",
    },
    {
      name: "Japan",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1QXyTFtnbOypR8gIhYhEgoLj11nfI6Mgg",
    },
    {
      name: "France",
      imgSrc:
        "https://drive.google.com/thumbnail?sz=w2000&id=1PIUQRnR6A7vT1TOWhKCNbVC7bUgeASGi",
    },
  ];

  return (
    <div
      style={{
        padding: 20,
        textAlign: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${About})`,
      }}
    >
      <div className="about-us">
        <h2
          style={{
            fontSize: 45,
            fontWeight: "400",
            marginBottom: 40,
            color: "#686868",
            textAlign: "center",
            position: "relative",
          }}
        >
          About Us
          <span
            style={{
              display: "block",
              width: 90,
              height: 6,
              backgroundColor: "#879DFF",
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "0px 0px 5px 5px",
              opacity: 0.7,
            }}
          />
        </h2>
        <p
          style={{
            fontSize: 20,
            fontWeight: "400",
            textAlign: "center",
            marginInline: 60,
            color: "#000000",
          }}
        >
          Driven by a shared belief that travel has the power to broaden lifes,
          and is the key to self exploration, a group of passionate travel
          enthusiasts from India set out to develop Lyamii, a platform to
          simplify foreign tourism with pre-loaded vacation chains. Team Lyamii
          harnessed the power of technology and the love for exploration to
          create a complete architecture to benefit the passionate travellers
          worldwide. Currently Lyamii covers 50+ countries connecting more than
          300+ destinations around the globe. So far Lyamii has opened two
          office locations, 18 bootcamps and 64 helpdesks across India. Lyamii
          also has received the Startup India recognition from the Indian
          government, DIPP167414. Team Lyamii is composed of diverse
          individuals, from seasoned world travellers, tech heads to active
          customer support and friendly volunteers, we have assembled a
          collective of talents who bring unique perspectives and skills to the
          platform.
        </p>
        <p
          style={{
            fontSize: 20,
            fontWeight: "400",
            textAlign: "center",
            marginInline: 60,
            marginBottom: 60,
            marginTop: 40,
            color: "#000000",
          }}
        >
          Lyamii connects all dots of a foreign tour, from domestic flights to
          accommodations and from currency exchange to authentic cultural
          delights, our users enjoy seamless vacations away from home. With four
          wings and four houses our operations team is more than just a
          department; it's a commitment to excellence and is dedicated to a
          seamless experience for the user from the beginning to the end with
          precision and care. It's 2024, live more, choose your journey and
          discover new dimensions of life with Lyamii.
        </p>
      </div>
      <div style={{ display: "flex", overflowX: "auto", padding: "10px 0" }}>
        {countries.map((country, index) => (
          <div key={index} style={{ flex: "0 0 auto", margin: "0 10px" }}>
            <img
              onClick={() => fetchTours(country.name)}
              src={country.imgSrc}
              alt={country.name}
              style={{
                width: 211,
                height: 137,
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p
              onClick={() => fetchTours(country.name)}
              style={{
                marginTop: 5,
                fontSize: 20,
                fontWeight: "700",
                color: "#879DFF",
                textAlign: "center",
              }}
            >
              {country.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapAndEscape;
