import React, {useState} from 'react';
import {Alert, TextInput} from 'react-native';

import auth from '@react-native-firebase/auth';

import {THEMES} from '../../../constants/themes';
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
} from '../styles/styles';

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

function Register(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isValid, setValid] = useState(true);

  const {
    requiredEmail,
    requiredPassword,
    invalidEmail,
    accountCreated,
    passwordValidation,
    emailAlreadyUse,
    registerToFilmKu,
    enterEmailId,
    enterPassword,
    register,
    haveAnAccount,
    login,
    blockedAccount,
  } = strings;

  const onRegister = () => {
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
      let response = await auth().createUserWithEmailAndPassword(
        emailText,
        passwordText,
      );
      if (response && response.user) {
        setLoading(false);
        setEmail();
        setPassword();
        Alert.alert('Success ✅', accountCreated);
      }
    } catch (err) {
      setLoading(false);
      switch (err.code) {
        case 'auth/weak-password':
          Alert.alert(passwordValidation);
          break;

        case 'auth/email-already-in-use':
          Alert.alert(emailAlreadyUse);
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
        <HeadingText>{registerToFilmKu}</HeadingText>
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
        <Button onPress={onRegister}>
          <ButtonText>{register}</ButtonText>
        </Button>
        <FooterText>
          {haveAnAccount}{' '}
          <FooterSubText onPress={() => props.navigation.navigate('login')}>
            {login}
          </FooterSubText>
        </FooterText>
      </ScrollWrapper>
      {isLoading && <Loader isVisible={isLoading} />}
    </>
  );
}

export default Register;
