/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Platform} from 'react-native';

const fontFamilyName = {
  ...Platform.select({
    ios: {
      museoSans100: 'MuseoSans-100',
      museoSans100Italic: 'MuseoSans-100Italic',
      museoSans300: 'MuseoSans-300',
      museoSans300Italic: 'MuseoSans-300Italic',
      museoSans500: 'MuseoSans-500',
      museoSans500Italic: 'MuseoSans-500Italic',
      museoSans700: 'MuseoSans-700',
      museoSans700Italic: 'MuseoSans-700Italic',
      museoSans900: 'MuseoSans-900',
      museoSans900Italic: 'MuseoSans-900Italic',
    },
    android: {
      museoSans100: 'MuseoSans_100',
      museoSans100Italic: 'MuseoSans_100_Italic',
      museoSans300: 'MuseoSans_300',
      museoSans300Italic: 'MuseoSans_300_Italic',
      museoSans500: 'MuseoSans_500',
      museoSans500Italic: 'MuseoSans_500_Italic',
      museoSans700: 'MuseoSans_700',
      museoSans700Italic: 'MuseoSans_700_Italic',
      museoSans900: 'MuseoSans_900',
      museoSans900Italic: 'MuseoSans_900_Italic',
    },
  }),
};

const getFontFamily = (name = fontFamilyName.museoSans100) => {
  return {fontFamily: name, fontStyle: 'normal'};
};

const Fonts = {
  weight300_10: {
    ...getFontFamily(fontFamilyName.museoSans300),
    fontSize: 10,
  },
  weight300_12: {
    ...getFontFamily(fontFamilyName.museoSans300),
    fontSize: 12,
  },
  weight300_13: {
    ...getFontFamily(fontFamilyName.museoSans300),
    fontSize: 13,
  },
  weight300_14: {
    ...getFontFamily(fontFamilyName.museoSans300),
    fontSize: 14,
  },
  weight300_16: {
    ...getFontFamily(fontFamilyName.museoSans300),
    fontSize: 16,
  },
  weight300_18: {
    ...getFontFamily(fontFamilyName.museoSans300),
    fontSize: 18,
  },
  weight300_24: {
    ...getFontFamily(fontFamilyName.museoSans300),
    fontSize: 24,
  },
  weight500_12: {
    ...getFontFamily(fontFamilyName.museoSans500),
    fontSize: 12,
  },
  weight500_14: {
    ...getFontFamily(fontFamilyName.museoSans500),
    fontSize: 14,
  },
  weight500_16: {
    ...getFontFamily(fontFamilyName.museoSans500),
    fontSize: 16,
  },
  weight500_18: {
    ...getFontFamily(fontFamilyName.museoSans500),
    fontSize: 18,
  },
  weight500_24: {
    ...getFontFamily(fontFamilyName.museoSans500),
    fontSize: 24,
  },
  weight700_12: {
    ...getFontFamily(fontFamilyName.museoSans700),
    fontSize: 12,
  },
  weight700_14: {
    ...getFontFamily(fontFamilyName.museoSans700),
    fontSize: 14,
  },
  weight700_16: {
    ...getFontFamily(fontFamilyName.museoSans700),
    fontSize: 16,
  },
  weight700_18: {
    ...getFontFamily(fontFamilyName.museoSans700),
    fontSize: 18,
  },
  weight700_24: {
    ...getFontFamily(fontFamilyName.museoSans700),
    fontSize: 24,
  },
  weight700_32: {
    ...getFontFamily(fontFamilyName.museoSans700),
    fontSize: 32,
  },
  weight900_12: {
    ...getFontFamily(fontFamilyName.museoSans900),
    fontSize: 12,
  },
  weight900_14: {
    ...getFontFamily(fontFamilyName.museoSans900),
    fontSize: 14,
  },
  weight900_16: {
    ...getFontFamily(fontFamilyName.museoSans900),
    fontSize: 16,
  },
  weight900_18: {
    ...getFontFamily(fontFamilyName.museoSans900),
    fontSize: 18,
  },
  weight900_20: {
    ...getFontFamily(fontFamilyName.museoSans900),
    fontSize: 20,
  },
  weight900_24: {
    ...getFontFamily(fontFamilyName.museoSans900),
    fontSize: 24,
  },
  weight900_32: {
    ...getFontFamily(fontFamilyName.museoSans900),
    fontSize: 32,
  },
};

export default Fonts;