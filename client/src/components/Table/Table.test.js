import React from "react";
import { render } from "@testing-library/react";
import { Table } from "./Table";

describe("Test <Table />", () => {
  it("test table has the correct table descriptions", () => {
    const patientsData = [{
        illnessName: "IllnessName",
        levelOfPain: "Urgent"
      }]

    const { getByTestId } = render(
      <Table
        patientsData={patientsData}
      />
    );

    expect(getByTestId("test-table-td-illness-name").textContent).toBe("IllnessName");
    expect(getByTestId("test-table-td-level-of-pain").textContent).toBe("Urgent");
  });
});
