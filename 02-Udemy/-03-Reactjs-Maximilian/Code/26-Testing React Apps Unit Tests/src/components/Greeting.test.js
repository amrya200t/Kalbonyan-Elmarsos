import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders 'Hello, World!' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    //  ... nothing

    // Assert
    const helloWorldEl = screen.getByText("Hello, World!", { exact: true });
    expect(helloWorldEl).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    //  ... nothing

    // Assert
    const outputEl = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputEl).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    // Assert
    const outputEl = screen.getByText("Changed!", { exact: true });
    expect(outputEl).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    // Assert
    const outputEl = screen.queryByText("good to see you", { exact: false });
    expect(outputEl).toBeNull();
  });
});

describe("Output Component", () => {});
