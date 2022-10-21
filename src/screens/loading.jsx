import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import Logo from '../assets/logo.svg';

const StyledView = styled(View)

const Loading = () => {
    return (
      <StyledView tw='bg-blue-velvet w-full h-full justify-center items-center'>
        <StyledView tw='w-4/5 items-center'>
          <Logo width='70%' viewBox='0 0 374 309' />
        </StyledView>
      </StyledView> 
    );
}

export default Loading;
