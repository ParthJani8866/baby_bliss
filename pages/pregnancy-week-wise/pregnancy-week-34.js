"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek34() {
  const sections = [
    {
      title: "🌸 Intro — Baby Nearing Full Term",
      content: `
        Welcome to **Week 34**! 🎉 Your baby is almost full-term and continues rapid growth.  
        Movements are strong and more coordinated, often causing noticeable shifts and stretches.  
        Mom may feel increased pressure, fatigue, and occasional Braxton Hicks contractions as the body prepares for labor.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Organs",
      content: `
        Your baby is about the size of a **cantaloupe** (~45 cm), weighing ~2.1–2.2 kg.  

        - **Movements:** Strong kicks, rolls, and stretches; may visibly move the belly.  
        - **Body Fat:** Continues accumulating for warmth and energy post-birth.  
        - **Lungs:** Alveoli and surfactant nearly mature; baby can breathe air if born prematurely.  
        - **Brain & Nervous System:** Rapid development; baby responds more consistently to sound, touch, and light.  
        - **Skin:** Smooth, pink, less translucent; vernix caseosa still present in some areas.  
        - **Senses:** Can recognize familiar voices and sounds.  
        - **Digestive System:** Swallowing amniotic fluid and preparing for feeding after birth.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adapting to a larger, stronger baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus reaches near rib cage.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, and leg cramps may increase.  
        - 👙 Breasts may leak colostrum; wear supportive bras.  
        - 🌿 Energy may fluctuate; fatigue is common.  
        - 💤 Sleep may be interrupted due to size, movements, and frequent bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 34:  

        - 📋 Routine prenatal visit: weight, blood pressure, fetal heart rate, and symptom review.  
        - 🩺 Monitor for signs of preterm labor, unusual discharge, or decreased fetal movement.  
        - 📷 Ultrasound (if indicated) to monitor growth, position, and amniotic fluid.  
        - 🩺 Report any unusual pain, bleeding, or significant decrease in fetal movements immediately.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports organ and muscle development.  
            - **Calcium & Vitamin D:** Crucial for bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain, eye, and lung development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil for fat layer formation and energy.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals help digestion and comfort.
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
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress and connect with your baby.
      `
    },
    {
      title: "💌 Real Mom Story — Strong Kicks & Pelvic Pressure",
      content: `
        "Week 34 was a whirlwind! Baby’s kicks were strong enough to make me gasp, and pelvic pressure reminded me how close we are to meeting our little one."  
        — Kavita, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 34",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal check-ups and report any unusual symptoms.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy strong, coordinated baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 34 is exciting — baby continues growing rapidly, gaining fat, lungs and brain mature further, and movements are strong and frequent.  
        Every kick, stretch, and roll is a reminder that the arrival is getting closer! 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 34 — Rapid Growth & Strong Movements"
      description="Pregnancy Week 34 brings strong, coordinated baby movements, rapid weight gain, lung and brain maturation, and increased maternal awareness of fetal activity."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
