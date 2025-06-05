import colors from '../assets/colors/colors';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import  {items} from '../assets/data/itemsData';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Dimensions,
    useColorScheme,
    View,
    Animated,
  } from 'react-native';

export default function CategoryScroll ({ items = [] }) {
    return (
        <ScrollView horizontal = {true} style={styles.catScrollBox}>
        {items.map((item, index) => (
            <View style={styles.itemBox}>
                <Image source={item.image} style={styles.itemImage}/>
                <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
            </View>  
        ))}
        </ScrollView>
    

    );
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({


    itemBox: {
        backgroundColor: colors.secondary,
        height: height * 0.2,
        width: width * 0.275,
        borderRadius: 30,
        marginRight: width * 0.05,
    },

    itemImage: {
        height: height * 0.1,
        width: width * 0.25,
        resizeMode: 'contain',
        marginTop: height * 0.01,
        marginLeft: width * 0.01,
    },

    itemTitle: {
        fontWeight: 'bold',
        marginLeft: width * 0.02,
        marginTop: height * 0.01,
    },

    itemPrice: {
        textAlign: 'right',
        marginRight: width * 0.02,
        marginTop: height * 0.01,
    },
});