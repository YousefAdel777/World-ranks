import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Loading from "../components/Loading";

test("<Loading /> renders successfully", () => {
    const {container} = render(<Loading />);
    expect(container.querySelector(".loading")).toBeDefined();
});