import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RegistrationForm from "../registrationForm/RegistrationForm";
import { RegistrationDetailDto } from "../../../state/actions/types/registrationType";
import { registration } from "../../../api/registration";
import { imageUpload } from "../../../api/imageUpload";

const Hostel: FC = () => {
  const [detail, setDetail] = useState<RegistrationDetailDto>({
    stayName: "",
    stayType: "HOSTEL",
    countryDisplayCode: "",
    pincode: 0,
    address: "",
    contactNumber: "",
    emailAddress: "",
    hostName: "",
    marketingContact: "",
    opsContact: "",
    amenities: [],
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const fileUpload = (event: any) => {
    const files = event.target.files;
    const filesLength = files.length;
    console.log("event", files);
    if (filesLength > 0) {
      imageUpload(files);
      // let imgSrc = URL.createObjectURL(files[0]) || "";
      // let imafePreviewElement = document.querySelector("image") || "";
      // imafePreviewElement.src = imgSrc;
      // imafePreviewElement?.style.display = "block";
    }
  };
  const submit = async () => {
    try {
      const response = await registration(detail);
      history.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <RegistrationForm
      detail={detail}
      stayType={"HOSTEL"}
      setDetailHandler={(detail: RegistrationDetailDto) => setDetail(detail)}
      submit={() => submit()}
      fileUpload={fileUpload}
    />
  );
};

export default Hostel;
