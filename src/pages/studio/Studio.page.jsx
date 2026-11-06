import { Studio } from "sanity";
import sanityConfig from "@/../sanity.config";

function StudioPage() {
  return <Studio config={sanityConfig} />;
}

export default StudioPage;
