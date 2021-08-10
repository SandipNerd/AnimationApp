import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import faker from 'faker';

const {width, height} = Dimensions.get('window');
const BG_IMAGE =
  'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

const AVATAR_SIZE = 70;
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

faker.seed(10);

const DATA = [...Array(30).keys()].map(i => {
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

const FlatListAnimation = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderUser = ({item, index}) => {
    console.log(index);
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 1),
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View
        style={[
          styles.cardContainer,
          {opacity: opacity, transform: [{scale}]},
        ]}>
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
    <View>
      <Image
        source={{uri: BG_IMAGE}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.key}
        renderItem={renderUser}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: SPACING}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: SPACING,
    marginBottom: SPACING,
    elevation: 20,
    borderRadius: 12,
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

export default FlatListAnimation;
