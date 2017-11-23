import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import BookingFormReducer from './BookingFormReducer';
import BookingReducer from './BookingReducer';

export default combineReducers({
	auth: AuthReducer,
	bookingForm: BookingFormReducer,
	bookings: BookingReducer
});