import { View, Text, TextInput, StyleSheet } from "react-native";
import Order_status from "./create_order/components/order_status";
import OC_Text from "../../components/oc_text";
import OC_Textinput from "../../components/oc_textinput";
import { colors } from "../../../styles/globals/colors";
import OC_Select from "../../components/oc_select";
import React from "react";
import { div } from "react-native-gesture-handler";

import { getCurrentRoute, navigate } from "../../../../App";
import OC_Button from "../../components/oc_button";
import OC_Label from "../../components/oc_label";

const RadioButton = ({ options, selectedOption, onSelect }) => {
    return (
        <div style={styles.radio_buttons}>
            {options.map((item) => {
                return (
                    <div
                        onPress={() => {
                            onSelect(item.key);
                        }}
                        key={item.key} style={[styles.buttonContainer,]}
                    >
                        <div
                            style={[styles.circle, selectedOption === item.key && styles.checked_circle]}>
                            {selectedOption === item.key && <div style={styles.checked_circle_inside} />}
                        </div>
                        <OC_Text>{item.text}</OC_Text>
                    </div>
                );
            })}
        </div>
    );
};

export default function Create_order() {
    const [show_advanced, set_show_advanced] = React.useState(false)
    const [pref_selected, set_pref_selected] = React.useState(null);
    console.log()
    const options = [
        {
            key: 'None',
            text: 'None',
        },
        {
            key: 'Only show groups of consecutive numbers',
            text: 'Only show groups of consecutive numbers',
        },
        {
            key: 'Skip the search results; give me a certain quantity',
            text: 'Skip the search results; give me a certain quantity',
        },
    ];
    return (
        <div style={styles.main_view}>

                <Order_status></Order_status>
            <div>
                <div style={styles.two_inputs}>

                    <div>
                        <OC_Label>Carrier Name</OC_Label>
                        <OC_Textinput style={styles.input_2} placeholder={"Bandwidth"}></OC_Textinput>
                    </div>
                    <div>
                        <OC_Label>Phone Number Type</OC_Label>
                        <OC_Select style={styles.input_2}></OC_Select>

                    </div>
                </div>
                <div style={styles.one_input}>
                    <div>
                        <OC_Label>Area Code</OC_Label>
                        <OC_Textinput style={styles.input_1} placeholder={"919"}></OC_Textinput>
                    </div>
                </div>
                <div style={styles.one_input}>
                    <OC_Label>Any Preferences?</OC_Label>
                    <RadioButton
                        options={options}
                        selectedOption={pref_selected}
                        onSelect={(option) => set_pref_selected(option)}
                    />
                </div>


                {show_advanced &&
                    <div>
                        <div style={styles.one_input}>
                            <div onClick={() => set_show_advanced(false)}><OC_Text style={styles.basic_advanced_mode}>Back to Basic</OC_Text></div>
                        </div>
                        <div style={styles.two_inputs}>
                            <div>
                                <OC_Label>Area Code (NPA)</OC_Label>
                                <OC_Select style={styles.input_2}></OC_Select>

                            </div>

                            <div>
                                <OC_Label>Exchange (NXX)</OC_Label>
                                <OC_Select style={styles.input_2}></OC_Select>

                            </div>
                        </div>
                        <div style={styles.two_inputs}>
                            <div>
                                <OC_Label>Block (X)</OC_Label>
                                <OC_Select style={styles.input_2}></OC_Select>

                            </div>

                            <div>
                                <OC_Label>City</OC_Label>
                                <OC_Select style={styles.input_2}></OC_Select>

                            </div>
                        </div>
                        <div style={styles.two_inputs}>
                            <div>
                                <OC_Label>State / Province</OC_Label>
                                <OC_Select style={styles.input_2}></OC_Select>

                            </div>

                            <div>
                                <OC_Label>Zip / Postal code</OC_Label>
                                <OC_Select style={styles.input_2}></OC_Select>

                            </div>
                        </div>
                        <div style={styles.one_input}>
                            <div>
                                <OC_Label>Rate center</OC_Label>
                                <OC_Select style={styles.input_1}></OC_Select>

                            </div>
                        </div>
                    </div>}
                {!show_advanced &&
                    <div>
                        <div onClick={() => set_show_advanced(true)}><OC_Text style={styles.basic_advanced_mode}>Advanced Options</OC_Text></div>
                    </div>
                }
            </div>
            <div>
                <OC_Button onPress={() => { navigate("Create order available numbers"); }}>Next</OC_Button>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    main_view: {
        padding: 30,
        backgroundColor: "white"
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
    radio_buttons: {
        marginTop: 20
    }, buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    checked_circle: {
        borderColor: colors.lightPrimaryColor1,
        borderWidth: 2
    },
    checked_circle_inside: {
        width: 10,
        height: 10,
        borderRadius: 7,
        backgroundColor: colors.lightPrimaryColor1,
    },
    basic_advanced_mode: {
        color: colors.lightPrimaryColor1,
        marginBottom: 20,
        marginTop: 10
    }
});
