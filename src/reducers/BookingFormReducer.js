import {BOOKING_UPDATE, BOOKING_CREATE, BOOKING_SAVE_SUCCESS, BOOKING_RESTART} from '../actions/types';

const INITIAL_STATE = {
	numero: "",
	zarpe: "",
	Eta: "",
	Documentacion: "",
	Despacho: "",
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
};

export default (state=INITIAL_STATE, action) => {
	console.log(state["BolPol"]);
	switch(action.type){
		case BOOKING_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case BOOKING_CREATE:
			return INITIAL_STATE;
		case BOOKING_RESTART:
			return INITIAL_STATE;
		case BOOKING_SAVE_SUCCESS:
			return INITIAL_STATE;
		default: 
			return state;
	}		
}