import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";
const styles = StyleSheet.create({
    profilePage: {
        flex: 1,
        backgroundColor: colors.secondary_black,
        padding: 22
    },
    searchStyle: {
        borderRadius: 8,
        backgroundColor: 'none',
    },
    containerStyle: {
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'none',
        borderColor: colors.withOpacity_white,
        borderWidth: 2,
        color: colors.third_white
    },
    cardContainer:{
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        marginTop: '10%'
    },
    cardInnerStyle:{
        marginBottom: '10%', 
        width: '50%'
    },
    cardImageStyle:{
        width: 162, 
        height: 250, 
        alignSelf: 'center'
    },
    cardTextStyle:{
        color: colors.third_white, 
        fontSize: 13, 
        fontWeight: '500',
        marginTop: '3%', 
        textAlign: 'center',
        fontFamily: "Poppins-Medium"
    }
});
export default styles;