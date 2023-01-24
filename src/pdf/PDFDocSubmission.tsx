import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { FC } from "react";
import { Submission } from "../../interfaces";
import { getDateFormat } from "../../utils";

interface PDFDocSubmissionProps {
  submission: Submission;
  prescription: string;
}

export const PDFDocSubmission: FC<PDFDocSubmissionProps> = ({
  submission,
  prescription,
}) => {
  return (
        <Document>
          <Page style={styles.body} size={"A4"}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <View style={styles.header}>
                <Image
                  src="/images/light-it_logo_white.png"
                  style={styles.image}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    textAlign: "right",
                    marginLeft: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                    color: "white",
                  }}
                >
                  <Text style={styles.header_text}>
                    Date: {getDateFormat(submission.created_at)}
                  </Text>
                  <Text style={styles.header_text}>
                    Submission ID: {submission.id}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginHorizontal: "8%",
                  marginTop: "3%",
                  marginBottom: "3%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "3%",
                  }}
                >
                  <View style={styles.box}>
                    <Text style={styles.box_title}>Patient Information</Text>
                    <Text style={styles.box_text}>
                      {submission.patient.name}
                    </Text>
                    <Text style={styles.box_text}>
                      {submission.patient.email}
                    </Text>
                    <Text style={styles.box_text}>+598 98 765 432</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.box_title}>
                      Patient Physical Description
                    </Text>
                    <Text style={styles.box_text}>Height: 180cm</Text>
                    <Text style={styles.box_text}>Weight: 80kg</Text>
                    <Text style={styles.box_text}>
                      Other info: Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </Text>
                  </View>
                </View>
                <View style={styles.paragraph}>
                  <Text style={styles.title}>Symptoms:</Text>
                  <Text style={styles.text}>{submission.symptoms}</Text>
                  <Text style={styles.title}>Other info:</Text>
                  <Text style={styles.text}>{submission.info}</Text>
                </View>
                <View style={styles.paragraph}>
                  <Text style={styles.title}>Prescription:</Text>
                  <Text style={styles.text}>{prescription}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={styles.signature_body}>
                    <Image
                      src="/images/doc_signature.png"
                      style={styles.image}
                    />
                    <Text style={styles.signature_text}>
                      {submission.doctor && submission.doctor.name}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingBottom: "65px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#773DBD",
    padding: "20px",
  },
  image: {
    height: "50px",
    width: "150px",
  },
  header_text: {
    fontSize: "11px",
    marginLeft: "auto",
    marginBottom: "10%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left",
    marginBottom: "2%",
    width: "45%",
    border: "1px solid #d4bcf4",
    borderRadius: "4px",
    paddingBottom: "5%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  box_title: {
    fontSize: "16px",
    color: "#773DBD",
    backgroundColor: "#d4bcf4",
    padding: "10px",
    borderRadius: "3px",
  },
  box_text: {
    fontSize: "12px",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    color: "gray",
  },
  title: {
    fontSize: "14px",
    marginTop: "2%",
  },
  text: {
    fontSize: "11px",
    marginTop: "1%",
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: "3%",
  },
  signature_body: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginTop: "10%",
    marginLeft: "auto",
    width: "40%",
  },
  signature_text: {
    fontSize: "12px",
    marginLeft: "auto",
    marginRight: "30%",
  },
});
