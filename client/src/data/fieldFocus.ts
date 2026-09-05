export const industryPaths = [
  {
    title: "Wind & Renewable",
    description: "Blade, access, inspection, and maintenance conversations for renewable-energy sites.",
    scope: "Wind turbine maintenance",
  },
  {
    title: "Telecom & Met Mast",
    description: "Tower access, antenna work, mast systems, and remote-site support for communications assets.",
    scope: "Tower and mast services",
  },
  {
    title: "Construction & Commercial",
    description: "Façade, lifeline, rigging, painting, leak-detection, and high-rise property-care scopes.",
    scope: "Building and site delivery",
  },
  {
    title: "Industrial Operations",
    description: "Confined-space access, plant care, tank cleaning, shutdown logistics, and technical maintenance.",
    scope: "Plant and asset support",
  },
] as const;

export const serviceSignals: Record<string, string> = {
  Residential: "Property care · access-led maintenance",
  Commercial: "Façade upkeep · leak detection · resealing",
  Construction: "Rigging · lifelines · safety-net systems",
  Industrial: "Confined space · plant care · shutdown support",
  Telecom: "Tower access · antenna · line testing",
  "Met Mast Tower": "Mast systems · alignment · maintenance",
  "PPE Supplies": "Harnesses · anchors · protective gear",
  "Training & Consultancy": "Rescue · risk assessment · safety audits",
};
