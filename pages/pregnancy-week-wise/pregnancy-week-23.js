"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek23() {
  const sections = [
    {
      title: "🌸 Intro — Feeling More Movement",
      content: `
        Welcome to **Week 23**! 🎉 Your baby is more active and kicks are becoming stronger and more frequent.  
        Mom can now notice definite movements and may even feel rolls and stretches.  
        This week is an excellent time to bond with your baby and enjoy the growing connection.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Lungs",
      content: `
        Your baby is about the size of a **mango** 🥭 (~20–22 cm), weighing ~500 grams.  

        - **Movements:** Kicks, flips, stretches, and rolls are frequent and more coordinated.  
        - **Lungs:** Bronchioles develop; tiny air sacs (alveoli) start forming.  
        - **Skin & Hair:** Lanugo covers the body; skin is still thin but becoming less transparent.  
        - **Senses:** Baby reacts to sounds, light, and touch.  
        - **Digestive System:** Swallows amniotic fluid; intestines produce meconium.  
        - **Brain Development:** Rapid growth continues; neural connections form rapidly.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues to change and adapt.  

        **Common experiences:**  
        - 🌸 Baby bump more pronounced; uterus rises above the belly button.  
        - 💧 Back pain, round ligament pain, and leg cramps may occur.  
        - 👙 Breasts continue growing; colostrum leakage possible.  
        - 🌿 Energy levels are generally good; mild fatigue may appear.  
        - 💤 Sleep may be disturbed due to belly size or frequent urination.  
        - 🤰 Occasional swelling in feet or ankles, especially after standing for long periods.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 23:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound (if needed) to check growth, movements, and anatomy.  
        - 🩺 Discuss any unusual pain, bleeding, or reduced fetal movements with your healthcare provider.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ development.  
            - **Calcium & Vitamin D:** Crucial for bone and teeth development.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain and eye development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil support fat layer formation.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** rich in vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Eat small, frequent meals for energy and comfort.
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw or undercooked seafood, eggs, or meat.  
            - Unpasteurized dairy.  
            - High-mercury fish.  
            - Alcohol and smoking — strictly avoid.  
            - Excess caffeine (>200 mg/day).
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Emotional Wellness",
      content: `
        - 🚶 Gentle exercises: walking, swimming, prenatal yoga.  
        - 🛌 Prioritize rest and quality sleep.  
        - 💬 Share pregnancy experiences with partner, family, or support group.  
        - 📔 Track pregnancy milestones via journal or app.  
        - 🧘 Mindfulness, meditation, and breathing exercises help reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Stronger Kicks",
      content: `
        "At 23 weeks, the baby’s kicks became much stronger and more predictable.  
        I could feel my little one moving almost every evening.  
        It’s such a wonderful bonding experience to feel the rolls and stretches through my belly!"  
        — Meera, Chennai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 23",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced meals with protein, calcium, and healthy fats.",
        "✔️ Attend prenatal check-ups and ultrasounds if scheduled.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Track baby movements daily and report any concerns.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, frequent baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 23 is an exciting phase — your baby is more active, movements are stronger, and lungs and brain continue developing rapidly.  
        Enjoy this stage and continue nurturing your health and bond with your baby. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 23 — Stronger & Frequent Baby Movements"
      description="Pregnancy Week 23 brings stronger, more frequent baby movements. Baby is mango-sized, lungs and brain continue developing, and mom can feel definite kicks. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
