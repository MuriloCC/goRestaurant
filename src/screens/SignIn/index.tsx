import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import LogoImg from '../../assets/logo.png'
import BackgroundImg from '../../assets/simbolo.png'
import GoRestaurantImg from '../../assets/GoRestaurant.png'
import { Ionicons } from '@expo/vector-icons'

function SignIn () {
  return (
    <View style={styles.container} >
      <Image source={BackgroundImg} />
      
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={LogoImg} />
          <Image style={styles.goRestaurantImage} source={GoRestaurantImg} />
          <Text style={styles.logoTitle}>comida italiana, sim</Text>
        </View>

        <Text style={styles.bodyText}>Uma verdadeira experiência Italiana.</Text>
        <TouchableOpacity style={styles.loginButton}>
          <View style={styles.buttonText}>
            <Text>Entrar no restaurante</Text>
          </View>
          <View style={styles.buttonIcon}>
            <Ionicons name="enter-outline" size={32} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn