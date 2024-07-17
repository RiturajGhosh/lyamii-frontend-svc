import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { selectCustomerReview } from "../../../state/selectors/selectCustomerReview";
import { useSelector } from "react-redux";

const CustomerReviewSection: FC = () => {
  const history = useHistory();
  // const reviews = useSelector(selectCustomerReview);
  const reviews = [
    {
      city: "Taipei",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww/100",
      review:
        "L'hospitalité à son meilleur. C'est la première impression que je donne en expliquant mes vacances en Inde. J'ai rencontré 8 bénévoles Lyamii tout au long de notre voyage, et chacun d'entre eux a été très humble et serviable.",
      name: "Susan Day",
      rating: 5,
    },
    {
      city: "Kaohsiung",
      image:
        "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww/100",
      review:
        "I want to thank lyamii for the day-to-day assistance I received during my 30 days of solo travelling in India. It was my fourth time visiting your country. My first three trips looked very funny when I compared those with my last tour. ",
      name: "Roger Brooks",
      rating: 5,
    },
    {
      city: "Barcelona",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww/100",
      review:
        "He viajado a 67 países hasta ahora y desearía tener a Lyamii en otros países también. Toda la asistencia fue tan equilibrada que nunca me di cuenta de que estaba solo en un país nuevo.",
      name: "James Fisher",
      rating: 5,
    },
    {
      city: "Paris",
      image:
        "https://images.unsplash.com/photo-1669475535925-a011d7c31d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
      review:
        "India is definitely a vlogger’s paradise, from food to people, architecture to nature. I loved all of it. And I'm definitely enjoying the love I'm receiving on my recent contents on youtube from my Indian friends. Thank you Lyamii.",
      name: "Watson",
      rating: 5,
    },
    {
      city: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1569443693539-175ea9f007e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRva3lvfGVufDB8fDB8fHwwfHw%3D/100",
      review:
        "Samaptika, nuestra voluntaria asignada en Jaipur y mi hija de 6 años se hicieron mejores amigas. Ella trajo un juguete hecho a mano para mi hija en nuestro último día en Jaipur. Fue un momento de pura joya para nosotros.",
      name: "Michael Chen",
      rating: 5,
    },
    {
      city: "Rome",
      image:
        "https://images.unsplash.com/photo-1684966609761-13027fd2a5c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
      review:
        "Each day of my 50 days backpacking tour was unique in its own way. Without Lyamii I could never imagine how multicultural this country is. And to my volunteer friends, I wish I had enough money to host you all in my hometown. Jk, we will meet again soon.",
      name: "Sophia Rossi",
      rating: 5,
    },
    {
      city: "New York City",
      image:
        "https://plus.unsplash.com/premium_photo-1668638804974-b0053235b8f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      review:
        "All the properties we stayed in were very comforting and photogenic. We literally spent most of our days within our boutique hotels and honestly loved every bit of it, the hosts felt like home. The forts we stayed in Rajasthan were top notch.",
      name: "Daniel Lee",
      rating: 5,
    },
    {
      city: "Sydney",
      image:
        "https://images.unsplash.com/photo-1669475535978-7479ef74e14f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      review:
        "Les séjours et les transferts étaient bons, mais la nourriture était la meilleure partie. Saveurs après saveurs. Nous n’aurions jamais imaginé que des aliments aussi savoureux puissent exister. Buffets de cuisine, friandises surprises et promenades culinaires de rue avec des bénévoles, chaque jour était une fête pour un gourmet comme moi. ",
      name: "Olivia Johnson",
      rating: 5,
    },
  ];

  return (
    <div style={styles.section} className="reviewImage">
      <div style={styles.header}>
        <h2
          onClick={() => history.push("/customerReviews")}
          style={{
            fontSize: 45,
            fontWeight: "400",
            marginBottom: 40,
            color: "black",
            textAlign: "center",
            position: "relative",
          }}
        >
          Reviews
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
              src={review.image}
              alt={review.city}
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
