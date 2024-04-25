import { test, expect, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";
import AppContext from "../context/AppContext";
import "@testing-library/jest-dom";

describe("<Search />", () => {
    let searchInput;
    beforeEach(() => {
        render (
            <AppContext>
                <Search />
            </AppContext>
        );
        searchInput = screen.getByPlaceholderText("Search by Name, Region, Subregion");
    });

    test("renders successfully", () => {
        expect(searchInput).toHaveRole("textbox");
    });

    test("should accept user interaction", async () => {
        const user = userEvent.setup();
        await user.type(searchInput, "test");
        expect(searchInput).toHaveValue("test");
    });
});
