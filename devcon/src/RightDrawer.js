import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';
import {goHomePage} from "./navigation";

export default class RightDrawer extends React.Component {

	onPressButton = () => {
		console.log(this.props);
		// goHomePage('Screen2');
	};

	static get options() {
		return {
			topBar: {
				title: {
					text: 'RightDrawer'
				},
			}
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>Dashboard</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>logout</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>login</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>Register</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#343a40',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	drawerButton: {
		height: 60,
		borderColor: "#17a2b8",
		justifyContent: 'center',
		borderBottomWidth: 1,
	},
	whiteText: {
		color: '#fff',
		fontSize: 20,
		textAlign: "center"
	}
});