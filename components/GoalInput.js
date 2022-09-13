import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Your goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.Button}>
            <Button
              onPress={addGoalHandler}
              title="Add goals"
              color={"#5e0acc"}
            />
          </View>
          <View styles={styles.Button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#311b6b",
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },

  ButtonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },

  Button: {
    width: 100,
    marginHorizontal: 16,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
