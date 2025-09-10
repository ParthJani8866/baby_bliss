"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek27() {
  const sections = [
    {
      title: "🌸 Intro — Baby’s Stronger Movements",
      content: `
        Welcome to **Week 27**! 🎉 Your baby is becoming more active and coordinated.  
        Kicks, rolls, and stretches are stronger and more frequent, and you may notice patterns of activity and rest.  
        This week is part of the third trimester, where growth accelerates and organs, especially the lungs, continue maturing.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Organs",
      content: `
        Your baby is about the size of a **lettuce head** 🥬 (~36–37 cm), weighing ~900 grams.  

        - **Movements:** Strong kicks, rolls, stretches, and flips; you can often see belly movement.  
        - **Lungs:** Bronchioles and alveoli continue developing; surfactant production increases, preparing lungs for breathing after birth.  
        - **Brain & Nervous System:** Rapid neural development; baby begins to have sleep-wake cycles.  
        - **Skin:** Still soft and reddish, gradually becoming less translucent.  
        - **Senses:** Responds to sound, light, and touch; may recognize familiar voices.  
        - **Digestive System:** Swallows amniotic fluid; intestines continue maturing.  
        - **Hair & Nails:** Nails reach fingertips; hair continues growing.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues to adapt to the growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump more pronounced; uterus now 2–3 inches above belly button.  
        - 💧 Back pain, round ligament discomfort, Braxton Hicks contractions, and leg cramps may occur.  
        - 👙 Breasts continue enlarging; colostrum leakage may continue.  
        - 🌿 Energy levels fluctuate; mild fatigue is normal.  
        - 💤 Sleep may be affected due to belly size, movements, or bathroom trips.  
        - 🤰 Occasional swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 27:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound (if needed) to monitor growth, movements, and amniotic fluid levels.  
        - 🩺 Report any unusual pain, bleeding, or decreased fetal movements promptly.  
        - 🩸 Consider gestational diabetes screening if not already done.
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
            - Eat small, frequent meals to maintain energy and comfort.
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
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Tracking Baby Patterns",
      content: `
        "At 27 weeks, I noticed my baby had patterns — active in the evening, calm during naps.  
        Feeling these movements helped me bond and relax, knowing my baby is growing healthy and strong."  
        — Rina, Chennai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 27",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and ultrasounds if scheduled.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, patterned baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 27 is an exciting stage — baby’s movements are stronger, more coordinated, and distinct.  
        Your bond grows as you feel patterns and hiccups, and baby continues rapid growth and development. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 27 — Strong, Coordinated Movements"
      description="Pregnancy Week 27 brings stronger, patterned baby movements, rapid growth, and continued lung and brain development. Mom may feel visible kicks, stretches, and hiccups. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
