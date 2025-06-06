import React from 'react';
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



const DisplaySlider = ({ images }) => {
    return (
        <SafeAreaView>
            <ScrollView horizontal={true} >
                {images.map((image, index) => (
                    <View key={`${image.title}-${index}`} style={styles.itemBox}>
                        <Image source={image.image} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>


    )
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    itemBox: {
        width: width * 0.9,
        height: height * 0.3,
    }
})

export default DisplaySlider;