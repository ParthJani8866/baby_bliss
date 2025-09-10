"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek22() {
  const sections = [
    {
      title: "🌸 Intro — Baby’s Senses Are Developing",
      content: `
        Welcome to **Week 22**! 🎉 Your baby is becoming more active and responsive.  
        Movements are stronger, and you may notice patterns in kicks and stretches.  
        Sensory development continues — your baby may respond to sounds, touch, and light, making this week a special bonding period.
      `
    },
    {
      title: "👶 Baby’s Development — Senses & Growth",
      content: `
        Your baby is about the size of a **spaghetti squash** (~19–20 cm), weighing ~430 grams.  

        - **Movements:** Kicks, stretches, rolls, and flips become stronger and more coordinated.  
        - **Hair & Skin:** Lanugo continues covering the body; hair on the scalp thickens.  
        - **Facial Features:** Eyebrows, eyelashes, and eyelids fully formed; facial expressions may begin.  
        - **Internal Organs:**  
          - Heart pumps steadily; heartbeat can be heard with Doppler.  
          - Digestive system developing; baby swallows amniotic fluid.  
          - Kidneys produce urine; bladder fills and empties.  
          - Lungs developing airways but not yet functional outside womb.  
        - **Sensory Development:**  
          - Baby may respond to sounds from outside the womb.  
          - Eyes are developing sensitivity to light; may move in response to bright light.  
          - Touch sensitivity increases; baby can feel its own body and the uterine wall.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom continues adapting to the growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump more pronounced; uterus about 2–3 inches above belly button.  
        - 💧 Back pain, round ligament pain, and leg cramps may persist.  
        - 👙 Breasts continue growing; colostrum may leak.  
        - 🌿 Energy levels are usually good, though some fatigue is normal.  
        - 💤 Sleep may be disrupted due to belly growth or bathroom trips.  
        - 🤰 Occasional swelling in feet or ankles, especially after standing.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 22:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound (if not done at Week 20) to check growth, movements, and anatomy.  
        - 🩺 Discuss any unusual pain, bleeding, or reduced fetal movements.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ development.  
            - **Calcium & Vitamin D:** Crucial for bone and teeth development.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain and eye development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil help with fat layer development.
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
        - 💬 Communicate with partner, family, or support group.  
        - 📔 Track pregnancy milestones via journal or app.  
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Responding to Baby’s Movements",
      content: `
        "Week 22 was amazing — my baby’s kicks became stronger and more predictable.  
        I started noticing times of day when baby was more active, and talking to the bump seemed to calm or excite little movements!"  
        — Ananya, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 22",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, coordinated movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 22 is full of excitement — your baby’s movements are more noticeable, senses are developing, and mom’s belly continues growing.  
        Embrace this phase, bond with your baby, and continue nurturing your health and wellness. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 22 — Baby’s Senses & Stronger Movements"
      description="Pregnancy Week 22 marks stronger, coordinated baby movements and developing senses. Baby is spaghetti squash-sized, and mom can feel definite kicks and stretches. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
