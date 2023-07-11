import { FlatList, Image, Text, View } from "react-native";
import { TaskItem } from "../TaskItem";
import clipboardImage from "../../assets/clipboard.png";
import { styles } from "./styles";

export function TaskList() {
  return (
    <View style={styles.container}>
      <FlatList
        inverted
        renderItem={() => <TaskList />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image source={clipboardImage} style={styles.emptyIcon} />
            <Text style={styles.title}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.subtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
