import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import React, { useEffect } from 'react';
import Card from '../../component/Card/Card';
import { AntIcon } from '../../component/Icons/Icons';
import { colors } from '../../colors/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetailsById } from '../../redux/Action';

const Video = (props) => {

    const id = props.route.params.id
    const data = props.route.params.data
    
    const navigation = useNavigation();

    const myState = useSelector((state) => state.movieById.movieById);
    const dispatch = useDispatch();

    const actors = myState?.Actors;
    const actorArray = actors?.split(', ');

    const fetchMovieDataById = () => dispatch(getMovieDetailsById(id));

    useEffect(() => {
        fetchMovieDataById();
    }, [id]);

    return (
        <ScrollView
            style={styles.videoPage}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
        >
            <Image source={{ uri: myState.Poster }} style={{ width: 405, height: 290 }} resizeMode='stretch' />
            <View style={{ padding: 25 }}>
                <Text style={styles.titleStyle}>{myState.Title}</Text>
                <View style={styles.topTab}>
                    <AntIcon
                        name="clockcircleo"
                        size={16}
                        color={colors.third_white}
                    />
                    <Text style={styles.timeText}> {myState.Runtime}</Text>
                </View>
                <View style={styles.downloadSection}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder}>
                        <AntIcon
                            name="download"
                            size={16}
                            color={colors.third_white}
                        />
                        <Text style={styles.tabTextStyle}>Download</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder}>
                        <AntIcon
                            name="plus"
                            size={16}
                            color={colors.third_white}
                        />
                        <Text style={styles.tabTextStyle}>My List</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.topTab}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder} >
                        <Text style={styles.tabTextStyle}>Action</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder}>
                        <Text style={styles.tabTextStyle}>Thriller</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.outerBorder}>
                        <Text style={styles.tabTextStyle}>Crime</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.downloadSection}>
                    <AntIcon
                        name="star"
                        size={16}
                        color={colors.yellow_color}
                    />
                    <Text style={styles.dateStyle}>{myState.imdbRating} ({myState.imdbVotes}) </Text>
                    <Text style={styles.dateStyle}>{myState.Released}</Text>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.paraStyle}>{myState.Plot}</Text>
                </View>
                <Text style={styles.playingText}>Top Cast</Text>
                <View style={styles.topCastStyle}>
                    {actorArray?.map((actor, index) => (
                        <View key={index} style={{ width: '20%' }}>
                            <Image source={require('../../assets/images/profileImage.png')} style={{ width: 50, height: 75, borderRadius: 25 }} />
                            <Text style={styles.topText}>{actor}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.playingText}>More like This</Text>
                <Card data={data} />
            </View>
        </ScrollView>
    );
};

export default Video;
