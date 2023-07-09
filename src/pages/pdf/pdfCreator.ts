import { pdf } from "@react-pdf/renderer";
//import PdfManager from "../redux/pdf/api";
//import { User } from "../types";

export async function savePDF(pdfFile: any) {
  try {
    //create pdf and convert to blob
    const asPdf = pdf();
    asPdf.updateContainer(pdfFile);
    const pdfBlob = await asPdf.toBlob();
    //create form data and save properties
    const formData = new FormData();
    formData.append("file", pdfBlob, `car.pdf`);
    formData.append("slug", "avis-chat");
    formData.append("content", "Your Car Rental document has been created.");
    //send formdata
    // await PdfManager.sendAttachment({ formData: formData });
    // saveAs(pdfBlob, "document.pdf");
  } catch (error) {
    console.error(error);
  }
}
