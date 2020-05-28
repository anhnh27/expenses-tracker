import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Animated,
  StatusBar,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import SafeAreaView from 'react-native-safe-area-view';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {createExpense, resetMutate} from '../../redux/actions/expense';
import styles from './styles';
import {Colors} from '../../themes';
import {ScrollView} from 'react-native-gesture-handler';

const Toast = ({show}) => {
  const opacityAnim = new Animated.Value(0);

  React.useEffect(() => {
    if (show) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [show]);

  return (
    <Animated.View style={[styles.toast, {opacity: opacityAnim}]}>
      <View style={styles.toastBG}>
        <Icon name="checkcircleo" size={40} color={Colors.success} />
        <Text style={styles.toastText}>{'Success'}</Text>
      </View>
    </Animated.View>
  );
};

export default CreateExpense = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = React.useState(1);
  const [description, setDescription] = React.useState();
  const [amount, setAmount] = React.useState();
  const [showToast, setShowToast] = React.useState(false);
  const {loading, mutateSuccess, error} = useSelector((state) => state.expense);

  const submit = () => {
    const expense = {
      categoryId,
      description,
      amount,
    };
    dispatch(createExpense(expense));
  };

  React.useEffect(() => {
    if (!loading && mutateSuccess) {
      setShowToast(true);
      setAmount('');
      setDescription('');
      dispatch(resetMutate());
    }
  }, [loading, mutateSuccess]);

  const onChangeText = (type, value) => {
    switch (type) {
      case 'Amount':
        setAmount(value);
        break;
      case 'Description':
        setDescription(value);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Toast show={showToast} />
      <ScrollView style={styles.content}>
        <Text style={styles.label}>{'Category'}</Text>
        <View style={styles.picker}>
          <Picker
            itemStyle={styles.pickerItem}
            selectedValue={categoryId}
            onValueChange={(itemValue) => setCategoryId(itemValue)}>
            <Picker.Item label="Housing" value="1" />
            <Picker.Item label="Transportation" value="2" />
            <Picker.Item label="Food" value="3" />
            <Picker.Item label="Clothes" value="4" />
            <Picker.Item label="Utilities" value="5" />
            <Picker.Item label="Miscellaneous" value="6" />
          </Picker>
        </View>
        <Text style={styles.label}>
          {'Amount '}
          <Text style={styles.require}>{'(*)'}</Text>
        </Text>
        <TextInput
          value={amount}
          keyboardType="decimal-pad"
          underlineColorAndroid={'transparent'}
          style={styles.input}
          placeholder={'ex: 150'}
          onChangeText={(text) => onChangeText('Amount', text)}
        />
        <Text style={styles.label}>{'Description'}</Text>
        <TextInput
          value={description}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          placeholder={'ex: spend for...'}
          onChangeText={(text) => onChangeText('Description', text)}
        />
      </ScrollView>
      <View style={styles.bottomArea}>
        <TouchableOpacity
          disabled={!amount?.length}
          style={[styles.saveBtn, !amount && {backgroundColor: 'gray'}]}
          onPress={submit}>
          {loading ? (
            <ActivityIndicator color={'white'} size={24} />
          ) : (
            <Text style={styles.textBtn}>{'Save'}</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
