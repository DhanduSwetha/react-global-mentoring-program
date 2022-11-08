import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders react app", () => {
  render(<App />);
  const linkElement = screen.getByText(/FIND YOUR MOVIE/i);
  expect(linkElement).toBeInTheDocument();
});
