import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import OC_Text from "./oc_text";
import { colors } from "../../styles/globals/colors";

export default function OC_InfoBox() {
    const data =
        [{
            'id': 1,
            'title': "Test",
            'value': "Value test"
        },
        {
            'id': 2,
            'title': "Test",
            'value': "Value test"
        },

        {
            'id': 1,
            'title': "Test",
            'value': "Value test"
        },
        {
            'id': 2,
            'title': "Test",
            'value': "Value test"
        },

        {
            'id': 1,
            'title': "Test",
            'value': "Value test"
        },
        {
            'id': 2,
            'title': "Test",
            'value': "Value test"
        },
        {
            'id': 1,
            'title': "Test",
            'value': "Value test"
        },
        {
            'id': 2,
            'title': "Test",
            'value': "Value test"
        }
        ]
    return (
        <FlatList
            data={data}
            numColumns={5}
            style={styles.flatlist}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <div style={styles.one_item}>
                    <OC_Text style={styles.title}>{item.title}</OC_Text>
                    <OC_Text style={styles.value}>{item.value}</OC_Text>
                </div>

            )}
        />
    )
}
const styles = StyleSheet.create({
    flatlist: {
        width: "100%",
        padding: 10
    },
    one_item:{
        width: "20%",
        marginBottom: 30,
    },
    title:{
        fontFamily: "Roboto_500Medium"
    },
    value:{
        color: colors.lightPrimaryColor3
    }
})