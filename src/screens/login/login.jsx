import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const Login = () => {
    return (
        <StyledView>
          <StyledText>Hello</StyledText>
        </StyledView> 
    );
}

export default Login;



