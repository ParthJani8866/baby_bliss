"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek15() {
  const sections = [
    {
      title: "🌸 Intro — Coordinated Movements & Growing Baby",
      content: `
        Welcome to **Week 15**! 🎉 You’re now fully immersed in your second trimester.  
        This week, your baby continues to grow quickly and develop more distinct features.  

        Mom may notice more energy, improved mood, and reduced nausea. The baby’s movements are becoming more coordinated, although you may not feel them yet.
      `
    },
    {
      title: "👶 Baby’s Development — Tiny but Active",
      content: `
        Your baby is about the size of an **apple** 🍎 (~10 cm), weighing ~70 grams.  

        - **Head & Face:** Eyes continue moving into position, ears almost final; facial muscles allow small expressions.  
        - **Limbs & Movements:** Arms and legs growing longer; baby can move fingers, flex limbs, and even make small kicks.  
        - **Fingers & Toes:** Nails forming, tiny fingerprints beginning to develop.  
        - **Internal Organs:**  
          - Kidneys continue producing urine.  
          - Liver, pancreas, and digestive organs continue maturing.  
          - Brain connections increasing; reflexes like sucking may start.  
        - **Movements:** Baby may wiggle, stretch, and bend, though mom usually can’t feel it yet.  
        - **Genitalia:** External organs continue developing; sex may be visible via ultrasound.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Many moms feel **more comfortable and energetic** this week.  

        **Common experiences:**  
        - 😴 Energy increases; fatigue decreases.  
        - 🌸 Nausea usually gone.  
        - 👙 Breasts continue to grow; colostrum may begin forming.  
        - 💧 Frequent urination continues as uterus grows.  
        - 🌿 Mood stabilizes; many moms feel more confident.  
        - 🌸 Baby bump may become more visible.  
        - 🤯 Occasional mild headaches or dizziness possible.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Week 15 is a good time for ongoing prenatal care:  

        - 📋 Routine prenatal check-up: weight, blood pressure, review symptoms.  
        - 📷 Ultrasound: Baby anatomy and growth assessment.  
        - 🧬 Screening tests: If needed, genetic or blood tests may be scheduled.  
        - 🩺 Discuss any symptoms or discomfort with your provider.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Folic Acid:** Continue daily.  
            - **Iron & Vitamin C:** Support blood health.  
            - **Protein:** Lean meats, beans, eggs, tofu for growth and repair.  
            - **Calcium & Vitamin D:** Bone and teeth development.  
            - **Omega-3 (DHA):** Brain and eye development.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with fruits, vegetables, grains, and protein.  
            - Include fiber-rich foods to prevent constipation.  
            - Hydrate with water, herbal teas, and natural juices.  
            - Small, frequent meals help maintain energy and prevent bloating.
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw or undercooked seafood, eggs, or meat.  
            - Unpasteurized dairy.  
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
        - 🚶 Gentle exercise: walking, swimming, prenatal yoga.  
        - 🛌 Rest and prioritize sleep.  
        - 💬 Talk to your partner or support group.  
        - 📔 Keep a pregnancy journal or weekly photos.  
        - 🧘 Mindfulness, meditation, or breathing exercises to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Apple-Sized Adventure",
      content: `
        "At 15 weeks, I finally felt like my energy returned fully.  
        Ultrasound showed my baby stretching and moving tiny fingers.  
        It was amazing to see the little one developing so quickly."  
        — Meera, Chennai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 15",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and ultrasounds.",
        "✔️ Engage in gentle exercises suitable for pregnancy.",
        "✔️ Track symptoms and discuss any concerns with your doctor.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document your pregnancy journey with notes or photos.",
        "✔️ Rest, hydrate, and celebrate your progress."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 15 is full of growth and excitement.  
        Your baby’s tiny movements, developing features, and increasing coordination mark important milestones.  
        Enjoy this stage of pregnancy and continue nurturing your body and mind. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 15 — Coordinated Movements & Growing Baby"
      description="Pregnancy Week 15 marks continued growth and development. Baby is apple-sized, movements increase, and mom feels more energetic. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
