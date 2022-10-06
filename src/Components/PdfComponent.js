import React from "react";
import {Document, Page, View, Text, StyleSheet} from '@react-pdf/renderer'

const PdfComponent = ({user}) => { 


    const styles = StyleSheet.create({
        page: { backgroundColor: 'tomato' },
        section: { color: 'white', textAlign: 'center', margin: 30 },
        square: {height: '125px',
                width: '125px',
                borderRight: '20px solid red',
                borderRadius: '95px',
                position: 'absolute',
                marginLeft: -55,
                marginTop: 65,
                opacity: 0.3}
      });

    return (<Document>
        <Page size="A4" >
                <View style={{backgroundColor: '#c7d7d7',
                            width: '100%',
                            height: '300px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 'auto',
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute'}}> 
                    <View style={{width: '35%',
                                borderRight: '1px dotted #275a51',
                                color: '#275a51',
                                display: 'flex',
                                flexDirection: 'column',
                                paddingTop: '85px',
                                paddingBottom: '85px',
                                padding: '12px',
                                height: '100%'}}>
                        <View style={styles.square}></View>
                        <Text style={{marginTop: 'auto',
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                    fontSize: '32px',
                                    fontWeight: 'bold',}}>Sorteo</Text>
                        <Text style={{marginBottom: 'auto',
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                      fontSize: '16px',}}>Freidora de Aire Oster</Text>
                    </View>
                    <View style={{display: 'flex',
                                flexDirection: 'column',
                                padding: '8px',
                                width: '65%',
                                color: '#275a51',
                                height: '100%'}}>
                        <Text style={{ marginTop: '12px',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        marginLeft: 'auto',
                                        marginRight: 'auto'}}>Fecha del Sorteo : 25/10/2022</Text>
                        <Text style={{marginTop: '16px',
                                        marginLeft: '20px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        'border-bottom': 'solid 1px black'}}>Nombre: {user? user.name : ''}</Text>
                        <Text style={{marginTop: '16px',
                                        marginLeft: '20px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        'border-bottom': 'solid 1px black'}}>Direccion: {user? user.address : ''}</Text>
                        <Text style={{marginTop: '16px',
                                        marginLeft: '20px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        'border-bottom': 'solid 1px black'}}>Telefono: {user? user.phone : ''}</Text>
                        <Text style={{marginTop: '16px',
                                        marginLeft: '20px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        'border-bottom': 'solid 1px black'}}>Email: {user? user.email : ''}</Text>
                        <Text style={{ 
                                    marginLeft: 'auto',
                                    marginTop: 'auto',
                                    color: 'red',
                                    fontSize: '24px',
                                    fontWeight: 'bold'}}>Ticket N°: {user? user.ticketNumber : ''}</Text>
                    </View>
                </View>
        </Page>
    </Document>)
}

export default PdfComponent