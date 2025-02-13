import { Dimensions, StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  intro: {
    flex: 1,
    position: 'relative',

    backgroundColor: THEME.COLORS.GREY_100,

    paddingTop: 48,
    paddingHorizontal: 32,
  },

  tag: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,

    backgroundColor: THEME.COLORS.GREY_200,
    color: THEME.COLORS.WHITE,

    borderRadius: 100,

    width: 80,

    paddingVertical: 6,

    marginBottom: 12
  },

  title: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 24,

    color: THEME.COLORS.WHITE
  },

  namePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  price: {
    color: THEME.COLORS.YELLOW,
    marginBottom: 20
  },

  currency: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14
  },

  amount: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 20
  },

  description: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 18,

    color: THEME.COLORS.GREY_500
  },

  imageContent: {
    position: 'absolute',
    zIndex: 1,

    top: height * 0.42,
    marginLeft: width / 2,
    marginRight: width / 2
  },

  footer: {
    backgroundColor: THEME.COLORS.GREY_900,

    height: 223.5,

    paddingHorizontal: 32
  },

  text: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14,

    color: THEME.COLORS.GREY_400,

    marginTop: 42
  },

  sizeContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',

    marginTop: 8,
    marginBottom: 20
  },

  size: {
    textAlign: 'center',
    textAlignVertical: 'center',

    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14,

    color: THEME.COLORS.GREY_300,
    backgroundColor: THEME.COLORS.GREY_700,

    borderRadius: 6,

    height: 40,
    width: 108
  },

  sizeSelected: {
    borderWidth: 2,
    borderColor: THEME.COLORS.PURPLE,
    backgroundColor: THEME.COLORS.WHITE,
    color: THEME.COLORS.PURPLE
  },

  addToCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,

    height: 62,

    paddingHorizontal: 8,

    borderRadius: 6,

    backgroundColor: THEME.COLORS.GREY_700,
  },

  quantity: {
    flexDirection: 'row',
    gap: 10,

    left: 14
  },

  number: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 16,

    top: -3,

    color: THEME.COLORS.GREY_100
  },

  button: {
    paddingVertical: 12,

    height: 46,
    width: 179,

    borderRadius: 6,

    backgroundColor: THEME.COLORS.PURPLE
  },

  textButton: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 14,

    color: THEME.COLORS.WHITE
  },
});
