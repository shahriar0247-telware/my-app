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
import OC_Title from "../../components/oc_title";

const Accordion = (heading_text) => {
    const [expanded, setExpanded] = React.useState(false);

    const data = [
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
        { id: '1', title: '(498) 358-4359', selected: false },
        { id: '2', title: '(611) 313-2689', selected: false },
        { id: '2', title: '(611) 313-2689', selected: false },
        { id: '3', title: '(611) 313-2689', selected: false },
        { id: '4', title: '(943) 830-0718', selected: false },
        { id: '5', title: '(943) 830-0718', selected: false },
        { id: '6', title: '(943) 830-0718', selected: false },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(908) 948-9052', selected: true },
        { id: '6', title: '(908) 948-9052', selected: false },
        { id: '6', title: '(544) 856-1196', selected: false },
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
                    numColumns={12} // Adjust the number of columns as per your requirement
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (

                        <div style={[styles.item, item.selected && styles.item_selected]}>
                            <OC_Text style={styles.itemText}>{item.title}</OC_Text>
                        </div>
                    )}
                />
            </div>
        );
    };

    return (
        <div style={styles.container}>
            <div
                style={[styles.header, expanded && styles.header_selected]}
                onClick={() => setExpanded(!expanded)}
            >

                <OC_Text style={[styles.headerText, expanded && styles.headerText_selected]}>{heading_text}</OC_Text>
            </div>

            {expanded && renderAccordionContent()}
        </div>
    );
};

export default function Create_order_available_numbers() {
    return (
        <div style={styles.main_view}>
            <Order_status ></Order_status>
            <div>
                <OC_Title>Available Numbers</OC_Title>
                <div>
                    <Accordion heading_text={"ALTON"}></Accordion>

                </div>
                <div>
                    <Accordion heading_text={"BELMONT"}></Accordion>

                </div>  <div>
                    <Accordion heading_text={"TORONTO"}></Accordion>

                </div>  <div>
                    <Accordion heading_text={"CHARLOTTE"}></Accordion>

                </div>    <div>
                    <Accordion heading_text={"CHERRYVL"}></Accordion>

                </div>
            </div>
            <div>
                <OC_Button onClick={() => { navigate("Create order place order"); }}>Next</OC_Button>
            </div>
        </div>
    )
}



const styles = StyleSheet.create({
    main_view: {
        padding: 30,
        backgroundColor: "white",
    },

    top_title: {
        fontFamily: "Roboto_700Bold",
        fontSize: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginBottom: 10
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
