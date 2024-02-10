import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CodeEditor from "../components/CodeEditor";

test("renders code editor with run button", () => {
  render(<CodeEditor />);
  expect(screen.getByRole("button", { name: "Run" })).toBeInTheDocument();
});

test("executes Python code and displays output", async () => {
  render(<CodeEditor />);
  const codeEditor = screen.getByRole("textbox")

  fireEvent.change(codeEditor, { target: { value: 'print("Hello, World!")' } });
  fireEvent.click(screen.getByRole("button", { name: "Run" }));

  await waitFor(() => {
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
});
