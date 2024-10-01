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

// Lấy kích thước màn hình
const { width, height } = Dimensions.get("window");

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async () => {
    try {
      const response = await api({
        method: typeHTTP.POST,
        url: "/users/register",
        body: {
          name,
          email,
          password,
          phone,
          address,
        },
        sendToken: false, // Không cần token khi đăng ký
      });

      if (response) {
        Alert.alert("Thành công", response.msg);
      }
    } catch (error) {
      Alert.alert("Lỗi", "Đăng ký thất bại");
      console.error(
        "Lỗi đăng ký:",
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
          <Text style={styles.header}>Tạo tài khoản mới</Text>

          <TextInput
            style={styles.input}
            placeholder="Tên đầy đủ"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
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

          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Địa chỉ"
            value={address}
            onChangeText={setAddress}
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Đăng ký</Text>
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

export default Register;
