import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending  </Text>
            <View style={[styles.card, styles.cardElevator]}>
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2020/03/20/17/51/girl-4951443_1280.jpg' }} style={styles.img} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>One Life Baby!!!</Text>
                    <Text style={styles.cardLabel}>Russian</Text>
                    <Text style={styles.cardDec}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error.</Text>
                    <Text style={styles.cardFooter}>Click</Text>

                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 50,
        fontWeight: "bold",
        paddingHorizontal: 8

    },
    card: {
        height: 700,
        width: 350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16


    },
    cardElevator: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },



    },
    img: {
        height: 550,
        marginBottom: 8,
        borderRadius: 10,
        margin:4




    },
    cardBody: {
        flex:1,
        flexGrow:1,
        paddingHorizontal:8


    },
    cardTitle: {
        color: '#000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6

    },
    cardLabel: {
        color: '#000',
        fontSize:15,


    },
    cardDec: {
        color: '#2a2a2a',
        fontSize:11

    },
    cardFooter: {
        color: '#987070',
        backgroundColor:'#D1D8C5',
        width:60,
        textAlign:'center',
        borderRadius:5,
        marginVertical:10,
        marginHorizontal:5

    }

})