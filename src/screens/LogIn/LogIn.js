import { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './index.styles';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../colors/colors';
import auth from "@react-native-firebase/auth";
import { IonIcon } from '../../component/Icons/Icons';

const LogIn = () => {

    const navigation = useNavigation();

    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [logIn, setLogIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState("");
    const [seePassword, setSeePassword] = useState(true);

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
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                setLogIn(false);
                // If server response message same as Data Matched
                if (user) navigation.navigate("BottomTab");
            })
            .catch((error) => {
                setLogIn(false);
                if (error.code === "auth/invalid-email")
                    setErrorText(error.message);
                else if (error.code === "auth/user-not-found")
                    setErrorText("No User Found, Please SignUp first");
                else {
                    setErrorText(
                        "Please check your email id or password"
                    );
                }
            });
    };

    useEffect(() => {
        setTimeout(() => {
            setIsAuthenticated(false);
            // Check if currentUser is set or not
            // If not then send for Authentication
            // else send to Home Screen
            navigation.navigate(
                auth().currentUser ? "BottomTab" : "LogIn"
            );
        }, 2000);
    }, []);

    if (isAuthenticated)
        return (
            <View
                style={{ backgroundColor: colors.secondary_black, justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: "100%" }}
            >
                <ActivityIndicator />
            </View>
        );
    else
        return (
            <ScrollView
                style={styles.signInPage}
                keyboardShouldPersistTaps={'handled'}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles.logInText}>Log In</Text>
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
                    {errorText && <Text style={{ color: 'red', fontSize: 12 }}>{errorText}</Text>}
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle} onPress={handleSubmitPress}>
                        {logIn ? (
                            <View style={styles.indicatorStyle}>
                                <ActivityIndicator />
                            </View>
                        ) : (
                            <Text style={styles.buttonText}>Log In</Text>
                        )}

                    </TouchableOpacity>
                    <View style={styles.flexStyle}>
                        <Text style={styles.accountText}>Don’t have an account ? </Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Register') }}>
                            <Text style={styles.accountText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
};

export default LogIn;
