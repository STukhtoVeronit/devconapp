import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import { Icon } from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import {goHomePage} from "./navigation";

export default class LeftDrawer extends React.Component {

	onPressButton = () => {
		console.log(this.props);
		// goHomePage('Screen2');
	};

	static get options() {
		return {
			topBar: {
				title: {
					text: 'LeftDrawer'
				},
			}
		};
	}
	render() {
		return (
			<View style={styles.container}>

				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>Developers </Text>
					</View>
					<View>
						<Icon name='mars-double' type='font-awesome' iconStyle={styles.whiteText}/>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>Feed</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>Dashboard</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.onPressButton} style={styles.drawerButton}>
					<View>
						<Text style={styles.whiteText}>Developers</Text>
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
		flexDirection: 'row',
		height: 60,
		borderColor: "#17a2b8",
		alignItems:"center",
		justifyContent: "space-around",
		borderBottomWidth: 1
	},
	whiteText: {
		color: '#fff',
		fontSize: 20,
		textAlign: "center"
	},

});