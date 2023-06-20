import { StyleSheet } from "react-native"
import OC_Text from "./oc_text"

export default function OC_Title({ children }) {
    return (
        <OC_Text style={styles.text}>{children}</OC_Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto_700Bold",
        fontSize: 18,
        marginBottom: 20
    }
})