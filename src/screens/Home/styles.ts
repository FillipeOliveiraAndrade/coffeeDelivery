import { StyleSheet } from "react-native";

import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GREY_900,
  },

  intro: {
    backgroundColor: THEME.COLORS.GREY_100,

    paddingTop: 48,
    paddingHorizontal: 32,
  },

  catalog: {
    paddingHorizontal: 32,
  },

  image: {
    alignSelf: 'flex-end',
    left: 22,
    marginBottom: 54,
  }
});
