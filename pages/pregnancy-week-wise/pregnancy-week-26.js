"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek26() {
  const sections = [
    {
      title: "🌸 Intro — Active Baby & Rapid Growth",
      content: `
        Welcome to **Week 26**! 🎉 Baby’s movements are stronger, more frequent, and distinct.  
        Mom may feel rolls, kicks, and hiccups clearly throughout the day.  
        This week is crucial for **lung development** and brain growth, making bonding moments even more special.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Lungs",
      content: `
        Your baby is about the size of a **Romaine lettuce** 🥬 (~24–25 cm), weighing ~760 grams.  

        - **Movements:** Strong kicks, rolls, stretches, and flips; belly visibly moves.  
        - **Lungs:** Alveoli continue forming, surfactant production increases, preparing lungs for breathing after birth.  
        - **Skin:** Becoming less translucent as fat accumulates; covered with fine lanugo.  
        - **Brain & Nervous System:** Neural connections strengthen; baby may respond to sound, light, and touch.  
        - **Senses:** Baby reacts to voices, music, and even gentle pokes on the belly.  
        - **Digestive System:** Swallows amniotic fluid; intestines continue maturing.  
        - **Hair & Nails:** Nails grow longer; hair may be noticeable under ultrasound.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adjusting to a rapidly growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump more prominent; uterus now above the belly button.  
        - 💧 Back pain, round ligament pain, Braxton Hicks contractions, and leg cramps may occur.  
        - 👙 Breasts continue enlarging; colostrum leakage may continue.  
        - 🌿 Energy levels fluctuate; mild fatigue is normal.  
        - 💤 Sleep may be affected due to belly size, movements, or bathroom trips.  
        - 🤰 Occasional swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 26:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound (if indicated) to check growth, movements, and amniotic fluid levels.  
        - 🩺 Report any unusual pain, bleeding, or decreased fetal movements promptly.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports organ and muscle development.  
            - **Calcium & Vitamin D:** Crucial for strong bones and teeth.  
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
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress and connect with your baby.
      `
    },
    {
      title: "💌 Real Mom Story — Feeling Every Kick",
      content: `
        "At 26 weeks, my baby’s kicks became incredibly strong.  
        I could see my belly move when baby rolled or stretched.  
        Feeling hiccups and movements daily reminded me that my little one is healthy and growing."  
        — Kavya, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 26",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal check-ups and ultrasounds if scheduled.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, distinct baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 26 is a thrilling stage — baby’s growth accelerates, lungs develop further, and movements become more distinct.  
        Enjoy feeling every kick, stretch, and hiccup, and continue nurturing your bond and health. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 26 — Strong Kicks & Accelerated Growth"
      description="Pregnancy Week 26 marks rapid baby growth, stronger and more distinct movements, and continued lung and brain development. Mom may feel kicks, rolls, and hiccups. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
