import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Test <Button />", () => {
  it("test button", () => {
    const props = {
      title: "Test"
    };

    const spy = jest.fn();
    const { getByTestId } = render(
      <Button
        title={props.title}
        callback={spy}
      />
    );

    expect(getByTestId("test-button").textContent).toBe("Test");
    fireEvent.click(getByTestId("test-button"));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
