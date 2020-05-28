import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textBtn: {
    ...Fonts.weight500_14,
    color: 'white',
  },
  bottomArea: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.placeholder,
  },
  saveBtn: {
    width: '50%',
    height: 54,
    borderRadius: 16,
    backgroundColor: Colors.google,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  label: {
    marginTop: 8,
    ...Fonts.weight700_18,
    color: Colors.text,
  },
  input: {
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.placeholder,
    paddingLeft: 16,
    ...Fonts.weight300_12,
    color: Colors.text,
  },
  picker: {
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.placeholder,
  },
  pickerItem: {
    ...Fonts.weight300_12,
    color: Colors.text,
  },
  require: {
    ...Fonts.weight300_12,
    color: Colors.google,
  },
  toast: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastBG: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastText: {
    marginVertical: 8,
    ...Fonts.weight300_12,
    color: Colors.success,
  }
});
