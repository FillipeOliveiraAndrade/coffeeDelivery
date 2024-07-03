import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    borderTopLeftRadius: 8,
    borderTopRightRadius: 34,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 34,

    backgroundColor: THEME.COLORS.GREY_700,
    height: 262,
    width: 208,

    marginHorizontal: 32,
    paddingHorizontal: 10
  },

  image: {
    top: -8,

    width: 100,
    height: 101
  },

  tag: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,

    backgroundColor: THEME.COLORS.PURPLE_LIGHT,
    color: THEME.COLORS.PURPLE_DARK,

    borderRadius: 100,

    width: 81,

    paddingVertical: 6,
    marginBottom: 14
  },

  title: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 20,

    color: THEME.COLORS.GREY_200,

    top: -10
  },

  description: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 12,

    color: THEME.COLORS.GREY_400,

    marginTop: -4,
    marginBottom: 14
  },

  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  currency: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14,

    color: THEME.COLORS.YELLOW_DARK
  },

  amount: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 24,

    color: THEME.COLORS.YELLOW_DARK
  },
});