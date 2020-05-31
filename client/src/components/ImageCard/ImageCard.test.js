import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ImageCard } from "./ImageCard";

describe("Test <ImageCard />", () => {
  it("test image card", () => {
    const spy = jest.fn();
    const { getByTestId } = render(
      <ImageCard
        callback={spy}
        imageIndex={1}
      />
    );

    fireEvent.click(getByTestId("test-image-1"));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
