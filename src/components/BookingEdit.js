import _ from 'lodash';
import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import BookingForm from './BookingForm';
import {bookingUpdate, bookingSave, bookingDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';

class BookingEdit extends Component {
	state = {showModal: false};

	componentWillMount(){
		_.each(this.props.booking, (value, prop) => {
			this.props.bookingUpdate({prop, value});
		});
	}

	onButtonPress(){
		const {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado} = this.props;
		this.props.bookingSave({numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado, uid: this.props.booking.uid});
	}

	onAccept(){
		const {uid} = this.props.booking;
		this.props.bookingDelete({uid});
	}

	onDecline(){
		this.setState({showModal: false});
	}

	render(){
		return(
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<Card>
					<BookingForm />
					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>
							Save changes!
						</Button>
					</CardSection>

					<CardSection>
						<Button onPress={() => this.setState({showModal: !this.state.showModal})}>
							Delete Booking
						</Button>
					</CardSection>

					<Confirm
						visible={this.state.showModal}
						onAccept={this.onAccept.bind(this)}
						onDecline={this.onDecline.bind(this)}
					>
						Are you sure you want to delete this ?
					</Confirm>

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

const mapStateToProps = (state) => {
	const {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado} = state.bookingForm;
	return {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado};
}

export default connect(mapStateToProps, {bookingUpdate, bookingSave, bookingDelete})(BookingEdit);