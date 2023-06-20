import { StyleSheet, View } from "react-native";
import OC_Datatable from "../../components/oc_datatable";
import Top_datatable_options from "./order/datatable/top_datatable_options";
import { search_style } from "./global/search_style";

export default function Orders_exception({navigation}) {
	return (
		<div style={styles.main_view}>
			<Top_datatable_options navigation={navigation} selected="exception"></Top_datatable_options>
			<OC_Datatable search_styles={search_style}></OC_Datatable>
		</div>
	);
}

const styles = StyleSheet.create({
	main_view: {
		padding: 30,
		backgroundColor: "white",
		
	},
});


