Text;

import React, { Children, useRef, useState } from "react";

function OC_Text({ children, style = null }) {
	

	return <div style={[styles.text, style]}>{children}</div>;
}

const styles = {
	text: {
		fontFamily: "Roboto_400Regular",
	},
};

export default OC_Text;
