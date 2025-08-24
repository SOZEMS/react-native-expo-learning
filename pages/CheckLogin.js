import AsyncStorage from "@react-native-async-storage/async-storage";

const checkToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log("Token ที่เก็บไว้:", token);
    } else {
      console.log("ยังไม่มี token ถูกเก็บไว้");
    }
  } catch (error) {
    console.log("Error reading value:", error);
  }
};
