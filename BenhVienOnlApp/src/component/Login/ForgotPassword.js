import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { api, typeHTTP } from "../../utils/api"; // Import api và typeHTTP từ file api.js

// Lấy kích thước màn hình
const { width, height } = Dimensions.get("window");

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await api({
        method: typeHTTP.POST,
        url: "/users/forgot-password", // URL của API
        body: { email },
        sendToken: false, // Không cần token khi gửi yêu cầu quên mật khẩu
      });

      if (response) {
        Alert.alert(
          "Thành công",
          "Mật khẩu mới đã được gửi qua email của bạn."
        );
      }
    } catch (error) {
      Alert.alert("Lỗi", "Không thể gửi yêu cầu đặt lại mật khẩu.");
      console.error(
        "Lỗi quên mật khẩu:",
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
          <Text style={styles.header}>Quên mật khẩu</Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập email của bạn"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleForgotPassword}
          >
            <Text style={styles.buttonText}>Gửi yêu cầu</Text>
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
    paddingHorizontal: width * 0.05, // Padding ngang dựa trên chiều rộng màn hình
  },
  header: {
    fontSize: width * 0.08, // Kích thước chữ tiêu đề dựa trên chiều rộng màn hình
    fontWeight: "bold",
    color: "#333",
    marginBottom: height * 0.05, // Khoảng cách giữa tiêu đề và các phần tử khác
  },
  input: {
    width: "100%",
    height: height * 0.06, // Chiều cao của TextInput dựa trên chiều cao màn hình
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: height * 0.02, // Khoảng cách giữa các TextInput
    paddingHorizontal: width * 0.04, // Padding ngang cho nội dung bên trong TextInput
    fontSize: width * 0.045, // Kích thước chữ bên trong TextInput
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    width: "100%",
    height: height * 0.06, // Chiều cao của nút dựa trên chiều cao màn hình
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: height * 0.02, // Khoảng cách giữa nút và các phần tử khác
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: width * 0.05, // Kích thước chữ trên nút dựa trên chiều rộng màn hình
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ForgotPassword;
