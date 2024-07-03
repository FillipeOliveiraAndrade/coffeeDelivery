import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,

    backgroundColor: THEME.COLORS.GREY_900,
  },

  swipeableContainer: {
    width: '100%',
    backgroundColor: THEME.COLORS.RED_LIGHT
  },

  remove: {
    justifyContent: 'center',

    height: 117,

    backgroundColor: THEME.COLORS.RED_LIGHT
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: 76,

    paddingHorizontal: 32,

    borderBottomWidth: 0.2,
    borderColor: THEME.COLORS.GREY_400
  },

  title: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 16,

    color: THEME.COLORS.GREY_200
  },

  footer: {
    justifyContent: 'center',

    paddingHorizontal: 32,

    height: 160,
    backgroundColor: THEME.COLORS.WHITE
  },

  totalValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 20
  },

  text: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 16,

    color: THEME.COLORS.GREY_200
  },

  price: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 20,

    color: THEME.COLORS.GREY_200
  },

  button: {
    backgroundColor: THEME.COLORS.YELLOW_DARK,

    borderRadius: 6,

    paddingVertical: 12
  },

  textButton: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 14,

    color: THEME.COLORS.WHITE
  }
});
