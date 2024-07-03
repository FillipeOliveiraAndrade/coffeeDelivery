import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 48,
    marginTop: 14
  },

  location: {
    flexDirection: 'row',
    gap: 4,
  },

  text: {
    color: THEME.COLORS.GREY_900,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14
  },

  counter: {
    position: 'absolute',

    textAlign: 'center',
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 13,

    backgroundColor: THEME.COLORS.PURPLE,
    color: THEME.COLORS.WHITE,

    left: 14,
    bottom: 24,

    height: 20,
    width: 20,

    borderRadius: 100,
  }
});
