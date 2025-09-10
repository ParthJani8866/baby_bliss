"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek33() {
  const sections = [
    {
      title: "🌸 Intro — Rapid Weight Gain & Stronger Movements",
      content: `
        Welcome to **Week 33**! 🎉 Baby is growing rapidly and preparing for the final weeks in the womb.  
        Movements are stronger, more coordinated, and may even push visibly against your belly.  
        Mom may feel increased pressure in the pelvis, along with occasional Braxton Hicks contractions.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Organs",
      content: `
        Your baby is about the size of a **pineapple** 🍍 (~43–44 cm), weighing ~1.8–2 kg.  

        - **Movements:** Strong, frequent kicks, rolls, and stretches; may respond to sound, touch, and light.  
        - **Body Fat:** Rapid fat accumulation for warmth and energy after birth.  
        - **Lungs:** Continue maturing; surfactant production increases to aid post-birth breathing.  
        - **Brain & Nervous System:** Neural connections continue growing rapidly; sleep-wake cycles become more consistent.  
        - **Skin:** Pink, smooth, less translucent; lanugo nearly gone.  
        - **Senses:** Responds to familiar voices, touch, and light.  
        - **Digestive System:** Swallowing amniotic fluid continues; intestines mature for feeding after birth.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adapting to a bigger, stronger baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus may reach below rib cage.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, and leg cramps are common.  
        - 👙 Breasts may leak colostrum; wear supportive bras.  
        - 🌿 Energy may fluctuate; fatigue is normal.  
        - 💤 Sleep may be affected due to size, baby movements, and frequent bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 33:  

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
      title: "💌 Real Mom Story — Pelvic Pressure & Kicks",
      content: `
        "Week 33 brought stronger movements than ever! I could feel the baby pushing against my ribs and bladder.  
        The pelvic pressure reminded me how close we are to meeting our little one."  
        — Ananya, Mumbai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 33",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal check-ups and report any unusual symptoms.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, coordinated baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 33 is exciting — baby is growing rapidly, gaining fat, lungs and brain continue maturing, and movements are strong and frequent.  
        Cherish every kick, roll, and stretch as you approach the final weeks before birth. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 33 — Rapid Growth & Strong Movements"
      description="Pregnancy Week 33 brings strong, coordinated baby movements, rapid weight gain, lung and brain maturation, and increased maternal awareness of fetal activity."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
