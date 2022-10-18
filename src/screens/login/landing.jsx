import React from 'react';
import { Text, View } from 'react-native';
import { Button } from "@rneui/themed";
import { styled } from 'nativewind';
import Logo from '../../assets/logo.svg';

const StyledView = styled(View)
const StyledText = styled(Text)

const Landing = () => {
    return (
      <StyledView tw='bg-blue-bright w-full h-full justify-center items-center'>
        <StyledText tw='font-bold text-white text-4xl font-extrabold'>Messaging</StyledText>
        <StyledView tw='w-4/5 items-center'>
          <Logo width='70%' viewBox='0 0 374 309' />
        </StyledView>
        <StyledView tw='items-start w-4/6'>
          <StyledText tw='text-white text-xl'>Chat everywhere</StyledText>
        </StyledView>
        <StyledText tw='text-white text-xl w-4/6'>connect with your team and friends</StyledText>
        <StyledView tw='mt-16'> 
          <Button title='Start using' tw='bg-current rounded-lg' />
        </StyledView>
      </StyledView> 
    );
}


export default Landing;
