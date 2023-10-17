import { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../LogIn/index.styles';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../colors/colors';
import auth from "@react-native-firebase/auth";
import { IonIcon } from '../../component/Icons/Icons';

const Register = () => {

    const navigation = useNavigation();

    const [logIn, setLogIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState("");
    const [seePassword, setSeePassword] = useState(true);

// register function
    const handleSubmitPress = () => {
        setErrorText("");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setErrorText('Please enter a valid email address.');
            return;
        }
        if (!name) {
            Alert.alert("Please fill Name");
            return;
        }
        if (!email) {
            Alert.alert("Please fill Email");
            return;
        }
        if (!password) {
            Alert.alert("Please fill Password");
            return;
        }
        setLogIn(true)
        auth()
            .createUserWithEmailAndPassword(
                email,
                password
            )
            .then((user) => {
                if (user) {
                    auth()
                        .currentUser.updateProfile({
                            displayName: name,
                        })
                        .then(() => navigation.navigate("BottomTab"))
                        .catch((error) => {
                            Alert.alert(error);
                        });
                }
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setErrorText(
                        "That email address is already in use!"
                    );
                } else {
                    setErrorText(error.message);
                }
            });
    };

    return (
        <ScrollView
            style={styles.signInPage}
            keyboardShouldPersistTaps={'handled'}
            showsHorizontalScrollIndicator={false}>
            <Text style={styles.logInText}>Register Here</Text>
            <View style={styles.paddingStyle}>
                <TextInput
                    label="Name"
                    mode="outlined"
                    style={styles.textInputStyle}
                    value={name}
                    onChangeText={text => setName(text)}
                    selectTextOnFocus={false}
                    placeholder='Enter Your Name'
                    outlineColor={colors.third_white}
                    activeOutlineColor={colors.third_white}
                    selectionColor={colors.third_white}
                    textColor={colors.third_white}
                    outlineStyle={{ borderRadius: 20 }}
                />
                <TextInput
                    label="Email"
                    mode="outlined"
                    style={styles.textInputStyle}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    selectTextOnFocus={false}
                    placeholder='Enter Your Email'
                    outlineColor={colors.third_white}
                    activeOutlineColor={colors.third_white}
                    selectionColor={colors.third_white}
                    textColor={colors.third_white}
                    outlineStyle={{ borderRadius: 20 }}
                />
                <View style={styles.wrapperInput}>
                    <TextInput
                        label="Password"
                        secureTextEntry={seePassword}
                        mode="outlined"
                        style={styles.textInputStyle}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        selectTextOnFocus={false}
                        placeholder='Enter Your Password'
                        outlineColor={colors.third_white}
                        activeOutlineColor={colors.third_white}
                        selectionColor={colors.third_white}
                        textColor={colors.third_white}
                        outlineStyle={{ borderRadius: 20 }}
                    />
                    <TouchableOpacity
                        style={styles.wrapperIcon}
                        onPress={() => setSeePassword(!seePassword)}>
                        {seePassword !== true ? (
                            <IonIcon name="eye" size={25} style={styles.eyeIcon} />
                        ) : (
                            <IonIcon name="eye-off" size={25} style={styles.eyeIcon} />
                        )}
                    </TouchableOpacity>
                </View>
                {/* here show any error if occur */}
                {errorText && <Text style={{ color: 'red', fontSize: 12 }}>{errorText}</Text>}
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle} onPress={handleSubmitPress}>
                    {logIn ? (
                        <View style={styles.indicatorStyle}>
                            <ActivityIndicator />
                        </View>
                    ) : (
                        <Text style={styles.buttonText}>SignUp</Text>
                    )}

                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Register;
