import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logoImage from "../../assets/logo.png";
import plusImage from "../../assets/plus.png";
import { styles } from "./styles";
import theme from "../../styles/theme";
import { TaskList } from "../../components/TaskList";
import { useCallback, useEffect, useState } from "react";

export interface ItemsProps {
  task: string;
  checked: boolean;
}

export function Home() {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [inputItem, setInputItem] = useState("");
  const [finishedItems, setFinishedItems] = useState<Number>(0);

  useEffect(() => {
    setFinishedItems(items.filter((item) => item.checked).length);
  }, [items]);

  const handleAddItem = useCallback(() => {
    if (inputItem === "") {
      return;
    }

    if (
      items.find(
        (item) => item.task.toLowerCase() === inputItem.toLocaleLowerCase()
      )
    ) {
      Alert.alert(
        "Item já existe!",
        "Você não pode cadastrar uma tarefa com o mesmo nome"
      );
    }

    const data = {
      task: inputItem,
      checked: false,
    };

    setItems((old) => [...old, data]);
    setInputItem("");
  }, [inputItem, setItems, items, setInputItem]);

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputItem}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.GRAY_300}
            onChangeText={setInputItem}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={handleAddItem}
          >
            <Image source={plusImage} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.textBlue}>Criadas</Text>
            <Text style={styles.valueCounter}>{items?.length || 0}</Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.textPurple}>Concluídas</Text>
            <Text style={styles.valueCounter}>{String(finishedItems)}</Text>
          </View>
        </View>
        <TaskList items={items} setItems={setItems} />
      </View>
    </View>
  );
}
