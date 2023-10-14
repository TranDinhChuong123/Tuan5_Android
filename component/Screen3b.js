import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Screen3b({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../vs_black.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon}
      />
      <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>

      <Text style={styles.text6}>
        Màu: <Text style={{ fontWeight: "bold" }}>Đen</Text>
      </Text>
      <Text style={styles.text7}>
        Cung cấp bởi <Text style={{ fontWeight: "bold" }}>Tiki Tradding</Text>
      </Text>

      <View style={styles.container1}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {}}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {}}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => {}}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => {}}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button5}
          onPress={() => {
            navigation.navigate("Screen4b");
          }}
        >
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
  text6: {
    position: "absolute",
    width: 170,
    height: 14,
    top: 62,
    left: 126,
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0,
  },
  text7: {
    position: "absolute",
    width: "100%",
    height: 14,
    top: 89,
    left: 126,
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0,
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
