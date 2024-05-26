import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedText]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedText]}>
                    <Text>
                        Me
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedText]}>
                    <Text>
                        To
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedText]}>
                    <Text>
                        Scroll
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedText]}>
                    <Text>
                        More...
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 50,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
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
    elevatedText: {

        backgroundColor:'purple',

    }
})