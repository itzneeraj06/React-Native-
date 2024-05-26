//rnfs <== shortcut

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={styles.headingText}>FlatCards</Text>
                    <View style={styles.container}>
                        <View style={[styles.red, styles.card]}>
                            <Text style={styles.text}>Red</Text>
                        </View>
                        <View style={[styles.green, styles.card]}>
                            <Text style={styles.text}>Green</Text>
                        </View>
                        <View style={[styles.blue, styles.card]}>
                            <Text style={styles.text}>Blue</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 50,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    text:{
        fontSize:20,
        color:'#fff'
    },
    red: {
        backgroundColor: 'red'
    },
    green: {
        backgroundColor: 'green'
    },
    blue: {
        backgroundColor: 'blue'
    },
})