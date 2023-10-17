import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";
const styles = StyleSheet.create({
    profilePage: {
        flex: 1,
        backgroundColor: colors.secondary_black,
        padding: 30
    },
    profileMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '14%'
    },
    circleStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary_orange,
        borderRadius: 17,
        width: 34,
        height: 34
    },
    profileText: {
        color: colors.third_white,
        fontSize: 20,
        fontWeight: '500',
        fontFamily: "Poppins-Medium"
    },
    imageStyle: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: '10%'
    },
    nameText: {
        color: colors.third_white,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '3%',
        fontFamily: "Poppins-Medium"
    },
    accountContainer: {
        flexDirection: 'row',
        marginTop: '16%'
    },
    widthStyle: {
        width: '80%',
        marginHorizontal: 6
    },
    accountText:{
        color: colors.third_white, 
        fontSize: 16, 
        fontWeight: '500',
        fontFamily: "Poppins-Medium"
    },
    editText:{
        color: colors.withOpacity_white, 
        fontSize: 12, 
        fontWeight: '500',
        fontFamily: "Poppins-Medium"
    },
    rightStyle:{
        textAlign: 'center', 
        alignSelf: 'center'
    },
    buttonStyle: {
        backgroundColor: colors.primary_orange,
        borderRadius: 20,
        paddingVertical: 12,
        marginTop: "40%",
        marginBottom: '12%'
    },
    buttonText: {
        textAlign: 'center',
        color: colors.third_white,
        fontSize: 13,
        fontWeight: '500',
        fontFamily: "Poppins-Medium"
    },
});
export default styles;