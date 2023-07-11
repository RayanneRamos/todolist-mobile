import { Image, Text, TouchableOpacity, View } from "react-native";
import trashIcon from "../../assets/trash.png";
import { styles } from "./styles";

export function TaskItem() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>oi</TouchableOpacity>
      <Text style={[styles.text, styles.strikeText]}>items</Text>
      <TouchableOpacity>
        <Image source={trashIcon} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
