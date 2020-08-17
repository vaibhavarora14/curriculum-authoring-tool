import { render } from "@testing-library/react";
import React from 'react';
import Row from "./Row";

describe("Row tests", () => {
    test("row text prop", () => {
        const text = "I am the row text";
        const { getByTestId } = render(<Row text={text} />);

        expect(getByTestId('text').textContent).toBe(text);
    })
})