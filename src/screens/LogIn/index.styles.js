import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";
const styles = StyleSheet.create({
    signInPage: {
        flex: 1,
        backgroundColor: colors.secondary_black
    },
    logInText: {
        textAlign: 'center',
        color: colors.third_white,
        fontSize: 20,
        marginTop: '30%',
        fontWeight: '500',
        fontFamily: "Poppins-Medium"
    },
    paddingStyle: {
        padding: 25
    },
    textInputStyle: {
        backgroundColor: colors.secondary_black,
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 12,
        fontWeight: '500',
        fontFamily: "Poppins-Medium"
    },
    buttonStyle: {
        backgroundColor: colors.primary_orange,
        borderRadius: 20,
        paddingVertical: 12,
        marginTop: "40%"
    },
    buttonText: {
        textAlign: 'center',
        color: colors.third_white,
        fontSize: 13,
        fontWeight: '500',
        fontFamily: "Poppins-Medium"
    },
    flexStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '12%'
    },
    accountText: {
        color: colors.third_white,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: "Poppins-Bold"
    },
    wrapperInput: {
        position: 'relative',
    },
    wrapperIcon: {
        position: 'absolute',
        right: 13,
        top: '24%',
    },
    eyeIcon: {
        color: colors.third_white,
    },
});
export default styles;