import { FlatList, StyleSheet, div, View } from "react-native";
import OC_Text from "./oc_text";
import { colors } from "../../styles/globals/colors";
import React from "react";


export default function OC_Accordion({ heading_text, Content }) {
    const [expanded, setExpanded] = React.useState(false);
    const renderAccordionContent = () => {
        return (
            <div style={styles.all_items_container}>
                <Content></Content>
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




const styles = StyleSheet.create({
    container: {
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
        padding: 5, marginTop: 5, backgroundColor: colors.lightMainBackgroundColor,
        borderWidth: 1,
        borderColor: colors.lightDividerColor,
        borderRadius: 4
    }
})