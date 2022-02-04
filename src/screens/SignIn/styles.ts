import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },

  topSection: {
    paddingHorizontal: 52,
    width: '100%',
  },

  logoContainer: {
    width: '100%',
    position: 'absolute',
    left: 52,
    bottom: 350
  },

  logoImage: {
    marginBottom: 24
  },

  goRestaurantImage: {
    marginBottom: 12
  },

  logoTitle: {
    fontSize: 14
  },

  bodyText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    bottom: 100,
  },

  loginButton: {
    width: '100%',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.darkYellow
  },

  buttonText: {
    width: '90%',
    alignItems: 'center'
  },

  buttonIcon: {
    backgroundColor: theme.colors.lightYellow
  }
})