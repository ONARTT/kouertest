import { Background } from '@react-navigation/elements';
import colors from '../assets/colors/colors';
import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
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
  } from 'react-native';

Feather.loadFont();

export default Home = () => {
    return  (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/logo.png')}
                            style={styles.logo}
                    />
                    <Text style={styles.headerTitle}>Le bon à portée de main</Text>
                    
                </View>
            
                <View style={styles.headerBottomWrapper}>
                    <View style={styles.headerBottom}></View>
                    <View style={styles.searchBarWrapper}>
                        <TextInput style={styles.searchBar} placeholder="Rechercher sur Kouer"/>
                        <Feather name="search" size={16} color={'black'}/>
                    </View>
                </View>
            </SafeAreaView>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.content}>
                {Array.from({ length: 50 }).map((_, index) => (
                <Text key={index} style={styles.item}>
                    Item {index + 1}
                </Text>
                ))}
            </ScrollView>
        </View>
    );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        backgroundColor: colors.header,
        paddingHorizontal: 18,
        paddingVertical: height * 0.03,
        paddingBottom: 20,
        gap: 15,
        zIndex: 0,
    },
    logo: {
        height: 25,
        width: 87.51,
    },
    headerTitle: {
        fontFamily: 'Inter_18pt-Regular',
        color: colors.background,
        fontSize: 20,
        fontWeight: 700,
    },
    headerBottomWrapper: {
        position: 'sticky',
        top: 0,
        zIndex: 1, 
    },
    headerBottom: {
        backgroundColor: colors.header,
        height: 30,
       
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    searchBarWrapper: {
        paddingHorizontal: 18,
        position: 'absolute',
        bottom: -18,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    searchBar: {
        backgroundColor: 'blue',
        borderRadius: 20,
    },
    content: {
        marginTop: height * 0.15, 
    },
    item: {
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});

