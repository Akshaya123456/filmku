import React, {useState} from 'react';
import {
  View,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {THEMES} from '../../../constants/themes';
import auth from '@react-native-firebase/auth';
import {emailValidate} from '../../../utils/validate';
import Loader from '../../../components/loader/loader.component';
import {strings} from '../../../constants/strings';
import {
  ScrollWrapper,
  HeadingText,
  PaddingView,
  Button,
  ButtonText,
  FooterSubText,
  FooterText,
  ErrorView,
  ErrorText,
} from '../../register/styles/styles';

const textInput = {
  fontSize: 14,
  color: THEMES.light.colors.black,
  paddingVertical: 0,
  height: 45,
  marginHorizontal: 2,
  backgroundColor: THEMES.light.colors.white,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 2,
  paddingHorizontal: 15,
  borderRadius: 8,
};

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isValid, setValid] = useState(true);

  const {
    requiredEmail,
    requiredPassword,
    invalidEmail,
    loginSuccess,
    invalidPassword,
    userNotFound,
    loginToFilmku,
    enterEmailId,
    enterPassword,
    dontHaveAnAccount,
    register,
    blockedAccount,
  } = strings;

  const onLogin = () => {
    if (!email) {
      setError(requiredEmail);
      setValid(false);
      return;
    } else if (!password) {
      setError(requiredPassword);
      setValid(false);
      return;
    } else if (!emailValidate(email)) {
      setError(invalidEmail);
      setValid(false);
      return;
    }
    setLoading(true);
    createUser(email, password);
  };

  const createUser = async (emailText, passwordText) => {
    try {
      let response = await auth().signInWithEmailAndPassword(
        emailText,
        passwordText,
      );
      if (response && response.user) {
        setLoading(false);
        Alert.alert('Success ✅', loginSuccess);
        props.navigation.navigate('dashboard');
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      switch (err.code) {
        case 'auth/wrong-password':
          Alert.alert(invalidPassword);
          break;

        case 'auth/user-not-found':
          Alert.alert(userNotFound);
          break;

        case 'auth/too-many-requests':
          Alert.alert(blockedAccount);
          break;
      }
    }
  };
  return (
    <>
      <ScrollWrapper>
        <HeadingText>{loginToFilmku}</HeadingText>
        <PaddingView paddingTop={50}>
          <TextInput
            onChangeText={text => {
              setError();
              setEmail(text);
            }}
            value={email}
            error={isValid}
            style={textInput}
            placeholder={enterEmailId}
            placeholderTextColor={THEMES.light.colors.gray}
          />
        </PaddingView>
        <PaddingView paddingTop={20}>
          <TextInput
            onChangeText={text => {
              setPassword(text);
            }}
            value={password}
            secureTextEntry={true}
            error={isValid}
            style={textInput}
            placeholder={enterPassword}
            placeholderTextColor={THEMES.light.colors.gray}
          />
        </PaddingView>
        {error ? (
          <ErrorView>
            <ErrorText>{error}</ErrorText>
          </ErrorView>
        ) : null}
        <Button onPress={onLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
        <FooterText>
          {dontHaveAnAccount}
          <FooterSubText onPress={() => props.navigation.navigate('register')}>
            {register}
          </FooterSubText>
        </FooterText>
      </ScrollWrapper>
      {isLoading && <Loader isVisible={isLoading} />}
    </>
  );
}

export default Login;
