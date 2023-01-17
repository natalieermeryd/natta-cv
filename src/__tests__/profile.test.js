/**
 * test("should work", () => {
  expect(1).toBe(1);
});
*/
import { render, screen } from "@testing-library/react";
import Profile from "../components/Profile";

test("should render the profile component", () => {
  render(<Profile />);
  const profileElement = screen.getByTestId("profile-div");
  expect(profileElement).toBeInTheDocument();
  expect(profileElement).toHaveTextContent("Profile");
});
