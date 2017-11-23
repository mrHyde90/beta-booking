import _ from 'lodash';
import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {bookingsFetch} from '../actions';
import ListItem from './ListItem';

class BookingList extends Component{
	componentWillMount(){
		this.props.bookingsFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps);
	}

	createDataSource({bookings}){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(bookings);
	}

	renderRow(booking){
		return <ListItem booking={booking} />;
	}
	///
	render(){
		return(
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}
///

const mapStateToProps = state => {
	const bookings = _.map(state.bookings, (val, uid) => {
		return { ...val, uid };
	});
	return {bookings};
};

export default connect(mapStateToProps, {bookingsFetch})(BookingList);