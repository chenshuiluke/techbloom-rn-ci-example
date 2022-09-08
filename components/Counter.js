import { useState } from "react";
import { Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((c) => c - 1);
  return (
    <>
      <Text>Count: {counter}</Text>
      <Pressable onPress={increment}>
        <Text>Increment</Text>
      </Pressable>
    </>
  );
};

export default Counter;
