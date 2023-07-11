import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logoImage from "../../assets/logo.png";
import plusImage from "../../assets/plus.png";
import { styles } from "./styles";
import theme from "../../styles/theme";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.GRAY_300}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Image source={plusImage} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
