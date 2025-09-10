"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek36() {
  const sections = [
    {
      title: "🌸 Intro — Approaching Full Term",
      content: `
        Welcome to **Week 36**! 🎉 Your baby is now considered early term and continues gaining weight.  
        Movements are strong and coordinated, and baby may have fully engaged head-down in the pelvis.  
        Mom may feel increased pelvic pressure, frequent Braxton Hicks contractions, and disrupted sleep.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Organs",
      content: `
        Your baby is about the size of a **romaine lettuce** (~47–48 cm), weighing ~2.6–2.7 kg.  

        - **Movements:** Strong, coordinated kicks, rolls, and stretches; may visibly shift the belly.  
        - **Body Fat:** Accumulating steadily, smoothing out skin and regulating temperature.  
        - **Lungs:** Nearly fully mature; surfactant is abundant for post-birth breathing.  
        - **Brain & Nervous System:** Advanced development; baby reacts consistently to sound, light, and touch.  
        - **Positioning:** Most babies are now head-down (vertex), preparing for delivery.  
        - **Skin & Senses:** Smooth, pink, responsive to stimuli.  
        - **Digestive System:** Fully prepared to digest milk after birth.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adapting to a larger, more active baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus may reach below the rib cage.  
        - 💧 Increased pelvic pressure, back pain, leg cramps, and Braxton Hicks contractions.  
        - 👙 Breasts may leak colostrum; wear supportive bras.  
        - 🌿 Fatigue is common; energy levels fluctuate.  
        - 💤 Sleep may be interrupted due to discomfort, frequent urination, and baby movements.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 36:  

        - 📋 Routine prenatal visit: weight, blood pressure, fetal heart rate, and growth assessment.  
        - 🩺 Monitor for signs of labor or unusual symptoms.  
        - 📷 Ultrasound (if indicated) to check growth, amniotic fluid, and fetal position.  
        - 🩺 Contact healthcare provider for decreased fetal movement, severe pain, or bleeding.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ development.  
            - **Calcium & Vitamin D:** Crucial for bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain, eye, and lung development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil for energy and fat layer formation.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals improve comfort and digestion.
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
        - 💬 Discuss birth plans and preparations with partner or support system.  
        - 📔 Track baby movements, contractions, and milestones via journal or app.  
        - 🧘 Practice mindfulness, breathing exercises, and meditation to reduce stress and connect with your baby.
      `
    },
    {
      title: "💌 Real Mom Story — Pelvic Pressure & Sleep Challenges",
      content: `
        "Week 36 was challenging but exciting! Baby’s head is fully down, and the pressure on my pelvis is constant.  
        Sleep is uncomfortable, but I love feeling all the strong kicks and stretches."  
        — Meera, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 36",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat nutrient-rich, balanced meals.",
        "✔️ Attend prenatal check-ups and report unusual symptoms.",
        "✔️ Track baby movements and contractions.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Review hospital bag, birth plan, and logistics.",
        "✔️ Rest, hydrate, and enjoy baby’s movements and development."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 36 is exciting — baby is almost full-term, body continues maturing, and movements are strong.  
        Mom may feel pressure and fatigue, but every movement is a sign of a healthy, thriving baby. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 36 — Almost Full-Term & Strong Movements"
      description="Pregnancy Week 36 features strong baby movements, nearly full-term growth, lung and brain maturation, head-down positioning, and maternal pelvic pressure."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
