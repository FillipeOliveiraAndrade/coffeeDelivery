import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },

  textContainer: {
    gap: 8
  },

  title: {
    textAlign: 'center',
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 24,

    color: THEME.COLORS.YELLOW_DARK
  },

  label: {
    textAlign: 'center',
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14,

    maxWidth: '60%',

    color: THEME.COLORS.GREY_200
  },

  button: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,

    borderRadius: 6,

    width: 247,

    paddingVertical: 12
  },

  textButton: {
    textAlign: 'center',
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 14,

    color: THEME.COLORS.WHITE
  }
});
