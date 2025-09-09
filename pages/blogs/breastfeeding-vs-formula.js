"use client";

import BlogLayout from "../components/BlogLayout";

export default function BreastfeedingVsFormula() {
  const sections = [
    {
      title: "Pros of Breastfeeding",
      list: [
        "Nutrition: Breast milk contains the perfect balance of nutrients and antibodies for your newborn.",
        "Bonding: Skin-to-skin contact strengthens emotional connection.",
        "Immune Support: Protects babies against infections and illnesses.",
        "Cost-effective: Free and readily available.",
        "Digestive Comfort: Easier for babies to digest than formula."
      ]
    },
    {
      title: "Cons of Breastfeeding",
      list: [
        "Can be physically demanding and tiring for the mother.",
        "Some mothers may experience nipple pain or engorgement.",
        "Diet restrictions and careful monitoring of certain foods and medications.",
        "May not be feasible for working mothers without support or pumping equipment."
      ]
    },
    {
      title: "Pros of Formula Feeding",
      list: [
        "Provides flexibility for both parents to feed the baby.",
        "Convenient for working parents or travel situations.",
        "Easy to monitor the exact amount of milk intake.",
        "No dietary restrictions for the mother."
      ]
    },
    {
      title: "Cons of Formula Feeding",
      list: [
        "Costly compared to breastfeeding.",
        "Requires preparation and careful hygiene.",
        "Lacks the natural antibodies present in breast milk.",
        "May cause digestive issues or allergies in some babies."
      ]
    },
    {
      title: "Tips for Parents",
      list: [
        "Consult your pediatrician before deciding on formula types.",
        "Combine breastfeeding and formula if needed (mixed feeding).",
        "Ensure proper storage and preparation of formula to avoid contamination.",
        "Prioritize your and your baby's comfort — every family is unique."
      ]
    },
    {
      title: "Conclusion",
      content: "Both breastfeeding and formula feeding can meet your baby’s nutritional needs if done properly. The choice depends on your lifestyle, health, and personal preference. Remember, the most important thing is that your baby is fed, happy, and healthy."
    }
  ];

  return (
    <BlogLayout
      title="Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider"
      description="Learn the pros and cons of breastfeeding vs formula feeding. Make an informed decision for your baby's health and your convenience."
      sections={sections}
      sidebarCategory="feeding-baby"
      sidebarTitle="Recommended Products"
    />
  );
}
