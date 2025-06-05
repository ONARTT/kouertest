import { Background, ResourceSavingView } from '@react-navigation/elements';
import colors from '../assets/colors/colors';
import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import CategoryScroll from './CategoryScroll';
import  {items} from '../assets/data/itemsData';
import { useState } from 'react';
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

    const [searchText, setSearchText] = useState('');
    const [filteredItems, setFilteredItems] = useState(items)

    const handleSearch = (text) => {
        
        setSearchText(text);

        const filtered = items.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
        
        setFilteredItems(filtered);
    }

    

    

    return  (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <Animated.View style={[styles.dynamicHeader, {top: stickyTop,}]}>
                        <View style={styles.headerBottomFill}></View>
                        <View style={styles.headerBottom}></View>
                        <View style={[styles.searchBarWrapper, styles.elevation]}>
                            <TextInput style={[styles.searchBar]} placeholder="Rechercher" value={searchText} onChangeText={handleSearch}/>
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
                            <TextInput style={[styles.searchBar]} placeholder="Rechercher" value={searchText} onChangeText={handleSearch}/>
                            <View style={styles.searchButton}>
                                <Feather name="search" size={21} color={colors.background}/>
                            </View>
                            
                        </View>
                    </View>
                

                    {/* Scrollable Content */}
                    {/*<View contentContainerStyle={styles.content}>
                        {Array.from({ length: 50 }).map((_, index) => (
                        <Text key={index} style={styles.item}>
                            Item {index + 1}
                        </Text>
                        ))}
                    </View>*/}
                    <View style={styles.categorieBlock}>
                        <Text style={styles.catTitle}>Produits Phares</Text>
                        <CategoryScroll items = {filteredItems} />
                    </View>

                    <View style={styles.categorieBlock}>
                        <Text style={styles.catTitle}>Nouveautés</Text>
                        <CategoryScroll items = {items} />
                    </View>

                    <View style={styles.categorieBlock}>
                        <Text style={styles.catTitle}>Catégorie 1</Text>
                        <CategoryScroll items = {items} />
                    </View>

                    <View style={styles.categorieBlock}>
                        <Text style={styles.catTitle}>Catégorie 2</Text>
                        <CategoryScroll items = {items} />
                    </View>

                    
                    
                    <View style={styles.footer}>
                        <View>
                            <View style={styles.contact}>
                            <Text style={styles.footerText}>Contact</Text>
                                <View style={styles.contactContent}t>
                                    <Feather name="mail" size={21} color={colors.background}/>
                                    <Text style={styles.contactText}>lapetitefabrique@gmail.com</Text>
                                </View>
                                <View style={styles.contactContent}>
                                    <Feather name="phone" size={21} color={colors.background}/>
                                    <Text style={styles.contactText}>06 76 51 14 51</Text>
                                </View>
                                
                            </View>
                        </View>
                        <View style={styles.socials}>
                            <Feather name="instagram" size={30} color={colors.background} style={styles.socialsLogo}/>
                            <Feather name="twitter" size={30} color={colors.background} style={styles.socialsLogo}/>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
    },

    footerText: {
        color: colors.background,
        fontSize: 21,
        fontWeight: 'bold',
    },

    contactContent: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginTop: height * 0.01,
    },
    
    contactText: {
        marginLeft: width * 0.025,
        color: colors.background,
    },

    socials: {
        flexDirection: 'row',
        marginTop: height * 0.01,
    },

    socialsLogo: {
        marginRight: 5,

    },
    
    categorieBlock: {
        marginLeft: width * 0.035,
        marginBottom: height * 0.025,

    },

    catTitle: {
        fontWeight: 'bold',
        fontSize: 21,
        marginTop: height * 0.05,
        marginBottom: height * 0.025,
    },

 

});

