import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { AntIcon } from '../Icons/Icons';
import styles from './index.styles';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../colors/colors';

const { width } = Dimensions.get('window');

const CarouselComponent = (props) => {
    // only take the first five post
    const data = props.data.slice(0, 5); 
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Video', {id: item.imdbID, data: data}) }}>
                <Image source={{uri: item.Poster}} style={styles.itemImage} />
                
            </TouchableOpacity>
            <View style={styles.flexStyle}>
                <View style={{ width: '48%' }}>
                    <Text style={styles.itemTitle}>{item.Title}</Text>
                    <Text style={styles.itemDescription}>{item.year}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.watchButton} onPress={() => { navigation.navigate('Video', {id: item.imdbID, data: data}) }}>
                    <AntIcon
                        name="playcircleo"
                        size={15}
                        color={colors.third_white}
                    />
                    <Text style={styles.watchText}>Watch Trailer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width * 0.7}
                layout={'default'}
            />
        </View>
    );
};

export default CarouselComponent;
