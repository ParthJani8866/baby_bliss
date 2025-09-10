"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek17() {
  const sections = [
    {
      title: "🌸 Intro — Growing Baby & Stronger Kicks",
      content: `
        Welcome to **Week 17**! 🎉 You’re well into the second trimester, and your baby is growing rapidly.  
        Movements become stronger and more noticeable, and your baby is starting to develop fat layers that will help regulate body temperature after birth.  

        Mom’s energy continues to improve, and the pregnancy bump may be more visible.
      `
    },
    {
      title: "👶 Baby’s Development — Fat Layers & Stronger Movements",
      content: `
        Your baby is about the size of a **pomegranate** 🍐 (~12–13 cm), weighing ~140 grams.  

        - **Head & Face:** Eyes move under eyelids; facial expressions more defined.  
        - **Limbs & Movements:** Arms and legs stronger; baby can kick, stretch, and rotate wrists and ankles.  
        - **Fingers & Toes:** Nails continue to grow; fingerprints well-defined.  
        - **Fat Layers:** Baby starts developing subcutaneous fat, giving a smoother appearance.  
        - **Internal Organs:**  
          - Kidneys functioning; bladder fills and empties.  
          - Liver, pancreas, and digestive system continue maturing.  
          - Heart pumps ~25 liters of blood per day.  
        - **Movements:** Baby kicks and stretches more forcefully; mom may start feeling more distinct movements.  
        - **Genitalia:** Clearly visible on ultrasound if desired.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues to adapt to the growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump becomes more pronounced.  
        - 💧 Mild backaches or round ligament pain may appear.  
        - 👙 Breasts continue growing; colostrum may leak.  
        - 🌿 Mood is stable and energy higher than the first trimester.  
        - 🤰 Some swelling in feet or ankles possible, especially in the evening.  
        - 💤 Sleep may still be interrupted by a growing belly or bathroom trips.  
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Important check-ins for Week 17:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptoms.  
        - 📷 Ultrasound: Assess anatomy, growth, and movements.  
        - 🧬 Screening: Mid-second trimester tests like quad screen if not done yet.  
        - 🩺 Discuss any pain, bleeding, or unusual symptoms with your doctor.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Folic Acid:** Continue daily.  
            - **Iron & Vitamin C:** Prevent anemia and support blood health.  
            - **Protein:** Essential for baby’s growth — include lean meats, eggs, beans, tofu.  
            - **Calcium & Vitamin D:** Supports bone and teeth development.  
            - **Omega-3 (DHA):** Brain and eye development.  
            - **Healthy Fats:** Avocado, nuts, and seeds support fat layer development for baby.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with a mix of vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated with 8–10 glasses of water daily.  
            - Small, frequent meals help maintain energy and comfort.  
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
        - 🛌 Prioritize rest and sleep.  
        - 💬 Communicate openly with partner or support group.  
        - 📔 Track pregnancy milestones with a journal or weekly photos.  
        - 🧘 Mindfulness, meditation, and breathing exercises reduce stress and improve well-being.  
      `
    },
    {
      title: "💌 Real Mom Story — Feeling the Kicks",
      content: `
        "At 17 weeks, I could finally feel my baby’s little kicks and stretches.  
        It was an incredible feeling to know the tiny life inside me was becoming more active.  
        I felt more energetic and confident in my pregnancy."  
        — Priya, Mumbai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 17",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals with healthy fats.",
        "✔️ Attend prenatal appointments and ultrasounds.",
        "✔️ Engage in gentle exercise suitable for pregnancy.",
        "✔️ Monitor and report baby movements as needed.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document your pregnancy journey.",
        "✔️ Rest, hydrate, and enjoy feeling your baby move!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 17 is a milestone for growth and movement.  
        Your baby is stronger, developing fat layers, and kicks are becoming more distinct.  
        Enjoy feeling these first noticeable movements and continue nurturing your body and mind. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 17 — Growing Baby & Stronger Kicks"
      description="Pregnancy Week 17 marks stronger baby movements and fat development. Baby is pomegranate-sized, and mom may feel distinct kicks. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
