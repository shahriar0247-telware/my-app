import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import Order_status from "./create_order/components/order_status";
import OC_Text from "../../components/oc_text";
import OC_Textinput from "../../components/oc_textinput";
import { colors } from "../../../styles/globals/colors";
import OC_Select from "../../components/oc_select";
import React from "react";
import { div } from "react-native-gesture-handler";

import { getCurrentRoute, navigate } from "../../../../App";
import OC_Button from "../../components/oc_button";
import { Title } from "react-native-paper";
import OC_Title from "../../components/oc_title";
import OC_Label from "../../components/oc_label";
import OC_Textarea from "../../components/oc_textarea";

const Numbers = () => {

    const data = [
        { id: '1', title: '(498) 358-4359', selected: false },
        { id: '2', title: '(611) 313-2689', selected: false },
        { id: '2', title: '(611) 313-2689', selected: false },
        { id: '3', title: '(611) 313-2689', selected: false },
        { id: '4', title: '(943) 830-0718', selected: false },
        { id: '5', title: '(943) 830-0718', selected: true },
        { id: '6', title: '(943) 830-0718', selected: true },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(544) 856-1196', selected: false },
        { id: '1', title: '(498) 358-4359', selected: false },
        { id: '2', title: '(611) 313-2689', selected: false },
        { id: '2', title: '(611) 313-2689', selected: false },
        { id: '3', title: '(611) 313-2689', selected: false },
        { id: '4', title: '(943) 830-0718', selected: false },
        { id: '5', title: '(943) 830-0718', selected: true },
        { id: '6', title: '(943) 830-0718', selected: false },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(544) 856-1196', selected: false },


    ];

    const renderAccordionContent = () => {
        return (
            <div style={styles.all_items_container}>
                <FlatList
                    data={data}
                    numColumns={5} // Adjust the number of columns as per your requirement
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (

                        <div style={[styles.item, styles.item_selected]}>
                            <OC_Text style={styles.itemText}>{item.title}</OC_Text>
                        </div>
                    )}
                />
            </div>
        );
    };

    return (
        renderAccordionContent()
    );
};


export default function Create_order_place_order() {
    return (
        <div style={styles.main_view}>

            <Order_status></Order_status>
            <div style={styles.main_section}>
                <div>
                    <OC_Title>Company Info</OC_Title>
                    <div style={styles.all_inputs}>

                        <div style={styles.two_inputs}>
                            <div>
                                <OC_Label>OneCloud Reseller</OC_Label>
                                <OC_Select style={styles.input_2} ></OC_Select>
                            </div>
                            <div>
                                <OC_Label>OneCloud Domain</OC_Label>
                                <OC_Select style={styles.input_2}></OC_Select>
                            </div>

                        </div>

                        <div style={styles.one_input}>
                            <OC_Label>Remarks</OC_Label>
                            <OC_Textarea style={styles.input_1}></OC_Textarea>

                        </div>
                    </div></div>

                <div>

                    <OC_Title>Selected Numbers</OC_Title>
                    <Numbers></Numbers>
                </div>
            </div>

            <OC_Button onPress={() => { navigate("Order details"); }}>Place Order</OC_Button>
        </div>
    )
}

const styles = StyleSheet.create({
    main_view: {
        padding: 30,
        backgroundColor: "white",
    },
    main_section: {
        flexDirection: "row"
    },
    all_inputs: {

    },
    input_2: {
        width: 270,
        marginRight: 30,
        marginBottom: 30,
        color: colors.lightSecondaryColor4,
    },

    input_1: {
        width: 570,

        marginBottom: 30,
        color: colors.lightSecondaryColor4,
    },
    two_inputs: {
        flexDirection: "row",
        width: 600
    },
    one_input: {
        width: 600
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
        wdith: 120,
        maxWidth: 120
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
