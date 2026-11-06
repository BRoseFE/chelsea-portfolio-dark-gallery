import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import artwork from "./sanity/schemas/artwork";

export default defineConfig({
  name: "default",
  title: "Chelsea Rose Portfolio",
  projectId: "1k9fi2a1",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [artwork],
  },
});
