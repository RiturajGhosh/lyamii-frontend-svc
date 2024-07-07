import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./MapAndEscape.module.scss";
import Globe from "../../common/globe/Globe";
import { IoIosPaperPlane } from "react-icons/io";
import { escapeRoute } from "../../common/enum/escapePlanRoute";

import About from "../../../Assets/About.png";
import "./MapAndEscape.module.scss";
const MapAndEscape: FC = () => {
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

  const countries = [
    {
      name: "America",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1673639729701-c903b5d2be4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "India",
      imgSrc:
        "https://images.unsplash.com/photo-1565038181000-2c159d3fc28d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1lcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Europe",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXVyb3BlfGVufDB8fDB8fHww",
    },
    {
      name: "Japan",
      imgSrc:
        "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXVyb3BlfGVufDB8fDB8fHww",
    },
    {
      name: "Sweden",
      imgSrc:
        "https://images.unsplash.com/photo-1610286378271-ca4ed49e101c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXVyb3BlfGVufDB8fDB8fHww",
    },
    {
      name: "North America",
      imgSrc:
        "https://images.unsplash.com/photo-1714259523626-2c5487107dc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "America",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1673639729701-c903b5d2be4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "India",
      imgSrc:
        "https://images.unsplash.com/photo-1565038181000-2c159d3fc28d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1lcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Europe",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXVyb3BlfGVufDB8fDB8fHww",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate veli
        </p>
      </div>
      <div style={{ display: "flex", overflowX: "auto", padding: "10px 0" }}>
        {countries.map((country, index) => (
          <div key={index} style={{ flex: "0 0 auto", margin: "0 10px" }}>
            <img
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
