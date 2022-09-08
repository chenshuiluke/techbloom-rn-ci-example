import { fireEvent, render } from "@testing-library/react-native";
import { expect, it } from "@jest/globals";
import Counter from "../components/Counter";

it("should increment counter", () => {
  const { getByText } = render(<Counter />);
  const incrementBtn = getByText("Increment");
  const counterText = getByText(/Count: /i);

  expect(counterText.props.children).toEqual(["Count: ", 0]);
  fireEvent.press(incrementBtn);
  expect(counterText.props.children).toEqual(["Count: ", 1]);
});
