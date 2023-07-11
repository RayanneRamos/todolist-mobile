import { Image, Text, TouchableOpacity, View } from "react-native";
import trashIcon from "../../assets/trash.png";
import checkIcon from "../../assets/check.png";
import { styles } from "./styles";
import { ItemsProps } from "../../screens/Home";

interface TaskItemProps {
  item: ItemsProps;
  onCheck: () => void;
  onRemove: () => void;
}

export function TaskItem({ item, onCheck, onRemove }: TaskItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        {item.checked ? (
          <View style={[styles.circle, styles.checkedCircle]}>
            <Image source={checkIcon} style={styles.checkIcon} />
          </View>
        ) : (
          <View style={[styles.circle, styles.emptyCircle]} />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, item.checked && styles.strikeText]}>
        {item.task}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={trashIcon} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
