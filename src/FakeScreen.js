import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import faker from 'faker';

const AVATAR_SIZE = 70;
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 2;

const SECTION1 = [...Array(3).keys()].map(i => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});
const SECTION2 = [...Array(20).keys()].map(i => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const images = [
  'https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8am9ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8am9ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8am9ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGpvYnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const DATA = [
  {
    title: null,
    data: SECTION1,
  },
  {
    title: 'Sides',
    data: SECTION2,
  },
];

const FakeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const opacity = scrollY.interpolate({
    inputRange: [-5, -1, 0, 600],
    outputRange: [1, 1, 1, 0],
  });

  const renderItem = ({item}) => {
    return (
      <Animated.View style={[styles.cardContainer]}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text numberOfLines={1} style={styles.job}>
            {item.jobTitle}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <Animated.SectionList
      ImageComponent={Animated.Image}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      renderSectionHeader={({section: {title}}) => {
        if (title === null) {
          return null;
        } else {
          return (
            <Animated.View style={{opacity}}>
              <SliderBox
                images={images}
                autoplay={true}
                circleLoop
                sliderBoxHeight={250}
              />
            </Animated.View>
          );
        }
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: SPACING,
  },
  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: SPACING / 2,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
  },
  job: {
    fontSize: 18,
    opacity: 0.7,
    width: '85%',
  },
  email: {
    fontSize: 14,
    opacity: 0.8,
    color: '#0099cc',
  },
});

export default FakeScreen;
