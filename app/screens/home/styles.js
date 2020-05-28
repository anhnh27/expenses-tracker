import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    ...Fonts.weight900_24,
    color: Colors.google,
  },
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: Colors.google,
    ...Fonts.weight500_16,
  },
  fl: {
    marginTop: 24,
  },
  item: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.placeholder,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  category: {
    marginLeft: 8,
    ...Fonts.weight500_16,
    color: Colors.text,
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amount: {
    ...Fonts.weight500_16,
    color: Colors.text,
  },
  addBtn: {
    position: 'absolute',
    right: 24,
    bottom: 60,
    width: 60,
    height: 60,
  },
  addImage: {
    width: 60,
    height: 60,
  },
});
