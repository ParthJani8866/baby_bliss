"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek35() {
  const sections = [
    {
      title: "🌸 Intro — Final Stretch Begins",
      content: `
        Welcome to **Week 35**! 🎉 Your baby is entering the last 5 weeks of pregnancy.  
        Baby continues gaining weight, movements are strong, and you may notice baby’s head starting to engage downward preparing for birth.  
        Mom may feel increased pelvic pressure, frequent Braxton Hicks contractions, and fatigue.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Position",
      content: `
        Your baby is about the size of a **honeydew melon** (~46–47 cm), weighing ~2.4–2.5 kg.  

        - **Movements:** Strong, coordinated kicks, rolls, and stretches; may push visibly against your belly.  
        - **Body Fat:** Rapid fat accumulation for warmth and energy post-birth.  
        - **Lungs:** Nearly fully mature; surfactant production ensures readiness for breathing.  
        - **Brain & Nervous System:** Neural connections continue to grow; baby reacts more consistently to stimuli.  
        - **Positioning:** Baby may start moving into a head-down position in preparation for delivery.  
        - **Skin & Senses:** Smooth, pink, responsive to sound, touch, and light.  
        - **Digestive System:** Swallowing and intestinal development nearly complete for post-birth feeding.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adapting to a larger, more active baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus may reach just below rib cage.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, and leg cramps are more noticeable.  
        - 👙 Breasts may leak colostrum; wear supportive bras.  
        - 🌿 Fatigue is common; energy fluctuates.  
        - 💤 Sleep may be disturbed due to baby’s movements, discomfort, and bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 35:  

        - 📋 Routine prenatal visit: weight, blood pressure, fetal heart rate, and growth assessment.  
        - 🩺 Monitor for signs of preterm labor, unusual discharge, or decreased fetal movement.  
        - 📷 Ultrasound (if indicated) to assess growth, amniotic fluid, and fetal position.  
        - 🩺 Contact your healthcare provider if you notice significant changes in movements, contractions, or unusual symptoms.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ growth.  
            - **Calcium & Vitamin D:** Supports strong bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain and eye development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil for fat layer formation and energy.
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
        - 🧘 Mindfulness and breathing exercises help manage stress and connect with your baby.
      `
    },
    {
      title: "💌 Real Mom Story — Baby Engaging & Strong Kicks",
      content: `
        "Week 35 was full of surprises! Baby’s kicks were powerful, and I could feel head engagement in my pelvis.  
        Braxton Hicks contractions reminded me that labor is approaching."  
        — Priya, Chennai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 35",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat nutrient-rich, balanced meals.",
        "✔️ Attend prenatal check-ups and report unusual symptoms.",
        "✔️ Track baby movements and contractions.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Prepare hospital bag and birth plan.",
        "✔️ Rest, hydrate, and enjoy baby’s strong movements."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 35 is exciting — baby is growing rapidly, movements are strong, lungs and brain are maturing, and the body is preparing for birth.  
        Cherish every kick, stretch, and roll as you approach the final weeks of pregnancy. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 35 — Strong Movements & Baby Positioning"
      description="Pregnancy Week 35 features rapid baby growth, stronger coordinated movements, lungs and brain maturing, and preparation for birth positioning."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
