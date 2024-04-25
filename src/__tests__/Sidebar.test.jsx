import { test, expect, describe, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppContext from "../context/AppContext";
import Sidebar from "../components/Sidebar";

describe("<Sidebar />", () => {
    let container;
    beforeEach(() => {
        container = render(
            <AppContext>
                <Sidebar />
            </AppContext>
        ).container;
    });

    test("should render all filters", () => {
        expect(container.querySelector(".select")).toBeDefined();
        expect(container.querySelectorAll(".region-btn")).toHaveLength(6);
        expect(container.querySelectorAll(".region-btn.active")).toHaveLength(4);
        expect(container.querySelectorAll(".checkbox")).toHaveLength(2);
    });

    test("region filter works correctly", async () => {
        const user = userEvent.setup();
        await user.click(container.querySelectorAll(".region-btn.active")[0]);
        expect(container.querySelectorAll(".region-btn.active")).toHaveLength(3);
        await user.click(container.querySelectorAll(".region-btn")[-1]);
        expect(container.querySelectorAll(".region-btn.active")).toHaveLength(4);
    });
})