import { StyleSheet, View } from "react-native";
import OC_Text from "../../../../components/oc_text";
import { colors } from "../../../../../styles/globals/colors";
import { getCurrentRoute, navigate } from "../../../../../../App";
import OC_Button from "../../../../components/oc_button";


function Current_page({ type }) {

  const pages = {
    "Search Numbers": ['Create order'],
    "Available Numbers": ['Create order available numbers'],
    "Place Order": ['Create order place order'],
  }

  const route = getCurrentRoute()
  const selected = pages[type].includes(route['name'])
  console.log(route['name'])
  return (
    <div style={[styles.circle_item]}>

      <div style={[styles.circles, selected && styles.circles_selected]}>
        <div style={[styles.outside_circle, selected && styles.outside_circle_selected]}>
          <div style={[styles.inside_circle, selected && styles.inside_circle_selected]}></div>
        </div>
      </div >
      <div></div>
      <OC_Text style={styles.circle_text}>{type}</OC_Text>

    </div >
  );
}

export default function Order_status() {
  return (

    <div style={styles.order_status_container}>
      <div style={styles.main_view}>
        <Current_page type={"Search Numbers"}></Current_page>
        <div style={styles.line}></div>
        <Current_page type={"Available Numbers"}></Current_page>
        <div style={styles.line}></div>
        <Current_page type={"Place Order"}></Current_page>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  order_status_container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightDividerColor,
    marginBottom: 20,
  },
  main_view: {
    flexDirection: "row",
    margin: "auto",
    width: 1000,
    marginBottom: 20,
    paddingBottom: 20,



  },
  circle_item: {
    justifyContent: "center",
    width: 200,
    margin: 'auto'

  },
  circles: {
    width: 32,
    height: 32,
    margin: "auto",
    marginBottom: 10,
  },
  outside_circle: {
    width: 32,
    height: 32,
    borderWidth: 3,
    borderColor: colors.lightGray,
    backgroundColor: colors.lightGray,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  inside_circle: {
    width: 8,
    height: 8,
    backgroundColor: colors.lightSecondaryColor5,
    borderRadius: 200
  },
  circle_text: {
    textAlign: "center"
  },
  line: {
    width: 300,
    margin: "auto",
    transform: [
      { translateY: -13 }
    ],
    marginLeft: -150,
    marginRight: -150,
    height: 2,
    backgroundColor: colors.lightTextFieldColor
  },

  circles_selected: {
  },
  outside_circle_selected: {
    borderColor: colors.lightLightPrimaryColor,

    backgroundColor: "white"
  },
  inside_circle_selected: {
    backgroundColor: colors.lightPrimaryColor2,
  },
})