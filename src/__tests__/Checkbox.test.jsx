import { screen, render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import userEvent from "@testing-library/user-event";
import Checkbox from "../components/Checkbox";
import "@testing-library/jest-dom"

describe("<Checkbox />", () => {
    const user = userEvent.setup();
    render(<Checkbox label="label" id="test" checked={false} />);
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("label");

    test("renders successfully using props", () => {
        expect(checkbox).toBeDefined();
        expect(label).toBeDefined();
        expect(checkbox).not.toBeChecked();
    });

    test("checkbox accepts user interaction", async () => {
        await user.click(checkbox); 
        expect(checkbox).toBeChecked();
    });

    test("label accepts user interaction", async () => {
        await user.click(label);
        expect(checkbox).not.toBeChecked();
    });
});