"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek21() {
  const sections = [
    {
      title: "🌸 Intro — Baby’s Movements Become Noticeable",
      content: `
        Welcome to **Week 21**! 🎉 Your baby is becoming more active and coordinated.  
        Movements are stronger, and many moms start to feel definite kicks, flips, and stretches.  
        This week is a continuation of growth and bonding, as your connection with your baby becomes more tangible.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Coordination",
      content: `
        Your baby is about the size of a **carrot** 🥕 (~18 cm), weighing ~360 grams.  

        - **Muscles & Skeleton:** Bones continue hardening; muscle development allows more controlled movements.  
        - **Movements:** Kicks, stretches, rolls, and small somersaults become more coordinated. Mom may feel movements externally.  
        - **Skin & Hair:** Lanugo covers the body; hair on scalp thickens.  
        - **Facial Features:** Eyelids, eyebrows, and eyelashes are well-formed.  
        - **Internal Organs:**  
          - Digestive system continues maturing; baby swallows amniotic fluid.  
          - Kidneys functioning; urine excreted into amniotic fluid.  
          - Heart circulates blood efficiently; lungs continue developing but not yet functional outside womb.  
        - **Sensory Development:** Baby can hear sounds from outside; may respond to voices or music.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues adapting to the growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump growing larger; uterus rises above the belly button.  
        - 💧 Backaches, round ligament pain, and leg cramps may occur.  
        - 👙 Breasts continue growing; colostrum leakage possible.  
        - 🌿 Energy levels remain good; mood generally stable.  
        - 💤 Sleep may be interrupted by bathroom trips or belly discomfort.  
        - 🤰 Occasional swelling in feet or ankles, especially after long periods of standing.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 21:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound (if not done at Week 20) to check baby’s growth, organs, and movements.  
        - 🩺 Discuss any unusual pain, bleeding, or reduced fetal movements with your healthcare provider.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ growth.  
            - **Calcium & Vitamin D:** Strengthens bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Important for brain and eye development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil support fat layer development.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** rich in vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals maintain energy and comfort.  
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw or undercooked seafood, eggs, or meat.  
            - Unpasteurized dairy products.  
            - High-mercury fish.  
            - Alcohol and smoking — strictly off-limits.  
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
        - 💬 Communicate with partner, family, or support group about pregnancy experiences.  
        - 📔 Track pregnancy milestones with photos, journal, or a pregnancy app.  
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Feeling Baby’s Kicks Clearly",
      content: `
        "At 21 weeks, the kicks were strong and unmistakable.  
        Every evening, I could feel my baby stretching and rolling, which made the pregnancy feel so real.  
        Sharing this experience with my partner brought us even closer."  
        — Kavya, Hyderabad
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 21",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals with protein, calcium, and healthy fats.",
        "✔️ Attend prenatal appointments as scheduled.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy feeling the baby’s coordinated movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 21 is an exciting phase as your baby grows stronger, more active, and more coordinated.  
        Enjoy every kick, stretch, and movement as a reminder of the amazing journey you are on. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 21 — Baby Movements Become Stronger"
      description="Pregnancy Week 21 marks stronger and more coordinated baby movements. Baby is carrot-sized, and mom can feel clear kicks and stretches. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
