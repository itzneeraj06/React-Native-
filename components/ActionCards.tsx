import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Cards</Text>
            <View style={styles.card}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in this this App....
                    </Text>
                </View>
                <Image source={{ uri: 'https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?w=900&t=st=1716759377~exp=1716759977~hmac=69bcb08d51f2dfbccb7ef0f993ffc9e72835e768d3e43146d806d4d1fb368abc' }} style={styles.img} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.headerText}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolor nostrum inventore? Labore veniam eaque laboriosam at inventore asperiores similique impedit, aperiam sed quas dolore alias odio suscipit explicabo ducimus vel itaque ad expedita, iste delectus in nemo quam? Maiores consequuntur consequatur odio repellendus molestiae sit asperiores nihil deleniti repudiandae voluptatibus quam voluptatum recusandae, eum porro cupiditate non doloribus amet quos quidem temporibus libero blanditiis ullam vero eaque! Aspernatur, quas doloribus! Nesciunt ad quod eius voluptatibus vero facere illo dicta laboriosam omnis temporibus explicabo nobis odio nisi unde, est similique magnam possimus sequi delectus ipsam eum veritatis ea cum? Quis!
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
                        <Text>
                            Read More
                        </Text>
                    </TouchableOpacity>
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
        width: 370,
        height: 370,
        margin:10,
        borderRadius: 5,
        backgroundColor:'#2a2a2a',
        padding:10

    },
    headingContainer: {
        paddingBottom:10,
        paddingLeft:5
    },
    headerText: {
        color: '#fff'
        , fontSize: 15
        , fontWeight: 'bold'

    },
    img: {
        height: 200,
        width:300,
        borderRadius:15
    },
    bodyContainer: {
        padding:10

    },
    footerContainer: {
        padding:5,
        flexDirection:'row'
        ,alignItems:'center'
        ,justifyContent:'space-evenly',
        backgroundColor:'#df5252',
        width:100,
        marginLeft:10,
        borderRadius:7

    }
})