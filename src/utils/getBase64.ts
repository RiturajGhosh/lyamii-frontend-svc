export const getBase64 = (file: any) => {
  return new Promise((resolve) => {
   // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      resolve(reader.result);
    };
  });
};
