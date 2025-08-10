import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CountScreen = () => {
  const [count, setCount] = useState(0); // กำหนดค่าเริ่มต้น count = 0

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ค่าปัจจุบัน: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="เพิ่ม" onPress={() => setCount(count + 1)} />
        <Button title="ลด" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
});

export default CountScreen;
