import axios from "axios";
import react, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../../state/selectors/selectUserData";
import { UserDataDto } from "../../../state/actions/types/userDataActionType";
import {
  selctedTourDepartureDate,
  selectTourData,
  tourData,
} from "../../../state/selectors/selectTourData";
import PopupModal from "../../common/popupModal/PopupModal";
import { selectedTourDataDto } from "../../../state/actions/types/tourDataActionType";
import { SET_UPCOMING_TOURS } from "../../../state/actions/types/upcomingToursDataType";
declare const Razorpay: any;

const Payment: FC = (placeOrder) => {
  const userData = useSelector(selectUserData);
  const departureData = useSelector(selctedTourDepartureDate);
  const dispatch = useDispatch();
  const tourData: selectedTourDataDto = useSelector(selectTourData);
  const money = "24 USD";
  const createOrder = async () => {
    return await axios.post(
      `http://localhost:8081/api/razorpay/createOrder?amount=${money
        .split(" ")[0]
        .replace(/,/g, "")}&&currency=${money.split(" ")[1]}`
    );
  };

  const handlePayment = async () => {
    const order = await createOrder();
    console.log(order.data.id);
    const options = {
      key: "rzp_test_5Ex2xyexn8bBiw",
      amount: money.split(" ")[0],
      currency: money.split(" ")[1],
      name: "Lyamii",
      description: tourData.packageName,
      image: "https://lyamii.com/static/media/logo.1f8ab1a3952e8db84941.png",
      order_id: order.data.id,
      handler: function (response: any) {
        console.log(response);
        const paymentData = {
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        };
        dispatch({
          type: SET_UPCOMING_TOURS,
          payload: {
            packageId: tourData.packageId,
            prfDepatureDate: departureData,
            packageDetailsResponse: tourData,
            paymentDetail: paymentData,
          },
        });
        // Send payment details to the backend for verification
        // axios
        //   .post("/api/razorpay/paymentVerification", paymentData)
        //   .then((res) => {
        //     <PopupModal message={res.statusText} type="ERROR" open={true} />;
        //   })
        //   .catch((err) => {
        //     <PopupModal message={err} type="ERROR" open={true} />;
        //     console.error(err);
        //   });
      },
      prefill: {
        name: userData?.userData?.userFullName,
        email: userData?.userData?.email,
        contact: userData?.userData?.phoneNumber,
      },
      notes: {
        address: "ABC, Delhi",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response: any) {});

    rzp1.open();
  };
  return (
    <div className="d-flex justify-content-end">
      <button
        className="align-self-end px-3"
        onClick={() => {
          if (
            userData.userData.email.length > 0 &&
            userData.userData.phoneNumber.length > 0
          )
            handlePayment();
        }}
        style={{
          height: 48,
          fontSize: 28,
          fontWeight: "700",
          color: "#FFFFFF",
          backgroundColor: "#879DFF",
          borderRadius: 0,
          borderWidth: 0,
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Payment;
