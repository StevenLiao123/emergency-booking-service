import React from "react";
import { render } from "@testing-library/react";
import { List } from "./List";

describe("Test <List />", () => {
  it("test list has the proper tile and value", () => {
    const props = {
      title: "Test-title",
      value: "Test-value",
    };

    const { getByTestId } = render(
      <List
        title={props.title}
        value={props.value}
      />
    );

    expect(getByTestId("test-list-title").textContent).toBe("Test-title:");
    expect(getByTestId("test-list-value").textContent).toBe("Test-value");
  });
});