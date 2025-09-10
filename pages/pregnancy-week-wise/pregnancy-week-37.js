"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek37() {
  const sections = [
    {
      title: "🌸 Intro — Full-Term Milestone",
      content: `
        Welcome to **Week 37**! 🎉 Your baby is now considered **full-term**.  
        Baby continues gaining weight, movements are strong, and mom may notice increased pelvic pressure, frequent Braxton Hicks contractions, and a strong nesting instinct.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Position",
      content: `
        Your baby is about the size of a **winter melon** (~48–49 cm), weighing ~2.8–3.0 kg.  

        - **Movements:** Strong, coordinated kicks, stretches, and rolls; movements may feel more confined as space decreases.  
        - **Body Fat:** Accumulating steadily; skin appears smooth and less wrinkled.  
        - **Lungs:** Fully mature; baby is ready for independent breathing.  
        - **Brain & Nervous System:** Rapid maturation; baby responds consistently to light, sound, and touch.  
        - **Positioning:** Most babies are head-down (vertex); some may start settling lower into the pelvis.  
        - **Digestive System:** Fully developed for feeding after birth.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adapting to the final stages of pregnancy.  

        **Common experiences:**  
        - 🌸 Increased pelvic pressure and frequent urination.  
        - 💧 Back pain, leg cramps, Braxton Hicks contractions.  
        - 👙 Breasts may leak colostrum; wear supportive bras.  
        - 🌿 Fatigue and sleep difficulties due to size and discomfort.  
        - 🛌 Nesting instinct may appear — strong urge to prepare home for baby.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 37:  

        - 📋 Routine prenatal visit: weight, blood pressure, fetal heart rate, and position assessment.  
        - 🩺 Monitor for signs of labor, decreased fetal movement, or unusual symptoms.  
        - 📷 Ultrasound (if indicated) to check growth, amniotic fluid, and head engagement.  
        - 🩺 Contact healthcare provider if you notice strong contractions, fluid leakage, bleeding, or decreased movement.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ growth.  
            - **Calcium & Vitamin D:** Strong bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain and eye development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil for energy and fat layer formation.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals help with digestion and reduce heartburn.
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
        - 🚶 Gentle exercises: walking, swimming, prenatal yoga to maintain flexibility and reduce stress.  
        - 🛌 Prioritize rest and quality sleep whenever possible.  
        - 💬 Discuss birth plan, signs of labor, and emergency contacts with your partner or support system.  
        - 📔 Track contractions, baby movements, and nesting progress.  
        - 🧘 Mindfulness, breathing exercises, and meditation help reduce anxiety and prepare for labor.
      `
    },
    {
      title: "💌 Real Mom Story — Strong Kicks & Nesting Instinct",
      content: `
        "Week 37 felt magical and challenging! Baby’s kicks are strong, I can feel head engagement, and the nesting instinct hit hard — I rearranged the nursery twice in one day!"  
        — Ananya, Mumbai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 37",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat nutrient-rich, balanced meals.",
        "✔️ Attend prenatal check-ups and report unusual symptoms.",
        "✔️ Track baby movements and contractions.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Review hospital bag, birth plan, and emergency contacts.",
        "✔️ Rest, hydrate, and enjoy baby’s strong movements."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 37 is a major milestone — baby is full-term, strong movements continue, and mom may feel pelvic pressure and nesting urges.  
        Every kick, stretch, and Braxton Hicks contraction is a sign that your little one is almost here! 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 37 — Full-Term & Strong Movements"
      description="Pregnancy Week 37 brings full-term growth, strong baby movements, head-down positioning, increased pelvic pressure, and nesting instincts."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
