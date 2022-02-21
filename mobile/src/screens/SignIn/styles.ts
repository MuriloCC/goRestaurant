import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },

  topSection: {
    paddingHorizontal: 40,
    width: '100%',
  },

  logoContainer: {
    width: '100%',
    position: 'absolute',
    left: 40,
    bottom: 400
  },

  logoImage: {
    marginBottom: 24
  },

  goRestaurantImage: {
    marginBottom: 12
  },

  logoTitle: {
    fontSize: 16,
    color: '#FFB1B1'
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
    justifyContent: 'space-around',
    backgroundColor: theme.colors.darkYellow,
    borderRadius: 8
  },

  buttonText: {
    width: '80%',
    alignItems: 'center',
  },

  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.darkRed
  },

  buttonIcon: {
    backgroundColor: theme.colors.lightYellow,
    padding: 14,
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8
  }
})