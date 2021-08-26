import React from "react";
import {useNetInfo} from "@react-native-community/netinfo";


const VerifyConnection = ({navigation}) => {

    const netInfo = useNetInfo();

    if( netInfo.isConnected == false ){
            alert(netInfo.isConnected.toString());
    }


};

export default VerifyConnection;
