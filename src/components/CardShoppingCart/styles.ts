import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,

    paddingHorizontal: 32,
    paddingVertical: 16,

    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: THEME.COLORS.GREY_500,

    backgroundColor: THEME.COLORS.GREY_900
  },

  name: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 16,

    color: THEME.COLORS.GREY_100
  },

  price: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 16,

    left: 32,

    color: THEME.COLORS.GREY_100
  },

  size: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 14,

    color: THEME.COLORS.GREY_400
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    backgroundColor: THEME.COLORS.GREY_600,

    borderRadius: 6,

    height: 36,
    width: 100,

    marginTop: 8
  },

  number: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 16,

    top: -2,

    color: THEME.COLORS.GREY_100
  },

  trash: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 36,
    width: 36,

    borderRadius: 6,
    top: 3,

    backgroundColor: THEME.COLORS.GREY_700
  }
});
