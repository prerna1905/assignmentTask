import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";
const styles = StyleSheet.create({
    videoPage: {
        flex: 1,
        backgroundColor: colors.secondary_black,
    },
    titleStyle: {
        color: colors.third_white,
        fontSize: 22,
        fontWeight: '400',
        fontFamily: "Poppins-Regular"
    },
    playingText: {
        color: colors.third_white,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold"
    },
    outerBorder: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.third_white,
        paddingVertical: 8,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    tabTextStyle: {
        color: colors.third_white,
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: "Poppins-Regular"
    },
    horizontalLine: {
        borderBottomWidth: 2,
        borderColor: colors.third_white,
        marginTop: '8%'
    },
    topTab: {
        flexDirection: 'row',
        marginVertical: '4%',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.third_white,
        fontFamily: "Poppins-Medium"
    },
    downloadSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateStyle: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.third_white,
        marginLeft: 5,
        fontFamily: "Poppins-Medium"
    },
    paraStyle: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: colors.third_white,
        fontFamily: "Poppins-Light"
    },
    topCastStyle: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    topText: {
        fontSize: 8,
        fontWeight: '500',
        textAlign: 'center',
        color: colors.third_white,
        fontFamily: "Poppins-Medium"
    }
});
export default styles;