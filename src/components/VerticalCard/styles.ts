import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    backgroundColor: THEME.COLORS.GREY_700,

    borderTopLeftRadius: 8,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 30,

    marginLeft: 32,

    bottom: 68,

    width: 208,
    height: 262
  },

  image: {
    top: -28
  },

  tag: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,

    backgroundColor: THEME.COLORS.PURPLE_LIGHT,
    color: THEME.COLORS.PURPLE_DARK,

    borderRadius: 100,

    top: -20,

    paddingVertical: 6,
    paddingHorizontal: 10
  },

  title: {
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
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 20,

    left: 54,

    color: THEME.COLORS.YELLOW_DARK
  }
});