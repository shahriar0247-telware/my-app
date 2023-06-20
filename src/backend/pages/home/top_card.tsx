import * as React from "react";
import { img, StyleSheet, View } from "react-native";
import Svg, { Circle, Rect, Path } from "react-native-svg";
import OC_Text from "../../components/oc_text";
import { colors } from "../../../styles/globals/colors.js";
import { getCurrentRoute } from "../../../../App";

function svg({ ...props }) {
	return (
		<Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
			<Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
			<Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
		</Svg>
	);
}

function One_card({ image }) {
	return (
		<div style={styles.one_card}>
			<div style={styles.left_section}>
				<div style={styles.icon}>
					<img style={styles.image} src={require("../../../../assets/home/top_nav/" + image)} />
				</div>
				<div style={styles.title}>
					<OC_Text style={styles.title_text}>Bandwidth</OC_Text>
				</div>
			</div>
			<div style={styles.value}>
				<OC_Text style={styles.value_text}>18,00</OC_Text>
			</div>
		</div>
	);
}
function One_card_2({ image }) {
	return (
		<div style={styles.one_card_2}>
			<div style={styles.center_section}>
				<img style={styles.image2} src={require("../../../../assets/home/top_nav/" + image)} />
				<OC_Text style={styles.title_text2}>Bandwidth</OC_Text>
			</div>
		</div>
	);
}

export default function Top_card() {
	return (
		<div style={styles.top_card_container}>
			<One_card image={"1.png"}></One_card>
			<One_card image={"2.png"}></One_card>
			<One_card_2 image={"3.png"}></One_card_2>
			<One_card_2 image={"4.png"}></One_card_2>
		</div>
	);
}

const styles = StyleSheet.create({
	top_card_container: {
		flexDirection: "row",
	},
	one_card: {
		width: 300,
		height: 100,
		backgroundColor: "white",
		flexDirection: "row",
		borderRadius: colors.borderRadius,
		marginRight: 20,
	},

  left_section: {
		width: 170,
		padding: 20,
	},

  icon: {},
	title: {},

	title_text: {
		fontSize: 20,
		fontWeight: 300,
		marginTop: 10,
		fontFamily: "Roboto_700Bold",
	},

	value: {
		width: 130,
		justifyContent: "center",
		alignItems: "center",
	},
	value_text: {
		fontSize: 25,
		fontFamily: "Roboto_700Bold",
	},
	image: {
		resizeMode: "cover",
		width: 30,
		height: 21,
	},


	one_card_2: {
		width: 300,
		height: 100,
		backgroundColor: colors.lightTableHeaderBg,
		flexDirection: "row",
		borderRadius: colors.borderRadius,
		marginRight: 20,
	},

	center_section: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		width: 300,
	},
	image2: {
		resizeMode: "cover",
		width: 25,
		height: 25,
		marginTop: 8,
	},

	title_text2: {
		fontSize: 20,
		fontWeight: "500",
		marginTop: 10,
		marginLeft: 10,
		color: colors.darkPrimaryColor,
		fontFamily: "Roboto_700Bold",
	},
	
});
