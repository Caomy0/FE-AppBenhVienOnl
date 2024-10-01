import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "./src/component/Home/HomePage";
import SignIn from "./src/component/Login/SignIn";
import Register from "./src/component/Signup/Register";
import ForgotPassword from "./src/component/Login/ForgotPassword";

// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import Ionicons from "@expo/vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();
// // const Stack = createNativeStackNavigator();

// function MyTabs(route) {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarStyle: {
//           position: "absolute",
//           bottom: 0,
//           right: 0,
//           left: 0,
//           elevation: 0,
//           height: 80,
//           backgroundColor: "#fff",
//         },
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconComponent;
//           let labelComponent;

//           if (route.name === "Trang Chủ") {
//             iconComponent = (
//               <View className="mt-1.5">
//                 <AntDesign
//                   name="home"
//                   size={24}
//                   color={focused ? "#B91C1C" : "#6B7280"}
//                   style={{
//                     width: 30,
//                     tintColor: focused ? "#B91C1C" : "#6B7280",
//                   }} // `tintColor` cần được đặt qua style
//                 />
//               </View>
//             );
//             labelComponent = (
//               <Text
//                 className="mt-1"
//                 style={{ color: focused ? "#B91C1C" : "#6B7280" }} // color is not support
//               >
//                 Trang Chủ
//               </Text>
//             );
//           } else if (route.name === "Khám Phá") {
//             iconComponent = (
//               <View className="mt-1.5">
//                 <Ionicons
//                   name="earth-outline"
//                   size={24}
//                   color={focused ? "#B91C1C" : "#6B7280"}
//                   style={{
//                     width: 30,
//                     tintColor: focused ? "#B91C1C" : "#6B7280",
//                   }} // `tintColor` cần được đặt qua style
//                 />
//               </View>
//             );
//             labelComponent = (
//               <Text
//                 style={{ color: focused ? "#B91C1C" : "#6B7280", marginTop: 4 }}
//               >
//                 Khám Phá
//               </Text>
//             );
//           } else if (route.name === "Lịch Sử") {
//             iconComponent = (
//               <View className="mt-1.5">
//                 <MaterialIcons
//                   name="history"
//                   size={26}
//                   color={focused ? "#B91C1C" : "#6B7280"}
//                   style={{
//                     width: 30,
//                     tintColor: focused ? "#B91C1C" : "#6B7280",
//                   }} // `tintColor` cần được đặt qua style
//                 />
//               </View>
//             );
//             labelComponent = (
//               <Text
//                 style={{ color: focused ? "#B91C1C" : "#6B7280", marginTop: 4 }}
//               >
//                 Lịch Sử
//               </Text>
//             );
//           } else if (route.name === "Hồ sơ") {
//             iconComponent = (
//               <Image
//                 source={require("./src/img/profile.png")}
//                 style={{
//                   width: 20,
//                   marginTop: 6,
//                   tintColor: focused ? "#B91C1C" : "#6B7280",
//                 }}
//               />
//             );
//             labelComponent = (
//               <Text
//                 style={{
//                   marginTop: -2,
//                   color: focused ? "#B91C1C" : "#6B7280",
//                 }}
//               >
//                 Hồ sơ
//               </Text>
//             );
//           }
//           return (
//             <View
//               style={{
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: 80,
//               }}
//             >
//               {iconComponent}
//               {labelComponent}
//             </View>
//           );
//           F;
//         },
//       })}
//     >
//       <Tab.Screen name="Trang Chủ" component={HomeKH} />
//       <Tab.Screen name="Khám Phá" component={Chat} />
//       <Tab.Screen name="Lịch Sử" component={HistoryTab} />
//       <Tab.Screen name="Hồ sơ" component={Profile} />
//     </Tab.Navigator>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
