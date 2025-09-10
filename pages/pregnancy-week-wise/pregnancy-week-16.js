"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek16() {
  const sections = [
    {
      title: "🌸 Intro — Tiny Flutters & Growth Spurts",
      content: `
        Welcome to **Week 16**! 🎉 You’re in the second trimester, and your baby is growing rapidly.  
        This week marks a period where movements become more coordinated, and some moms may start feeling **quick flutters**, known as “quickening.”  

        Mom’s energy continues to increase, and many early pregnancy symptoms have eased.
      `
    },
    {
      title: "👶 Baby’s Development — Expressive & Active",
      content: `
        Your baby is about the size of an **avocado** 🥑 (~11–12 cm), weighing ~100 grams.  

        - **Head & Face:** Eyes move under eyelids; eyebrows and hair follicles form.  
        - **Facial Muscles:** Can make small expressions like frowning or squinting.  
        - **Limbs & Movements:** Arms and legs more proportionate; baby can bend elbows, wrists, knees, and ankles.  
        - **Fingers & Toes:** Fingernails growing; tiny fingerprints more defined.  
        - **Internal Organs:** Kidneys producing urine; digestive system developing; liver and pancreas maturing.  
        - **Movements:** Baby may wiggle, stretch, and kick — mom may start feeling light flutters.  
        - **Genitalia:** More distinct; ultrasound may reveal sex if desired.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues to adjust to the growing baby.  

        **Common experiences:**  
        - 🌸 Energy is high; fatigue usually minimal.  
        - 💧 Mild backaches or round ligament pain may appear.  
        - 👙 Breasts continue growing; may leak colostrum in some cases.  
        - 🌿 Mood is generally positive; stress may be lower than first trimester.  
        - 🌸 Baby bump becomes more visible.  
        - 🤰 Some mild swelling in feet or ankles possible.  
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins this week:  

        - 📋 Routine prenatal visit: weight, blood pressure, symptoms.  
        - 📷 Ultrasound: Assess anatomy, growth, and possible gender determination.  
        - 🧬 Screening tests: Mid-second-trimester blood tests may be scheduled.  
        - 🩺 Discuss any pain, bleeding, or unusual symptoms with your provider.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Folic Acid:** Continue daily.  
            - **Iron & Vitamin C:** Support blood and immune health.  
            - **Protein:** Lean meats, beans, eggs, tofu for growth and repair.  
            - **Calcium & Vitamin D:** Bone and teeth development.  
            - **Omega-3 (DHA):** Brain and eye development.  
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with fruits, vegetables, whole grains, and protein.  
            - Include fiber-rich foods to prevent constipation.  
            - Hydrate well: water, herbal teas, and fresh fruit juices.  
            - Small, frequent meals help maintain energy and comfort.  
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
        - 🛌 Prioritize sleep and rest when needed.  
        - 💬 Communicate with partner or support groups.  
        - 📔 Track pregnancy milestones with photos or journal entries.  
        - 🧘 Mindfulness, meditation, and deep-breathing exercises help maintain calm.  
      `
    },
    {
      title: "💌 Real Mom Story — Feeling the Flutters",
      content: `
        "At 16 weeks, I felt my first tiny flutters — like little bubbles in my belly!  
        It was magical to know my baby was moving and growing inside me.  
        I felt more energetic and really started enjoying this trimester."  
        — Kavya, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 16",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and ultrasounds.",
        "✔️ Engage in gentle exercise suitable for pregnancy.",
        "✔️ Track baby movements and report concerns if any.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document your pregnancy journey with notes or photos.",
        "✔️ Rest, hydrate, and celebrate feeling the first flutters!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 16 is a magical milestone.  
        Your baby is growing, movements are becoming more coordinated, and you may feel your first flutters.  
        Enjoy this stage, continue nurturing your body, and celebrate every tiny miracle. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 16 — Tiny Flutters & Growing Baby"
      description="Pregnancy Week 16 marks coordinated movements and growth. Baby is avocado-sized, mom may feel flutters, and energy returns. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
