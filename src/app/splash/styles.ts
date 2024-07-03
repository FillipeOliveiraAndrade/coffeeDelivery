import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: THEME.COLORS.PURPLE_DARK
  },

  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 22,
    zIndex: 1
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: THEME.COLORS.WHITE
  }
});
