"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek38() {
  const sections = [
    {
      title: "🌸 Intro — Almost There!",
      content: `
        Welcome to **Week 38**! 🎉 Your baby is now considered full-term and is continuing to gain weight in preparation for birth.  
        Mom may experience increased pelvic pressure, frequent Braxton Hicks contractions, and signs that labor could start any time.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Position",
      content: `
        Your baby is about the size of a **pumpkin** (~49–50 cm), weighing ~3.0–3.2 kg.  

        - **Movements:** Strong, but movements may feel more confined as space inside the womb decreases.  
        - **Body Fat:** Baby is gaining fat steadily, smoothing out skin and regulating temperature.  
        - **Lungs:** Fully mature, ready for breathing outside the womb.  
        - **Brain & Nervous System:** Advanced development; reacts consistently to stimuli like sound and touch.  
        - **Positioning:** Most babies are head-down; some may move lower into the pelvis.  
        - **Digestive System:** Fully prepared to process milk after birth.  
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is preparing for labor.  

        **Common experiences:**  
        - 🌸 Pelvic pressure increases; walking may be uncomfortable.  
        - 💧 Frequent Braxton Hicks contractions.  
        - 🛌 Trouble sleeping due to discomfort, bathroom trips, and baby movements.  
        - 👙 Breasts may leak colostrum.  
        - 🌿 Fatigue, swelling in feet and ankles.  
        - 💓 Nesting instinct often peaks; preparing the home for baby’s arrival.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 38:  

        - 📋 Routine prenatal visit: check weight, blood pressure, fetal heart rate, and growth.  
        - 🩺 Monitor for labor signs: regular contractions, water breaking, or bleeding.  
        - 📷 Ultrasound (if indicated) for growth, amniotic fluid, and position.  
        - 🩺 Contact healthcare provider immediately for strong contractions, fluid leakage, bleeding, or decreased fetal movement.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ development.  
            - **Calcium & Vitamin D:** For strong bones and teeth.  
            - **Iron & Vitamin C:** Supports blood health.  
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
        - 🚶 Gentle exercises: walking, swimming, prenatal yoga.  
        - 🛌 Prioritize rest and quality sleep.  
        - 💬 Discuss birth plan, signs of labor, and emergency contacts with partner or support system.  
        - 📔 Track contractions, baby movements, and nesting progress.  
        - 🧘 Practice mindfulness, breathing exercises, and meditation to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Labor Signs & Nesting",
      content: `
        "Week 38 felt intense! Baby is so strong, and the pelvic pressure is constant.  
        I started noticing more regular Braxton Hicks contractions and felt the nesting instinct kick in strongly.  
        Every movement reassured me that baby is almost here."  
        — Shruti, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 38",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat nutrient-rich, balanced meals.",
        "✔️ Attend prenatal check-ups and report unusual symptoms.",
        "✔️ Track baby movements and contractions.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Finalize hospital bag, birth plan, and emergency contacts.",
        "✔️ Rest, hydrate, and enjoy baby’s final movements before birth."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 38 is exciting — baby is full-term, moving strongly, and mom is preparing for labor.  
        Listen to your body, rest, and cherish these final moments before welcoming your little one! 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 38 — Full-Term & Preparing for Birth"
      description="Pregnancy Week 38 features full-term growth, strong baby movements, increased pelvic pressure, nesting instincts, and labor prep."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
