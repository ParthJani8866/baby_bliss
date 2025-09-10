"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek25() {
  const sections = [
    {
      title: "🌸 Intro — Stronger & Frequent Movements",
      content: `
        Welcome to **Week 25**! 🎉 Baby’s movements are now stronger and more frequent.  
        You may feel kicks, rolls, and stretches throughout the day, making bonding easier.  
        Your little one’s growth is rapid, and sensory development continues at a fast pace.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Senses",
      content: `
        Your baby is about the size of a **cauliflower** 🥦 (~23–24 cm), weighing ~660 grams.  

        - **Movements:** Strong kicks, rolls, flips, and stretches; you may see your belly move.  
        - **Skin:** Skin is still thin but gradually becoming less translucent; fat begins to accumulate.  
        - **Lungs:** Bronchioles and alveoli continue developing; baby practices breathing motions.  
        - **Brain & Nervous System:** Rapid neural development supports coordinated movements and sensory responses.  
        - **Senses:** Baby responds to sounds, light, and touch; may react to your voice or music.  
        - **Digestive System:** Swallows amniotic fluid; intestines continue maturing.  
        - **Hair & Nails:** Lanugo covers the body; nails grow steadily.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues adapting to the growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump more pronounced; uterus about 2–3 inches above belly button.  
        - 💧 Back pain, round ligament discomfort, leg cramps, or Braxton Hicks contractions may appear.  
        - 👙 Breasts continue growing; colostrum leakage possible.  
        - 🌿 Energy levels may fluctuate; mild fatigue is normal.  
        - 💤 Sleep may be disrupted due to belly growth or frequent urination.  
        - 🤰 Swelling in feet, ankles, or hands may occur, especially after long periods of standing.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 25:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound (if needed) to monitor growth, movements, and amniotic fluid levels.  
        - 🩺 Report any unusual pain, bleeding, or reduced fetal movements to your healthcare provider promptly.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ growth.  
            - **Calcium & Vitamin D:** Crucial for bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain, eye, and lung development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil aid fat layer formation and energy.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals help maintain energy and comfort.
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
      title: "💌 Real Mom Story — Feeling Baby Kicks",
      content: `
        "Week 25 was magical! I felt strong kicks and stretches, sometimes even seeing my belly move.  
        It was a reassuring feeling that my baby is healthy and growing steadily."  
        — Sneha, Mumbai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 25",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and ultrasounds if scheduled.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy feeling stronger, frequent baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 25 is full of excitement — baby’s movements are stronger, more coordinated, and frequent.  
        Your bond grows as you feel each kick and stretch, and baby continues rapid growth and development. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 25 — Stronger Kicks & Rapid Growth"
      description="Pregnancy Week 25 brings stronger, frequent baby movements, rapid growth, and continued sensory development. Mom may feel kicks, stretches, and observe belly movements. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
