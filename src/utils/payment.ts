// import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";
import { Buffer } from "buffer";
import axios from "axios";
// import { ConfigService } from "@nestjs/config";
type CreatePaymentGatewayDto = {
  buyer_id: string;
  price: number;
  name: string;
  email: string;
};
export const newPayment = async (createPayment: CreatePaymentGatewayDto) => {
  try {
    const merchantTransactionId = "PL" + Date.now();
    const { buyer_id, price, email, name } = createPayment;

    const data = {
      merchantId: "M22VCKEIOPT4Z",
      merchantTransactionId: merchantTransactionId,
      merchantUserId: "MUID" + buyer_id,
      name: name,
      amount: price * 100,
      redirectUrl: `https://www.planetsera.com/payment-status/${merchantTransactionId}`,
      email: email,
      redirectMode: "GET",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + process.env.SALT_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;
    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
    // 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
    // const prod_URL = 'https://api.phonepe.com/apis/hermes/pg/v1/pay';
    const options = {
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };
    const response = await axios.request(options);
    console.log("reps", response.data.data.instrumentResponse);
    return response.data.data.instrumentResponse.redirectInfo.url;
  } catch (err: any) {
    console.log("000", err.message);
  }
};

export const checkStatus = async (merchantTransactionId: string) => {
  try {
    const merchantId = "M22VCKEIOPT4Z";
    const keyIndex = 1;
    const string =
      `/pg/v1/status/${merchantId}/${merchantTransactionId}` + "SALT_KEY";
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;
    const options = {
      method: "GET",
      url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": `${merchantId}`,
      },
    };
    const response = await axios.request(options);
    if (response.data.success === true) {
      return {
        success: true,
        message: "Payment Success",
        code: response?.data?.code,
      };
    } else {
      return {
        success: false,
        message: "Payment Failure",
        code: response?.data?.code,
      };
    }
  } catch (err) {
    console.log(err);
  }
};
