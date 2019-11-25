import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import MasonryList from 'react-native-masonry-list';

function idGenerator() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

export default function Index() {
  const testData = [
    {
      url: 'https://via.placeholder.com/300x500.png/09f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x500.png/04f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/400x200.png/08f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x400.png/07f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/400x400.png/02f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/600x400.png/01f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x500.png/09f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x500.png/04f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/400x200.png/08f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x400.png/07f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/400x400.png/02f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/600x400.png/01f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x500.png/09f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x500.png/04f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/400x200.png/08f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/300x400.png/07f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/400x400.png/02f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
    {
      url: 'https://via.placeholder.com/600x400.png/01f/fff',
      id: idGenerator(),
      title: 'www.luehangs.site',
    },
  ];

  const styles = StyleSheet.create({
    masonryFooter: {
      position: 'absolute',
      zIndex: 10,
      bottom: 0,
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      backgroundColor: 'rgba(150,150,150,0.4)',
    },
    title: {
      fontSize: 25,
    },
    userPic: {
      height: 20,
      width: 20,
      borderRadius: 10,
      marginRight: 10,
    },
    userName: {
      fontSize: 15,
      color: '#fafafa',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={{flex: 1, flexGrow: 1}}>
      <MasonryList
        images={testData}
        // sorted={true}
        customImageComponent={data => {
          return (
            <Animated.View>
              <FastImage
                source={{uri: data.source.uri}}
                style={{...data.style}}
              />
            </Animated.View>
          );
        }}
        renderIndividualFooter={data => {
          return (
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.masonryFooter,
                  {
                    width: data.masonryDimensions.width,
                    margin: data.masonryDimensions.gutter / 2,
                  },
                ]}>
                <FastImage
                  source={{
                    uri: 'https://luehangs.site/images/lue-hang2018-square.jpg',
                  }}
                  style={styles.userPic}
                />
                <Text style={styles.userName}>{data.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
}
