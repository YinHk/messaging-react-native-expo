import React from 'react';
import { Text, View } from 'react-native';
import { Button } from "@rneui/themed";
import { styled } from 'nativewind';
import Logo from '../../assets/logo.svg';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(Button)

const Landing = ({navigation}) => {
    return (
      <StyledView tw='bg-blue-velvet w-full h-full justify-center items-center'>
        <StyledText tw='font-bold text-white text-4xl font-extrabold'>Messaging</StyledText>
        <StyledView tw='w-4/5 items-center'>
          <Logo width='70%' viewBox='0 0 374 309' />
        </StyledView>
        <StyledView tw='items-start w-2/3'>
          <StyledText tw='text-white text-xl'>Chat everywhere,</StyledText>
          <StyledText tw='text-white text-xl'>connect with your friends and teams</StyledText>
        </StyledView>
        <StyledView tw='mt-16'> 
          <StyledButton 
            tw='bg-blue-ocean text-white font-bold py-2 px-4 rounded-full' 
            buttonStyle={{ backgroundColor: 'transparent' }}
            onPress={() => navigation.navigate('Login')}
          >
            Start Using
          </StyledButton>
        </StyledView>
      </StyledView> 
    );
}

export default Landing;
