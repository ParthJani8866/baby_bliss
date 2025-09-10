"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek40() {
  const sections = [
    {
      title: "🌸 Intro — Your Baby is Ready!",
      content: `
        Welcome to **Week 40**! 🎉 Congratulations — your pregnancy journey has reached full term.  
        Your baby is fully developed and ready to enter the world. Mom may experience strong pelvic pressure, frequent contractions, and signs of imminent labor.
      `
    },
    {
      title: "👶 Baby’s Development — Full-Term",
      content: `
        Your baby is about the size of a **pumpkin** (~51–52 cm), weighing ~3.4–3.6 kg.  

        - **Movements:** Strong, though confined; baby may shift position as labor approaches.  
        - **Body Fat:** Fully layered, skin smooth, temperature regulation ready.  
        - **Organs:** All organs are fully mature; lungs and brain ready for independent life.  
        - **Positioning:** Most babies are head-down and engaged in the pelvis, preparing for delivery.  
        - **Senses & Reflexes:** Fully developed; baby responds to touch, light, and sound.  
        - **Digestive System:** Ready to feed and digest milk immediately after birth.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom is now at the peak of pregnancy symptoms.  

        **Common experiences:**  
        - 🌸 Strong pelvic pressure; baby may feel very low in the pelvis.  
        - 💧 Frequent Braxton Hicks contractions; real contractions may start anytime.  
        - 🛌 Sleep may be challenging due to discomfort, bathroom trips, and baby movements.  
        - 👙 Breasts may leak colostrum.  
        - 🌿 Fatigue, swelling, and occasional back pain.  
        - 🔔 Signs of labor: regular contractions, water breaking, bloody show, and lower back pressure.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 40:  

        - 📋 Routine prenatal visit: monitor baby’s growth, amniotic fluid, and positioning.  
        - 🩺 Be aware of labor signs: contractions, water breaking, and bloody show.  
        - 📷 Ultrasound only if medically indicated — usually to check fluid or growth.  
        - 🩺 Contact healthcare provider immediately if labor begins or if you notice decreased fetal movement, bleeding, or unusual symptoms.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports baby’s last growth spurt.  
            - **Calcium & Vitamin D:** Maintain bone and teeth health.  
            - **Iron & Vitamin C:** Prevents anemia, supports blood health.  
            - **Omega-3 (DHA):** Supports brain and eye development.  
            - **Healthy Fats:** Energy and fat layer formation for baby.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to reduce constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals may help with digestion and reduce heartburn.
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
        - 🚶 Gentle exercises like walking, stretching, or prenatal yoga can reduce discomfort and help with labor readiness.  
        - 🛌 Rest whenever possible; fatigue is normal.  
        - 💬 Review birth plan and discuss labor signs with your partner or support system.  
        - 📔 Track contractions, baby movements, and readiness for delivery.  
        - 🧘 Mindfulness, breathing exercises, and meditation reduce anxiety and prepare you mentally for labor.
      `
    },
    {
      title: "💌 Real Mom Story — The Waiting Game",
      content: `
        "Week 40 was surreal! Baby was fully engaged, movements were strong but cramped, and every twinge felt like a countdown.  
        I focused on resting, walking, and preparing mentally. When contractions finally started, I felt ready — the anticipation made the moment magical."  
        — Meera, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 40",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat nutrient-rich, balanced meals.",
        "✔️ Attend prenatal check-ups and report unusual symptoms.",
        "✔️ Track baby movements and contractions.",
        "✔️ Gentle exercises to stay comfortable and prepare for labor.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Ensure hospital bag, birth plan, and emergency contacts are ready.",
        "✔️ Rest, hydrate, and stay mentally prepared for labor and delivery."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 40 marks the culmination of your pregnancy journey. Baby is ready, mom is prepared, and labor can begin at any time.  
        Stay calm, trust your body, and cherish these final moments before meeting your little one! 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 40 — Full-Term & Labor Readiness"
      description="Pregnancy Week 40 is the final week, baby is fully developed, mom may feel strong pelvic pressure, frequent contractions, and signs of imminent labor."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
