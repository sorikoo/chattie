import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
function MessageBox(props) {
  const { alignSelf } = props;
  return (
    <View style={[styles.chatbox, { alignSelf }]}>
      <Text>Hi there</Text>
    </View>
  );
}
function WriteMessageBox() {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.writebox}>
      <TextInput
        style={styles.writebox.input}
        placeholder="{text}"
        value={text}
        onChange={onChangeText}
      />
      <FontAwesome name="paper-plane" size={25} />
    </View>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <View style={styles.chatbar}>
          <View style={styles.profile}>
            <View style={styles.profilepic} />
            <View>
              <Text style={styles.text.name}>Kira</Text>
              <Text style={styles.text.status}>online</Text>
            </View>
          </View>
          <View style={styles.rightArrow}>
            <FontAwesome name="angle-right" size={50} />
          </View>
        </View>
        <MessageBox alignSelf="flex-start" />
        <MessageBox alignSelf="flex-end" />
        <MessageBox alignSelf="flex-start" />
        <MessageBox alignSelf="flex-end" />
        <MessageBox alignSelf="flex-start" />
        <MessageBox alignSelf="flex-end" />
        <MessageBox alignSelf="flex-start" />
        <MessageBox alignSelf="flex-end" />
        <MessageBox alignSelf="flex-end" />
        <MessageBox alignSelf="flex-end" />
        <MessageBox alignSelf="flex-start" />
        <MessageBox alignSelf="flex-start" />
        <WriteMessageBox />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  chatContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    name: {
      paddingLeft: 10,
      fontSize: 25,
    },
    status: {
      paddingLeft: 10,
      fontSize: 15,
    },
  },
  chatbar: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "dogerblue",
    borderRadius: 20,
    borderWidth: 4,
    padding: 10,
    width: "99%",
    flexDirection: "row",
    gap: 2,
  },
  profilepic: {
    width: 50,
    height: 50,
    backgroundColor: "dodgerblue",
    borderRadius: 25,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  chatbox: {
    backgroundColor: "dodgerblue",
    width: "max-content",
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
  },
  writebox: {
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    width: "99%",
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "flex-end",
    input: {
      width: "99%",
      paddingHorizontal: 20,
    },
  },
});
