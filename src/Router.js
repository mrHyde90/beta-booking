import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import BookingList from './components/BookingList';
import BookingCreate from './components/BookingCreate';
import BookingEdit from './components/BookingEdit';

export const RouterComponent = () => {
	return(
		<Router sceneStyle={{paddingTop: 65}} >
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>

			<Scene key="main">
				<Scene 
				key="bookingList" 
				component={BookingList} 
				title="Bookings" 
				rightTitle="Add" 
				onRight={() => Actions.bookingCreate() } 
				initial 
			/>

			<Scene 
				key="bookingCreate"
				component={BookingCreate}
				title="BookingCreate"	
			/>
			<Scene key="bookingEdit" component={BookingEdit} title="Edit Booking" />
			</Scene>
		</Router>
	);
}
///
export default RouterComponent;