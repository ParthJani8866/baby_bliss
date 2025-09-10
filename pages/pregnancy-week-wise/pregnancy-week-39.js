"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek39() {
  const sections = [
    {
      title: "🌸 Intro — Final Countdown",
      content: `
        Welcome to **Week 39**! 🎉 Your baby is now **fully developed** and continues gaining weight.  
        Mom may feel intense pelvic pressure, more frequent Braxton Hicks contractions, and signs that labor could begin at any time.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Readiness",
      content: `
        Your baby is about the size of a **mini watermelon** (~50–51 cm), weighing ~3.2–3.4 kg.  

        - **Movements:** Strong, but may feel confined as space decreases.  
        - **Body Fat:** Baby is fully layered with fat, smoothing skin and maintaining body temperature after birth.  
        - **Organs:** Fully mature; lungs and brain ready for life outside the womb.  
        - **Positioning:** Head-down, engaged in the pelvis for birth; some babies may rotate slightly to find the best position.  
        - **Senses:** Responsive to touch, sound, and light; reflexes are fully developed.  
        - **Digestive System:** Ready to feed and digest milk immediately after birth.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is preparing for labor in full force.  

        **Common experiences:**  
        - 🌸 Pelvic pressure increases significantly; walking may be uncomfortable.  
        - 💧 Frequent Braxton Hicks contractions; some may feel like early labor.  
        - 🛌 Sleep disturbance due to discomfort, frequent urination, and baby movements.  
        - 👙 Breasts may leak colostrum.  
        - 🌿 Fatigue and swelling in feet, ankles, or hands.  
        - 💓 Nesting instinct is strong; urge to prepare the home intensifies.  
        - 🔔 Watch for early labor signs: regular contractions, water breaking, or bloody show.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 39:  

        - 📋 Routine prenatal visit: weight, blood pressure, fetal heart rate, growth, and position.  
        - 🩺 Monitor for labor signs and call healthcare provider if labor starts.  
        - 📷 Ultrasound only if indicated — to check position, fluid levels, or any concerns.  
        - 🩺 Contact your provider immediately if you notice strong contractions, water breaking, bleeding, or decreased fetal movement.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports growth and organ function.  
            - **Calcium & Vitamin D:** For strong bones and teeth.  
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
        - 🚶 Gentle exercises: walking, swimming, prenatal yoga to stay comfortable and prepare body for labor.  
        - 🛌 Prioritize rest whenever possible.  
        - 💬 Discuss final birth plan, signs of labor, and emergency contacts with partner or support system.  
        - 📔 Track contractions, baby movements, and nesting activities.  
        - 🧘 Practice mindfulness, breathing exercises, and meditation to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Labor Signs & Excitement",
      content: `
        "Week 39 was intense! Baby’s movements were strong but space is tight, pelvic pressure was high, and Braxton Hicks were frequent.  
        The nesting instinct was unstoppable, and we finalized the hospital bag and birth plan. Every kick reminded me that baby is almost here!"  
        — Riya, Chennai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 39",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat nutrient-rich, balanced meals.",
        "✔️ Attend prenatal check-ups and report unusual symptoms.",
        "✔️ Track baby movements and contractions.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Ensure hospital bag, birth plan, and emergency contacts are ready.",
        "✔️ Rest, hydrate, and enjoy these final days before birth."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 39 marks the final stretch! Baby is fully developed, mom may feel strong pressure and frequent contractions, and labor could start at any moment.  
        Stay calm, follow your birth plan, and cherish these last moments before meeting your little one. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 39 — Full-Term & Labor Preparation"
      description="Pregnancy Week 39 features full-term growth, strong baby movements, increased pelvic pressure, nesting instincts, and imminent labor preparation."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
