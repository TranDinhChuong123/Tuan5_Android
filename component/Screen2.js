import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../vs_blue.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon}
      />

      <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      <View style={styles.container1}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {}}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate("Screen3");
          }}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            navigation.navigate("Screen3b");
          }}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => {
            navigation.navigate("Screen1");
          }}
        ></TouchableOpacity>

        <TouchableOpacity style={styles.button5} onPress={() => {}}>
          <Text style={styles.buttonText}>XONG</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    width: "100%",
    top: "25%",
    height: "75%",

    alignItems: "center",
    // justifyContent: "center",
  },
  icon: {
    position: "absolute",
    width: 112,
    height: 132,
    left: 4,
    // left:29,
  },
  icon1: {
    position: "absolute",
    width: 23,
    height: 25,
    top: 382,
    left: 50,
  },
  icon2: {
    position: "absolute",
    width: 23,
    height: 25,
    top: 382,
    left: 75,
  },
  icon3: {
    position: "absolute",
    width: 23,
    height: 25,
    top: 382,
    left: 100,
  },
  icon4: {
    position: "absolute",
    width: 23,
    height: 25,
    top: 382,
    left: 125,
  },
  icon5: {
    position: "absolute",
    width: 23,
    height: 25,
    top: 382,
    left: 150,
  },
  icon6: {
    position: "absolute",
    width: 20,
    height: 20,
    top: 454,
    left: 227,
  },
  icon7: {
    position: "absolute",
    width: 11,
    height: 14,

    left: 310,
  },
  text1: {
    position: "absolute",
    width: 164,
    height: 36,
    top: 17,
    left: 126,
    fontFamily: "roboto",
    fontSize: 15,
    fontWeight: 800,
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    width: 198,
    height: 21,
    top: 10,
    left: 20,
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    width: 99,
    height: 21,
    top: 420,
    left: 50,
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
  },
  text4: {
    position: "absolute",
    width: 99,
    height: 21,
    top: 420,
    left: 200,
    fontFamily: "roboto",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 17,
    letterSpacing: 0,
    color: "gray",
    textDecorationLine: "line-through",
  },
  text5: {
    position: "absolute",
    width: 170,
    height: 14,
    top: 457,
    left: 50,
    fontFamily: "roboto",
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 14,
    letterSpacing: 0,
    color: "#FA0000",
  },
  buttonText: {
    position: "absolute",
    width: "auto",
    height: 18,
    // top: 499,

    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: 900,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "#F9F2F2",
  },
  buttonText1: {
    position: "absolute",
    width: "auto",
    height: 18,
    // top: 499,

    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: 900,
    lineHeight: 23,
    letterSpacing: 0,
    // textAlign:"center",
    color: "#F9F2F2",
  },
  button1: {
    position: "absolute",
    width: 90,
    height: 90,
    top: 50,
    // left:80,
    backgroundColor: "#C5F1FB",

    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    position: "absolute",
    width: 90,
    height: 90,
    top: 160,
    // left:80,
    backgroundColor: "red",

    alignItems: "center",
    justifyContent: "center",
  },
  button3: {
    position: "absolute",
    width: 90,
    height: 90,
    top: 270,
    // left:80,
    backgroundColor: "black",

    alignItems: "center",
    justifyContent: "center",
  },
  button4: {
    position: "absolute",
    width: 90,
    height: 90,
    top: 380,
    // left:80,
    backgroundColor: "#234896",
    alignItems: "center",
    justifyContent: "center",
  },
  button5: {
    position: "absolute",
    width: 324,
    height: 44,
    top: 500,
    // left:80,
    backgroundColor: "#4e6ec2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
