import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OC_Datatable from "../components/oc_datatable";


function Inventory() {
  const navigation = useNavigation();

	const goToProfile = () => {
		navigation.navigate("Home");
	  };
	return (
		<div style={styles.main_view}>
			<OC_Datatable></OC_Datatable>
		</div>
	);
}

const styles = StyleSheet.create({
	main_view: {
		flexDirection: "row",
		shadowColor: "#111111",
		shadowOffset: { width: -1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		marginTop: 0,
		width: "100%",
	},
});

export default Inventory;
