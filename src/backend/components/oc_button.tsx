import React, { useState, useRef } from "react";
import { StyleSheet, Text, div, View, Animated } from "react-native";
import { colors } from "../../styles/globals/colors";
import OC_Text from "./oc_text";

function OC_Button({ onClick, children }) {
  const opacityValue = useRef(new Animated.Value(1)).current;
  const [buttonState, setButtonState] = useState("normal");

  const handlePressIn = () => {
    setButtonState("pressed");
    Animated.timing(opacityValue, {
      toValue: 0.8,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    setButtonState("normal");
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        { backgroundColor: buttonState === "pressed" ? colors.darkPressedPrimaryColor : colors.lightPrimaryColor1 },
        { opacity: opacityValue },
      ]}
    >
      <div
        style={styles.touchable}
        onClickIn={handlePressIn}
        onClickOut={handlePressOut}
        onClick={onClick}
        activeOpacity={1}
      >
        <OC_Text style={styles.buttonText}>{children}</OC_Text>
      </div>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    alignSelf: "flex-start",


  },
  touchable: {
    flex: 1,
    padding: 10,
    minWidth: 100,
    alignItems: "center",
    width: 30
  },
  buttonText: {
    color: "white",
  },
});

export default OC_Button;
