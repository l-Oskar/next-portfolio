import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { cards } from "@/data/index";

export default function TechStack() {
  return (
    <div id="techStack" className="py-20">
      <h1 className="heading">
        Tools & Technologies <span className="text-purple">I Work With</span>
      </h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={cards} />
      </div>
    </div>
  );
}
