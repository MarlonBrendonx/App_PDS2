import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Basic from './swipe_value_based_ui';


const componentMap = {
    Basic,
};

export default function App() {
    const [mode, setMode] = useState('Basic');

    const renderExample = () => {
        return <Basic />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
            </View>
           <Basic />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 50,
        flexWrap: 'wrap',
    },
});
