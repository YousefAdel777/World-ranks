import { renderHook, waitFor } from "@testing-library/react";
import {test, describe, expect} from "vitest";
import useDebounce from "../hooks/useDebounce";

describe("useDebounce", () => {
    test("returns value after 500 ms", async () => {
        const {result} = renderHook(() => useDebounce("test"));
        expect(result.current.searchKeyword).toBe("");
        await waitFor(() => expect(result.current.searchKeyword).toBe("test"));
    });
});