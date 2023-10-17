import { View, ScrollView, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import { AntIcon } from '../../component/Icons/Icons';
import { colors } from '../../colors/colors';
import auth from "@react-native-firebase/auth";

const Profile = () => {

    const navigation = useNavigation();


    // perform logout function
    const logout = () => {
        Alert.alert(
            "Logout",
            "Are you sure? You want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        return null;
                    },
                },
                {
                    text: "Confirm",
                    onPress: () => {
                        auth()
                            .signOut()
                            .then(() => navigation.navigate("LogIn"))
                            .catch((error) => {
                                if (error.code === "auth/no-current-user")
                                    navigation.navigate("LogIn");
                                else Alert.alert(error);
                            });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <ScrollView
            style={styles.profilePage}
            keyboardShouldPersistTaps={'handled'}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.profileMainContainer}>
                <TouchableOpacity
                    style={styles.circleStyle}
                    activeOpacity={0.8}>
                    <AntIcon
                        name="closecircleo"
                        size={20}
                        color={colors.third_white}
                    />
                </TouchableOpacity>
                <Text style={styles.profileText}>My Profile</Text>
                <View></View>
            </View>
            <Image source={require('../../assets/images/profileImage.png')} style={styles.imageStyle} />
            <Text style={styles.nameText}>John Doe</Text>
            <View style={styles.accountContainer}>
                <AntIcon
                    name="user"
                    size={30}
                    color={colors.third_white}
                />
                <View style={styles.widthStyle}>
                    <Text style={styles.accountText}>Account</Text>
                    <Text style={styles.editText}>Edit Profile</Text>
                    <Text style={styles.editText}>Change Password</Text>
                </View>
                <AntIcon
                    name="right"
                    size={18}
                    color={colors.third_white}
                    style={styles.rightStyle}
                />
            </View>
            <View style={styles.accountContainer}>
                <AntIcon
                    name="setting"
                    size={30}
                    color={colors.third_white}
                />
                <View style={styles.widthStyle}>
                    <Text style={styles.accountText}>Settings</Text>
                    <Text style={styles.editText}>Themes</Text>
                    <Text style={styles.editText}>Permissions</Text>
                </View>
                <AntIcon
                    name="right"
                    size={18}
                    color={colors.third_white}
                    style={styles.rightStyle}
                />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle} onPress={logout}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Profile;
