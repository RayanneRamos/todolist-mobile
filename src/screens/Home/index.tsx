import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logoImage from "../../assets/logo.png";
import plusImage from "../../assets/plus.png";
import { styles } from "./styles";
import theme from "../../styles/theme";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
    </View>
  );
}
