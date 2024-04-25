import { test, expect, describe, beforeEach, vi } from "vitest";
import {render} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import Select from "../components/Select";
import "@testing-library/jest-dom";

describe("<Select />", () => {
    const options = [{label: "Option one", value: "one"}, {label: "Option Two", value: "two"}];
    let container;
    let select;
    const onChange = vi.fn();

    beforeEach(() => {
        container = render(<Select onChange={onChange} options={options} value={"one"} />).container;
        select = container.querySelector(".select");
    });

    test("should render all options using props", () => {
        expect(container.querySelectorAll(".option")).toHaveLength(2);
        expect(container.querySelector(".current-option")).toHaveTextContent("Option one");
    });

    test("options are not visible before user click", () => {
        expect(container.querySelector(".options.open")).toBe(null);
    });

    test("should show options on user click", async () => {
        const user = userEvent.setup();
        await user.click(select);
        expect(container.querySelector(".options.open")).toBeDefined();
    });

    test("should call onChange on user select", async () => {
        const user = userEvent.setup();
        await user.click(container.querySelectorAll(".option")[1]);
        expect(onChange.mock.calls).toHaveLength(1);
    });
});
