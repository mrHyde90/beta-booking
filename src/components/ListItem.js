import React, {Component} from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
	onRowPress(){
		Actions.bookingEdit({booking: this.props.booking});
	} 
	render(){
		const {numero} = this.props.booking;
		return(
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
			<View>
				<CardSection>
					<Text style={styles.titleStyle}>
						{numero}
					</Text>
				</CardSection>
			</View>
			</TouchableWithoutFeedback>
		);
	}
}
///
const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
});

export default ListItem;