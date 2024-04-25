import { test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import CountriesContainer from "../components/CountriesContainer";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../context/AppContext"

test("<CountriesContainer /> renders using global context", async () => {
    render(
        <AppContext>
            <BrowserRouter>
                <CountriesContainer />
            </BrowserRouter>
        </AppContext>
    );
    await waitFor(() => {
        expect(screen.getByText("Region")).toBeDefined();
        expect(screen.getByText("Egypt")).toBeDefined()
    }, {timeout: 3000});
    // await waitFor(() => , {timeout: 3000});
});