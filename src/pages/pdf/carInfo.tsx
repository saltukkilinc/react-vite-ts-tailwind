import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import avisIcon from "../../assets/avisIcon.png";

import { pdfStyles } from "./pdfStyle";

type FieldBarTypes = {
  title: string;
  sbTitle1: string;
  sbTitle2: string;
};
const FieldBar = ({ title, sbTitle1, sbTitle2 }: FieldBarTypes) => {
  return (
    <View>
      <Text>{title}:</Text>
      <Text style={pdfStyles.fontBold}>{sbTitle1}</Text>
      <Text style={pdfStyles.fontBold}>{sbTitle2}</Text>
    </View>
  );
};

const CarInfo = () => {
  return (
    <View>
      <View style={pdfStyles.header}>
        <Image src={avisIcon} style={pdfStyles.image} />
        <View style={{ flexDirection: "row" }}>
          <Text>Rental Code: </Text>
          <Text style={pdfStyles.fontBold}>HWEQ234</Text>
        </View>
      </View>
      <View style={pdfStyles.article}>
        <View style={pdfStyles.articleItem}>
          <FieldBar title="Name:" sbTitle1="Saltuk Bugra" sbTitle2="Kılınc" />
          <FieldBar title="Rental Car:" sbTitle1="Renault" sbTitle2="Clio" />
        </View>
        <View style={pdfStyles.articleItem}>
          <View>
            <Text>Class:</Text>
            <Text style={pdfStyles.fontBold}>Economic</Text>
          </View>
          <View>
            <Text>Fuel:</Text>
            <Text style={pdfStyles.fontBold}>Gasoline</Text>
          </View>
          <View>
            <Text>Transmission:</Text>
            <Text style={pdfStyles.fontBold}>Automatic</Text>
          </View>
        </View>
        <View style={pdfStyles.articleItem3}>
          <View style={{ flexDirection: "row" }}>
            <Text>Pick Up Date: </Text>
            <Text style={pdfStyles.fontBold}>
              Thu Apr 25 2023 08:00:00 GMT+0300 (GMT+03:00)
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Pick Up Office: </Text>
            <Text style={pdfStyles.fontBold}>Brooklyn Center</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Drop Off Date: </Text>
            <Text style={pdfStyles.fontBold}>
              Thu Apr 26 2023 12:00:00 GMT+0300 (GMT+03:00)
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Drop Off Office: </Text>
            <Text style={pdfStyles.fontBold}>Brooklyn Center</Text>
          </View>
        </View>
        <View style={pdfStyles.footer}>
          <View style={pdfStyles.footerItem}>
            <Text>Car Rental:</Text>
            <Text>$300</Text>
          </View>
          <View style={pdfStyles.footerItem}>
            <Text>Payment fee:</Text>
            <Text>$70</Text>
          </View>
          <View style={pdfStyles.footerItem}>
            <Text>Total Price:</Text>
            <Text style={pdfStyles.fontBold}>$370</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CarInfo;
