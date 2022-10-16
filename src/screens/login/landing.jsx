import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import Logo from '../../assets/logo.svg';

const StyledView = styled(View)
const StyledText = styled(Text)

const Landing = () => {
    return (
       <StyledView tw='bg-blue-bright w-full h-full justify-center items-center'>
        <StyledText tw='font-bold text-white text-4xl font-extrabold'>Messaging</StyledText>
        <Logo  align="center" /* viewBox='0 0 750 352' *//>
       </StyledView> 
    );
}

/* const styles = StyleSheet.create({
    er: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
}); */

export default Landing;
