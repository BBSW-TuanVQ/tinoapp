/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Avatar,
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {Component} from 'react';
import {SvgXml} from 'react-native-svg';
import svg from '../assets/svg';

function AppBar() {
  return (
    <>
      <HStack px="1" py="3" alignItems="center" marginBottom={5}>
        <HStack w={'100%'} alignItems="center">
          <Avatar
            bg="purple.600"
            alignSelf="center"
            size="lg"
            source={{
              uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            }}>
            RB
          </Avatar>

          <VStack
            alignItems={'center'}
            justifyContent={'flex-start'}
            marginLeft={3}>
            <Text>Xin chào!</Text>
            <Text bold fontSize={'xl'}>
              Thị Hiệp
            </Text>
          </VStack>
        </HStack>
        <Center p={5}>
          <SvgXml xml={svg.iconCart} />
        </Center>
      </HStack>
    </>
  );
}

export default AppBar;
