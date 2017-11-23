import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import BookingForm from './BookingForm';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import {bookingCreate, bookingUpdate, bookingRestart} from '../actions';


class BookingCreate extends Component{
	componentWillMount(){
		this.props.bookingRestart();
	} 

	onButtonPress(){
		const {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado} = this.props;
		this.props.bookingCreate({numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado});
	}

	render(){
		return(
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<Card>
				<BookingForm {...this.props} />

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Crear
					</Button>
				</CardSection>
				
			</Card>
		</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	contentContainer: {
    	paddingVertical: 20
  	}
});

///
const mapStateToProps = (state) => {
	console.log("estoy en el otro mapStateToProps");
	const {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado} = state.bookingForm;
	console.log("otroBolPol:" + BolPol);
	return {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado};
} 

export default connect(mapStateToProps, {bookingUpdate, bookingCreate, bookingRestart})(BookingCreate);