import { StyleSheet, View } from "react-native"
import { Picker } from '@react-native-picker/picker';
import React from "react";
import { colors } from "../../styles/globals/colors";

export default function OC_Select({ items=[{label: "Java", value:"java"}, {label: "Javascript", value:'js'}], style=null }) {
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const item_elements = items.map(function(item){
        return(
            <Picker.Item label={item.label} value={item.value} /> 
        )
    })
    return (
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }
            style={[styles.picker, style]}
        >
            {item_elements}
        </Picker>
    )
}

const styles = StyleSheet.create({
    picker: {
        borderColor: colors.lightTextFieldColor,
        borderWidth: 1,
        height: 42,
        borderRadius: colors.borderRadius,
        paddingLeft: 13,
        paddingRight: 20,
        outlineWidth: 0,
        outlineColor: "transparent",
        outlineStyle: "none",
        alignSelf: "flex-start",
        backgroundColor: "#00000000",
        width: 200
    }
})