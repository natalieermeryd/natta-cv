/**test("When testing JoinButton.js", () => {
  render(<JoinButton />);
  const joinButtonElement = screen.getByTestId("joinButton");
  expect(joinButtonElement).toBeInTheDocument();
});
 */

import { screen, render, fireEvent } from "@testing-library/react";
import JoinButton from "../JoinButton";

test("JoinButton component", () => {
  const value = "Join now";
  render(<JoinButton value={value} />);

  // Test that the button exists
  const button = screen.getByTestId("joinButton-1");
  expect(button).toBeInTheDocument();

  // Test that the button has the correct value
  expect(button).toHaveValue(value);

  // Test that the button can be clicked
  fireEvent.click(button);
});

/** 
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import JoinButton from "../components/common/JoinButton/JoinButton";

describe("when testing joinbutton", () => {
  it("should render the join button when clicked", () => {
    render(<JoinButton />);

    const joinButtonElement = screen.getByTestId("joinButton-1");
    expect(joinButtonElement).toBeInTheDocument();
  });
});*/

/**describe("when testing joinbutton", async () => {
  it("should render ", () => {
    // render your component
    render(<JoinButton />)
    // access your button
    const joinButtonElement = screen.getByTestId('joinButton')
    // simulate button click
    userEvent.click(button);

    // expect result
    await waitFor(() =>
      expect(screen.getByDisplayValue("Some content")).toBeInTheDocument();
  });
});
*/
