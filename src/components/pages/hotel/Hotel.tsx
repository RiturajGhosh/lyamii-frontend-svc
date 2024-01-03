import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import RegistrationForm from "../registrationForm/RegistrationForm";
import { RegistrationDetailDto } from "../../../state/actions/types/registrationType";
import { registration } from "../../../api/registration";
import { imageUploadApi } from "../../../api/imageUploadApi";
import { getBase64 } from "../../../utils/getBase64";

const Hotel: FC = () => {
  const [detail, setDetail] = useState<RegistrationDetailDto>({
    stayName: "",
    stayType: "HOTEL",
    countryDisplayCode: "",
    pincode: 0,
    address: "",
    contactNumber: "-",
    emailAddress: "",
    hostName: "-",
    marketingContact: "",
    opsContact: "",
    amenities: [],
  });
  const history = useHistory();
  const fileUpload = (type: string, event: any) => {
    const files = event.target.files[0];
    getBase64(files).then((result) => {
      imageUploadApi({
        file: JSON.stringify(result).split(",")[1],
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
      console.log(error.message);
    }
  };
  return (
    <RegistrationForm
      detail={detail}
      stayType={"HOTEL"}
      setDetailHandler={(detail: RegistrationDetailDto) => setDetail(detail)}
      submit={() => submit()}
      fileUpload={fileUpload}
    />
  );
};

export default Hotel;
