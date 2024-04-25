import { render, screen } from "@testing-library/react";
import ConnectionError from "../components/ConnectionError"
import { expect, test } from "vitest";

test("Connection error message renders successfully", () => {
    render(<ConnectionError />);
    expect(screen.getByText("Please check your internet connection and try again !")).toBeDefined();
});