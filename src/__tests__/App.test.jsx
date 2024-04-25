import {test, expect, describe} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../App"
import AppContext from "../context/AppContext";

describe("<App />", () => {
    test("renders <Home /> by default", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <AppContext>
                    <App />
                </AppContext>
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(screen.getByText("Egypt")).toBeDefined();
        }, {timeout: 2000});
    });

    test("renders <CountryError /> if url is wrong", () => {
        render(
            <MemoryRouter initialEntries={["/*"]}>
                <AppContext>
                    <App />
                </AppContext>
            </MemoryRouter>
        );
        expect(screen.getByText("Error 404")).toBeDefined();
    });

    test("renders <CountryPage /> if url is '/countryCode'", async () => {
        render(
            <MemoryRouter initialEntries={["/EGY"]}>
                <AppContext>
                    <App />
                </AppContext>
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(screen.getByText("Egypt")).toBeDefined();
        }, {timeout: 1500});
    });
});