import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryError from "../pages/CountryError";

describe("<CountryError />", () => {
    test("should render successfully", () => {
        render(
            <BrowserRouter>
                <CountryError />
            </BrowserRouter>
        );
        expect(screen.getByText("Error 404")).toBeDefined();
        expect(screen.getByText("Go Home")).toBeDefined();
        expect(screen.getByText("Country Not Found !")).toBeDefined();
    });
});