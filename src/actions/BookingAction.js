import firebase from 'firebase';
import {BOOKING_UPDATE, BOOKING_CREATE, BOOKINGS_FETCH_SUCCESS, BOOKING_SAVE_SUCCESS, BOOKING_RESTART} from './types';
import { Actions } from 'react-native-router-flux';

export const bookingUpdate = ({prop, value}) => {
	console.log(prop);
	console.log(value);
	return{
			type: BOOKING_UPDATE,
			payload: {prop, value}
		};
}

export const bookingRestart = () => {
	return {
		type: BOOKING_RESTART,
		payload: ""
	};
}

/*
	numero: "",
	BolPol: false,
	COA: false,
	CooSol: false,
	Shiment: false,
	SendRT: false,
	CommercialInvoice: false,
	SendInvoiceToAA: false,
	ShipmentReport: false,
	PrepaidReport: false,
	PalletCertif: false,
	CooRec: false,
	DraftOk: false,
	BLFinal: false,
	RegistroVGM: false,
	ProformaOK: false,
	PedimientoPagado: false
*/

export const bookingCreate = ({numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado}) => {
	//agarrar al usuario
	const {currentUser} = firebase.auth();
	return(dispatch)=>{
		firebase.database().ref(`/users/${currentUser.uid}/bookings`)
		.push({numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado})
		.then(()=>{
			dispatch({type: BOOKING_CREATE});
			Actions.bookingList({type: 'reset'});
		});
	};
};

export const bookingsFetch = () => {
 	const { currentUser } = firebase.auth();
 	return(dispatch) => {
 		firebase.database().ref(`/users/${currentUser.uid}/bookings`)
 		.on('value', snapshot => {
 			dispatch({type: BOOKINGS_FETCH_SUCCESS, payload: snapshot.val() });
 		});
 	};
 };

  export const bookingSave = ({numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado, uid}) => {
 	const {currentUser} = firebase.auth();

 	return(dispatch) => {
 		firebase.database().ref(`/users/${currentUser.uid}/bookings/${uid}`)
 		.set({numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado})
 		.then(() => {
 			dispatch({type: BOOKING_SAVE_SUCCESS});
 			Actions.bookingList({type: 'reset'});
 		});
 	};
 };

 export const bookingDelete = ({uid}) => {
 	const {currentUser} = firebase.auth();

 	return() => {
 		firebase.database().ref(`/users/${currentUser.uid}/bookings/${uid}`)
 		.remove()
 		.then(() => {
 			Actions.bookingList({type: 'reset'});
 		});
 	};
 };