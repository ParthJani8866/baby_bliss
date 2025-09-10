"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek32() {
  const sections = [
    {
      title: "🌸 Intro — Baby’s Rapid Growth",
      content: `
        Welcome to **Week 32**! 🎉 Baby continues to grow rapidly and become more active.  
        Movements are strong and more coordinated, and you may notice more pronounced pressure in your pelvis.  
        This week marks the start of the final 8 weeks of the third trimester — exciting times ahead!
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Fat Layers",
      content: `
        Your baby is about the size of a **squash** (~42–43 cm), weighing ~1.7–1.8 kg.  

        - **Movements:** Strong kicks, rolls, and stretches; may be visible from outside.  
        - **Body Fat:** Rapid accumulation for warmth and energy after birth.  
        - **Lungs:** Continue maturing; surfactant levels increase to prepare for breathing.  
        - **Brain & Nervous System:** Rapid neural connections; baby can react to stimuli and show sleep-wake cycles.  
        - **Skin:** Smooth, pink, less translucent; lanugo almost gone.  
        - **Senses:** Reacts to light, sound, and touch; may recognize familiar voices.  
        - **Digestive System:** Swallows amniotic fluid; intestines continue maturing.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adapting to a larger, more active baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus may reach just below rib cage.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, and leg cramps are common.  
        - 👙 Breasts may leak colostrum; wear supportive bras.  
        - 🌿 Energy may fluctuate; fatigue is normal.  
        - 💤 Sleep may be disrupted due to size, movements, or frequent bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 32:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 🩺 Monitor for signs of preterm labor or unusual symptoms.  
        - 📷 Ultrasound (if indicated) to monitor growth, amniotic fluid, and fetal position.  
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
        - 💬 Share pregnancy experiences with partner, family, or support group.  
        - 📔 Track pregnancy milestones via journal or app.  
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress and connect with your baby.
      `
    },
    {
      title: "💌 Real Mom Story — Pelvic Pressure & Strong Kicks",
      content: `
        "Week 32 was intense — I could feel baby’s kicks and stretches more vividly, and pelvic pressure was noticeable.  
        It’s amazing to feel how much baby is growing and preparing for the final weeks!"  
        — Meera, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 32",
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
        Week 32 is exciting — baby is growing rapidly, gaining fat, lungs and brain continue maturing, and movements are strong and frequent.  
        Cherish every kick, stretch, and roll as your baby prepares for the final weeks before birth. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 32 — Strong Movements & Rapid Growth"
      description="Pregnancy Week 32 brings rapid baby growth, strong and coordinated movements, lung and brain maturation, and increased maternal awareness of fetal activity."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
