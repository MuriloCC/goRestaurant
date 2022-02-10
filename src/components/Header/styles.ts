import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: 170,
    paddingTop: 50,
    paddingHorizontal: 24
  },

  imagesHomeView: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },

  images: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  subTitle: {
    color: theme.colors.lightPink,
    marginTop: 6
  },

  logoImg: {
    width: 42,
    height: 42,
    marginRight: 12
  }
})