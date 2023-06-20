import React, { useRef, useState } from "react";
import { img, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/globals/colors";
import OC_Text from "../components/oc_text";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faTeletype } from "@fortawesome/free-solid-svg-icons/faTeletype";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons/faRightToBracket";
import Fontawesome_icon from "../components/fontawesome_icon";
import { TouchableRipple } from "react-native-paper"
import { useNavigation, useRoute } from "@react-navigation/native";
import { navigate, getCurrentRoute } from "../../../App";

function Menu_icon({ icon }) {

  return (
    <Fontawesome_icon icon={icon} style={styles.one_menu_icon} size={25} />
  );
}

function img_icon({ img }) {

  return (
    <img style={styles.img} src={require("../../../assets/home/menus/" + img)}/>
  );
}


function Menus() {
  
  const [page_, set_page_] = React.useState("Home")
  
  function change_menu(page){
    navigate(page);
    set_page_(getCurrentRoute().name)
  }



  return (
    <div style={styles.all_menu_container}>
      <div style={styles.all_menu}>
        <TouchableRipple
          onPress={() => {
            change_menu("Home");
            
          }}
        >
          <div style={[styles.one_menu, page_ == "Home" && styles.one_menu_text_selected]}>
            <img_icon img={"1.png"}></img_icon>
            <OC_Text style={[styles.one_menu_text]}>Home</OC_Text>
          </div>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => {
            change_menu("Orders")
          }}
        >
          <div style={[styles.one_menu, page_ == "Orders" && styles.one_menu_text_selected]}>
            <img_icon img={"2.png"}></img_icon>
            <OC_Text style={[styles.one_menu_text]}>Orders</OC_Text>
          </div>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => {
            change_menu("Inventory");
          }}
        >
          <div style={[styles.one_menu, page_ == "Inventory" && styles.one_menu_text_selected]}>
            <img_icon img={"3.png"}></img_icon>
            <OC_Text style={[styles.one_menu_text]}>Inventory</OC_Text>
          </div>
        </TouchableRipple>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  all_menu_container: {
    backgroundColor: colors.lightPrimaryColor1,
    height: "100%",
  },

  all_menu: {},
  one_menu: {
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    cursor: "pointer",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  one_menu_text: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  one_menu_text_selected: {
    backgroundColor: colors.lightPressedPrimaryColor,
  },
  one_menu_icon: {},
  img:{
    resizeMode: "cover",
		width: 25,
		height: 25,
  }
});

export default Menus;
