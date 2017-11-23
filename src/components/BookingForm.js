import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native';
import {CardSection, Input, CardSectionColumn} from './common';
import { connect } from 'react-redux';
import {bookingUpdate} from '../actions';
import CheckBox from 'react-native-checkbox';

class BookingForm extends Component{
	render(){
		return(
			<View >
				<CardSection>
					<Input
						label="Numero"
						placeholder="55555555"
						value={this.props.numero}
						onChangeText={value => this.props.bookingUpdate({prop: "numero", value})}
					 />
				</CardSection>

				<CardSection>
					<Input
						label="Zarpe"
						placeholder="22-11-2017"
						value={this.props.zarpe}
						onChangeText={value => this.props.bookingUpdate({prop: "zarpe", value})}
					 />
				</CardSection>

				<CardSection>
					<Input
						label="Eta"
						placeholder="22-11-2017"
						value={this.props.Eta}
						onChangeText={value => this.props.bookingUpdate({prop: "Eta", value})}
					 />
				</CardSection>

				<CardSection>
					<Input
						label="Documentacion"
						placeholder="22-11-2017"
						value={this.props.Documentacion}
						onChangeText={value => this.props.bookingUpdate({prop: "Documentacion", value})}
					 />
				</CardSection>

				<CardSection>
					<Input
						label="Despacho"
						placeholder="22-11-2017"
						value={this.props.Despacho}
						onChangeText={value => this.props.bookingUpdate({prop: "Despacho", value})}
					 />
				</CardSection>

				<CardSection>
					<Text style={styles.pickerTextStyle}>CheckList</Text>
				</CardSection>
				
					<CardSection>
						<CheckBox
  							label='Bol & PL'
  							checked={this.props.BolPol}
  							onChange={(checked) => this.props.bookingUpdate({prop: "BolPol", value: !checked})}
						/>
					</CardSection>

					<CardSection>
						<CheckBox
  							label='COA'
  							checked={this.props.COA}
  							onChange={(checked) => this.props.bookingUpdate({prop: "COA", value: !checked})}
						/>
					</CardSection>
				

				<CardSection>
					<CheckBox
  						label='COO/SOL'
  						checked={this.props.CooSol}
  						onChange={(checked) => this.props.bookingUpdate({prop: "CooSol", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='Shiment (PGI)'
  						checked={this.props.Shiment}
  						onChange={(checked) => this.props.bookingUpdate({prop: "Shiment", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='SEND REM+TICKET'
  						checked={this.props.SendRT}
  						onChange={(checked) => this.props.bookingUpdate({prop: "SendRT", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='COMMERCIAL INVOICE'
  						checked={this.props.CommercialInvoice}
  						onChange={(checked) => this.props.bookingUpdate({prop: "CommercialInvoice", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='SEND INVOICE TO AA'
  						checked={this.props.SendInvoiceToAA}
  						onChange={(checked) => this.props.bookingUpdate({prop: "SendInvoiceToAA", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='SHIPMENT REPORT'
  						checked={this.props.ShipmentReport}
  						onChange={(checked) => this.props.bookingUpdate({prop: "ShipmentReport", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='PREPAID REPORT'
  						checked={this.props.PrepaidReport}
  						onChange={(checked) => this.props.bookingUpdate({prop: "PrepaidReport", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='PALLET CERTIF/FUM CERT'
  						checked={this.props.PalletCertif}
  						onChange={(checked) => this.props.bookingUpdate({prop: "PalletCertif", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='COO/REC'
  						checked={this.props.CooRec}
  						onChange={(checked) => this.props.bookingUpdate({prop: "CooRec", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='DRAFT OK'
  						checked={this.props.DraftOk}
  						onChange={(checked) => this.props.bookingUpdate({prop: "DraftOk", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='BL FINAL'
  						checked={this.props.BLFinal}
  						onChange={(checked) => this.props.bookingUpdate({prop: "BLFinal", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='REGISTRO VGM'
  						checked={this.props.RegistroVGM}
  						onChange={(checked) => this.props.bookingUpdate({prop: "RegistroVGM", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='PROFORMA OK'
  						checked={this.props.ProformaOK}
  						onChange={(checked) => this.props.bookingUpdate({prop: "ProformaOK", value: !checked})}
					/>
				</CardSection>

				<CardSection>
					<CheckBox
  						label='PEDIMIENTO PAGADO'
  						checked={this.props.PedimientoPagado}
  						onChange={(checked) => this.props.bookingUpdate({prop: "PedimientoPagado", value: !checked})}
					/>
				</CardSection>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	},
});

																	

const mapStateToProps = (state) => {
	console.log("Estoy en el mapStateToProps")
	const {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado } = state.bookingForm;
	console.log("numero:" + numero)
	console.log("BolPol:" + BolPol)
	console.log("COA:" + COA)
	console.log("CooSol:" + CooSol)
	return {numero, zarpe, Eta, Documentacion, Despacho, BolPol, COA, CooSol, Shiment, SendRT, CommercialInvoice, SendInvoiceToAA, ShipmentReport, PrepaidReport, PalletCertif, CooRec, DraftOk, BLFinal, RegistroVGM, ProformaOK, PedimientoPagado};
}

export default connect(mapStateToProps, {bookingUpdate})(BookingForm);