import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useDispatch, useSelector} from 'react-redux';
import {getExpenses} from '../../redux/actions/expense';
import styles from './styles';
import {Colors} from '../../themes';

const getImagePath = (category) => {
  switch (category) {
    case 'Housing':
      return require('@assets/icons/housing.png');
    case 'Transportation':
      return require('@assets/icons/transportation.png');
    case 'Food':
      return require('@assets/icons/food.png');
    case 'Clothes':
      return require('@assets/icons/clothes.png');
    case 'Utilities':
      return require('@assets/icons/utilities.png');
    case 'Miscellaneous':
      return require('@assets/icons/miscellaneous.png');
  }
};

const ListItem = ({Category, Amount}) => {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <Image source={getImagePath(Category)} style={styles.icon} />
        <Text style={styles.category}>{Category}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.amount}>{`RM ${Amount}`}</Text>
      </View>
    </View>
  );
};

export default Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, list, error} = useSelector((state) => state.expense);

  React.useEffect(() => {
    dispatch(getExpenses());
  }, []);

  const renderItem = React.useCallback(
    ({item}) => {
      return <ListItem {...item} />;
    },
    [list],
  );

  const keyExtractor = (item, index) => {
    return item + index;
  };

  if (loading) {
    return (
      <View style={styles.progress}>
        <ActivityIndicator color={Colors.google} size={32} />
      </View>
    );
  }

  if (!loading && error) {
    return (
      <View style={styles.progress}>
        <Text style={styles.error}>{'Oops'}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text style={styles.title}>Summary</Text>
      <FlatList
        style={styles.fl}
        data={list}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.push('CreateExpense')}>
        <Image
          source={require('@assets/icons/add.png')}
          style={styles.addImage}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
