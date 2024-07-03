import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  subtitle: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 16,

    color: THEME.COLORS.GREY_300,

    marginTop: -24,
    marginBottom: 12
  },

  filter: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 22
  },

  onPressedFilter: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,

    color: THEME.COLORS.WHITE,

    backgroundColor: THEME.COLORS.PURPLE,

    borderColor: THEME.COLORS.PURPLE,
    borderWidth: 1,
    borderRadius: 100,

    paddingVertical: 6,
    paddingHorizontal: 8
  },

  tag: {
    textAlign: 'center',

    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,

    color: THEME.COLORS.PURPLE_DARK,

    borderColor: THEME.COLORS.PURPLE,
    borderWidth: 1,
    borderRadius: 100,

    paddingVertical: 6,
    paddingHorizontal: 8
  },

  textType: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 14,

    color: THEME.COLORS.GREY_400,

    marginBottom: 32
  }
});
