import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OC_Text from "./oc_text";

function Title({title, fontSize = 30, fontWeight = "bold", margin = 30, marginTop = 30, marginLeft = 30, marginRight = 30, marginBottom = 30}) {
	return (
		<div>
			<OC_Text
				style={{
					fontSize: fontSize,
					fontWeight: fontWeight,
					margin: margin,
					marginTop: marginTop,
					marginLeft: marginLeft,
					marginRight: marginRight,
					marginBottom: marginBottom,
				}}
					>
						{title}
			</OC_Text>
		</div>
	);
}

export default Title;
