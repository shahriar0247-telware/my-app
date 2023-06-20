import { View, Text, TextInput, StyleSheet } from "react-native";
import Order_status from "./create_order/components/order_status";
import OC_Text from "../../components/oc_text";
import OC_Textinput from "../../components/oc_textinput";
import { colors } from "../../../styles/globals/colors";
import OC_Select from "../../components/oc_select";
import React from "react";
import { FlatList, div } from "react-native-gesture-handler";

import { getCurrentRoute, navigate } from "../../../../App";
import OC_Button from "../../components/oc_button";
import { Title } from "react-native-paper";
import OC_Title from "../../components/oc_title";
import OC_Label from "../../components/oc_label";
import OC_Textarea from "../../components/oc_textarea";
import OC_Accordion from "../../components/oc_accordion";
import OC_InfoBox from "../../components/oc_infobox";


function Details() {
    return <div>
              <OC_Text>DDetailsDetailsDetailsDetailsDetailsDetail
            Details
            setails</OC_Text>
 <OC_Text>DDetailsDetailsDetailsDetailsDetailsDetail
            Details
            setails</OC_Text>
 <OC_Text>DDetailsDetailsDetailsDetailsDetailsDetail
            Details
            setails</OC_Text>
 <OC_Text>DDetailsDetailsDetailsDetailsDetailsDetail
            Details
            setails</OC_Text>
 <OC_Text>DDetailsDetailsDetailsDetailsDetailsDetail
            Details
            setails</OC_Text>
 <OC_Text>DDetailsDetailsDetailsDetailsDetailsDetail
            Details
            setails</OC_Text>
 <OC_Text>DDetailsDetailsDetailsDetailsDetailsDetail
            Details
            setails</OC_Text>
    </div>
}
function Search_information() {
    return <div>
        <OC_Text>Search Information</OC_Text>
    </div>
}
function Phone_numbers() {
    return <div>
        <OC_Text>Phone Numberes</OC_Text>
    </div>
}
function Order_history_and_notes() {
    return <div>
        <OC_Text>Order History and Notes</OC_Text>
    </div>
}
export default function Order_details() {
    return (
        <div style={styles.main_view}>

            <OC_Accordion heading_text={"Details"} Content={OC_InfoBox}></OC_Accordion>
            <OC_Accordion heading_text={"Search Information"} Content={Search_information}></OC_Accordion>
            <OC_Accordion heading_text={"Phone Numbers"} Content={Phone_numbers}></OC_Accordion>
            <OC_Accordion heading_text={"Order History and Notes"} Content={Order_history_and_notes}></OC_Accordion>
        </div>
    )
}

const styles = StyleSheet.create({
    main_view: {
        padding: 30,
        backgroundColor: "white"
    },
  header: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.lightDividerColor,
        borderRadius: 4
    },
    header_selected: {
        backgroundColor: colors.lightActivePrimaryColor
    },
    headerText: {
        fontFamily: "Roboto_500Medium",

    },
    headerText_selected: {
        color: "white"
    },
    item: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.lightTextFieldColor,
        alignItems: 'center',
        justifyContent: 'center',
        wdith: 150
    },
    item_selected: {
        backgroundColor: colors.lightLightPrimaryColor
    },
    itemText: {
    },
    all_items_container: {
        padding: 5, marginTop: 5, backgroundColor: colors.lightDividerColor
    }
});
