import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import Logo from '../../assets/logo.svg';

const StyledView = styled(View)
const StyledText = styled(Text)

const Landing = () => {
    return (
       <StyledView tw='bg-blue-bright w-full h-full justify-center items-center'>
        <StyledText tw='font-bold text-white text-3xl font-extrabold'>Messaging</StyledText>
        
       </StyledView> 
    );
}

export default Landing;
