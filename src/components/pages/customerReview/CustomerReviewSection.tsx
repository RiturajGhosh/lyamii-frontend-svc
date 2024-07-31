import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { selectCustomerReview } from "../../../state/selectors/selectCustomerReview";
import { useSelector } from "react-redux";
import { reviews } from "../../common/enum/enum";

const CustomerReviewSection: FC = () => {
  const history = useHistory();
  // const reviews = useSelector(selectCustomerReview);

  return (
    <div style={styles.section} className="reviewImage">
      <div style={styles.header}>
        <h2
          style={{
            fontSize: 45,
            fontWeight: "400",
            marginBottom: 40,
            color: "black",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            onClick={() => history.push("/customerReviews")}
            className="col-md-3 col-sm-4 col-lg-2 col-sx-2 col-6"
            src={require("../../../Assets/reviews.png")}
          />
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
      </div>
      <div style={styles.reviewContainer}>
        {reviews.map((review, index) => (
          <div key={index} style={styles.reviewCard}>
            <img
              loading="lazy"
              src={review.image}
              // alt={review.city}
              style={styles.reviewImage}
            />
            <div style={styles.reviewContent}>
              {/* <h3 style={styles.city}>{review.city}</h3>
              <div style={styles.stars}>{"★".repeat(review.rating)}</div> */}
              <p style={styles.reviewText}>{review.review}</p>
              <p style={styles.reviewerName}>{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "40px 20px",
    color: "#fff",
    textAlign: "center" as const, // 'as const' ensures the correct type
  },
  header: {
    marginBottom: "40px",
  },
  reviewContainer: {
    display: "flex",
    overflowX: "auto",
    padding: "20px 0",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
  },
  reviewCard: {
    flex: "0 0 400px",
    background: "#FFFFFF",
    marginRight: "20px",
    padding: "20px",
    borderRadius: "0px",
    textAlign: "left" as const, // 'as const' ensures the correct type
    scrollSnapAlign: "start",
    display: "flex",
    alignItems: "center",
  },
  reviewImage: {
    borderRadius: "50%",
    width: 72.9,
    height: 79,
    marginRight: "20px",
  },
  reviewContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  city: {
    fontSize: "23px",
    fontWeight: "700",
    color: "black",
    margin: "0",
  },
  stars: {
    color: "#879DFF",
    margin: "10px 0",
  },
  reviewText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
  },
  reviewerName: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },
};

export default CustomerReviewSection;
