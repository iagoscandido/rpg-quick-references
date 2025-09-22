import { Suspense } from "react";
import InfoCard from "@/components/info-card";
import VariantRules from "@/data/variantrules.json";

const variantRules = VariantRules.variantrule;

const RulesPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {variantRules.map((rule) => (
          <Suspense key={rule.name + rule.source}>
            <InfoCard
              title={rule.name}
              content={rule.entries.join("\n\n")}
              source={`${rule.source} p${rule.page}`}
              searchSource={rule.source}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default RulesPage;
