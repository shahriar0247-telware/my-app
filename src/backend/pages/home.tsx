import React, { useState } from "react";
import { img, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import OC_Text from "../components/oc_text";
import Top_card from "./home/top_card";
import OC_Datatable from "../components/oc_datatable";
import { colors } from "../../styles/globals/colors";

function Home() {
	const route = useRoute();

	const navigation = useNavigation();

	const goToProfile = () => {
		navigation.navigate("Orders");
	};
	return (
		<div>
			<Top_card></Top_card>
			<div style={styles.datatable_view}>
				<div style={styles.view_all_continer}>
					<OC_Text style={styles.view_all_text}>View All</OC_Text>

					<img style={styles.image} src={require("../../../assets/home/datatable/view_all_arrow.png")} />

				</div>
				<OC_Datatable></OC_Datatable>
			</div>
		</div>
	);
}

const styles = StyleSheet.create({

	datatable_view: {
		marginTop: 20,
		padding: 30,
		backgroundColor: "white"
	},
	view_all_text: {
		color: colors.lightPrimaryColor1, margin: "auto", marginRight: 0
	},
	image: {
		resizeMode: "cover",
		width: 15,
		height: 15,
		margin: "auto",
		marginRight: 0
	},
	view_all_continer: {
		flexDirection: "row",
		width: 80,
		margin: "auto",
		marginRight: 0,
		marginBottom: 20
	}
});

export default Home;
