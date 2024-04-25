import { renderHook, waitFor } from "@testing-library/react";
import {test, describe, expect} from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useFetch from "../hooks/useFetch";

describe("useFetch", () => {
    test("performs GET requests successfully", async () => {
        const mockData = "test";
        const url = "http://mock";
        const mock = new MockAdapter(axios);
        mock.onGet(url).reply(200, mockData);

        const {result} = renderHook(() => useFetch(url));
        
        expect(result.current.isLoading).toBe(true);
        expect(result.current.isError).toBe(false);
        expect(result.current.data).toBe(null);
        
        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
            expect(result.current.isError).toBe(false);
            expect(result.current.data).toBe(mockData);
        });
    });

});