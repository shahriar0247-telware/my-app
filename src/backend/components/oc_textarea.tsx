import { TextInput } from "react-native-paper";
import OC_Textinput from "./oc_textinput";
import { StyleSheet } from "react-native";

export default function OC_Textarea({ style = null }) {
    return (
        <OC_Textinput style={[styles.textarea, style]} multiline={true} numberOfLines={4}></OC_Textinput>
    )
}
const styles = StyleSheet.create({
    textarea: {
        height: 100,
        padding: 10
    }
})