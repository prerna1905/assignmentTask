import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../screens/Home/index.styles';

const Card = (props) => {
    
    const data = props.data

    const navigation = useNavigation();

    return (
        <ScrollView
            horizontal={true}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps={'handled'}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.cardContainer}>

                {data?.slice(0, 5).map(post => (
                    <TouchableOpacity style={styles.cardInnerStyle} key={post.imdbID} activeOpacity={0.8} onPress={() => { navigation.navigate('Video', {id: post.imdbID, data: data}) }}>
                        <Image source={{ uri: post.Poster }} style={styles.cardImageStyle} />
                        <Text style={styles.cardTextStyle}>{post.Title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Card;
