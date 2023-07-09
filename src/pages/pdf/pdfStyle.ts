import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Barlow",
  src: 'src/Barlow/Barlow-Regular.ttf',
});

Font.register({
  family: "Barlow Bold",
  src: 'src/Barlow/Barlow-SemiBold.ttf'
})

// I could not give fontWeighr and alson could not see in the eaxmples.

export const pdfStyles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: "71px 46px 0px",
    width: "100%",
    fontFamily: "Barlow",
    fontSize: "16px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "32px",
    alignItems: "center"
  },
  article: {
    border: "1px solid red",
  },
  articleItem: {
    padding: "24px 16px",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid red"
  },
  articleItem3: {
    padding: "24px 16px",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "3px",
    borderBottom: "1px solid red"
  },
   footer: {
    padding: "24px 16px",
    marginTop: "40px",
   },
   footerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
   },
   image: {
    width: "128px"
   },
   fontBold: {
    fontFamily: "Barlow Bold"
   }

});
