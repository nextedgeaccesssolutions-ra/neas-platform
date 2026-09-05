import { describe, expect, it } from "vitest";
import { industryPaths, serviceSignals } from "../client/src/data/fieldFocus";

describe("field-focused homepage content", () => {
  it("provides four discovery paths with grounded operating scopes", () => {
    expect(industryPaths).toHaveLength(4);
    expect(industryPaths.map((path) => path.title)).toEqual([
      "Wind & Renewable",
      "Telecom & Met Mast",
      "Construction & Commercial",
      "Industrial Operations",
    ]);
    expect(industryPaths.every((path) => path.description.length > 30 && path.scope.length > 0)).toBe(true);
  });

  it("keeps a technical signal for each homepage service label", () => {
    const serviceLabels = [
      "Residential",
      "Commercial",
      "Construction",
      "Industrial",
      "Telecom",
      "Met Mast Tower",
      "PPE Supplies",
      "Training & Consultancy",
    ];
    expect(Object.keys(serviceSignals)).toEqual(expect.arrayContaining(serviceLabels));
    expect(Object.values(serviceSignals).every((signal) => signal.includes("·"))).toBe(true);
  });
});
