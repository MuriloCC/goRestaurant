import { Image, Text, View } from "react-native";
import { styles } from './styles'

import LogoImg from '../../assets/logo.png'
import GoRestaurantImg from '../../assets/GoRestaurant.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { theme } from "../../global/styles";

type HeaderProps = {
  isHome: boolean,
  title?: string,
  navigation?: any
};

export function Header ({navigation, isHome, title }: HeaderProps) {
  return(
    <View style={styles.container}>
      {isHome && (
        <View style={styles.imagesHomeView}>
          <View style={styles.images}>
            <Image style={styles.logoImg} source={LogoImg} />
            <View>
              <Image source={GoRestaurantImg} width={1} height={1} />
              <Text style={styles.subTitle}>Comida italiana, sim.</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <SimpleLineIcons
              name="logout" 
              size={24} 
              color={theme.colors.darkYellow} 
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}