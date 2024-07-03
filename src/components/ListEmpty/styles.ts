import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 28,

    marginTop: 72
  },

  content: {
    alignItems: 'center',
    gap: 6
  },

  text: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 16,

    color: THEME.COLORS.GREY_400
  },

  button: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,

    borderRadius: 6,

    width: 247,
    paddingVertical: 12,
  },

  textButton: {
    textAlign: 'center',
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 14,

    color: THEME.COLORS.WHITE
  },
});
