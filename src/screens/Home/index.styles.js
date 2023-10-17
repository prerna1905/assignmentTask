import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";
const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        backgroundColor: colors.secondary_black,
        padding: 25
    },
    topTab: {
        flexDirection: 'row',
        marginVertical: '8%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    outerBorder:{
        borderWidth: 1, 
        borderRadius: 10, 
        borderColor: colors.third_white, 
        paddingVertical: 5, 
        paddingHorizontal: 10 
    },
    tabTextStyle:{
        color: colors.third_white, 
        fontSize: 10, 
        fontWeight: '400', 
        textAlign: 'center',
        fontFamily: "Poppins-Regular"
    },
    playingText:{ 
        color: colors.third_white, 
        fontSize: 20, 
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold"
    },
    cardContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 15
    },
    cardInnerStyle:{
        marginBottom: 10, 
        width: 150
    },
    cardImageStyle:{
        width: 132, 
        height: 200, 
    },
    cardTextStyle:{
        color: colors.third_white, 
        fontSize: 12, 
        fontWeight: '500',
        marginTop: 6,
        fontFamily: "Poppins-Medium"
    }
});
export default styles;