import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// Lấy kích thước của màn hình
const { width, height } = Dimensions.get("window");

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Logo */}
      <Image
        source={require("../../img/logo.png")}
        style={{
          width: width * 0.9, // Đặt kích thước logo dựa trên tỷ lệ của màn hình
          height: height * 0.2,
          resizeMode: "contain", // Giữ tỷ lệ ảnh
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        style={{
          width: width * 0.8,
          paddingVertical: 15,
          borderRadius: 10,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ fontSize: 18 }}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: width * 0.8,
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: "#2196F3", // Thêm màu nền cho nút
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={{ fontSize: 18, color: "#fff" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
