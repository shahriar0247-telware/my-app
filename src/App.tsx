import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menus from "./backend/globals/menus";
import Top_bar from "./backend/globals/top_bar";
import Home from "./backend/pages/home";
import Inventory from "./backend/pages/inventory";
import Orders_all from "./backend/pages/orders/orders_all";
import Auth0 from "./backend/pages/auth0";
import Layout from "./layout";

export default function App() {
	return (
		<div style={styles.app}>
			<Top_bar />
			<div style={styles.main_view}>
				<div style={styles.menu}>
					<Menus />
				</div>
				<div style={styles.navigation_container_container}>
					<Navigator />
				</div>
			</div>
		</div>
	);
}


const Navigator = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="Order" element={<Orders_all />} />
					<Route path="Inventory" element={<Inventory />} />
					<Route path="auth0" element={<Auth0 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};


const styles = {
	app: {
		width: "100%",
		padding: 0,
		backgroundColor: "#F2F2F2",
	},

	main_view: {
		flex: 1,
		flexDirection: "row",
	},
	menu: {
		width: 100,
	},
	navigation_container_container: {
		width: "90%",
		padding: 20,

		flex: 1,
		shadowColor: "#111111",
		shadowOffset: { width: -1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		marginTop: 0,
	},
};


