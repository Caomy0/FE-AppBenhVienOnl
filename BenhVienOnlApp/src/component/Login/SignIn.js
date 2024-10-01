import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
  Dimensions, // Import Dimensions để lấy kích thước màn hình
} from "react-native";
import { api, typeHTTP } from "../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// Lấy chiều rộng và chiều cao của màn hình
const { width, height } = Dimensions.get("window");

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api({
        method: typeHTTP.POST,
        url: "/users/login",
        body: { email, password },
        sendToken: false,
      });

      if (response && response.token) {
        await AsyncStorage.setItem("auth_token", response.token);
        Alert.alert("Thành công", "Đăng nhập thành công");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Đăng nhập thất bại");
      console.error(
        "Lỗi đăng nhập:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Đăng nhập</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            style={{ marginRight: 250 }}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={{ fontWeight: "bold" }}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05, // Padding theo tỷ lệ chiều rộng màn hình
  },
  header: {
    fontSize: width * 0.08, // Font theo tỷ lệ chiều rộng màn hình
    fontWeight: "bold",
    color: "#333",
    marginBottom: height * 0.05, // Margin theo tỷ lệ chiều cao màn hình
  },
  input: {
    width: "100%",
    height: height * 0.06, // Chiều cao dựa trên tỷ lệ chiều cao màn hình
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: height * 0.02, // Margin theo tỷ lệ chiều cao màn hình
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.045,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  button: {
    width: "100%",
    height: height * 0.06, // Chiều cao nút theo chiều cao màn hình
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: height * 0.02, // Khoảng cách từ các phần tử khác
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: width * 0.05, // Kích thước chữ theo tỷ lệ màn hình
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SignIn;
