import React, { useRef, useState } from "react";
import { colors } from "../../styles/globals/colors";
import OC_Text from "../components/oc_text";
import Fontawesome_icon from "../components/fontawesome_icon";

function Menu_icon({ icon }) {

  return (
    <Fontawesome_icon icon={icon} style={styles.one_menu_icon} size={25} />
  );
}

function Img_icon({ img }) {

  return (
    <img style={styles.img} src={require("../../../assets/home/menus/" + img)}/>
  );
}


function Menus() {
  
  const [page_, set_page_] = React.useState("Home")
  
  function change_menu(page){
  }



  return (
    <div style={styles.all_menu_container}>
      <div style={styles.all_menu}>
        <div
          onClick={() => {
            change_menu("Home");
            
          }}
        >
          <div style={[styles.one_menu, page_ == "Home" && styles.one_menu_text_selected]}>
            <Img_icon img={"1.png"}></Img_icon>
            <OC_Text style={[styles.one_menu_text]}>Home</OC_Text>
          </div>
        </div>

        <div
          onClick={() => {
            change_menu("Orders")
          }}
        >
          <div style={[styles.one_menu, page_ == "Orders" && styles.one_menu_text_selected]}>
            <Img_icon img={"2.png"}></Img_icon>
            <OC_Text style={[styles.one_menu_text]}>Orders</OC_Text>
          </div>
        </div>

        <div
          onClick={() => {
            change_menu("Inventory");
          }}
        >
          <div style={[styles.one_menu, page_ == "Inventory" && styles.one_menu_text_selected]}>
            <Img_icon img={"3.png"}></Img_icon>
            <OC_Text style={[styles.one_menu_text]}>Inventory</OC_Text>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
};

export default Menus;
