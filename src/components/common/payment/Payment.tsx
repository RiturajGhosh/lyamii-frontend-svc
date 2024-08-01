import axios from "axios";
import react, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../../state/selectors/selectUserData";
import { UserDataDto } from "../../../state/actions/types/userDataActionType";
import {
  selctedTourDepartureDate,
  selectTourData,
  tourData,
} from "../../../state/selectors/selectTourData";
import SuccessModal from "../successModal/SuccessModal";
import { selectedTourDataDto } from "../../../state/actions/types/tourDataActionType";
import { SET_UPCOMING_TOURS } from "../../../state/actions/types/upcomingToursDataType";
import { useHistory } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";
declare const Razorpay: any;
type PaymentDto = {
  userDetail: any;
};
const Payment: FC<PaymentDto> = ({ userDetail }) => {
  // const userData = useSelector(selectUserData);
  const history = useHistory();
  const departureDate = useSelector(selctedTourDepartureDate);
  const dispatch = useDispatch();
  const tourData: selectedTourDataDto = useSelector(selectTourData);
  const [isDisabled, setIsDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const money = "24 USD";
  const createOrder = async () => {
    return await axios.post(
      `https://backend.lyamii.com/api/razorpay/createOrder?amount=${money
        .split(" ")[0]
        .replace(/,/g, "")}&&currency=${money.split(" ")[1]}`
    );
  };
  const setData = (paymentData: any) => {
    const obj = {
      packageId: tourData.packageId,
      prfDepatureDate: departureDate,
      packageDetailsResponse: tourData,
      paymentDetail: paymentData,
    };
    localStorage.setItem("upcomingTours", JSON.stringify(obj));
    dispatch({
      type: SET_UPCOMING_TOURS,
      payload: {
        packageId: tourData.packageId,
        prfDepatureDate: departureDate,
        packageDetailsResponse: tourData,
        paymentDetail: paymentData,
      },
    });
  };
  const handlePayment = async () => {
    const order = await createOrder();
    console.log(order.data.id);
    const options = {
      key: "rzp_live_lYUSgd2cL33ry3",
      amount: money.split(" ")[0],
      currency: money.split(" ")[1],
      name: "Lyamii",
      description: `This ${tourData?.title} with packageID ${tourData.packageId} is booked by ${userDetail?.userFullName} on Dated ${departureDate}`,
      image: "https://lyamii.com/static/media/logo.1f8ab1a3952e8db84941.png",
      order_id: order.data.id,
      handler: function (response: any) {
        console.log("response", response);
        // if (response.razorpay_payment_id?.length > 0) {
        const paymentData = {
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        };
        setData(paymentData);
        if (response.razorpay_payment_id) {
          setOpen(true);
        } else {
          setError(true);
        }
        // } else {
        //   <PopupModal
        //     message={"Your Booking is Failed"}
        //     type="ERROR"
        //     open={true}
        //   />;
        // }
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
        name: userDetail.userFullName,
        email: userDetail?.email,
        contact: userDetail?.phoneNumber,
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response: any) {});

    rzp1.open();
  };

  useEffect(() => {
    setIsDisabled(
      tourData?.packageId?.length < 4 ||
        userDetail?.userFullName?.length < 4 ||
        userDetail?.email?.length < 14 ||
        userDetail?.phoneNumber?.length < 10
    );
  });
  return (
    <div className="d-flex justify-content-end">
      <button
        className="align-self-end px-3"
        onClick={() => {
          handlePayment();
        }}
        disabled={isDisabled}
        style={{
          height: 48,
          fontSize: 28,
          fontWeight: "700",
          color: "#FFFFFF",
          backgroundColor: isDisabled ? "#aeaeae" : "#4A90E2",
          borderRadius: 0,
          borderWidth: 0,
        }}
      >
        Place Order
      </button>
      <SuccessModal
        message={"Your Booking is Successful"}
        type="Success"
        open={open}
        onClick={() => history.push("/profile/trips/upcoming")}
      />
      <ErrorModal
        message={"Your Booking is Failed"}
        type="Success"
        open={error}
        onClick={() => setError(false)}
      />
    </div>
  );
};

export default Payment;
