import { useState } from "react";
import { View, TextInput, FlatList } from "react-native";

const ListManagerScreen = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Enter item"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => removeItem(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default ListManagerScreen;
