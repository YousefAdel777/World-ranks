import { render } from "@testing-library/react"
import { expect } from "vitest"
import { test } from "@vitest/runner"
import Header from "../components/Header"

test("renders logo image", () => {
    const {container} = render(<Header />);
    expect(container.querySelector(".logo")).toBeDefined();
}); 