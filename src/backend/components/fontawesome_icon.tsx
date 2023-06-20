Text;

import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../styles/globals/colors";

function Fontawesome_icon({ icon, style=null, ...otherProps}) {
	return <FontAwesomeIcon icon={icon} style={[styles.icon, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
	icon: {
		outlineStyle: 'none', 
		color: "white"
	},
});

export default Fontawesome_icon;
