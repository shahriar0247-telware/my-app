import OC_Text from "../../../../components/oc_text";
import { colors } from "../../../../../styles/globals/colors";
import OC_Button from "../../../../components/oc_button";
import { useNavigate } from 'react-router-dom';


export default function Top_datatable_options({ selected = "all" }) {
	const navigate = useNavigate();

	return (
		<div style={styles.main_container}>
			<div style={styles.left_section}>


				<div onClick={() => { navigate("Orders all") }} style={[styles.button, selected == "all" && styles.button_selected]}>
					<OC_Text style={[styles.button_text, selected == "all" && styles.button_selected_text]}>All</OC_Text>
				</div>
				<div onClick={() => { navigate("Orders exception") }} style={[styles.button, selected == "exception" && styles.button_selected]}>
					<OC_Text style={[styles.button_text, selected == "exception" && styles.button_selected_text]}>Exception</OC_Text>
				</div>
				<div style={styles.button}>
					<OC_Text style={styles.button_text}>FOC</OC_Text>
				</div>

				<div style={styles.button}>
					<OC_Text style={styles.button_text}>Completed</OC_Text>
				</div>
			</div>
			<div style={styles.right_section}>
			<OC_Button onPress={() => {navigate("Create order")}}>Create Order</OC_Button>
			</div>
		</div>
	);
}

const styles = {
	main_container: {
		flexDirection: "row",
		
		marginBottom: 20,
	
	},
	left_section: {
		flexDirection: "row",
		borderRadius: colors.borderRadius,
		overflow: "hidden"

	},
	right_section: {
		alignSelf: "flex-start",
		margin: "auto",
		marginRight: 0

	},
	button: {
		height: 38,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: colors.lightGray,
		justifyContent: "center",
		alignItems: "center",
	},
	button_text: {
		fontFamily: "Roboto_500Medium"
	},
	button_selected: {
		backgroundColor: colors.lightPrimaryColor1,
	},
	button_selected_text: {
		color: "white",
	},
};
