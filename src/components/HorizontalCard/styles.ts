import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,

    borderTopLeftRadius: 8,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 50,

    height: 120,

    backgroundColor: THEME.COLORS.GREY_700,

    marginBottom: 32
  },

  image: {
    top: -26,
    left: 8,
    width: 100,
    height: 101
  },

  title: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 16,

    color: THEME.COLORS.GREY_200
  },

  description: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 12,

    maxWidth: '80%',
    color: THEME.COLORS.GREY_400,

    marginTop: 4,
    marginBottom: 8
  },

  price: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 14,

    color: THEME.COLORS.YELLOW_DARK
  }
});
