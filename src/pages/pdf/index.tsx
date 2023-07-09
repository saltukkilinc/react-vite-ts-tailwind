import React from "react";
import { pdfStyles } from "./pdfStyle";
import { Page, Document, PDFViewer } from "@react-pdf/renderer";
import CarInfo from "./carInfo";

const Pdf = () => {
  const doc = (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <CarInfo />
      </Page>
    </Document>
  );

  return (
    <PDFViewer style={{flex: 1}}>
      {doc}
    </PDFViewer>
   
  );
};

export default Pdf;
