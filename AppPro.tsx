import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.whiteText}>
                Hello World !!!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:50
    },
    whiteText: {
        color: 'blue'
    },
    darkText: {
        color: 'red'
    }
})

export default AppPro
//just for understanding how things works this file remove in index.js and rendor default file app.jsx not apppro.jsx
// shift and r for refresh