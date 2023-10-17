import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        marginVertical: '8%'
    },
    itemImage: {
        width: '100%',
        height: 450,
        borderRadius: 20,
    },
    itemTitle: {
        marginTop: 10,
        fontSize: 20,
        color: colors.third_white,
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold"
    },
    itemDescription: {
        fontSize: 12,
        color: colors.third_white,
        fontWeight: '400',
        fontFamily: "Poppins-Regular"
    },
    flexStyle:{ 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    watchButton:{
        backgroundColor: colors.primary_orange, 
        flexDirection: 'row', 
        borderRadius: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 10 
    },
    watchText:{ 
        fontSize: 12, 
        fontWeight: '500', 
        color: colors.third_white, 
        marginLeft: '4%' ,
        fontFamily: "Poppins-Medium"
    }
});
export default styles;