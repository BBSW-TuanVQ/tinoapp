/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Button,
  Center,
  Icon,
  Input,
  NativeBaseProvider,
  ScrollView,
  SearchIcon,
  Text,
  View,
  Image,
  Flex,
  Spacer,
  FlatList,
  Square,
  Box,
  AspectRatio,
  Stack,
  Heading,
  HStack,
  Pressable,
  VStack,
} from 'native-base';
import React from 'react';
import AppBar from '../components/AppBar';
import {Dimensions, StyleSheet} from 'react-native';
import {NativeBaseConfigProvider} from 'native-base/lib/typescript/core/NativeBaseContext';
import {SvgXml} from 'react-native-svg';
import svg from '../assets/svg';

const services = [
  {
    title: 'Tên miền',
    icon: svg.iconWeb,
    bg: '#F0F0F0',
  },
  {
    title: 'Hosting',
    icon: svg.iconHosting,
    bg: '#F0F0F0',
  },
  {
    title: 'Wordpress',
    icon: svg.iconWp,
    bg: '#F0F0F0',
  },
  {
    title: 'Cloud hosting',
    icon: svg.iconCloudHosting,
    bg: '#F0F0F0',
  },
  {
    title: 'Email',
    icon: svg.iconMail,
    bg: '#F0F0F0',
  },
  {
    title: 'Phần mềm',
    icon: svg.iconCode,
    bg: '#F0F0F0',
  },
  {
    title: 'Tino Fone',
    icon: svg.iconFone,
    bg: '#F0F0F0',
  },
  {
    title: 'Xem tất cả',
    icon: svg.iconMore,
    bg: '#F0F0F0',
  },
];

const supports = [
  {
    title: 'Yêu cầu hỗ trợ',
    icon: svg.iconSupport,
    bg: '#F0F0F0',
  },
  {
    title: 'Nhân viên hỗ trợ',
    icon: svg.iconSeller,
    bg: '#F0F0F0',
  },
];

const TinoHomepageScreen = ({navigation}: any) => {
  return (
    <ScrollView _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}}>
      <AppBar />

      <View paddingX={3}>
        <Input
          marginBottom={5}
          variant="filled"
          bg={'#F9FAFB'}
          placeholder="Search"
          width="100%"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <SearchIcon m="2" ml="3" size="6" color="gray.400" />
          }
        />

        <Image
          source={require('../assets/images/banner.png')}
          alt="Alternate Text"
          marginBottom={5}
        />

        <View marginBottom={3}>
          <Text bold fontSize={'xl'} marginBottom={3}>
            Quản lý dịch vụ
          </Text>

          <FlatList
            contentContainerStyle={{width: '100%'}}
            columnWrapperStyle={{
              alignItems: 'flex-start',
            }}
            numColumns={4}
            data={services}
            keyExtractor={(service, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <Center
                  marginBottom={3}
                  w={'25%'}
                  _text={{
                    color: 'coolGray.800',
                  }}>
                  <VStack alignItems={'center'}>
                    <Center
                      marginBottom={2}
                      p={3}
                      bg={item.bg}
                      borderRadius={10}>
                      <SvgXml xml={item.icon} />
                    </Center>

                    <Text p={2} textAlign={'center'}>{item.title}</Text>
                  </VStack>
                </Center>
              );
            }}
          />
        </View>

        <View marginBottom={3}>
          <Text bold fontSize={'xl'} marginBottom={3}>
            Liên hệ hỗ trợ
          </Text>

          <FlatList
            contentContainerStyle={{width: '100%'}}
            columnWrapperStyle={{
              alignItems: 'flex-start',
            }}
            numColumns={4}
            data={supports}
            keyExtractor={(service, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <Center
                  marginBottom={3}
                  w={'25%'}
                  _text={{
                    color: 'coolGray.800',
                  }}>
                  <VStack alignItems={'center'}>
                    <Center marginBottom={2} p={3} bg={item.bg} rounded={'lg'}>
                      <SvgXml xml={item.icon} />
                    </Center>

                    <Text p={2} textAlign={'center'}>
                      {item.title}
                    </Text>
                  </VStack>
                </Center>
              );
            }}
          />
        </View>

        <View marginBottom={5}>
          <Text bold fontSize={'xl'} marginBottom={3}>
            Tin tức hôm nay
          </Text>
          <FlatList
            numColumns={4}
            data={[1, 2]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <Center
                  paddingX={1}
                  w={'50%'}
                  _text={{
                    color: 'coolGray.800',
                  }}>
                  <Box rounded="lg" overflow="hidden">
                    <Image
                      marginBottom={3}
                      source={require('../assets/images/ads.png')}
                      alt="image"
                    />

                    <View px={1}>
                      <Text fontWeight={'bold'} marginBottom={3}>
                        [Sale] Giảm 199k khi gia hạn tên miền tháng 10
                      </Text>
                      <Text fontSize={'xs'}>Nhận code và voucher “xịn”</Text>
                    </View>
                  </Box>
                </Center>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default TinoHomepageScreen;
