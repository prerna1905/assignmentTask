import { useState, useEffect } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import { SearchBar } from 'react-native-elements';
import { colors } from '../../colors/colors';
import axios from 'axios';

const Explore = () => {

    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async text => {
        setSearchQuery(text);
    };

    const handleCancel = () => {
        setSearchQuery(''); // Clear the search query
        setSearchResults([]); // Clear the search results
    };

    useEffect(() => {
        if (searchQuery) {
            // Make the Axios request to the OMDB API
            axios.get(`https://www.omdbapi.com/?apikey=b686258&s=${searchQuery}`)
                .then(response => {
                    setSearchResults(response.data.Search || []);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }else {
            setSearchResults([]); // Clear the search results if the query is empty
        }
    }, [searchQuery]);

    return (
        <ScrollView
            style={styles.profilePage}
            keyboardShouldPersistTaps={'handled'}
            showsHorizontalScrollIndicator={false}>
            <SearchBar
                searchIcon={{ size: 26, color: colors.third_white }}
                placeholder="Search here"
                placeholderTextColor={colors.withOpacity_white}
                inputContainerimageStyle={styles.searchStyle}
                containerStyle={styles.containerStyle}
                onChangeText={handleSearch}
                onCancel={handleCancel}
                value={searchQuery}
                inputStyle={{ color: colors.third_white }}
            />
            <View style={styles.cardContainer}>
                {searchResults.map(result => (
                    <View key={result.imdbID} style={styles.cardInnerStyle}>
                        <Image source={{ uri: result.Poster }} style={styles.cardImageStyle} />
                        <Text style={styles.cardTextStyle}>{result.Title}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Explore;
