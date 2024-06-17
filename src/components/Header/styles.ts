import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 48
  },

  location: {
    flexDirection: 'row',
    gap: 4,
  },

  text: {
    color: THEME.COLORS.GREY_900,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14
  }
});
