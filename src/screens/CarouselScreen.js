import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  Image,
  SectionList,
} from 'react-native';
import faker from 'faker';

const {width, height} = Dimensions.get('window');
const BG_IMAGE =
  'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

const AVATAR_SIZE = 70;
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 2;

faker.seed(10);

const SECTION1 = [...Array(4).keys()].map(i => {
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

const USERS = [
  {
    title: 'sandip',
    data: SECTION1,
  },
  {
    title: null,
    data: SECTION2,
  },
];

const FlatListAnimation = () => {
  const renderUser = ({item, index}) => {
    return (
      //   <View style={[styles.cardContainer]}>
      //     <Image source={{uri: item.image}} style={styles.image} />
      //     <View>
      //       <Text style={styles.name}>{item.name}</Text>
      //       <Text numberOfLines={1} style={styles.job}>
      //         {item.title}
      //       </Text>
      //       <Text style={styles.email}>{item.email}</Text>
      //     </View>
      //   </View>
      <Text>skjdhsjkahdkjhd</Text>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text>jhgjhghjgjhg</Text>
      <Text>jhgjhghjgjhg</Text>
      <SectionList
        data={USERS}
        keyExtractor={(item, index) => item + index}
        renderItem={renderUser}
        style={{flex: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: SPACING,
    backgroundColor: 'red',
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
