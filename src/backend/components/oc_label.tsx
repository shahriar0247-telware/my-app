import { StyleSheet } from "react-native"
import { colors } from "../../styles/globals/colors"
import OC_Text from "./oc_text"

export default function OC_Label({ children, optional = true }) {
    if (optional) {
        return <OC_Text style={styles.label}>{children}</OC_Text>
    }
    else {
        return <OC_Text style={[styles.label, styles.label_not_optional]}>{children}*</OC_Text>
    }
}
const styles = StyleSheet.create({
    label: {
        color: colors.lightSecondaryColor4,
        marginBottom: 5
    },
    label_not_optional: {

    }
})