import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Screen4b({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../vs_black.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon}
      />
      <Text style={styles.text1}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <Image
        source={require("../star.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon1}
      />
      <Image
        source={require("../star.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon2}
      />
      <Image
        source={require("../star.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon3}
      />
      <Image
        source={require("../star.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon4}
      />
      <Image
        source={require("../star.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon5}
      />
      <Text style={styles.text2}>(Xem 828 đánh giá)</Text>
      <Text style={styles.text3}>1.790.000 đ</Text>
      <Text style={styles.text4}>1.790.000 đ</Text>

      <Text style={styles.text5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

      <Image
        source={require("../Group 1.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon6}
      />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Image
          source={require("../Vector.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon7}
        />
        <Text style={styles.buttonText}>4 MÀU-CHỌN MÀU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => {}}>
        <Text style={styles.buttonText1}>CHỌN MUA</Text>
      </TouchableOpacity>

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
  icon: {
    width: 265,
    height: 324,
    top: -2,
    resizeMode: "contain",
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
    width: 288,
    height: 18,
    top: 352,
    // left:29,
    fontFamily: "roboto",
    fontSize: 15,
    fontWeight: 800,
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    width: 135,
    height: 18,
    top: 386,
    left: 190,
    fontFamily: "roboto",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 18,
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
    fontSize: 15,
    fontWeight: 900,
    lineHeight: 17,
    letterSpacing: 0,
    // textAlign:"center",
    // color :"#FA0000",
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
    width: 332,
    height: 34,
    top: 490,
    // left:80,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    position: "absolute",
    width: 326,
    height: 44,
    top: 583,
    // left:80,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
