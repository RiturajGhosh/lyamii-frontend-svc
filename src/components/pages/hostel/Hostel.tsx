import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import RegistrationForm from "../registrationForm/RegistrationForm";
import { RegistrationDetailDto } from "../../../state/actions/types/registrationType";
import { registration } from "../../../api/registration";
import { imageUploadApi } from "../../../api/imageUploadApi";
import { getBase64 } from "../../../utils/getBase64";

const Hostel: FC = () => {
  const [detail, setDetail] = useState<RegistrationDetailDto>({
    stayName: "",
    stayType: "HOSTEL",
    countryDisplayCode: "",
    pincode: 0,
    address: "karnwal house",
    contactNumber: "9058004056",
    emailAddress: "",
    hostName: "",
    marketingContact: "",
    opsContact: "",
    amenities: [],
  });
  const history = useHistory();

  const fileUpload = (type: string, event: any) => {
    const files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    console.log(files.name.split(".").pop());
    getBase64(files).then((result: any) => {
      imageUploadApi({
        file: JSON.stringify(result).split(",")[1].split("=")[0],
        type: type,
        fileName: files.name,
        fileType: files.name.split(".").pop(),
      });
    });
  };
  const submit = async () => {
    try {
      const response = await registration(detail);
      response.status === 201 && history.push("/submitted");
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
