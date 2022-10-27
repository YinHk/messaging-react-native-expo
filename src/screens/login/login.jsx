import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Input } from '@rneui/themed';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledInput = styled(Input)

const Login = () => {
    return (
        <StyledView>
          <StyledView>
            <StyledInput
              placeholder='email'
            />
            <StyledInput
              placeholder='password'
            />
          </StyledView>
        </StyledView> 
    );
}

export default Login;



