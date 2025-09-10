"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek30() {
  const sections = [
    {
      title: "🌸 Intro — Rapid Growth & Active Baby",
      content: `
        Welcome to **Week 30**! 🎉 Your baby is growing quickly and becoming more active.  
        Movements are stronger and more frequent, and you may feel more pronounced kicks, rolls, and stretches.  
        This week, your baby’s brain and lungs continue maturing in preparation for life outside the womb.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Organs",
      content: `
        Your baby is about the size of a **cucumber** 🥒 (~39–40 cm), weighing ~1.3–1.4 kg.  

        - **Movements:** Strong kicks, rolls, stretches, and occasional jabs to ribs or bladder.  
        - **Body Fat:** Fat layers increase, giving baby a rounder appearance and helping regulate body temperature.  
        - **Lungs:** Surfactant production continues, preparing lungs for breathing after birth.  
        - **Brain & Nervous System:** Neural connections are developing rapidly; baby may show more distinct sleep and wake cycles.  
        - **Skin:** Less translucent and smoother; lanugo continues to thin.  
        - **Senses:** Reacts to sound, light, and touch; may recognize familiar voices.  
        - **Digestive System:** Swallows amniotic fluid; intestines continue maturing.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adapting to a larger, more active baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus may reach just below the rib cage.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, and leg cramps are common.  
        - 👙 Breasts may leak colostrum; continue supporting with a comfortable bra.  
        - 🌿 Energy may fluctuate; fatigue is normal.  
        - 💤 Sleep may be affected due to belly size, movements, or frequent bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 30:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 🩺 Monitor for signs of preterm labor or unusual symptoms.  
        - 📷 Ultrasound (if indicated) to check growth, amniotic fluid, and fetal position.  
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
      title: "💌 Real Mom Story — Active Baby Adventures",
      content: `
        "Week 30 was incredible — my baby’s movements were strong and frequent, sometimes making me jump!  
        Feeling those stretches and kicks reminded me of how much growth is happening every day."  
        — Ananya, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 30",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal check-ups and report any unusual symptoms.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, more frequent baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 30 is an exciting stage — baby is growing rapidly, body fat increases, lungs and brain mature, and movements are stronger than ever.  
        Cherish feeling each kick, stretch, and hiccup as your baby prepares for the coming weeks before birth. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 30 — Rapid Growth & Strong Movements"
      description="Pregnancy Week 30 brings rapid baby growth, stronger and more frequent movements, lung and brain maturation, and increased maternal awareness of fetal activity."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
