import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Card } from "./Card";

describe("Test <Card />", () => {
  it("test hospital card", () => {
    const props = {
      name: "Hospital-1",
      waitingTime: 10
    };

    const spy = jest.fn();
    const { getByTestId } = render(
      <Card
        name={props.name}
        waitingTime={props.waitingTime}
        callback={spy}
        testIndex={1}
      />
    );

    expect(getByTestId("test-content-1").textContent).toBe("Hospital-1");
    fireEvent.click(getByTestId("test-button"));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
