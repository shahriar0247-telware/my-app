import { img, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/globals/colors";
import OC_Text from "../components/oc_text";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import React from "react";

function Top_bar({ title = "home" }) {
  const [show_profile, set_show_profile] = React.useState(false)
  return (
    <div style={styles.container}>
      <div style={styles.left_container}>

        <div style={styles.image_container}>
          <img

            src={require("../../../assets/images/logo.png")}
            style={styles.image}
          />
        </div>
        <div>
          <OC_Text style={styles.title_text}>{title}</OC_Text>
        </div>
      </div>

      <div style={styles.right_container}>
        <div style={styles.profile_container}>
          <div style={styles.profile_picture_container}>
            <img
              src={require("../../../assets/images/logo.png")}
              style={styles.profile_pic}
            />

          </div>
          <img
            src={require("../../../assets/top_bar/a.png")}
            style={styles.downarrow}
          />
          {show_profile &&
            <div style={styles.profile_menu_container}>
              <div style={styles.profile_menu_top}>
                <div style={styles.profile_pic_in_menu_container}>
                  <img
                    src={require("../../../assets/images/logo.png")}
                    style={styles.profile_pic_in_menu} />
                </div>
                <div style={styles.profile_info}>
                  <OC_Text>Jenny Doe</OC_Text>
                  <OC_Text>jenny.d@gmail.com</OC_Text>
                </div>
              </div>
              <div style={styles.profile_menu_bottom}>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    shadowColor: "#1C2731",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 99

  },
  left_container: {
    flexDirection: "row",
  },
  right_container: {

    overflow: "visible"
  },
  title_text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "auto",
    marginLeft: 20,
  },

  image_container: {
    width: 57.5,
    height: 55,
    margin: 20,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  profile_container: {
    margin: "auto",
    marginright: 20,
    width: 100,
    height: 30,
    flexDirection: "row",

    overflow: "visible"
  },
  profile_picture_container: {
    width: 30,
    height: 30,
    overflow: "visible"

  },
  profile_pic: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  downarrow: {
    resizeMode: "cover",
    width: 20,
    height: 20,
    margin: "auto",
    marginLeft: 10
  },
  profile_menu_container: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: colors.borderRadius,
    height: 120,
    width: 200,
    padding: 5,
    zIndex: 100, // works on ios
    elevation: 100, // works on android
    transform: [
      { translateX: -50 },
      { translateY: 50 }]
  },
  profile_menu_top: {

  },
  profile_pic_in_menu_container: {},
  profile_pic_in_menu: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 5
  },
  profile_info: {},
  profile_menu_bottom: {}
};

export default Top_bar;
