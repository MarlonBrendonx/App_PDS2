import React from 'react';
import { View,ToastAndroid,BackHandler,Image,TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import {useNetInfo} from "@react-native-community/netinfo";

function NoInternet({navigation}){

        const netInfo = useNetInfo();

        const exitApplication = async () => {
            BackHandler.exitApp();
        }
    
        return (
            <>
            
            <View style={ styles.container }>
                
                <View style={ styles.Titles }>

                    <Text style={styles.txtTitle}>Oops!</Text>
                    <Text>Você está off-line,Verifique sua conexão </Text>

                </View>

                <View style={ styles.imagegif }>
                    <Image style={{ height:230,width:300 }} source={ require("../../assets/NoInternet/gif2.gif") } />
                </View>

                <View style={ styles.Buttons } >
                    <>
 
                        <TouchableOpacity style={styles.btnExit} onPress={exitApplication} >
                                <Text style={styles.textExit}>Sair do aplicativo</Text>
                        </TouchableOpacity>
                    </>
                </View>

            </View>
        </>
        );


}

export default NoInternet;