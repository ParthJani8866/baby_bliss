"use client";

import BlogLayout from "../components/BlogLayout";

export default function HowToSwaddle() {
  const steps = [
    { title: "Choose a Soft Swaddle Blanket", content: "Use a lightweight, breathable blanket. Avoid heavy or stiff materials that could overheat your baby." },
    { title: "Lay Out the Blanket", content: "Place the blanket in a diamond shape and fold down the top corner. Lay your baby on their back with their shoulders just below the fold." },
    { title: "Position Baby’s Arms", content: "Gently place your baby’s right arm alongside their body. Take the left side of the blanket and wrap it over the arm and chest, tucking it under the baby’s left side. Repeat for the other arm." },
    { title: "Secure the Legs Comfortably", content: "Leave enough room for the hips and legs to move freely. Fold the bottom corner of the blanket over the feet and tuck loosely." },
    { title: "Check for Safety and Comfort", content: "Ensure the swaddle is snug but not too tight. Baby’s head should remain uncovered. Check that the baby can move hips and legs. Monitor your baby while swaddled and avoid overheating." }
  ];

  const tips = [
    "Swaddling helps calm a fussy baby.",
    "Reduces startle reflex, promoting longer sleep.",
    "Provides a sense of security similar to the womb.",
    "Supports safe sleep when done correctly."
  ];

  return (
    <BlogLayout
      title="How to Swaddle Your Baby: Step-by-Step Techniques for Comfort"
      description="Learn how to swaddle your baby safely and comfortably with step-by-step instructions. Tips to help your newborn sleep better and feel secure."
      steps={steps}
      tips={tips}
      sidebarCategory="baby-swaddles"
      sidebarTitle="Recommended Products"
    />
  );
}
