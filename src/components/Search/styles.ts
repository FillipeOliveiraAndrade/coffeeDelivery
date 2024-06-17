import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',

    gap: 15
  },

  label: {
    color: THEME.COLORS.WHITE,

    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 20,
    maxWidth: '85%'
  },

  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9.5,

    backgroundColor: THEME.COLORS.GREY_200,

    borderRadius: 4,

    padding: 12
  },

  textPressable: {
    color: THEME.COLORS.GREY_400
  }
});
