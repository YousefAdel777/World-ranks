import { cleanup } from "@testing-library/react";
import { afterEach } from "@vitest/runner";
import "@testing-library/jest-dom"

afterEach(() => {
    cleanup();
});