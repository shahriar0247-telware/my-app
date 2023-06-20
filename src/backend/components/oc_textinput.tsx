import { StyleSheet, TextInput } from "react-native";
import { colors } from "../../styles/globals/colors";

export default function OC_Textinput({ style = null, ...props }) {
	console.log(style)
	return <TextInput style={[styles.text_input, style]} {...props} placeholderTextColor={colors.lightPrimaryColor4}></TextInput>;
}

const styles = StyleSheet.create({
	text_input: {
		borderColor: colors.lightTextFieldColor,
		borderWidth: 1,
		height: 42,
		borderRadius: colors.borderRadius,
		paddingLeft: 13,
		paddingRight: 13,
		outlineWidth: 0,
		outlineColor: "transparent",
		outlineStyle: "none",
		alignSelf: "flex-start",
		width: 200
	},
});
