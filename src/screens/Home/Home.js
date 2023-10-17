import { ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import Carousel from '../../component/Carousel/Carousel';
import Card from '../../component/Card/Card';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../redux/Action';
import { colors } from '../../colors/colors';

const Home = () => {
    const navigation = useNavigation();

    const myState = useSelector((state) => state.movie.movie);
    const dispatch = useDispatch();

    const scrollViewRef = useRef(null);
    const [layoutInfo, setLayoutInfo] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    const scrollToTab = (offset) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: offset, animated: true });
        }
    };

    const onLayout = (event) => {
        const { x, y, height, width } = event.nativeEvent.layout;
        setLayoutInfo({ x: x, y: y, width: width, height: height });
    };

    const fetchMovieData = () => dispatch(getMovieDetails());

    useEffect(() => {
        fetchMovieData();
    }, []);

    return (
        <ScrollView
            style={styles.homePage}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
        >
            <Image source={require('../../assets/images/movieIcon.png')} style={{ width: 30, height: 30 }} />
            <View style={styles.topTab}>
                <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder} onPress={() => scrollToTab(layoutInfo.height)}>
                    <Text style={styles.tabTextStyle}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder} onPress={() => scrollToTab(layoutInfo.height * 2)}>
                    <Text style={styles.tabTextStyle}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder} onPress={() => scrollToTab(layoutInfo.height * 3)}>
                    <Text style={styles.tabTextStyle}>Classics</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder} onPress={() => scrollToTab(layoutInfo.height * 4)}>
                    <Text style={styles.tabTextStyle}>Top 10</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.playingText}>Now Playing</Text>
            {myState.length === 0 ? (
                <Text style={{ color: colors.third_white, fontSize: 14 }}>Loading....</Text>
            ) : (
                <Carousel data={myState} />
            )}
            <View onLayout={onLayout}>
                <Text style={styles.playingText}>Popular</Text>
                <Card data={myState} />
            </View >
            <Text style={styles.playingText}>Upcoming</Text>
            <Card data={myState} />
            <Text style={styles.playingText}>Classics</Text>
            <Card data={myState} />

            <Text style={styles.playingText}>Top 10</Text>
            <Card data={myState} />
        </ScrollView>
    );
};

export default Home;
