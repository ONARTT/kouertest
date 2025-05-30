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
    Animated,
  } from 'react-native';

Feather.loadFont();

export default Home = () => {
    return  (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <Animated.View style={[styles.dynamicHeader, {top: stickyTop,}]}>
                        <View style={styles.headerBottomFill}></View>
                        <View style={styles.headerBottom}></View>
                        <View style={[styles.searchBarWrapper, styles.elevation]}>
                            <TextInput style={[styles.searchBar]} placeholder="Rechercher"/>
                            <View style={styles.searchButton}>
                                <Feather name="search" size={21} color={colors.background}/>
                            </View>
                        </View>
                    
                </Animated.View>
                <ScrollView
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}],{
                        useNativeDriver: false
                    })}
                
                >   
                    <View style={styles.headerWrapper}>
                        
                        <Text style={styles.headerTitle}>La Petite Fabrique</Text>
                        
                    </View>
                
                    <View style={styles.headerBottomWrapper}>
                        <View style={styles.headerBottom}></View>
                        <View style={[styles.searchBarWrapper, styles.elevation]}>
                            <TextInput style={styles.searchBar} placeholder="Rechercher"/>
                            <View style={styles.searchButton}>
                                <Feather name="search" size={21} color={colors.background}/>
                            </View>
                            
                        </View>
                    </View>
                

                    {/* Scrollable Content */}
                    <View contentContainerStyle={styles.content}>
                        {Array.from({ length: 50 }).map((_, index) => (
                        <Text key={index} style={styles.item}>
                            Item {index + 1}
                        </Text>
                        ))}
                    </View>

                    
                    <View style={styles.footer}>
                        <View contact>
                            <Text style={styles.footerText}>Contact</Text>
                            <Feather name="mail" size={21} color={colors.background}/>
                            <Text></Text>
                        </View>
                        
                    </View>
                </ScrollView>
                
            </SafeAreaView>
        </View>
    );
};

const { height, width } = Dimensions.get('window');
const scrollY = new Animated.Value(0);
const stickyTop = scrollY.interpolate({
    outputRange: [height * (-0.12), 0],
    inputRange: [height * 0.055, height * 0.055],
    extrapolate: 'clamp',
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dynamicHeader: {
        zIndex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
    },
    headerWrapper: {
        backgroundColor: colors.header,
        paddingHorizontal: 18,
        paddingVertical: height * 0.03,
        paddingBottom: height * 0.03,
        gap: 15,
        zIndex: 1,
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
        left: width * 0.25 ,
    },
    headerBottomWrapper: {
        
        top: 0,
        zIndex: 1, 
        
    },
    headerBottom: {
        backgroundColor: colors.header,
        height: 30,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    headerBottomFill: {
        backgroundColor: colors.header,
        height: 30,
        
    },
    searchBarWrapper: {
        paddingHorizontal: 18,
        position: 'absolute',
        bottom: -18,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 20,
        left: 0,
        right: 0,
        marginHorizontal: width * 0.05,
        justifyContent: 'space-between',
        gap: width * 0.36,
    },
    searchButton: {
        backgroundColor: colors.header,
        borderRadius: 20,
        width: width * 0.14,
        paddingVertical: height * 0.005,
        alignItems: 'center',
        
        
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
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },

    footer: {
        backgroundColor: colors.header,
        paddingHorizontal: 18,
        paddingVertical: height * 0.03,
        paddingBottom: height * 0.03,
        
    },

    footerText: {
        backgroundColor: colors.header,

    }

});

