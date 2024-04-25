import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Country from "../components/Country";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render successfully using props", () => {

    const countryData = {
        population: "1000000",
        name: {
            common: "Egypt"
        },
        flags: {
            png: "flag.png",
        },
        area: "1000",
        region: "Africa",
        cca3: "EGY"
    }

    render(
        <BrowserRouter>
            <Country {...countryData} />
        </BrowserRouter>
    );

    expect(screen.getByAltText("Egypt flag image")).toBeVisible();
    expect(screen.getByText("1000000")).toBeDefined()
    expect(screen.getByText("1000")).toBeDefined();
    expect(screen.getByText("Africa")).toBeDefined();
});