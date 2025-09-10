"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek18() {
  const sections = [
    {
      title: "🌸 Intro — Hardening Bones & Stronger Movements",
      content: `
        Welcome to **Week 18**! 🎉 Your baby’s development continues rapidly in the second trimester.  
        The skeleton is beginning to harden as cartilage turns into bone. Movements become stronger and more coordinated, and many moms start feeling regular kicks.  

        Mom may notice her belly growing more prominently and feel increased energy and overall well-being.
      `
    },
    {
      title: "👶 Baby’s Development — Skeleton & Active Movements",
      content: `
        Your baby is about the size of a **bell pepper** 🫑 (~14 cm), weighing ~190 grams.  

        - **Skeleton:** Bones begin to harden from soft cartilage, providing structure for growth.  
        - **Limbs & Movements:** Arms and legs stronger; baby stretches, kicks, and may grab the umbilical cord.  
        - **Facial Features:** Eyes, eyebrows, and hair follicles continue forming; baby may make small expressions.  
        - **Fingers & Toes:** Nails fully forming; fingerprints continue developing.  
        - **Internal Organs:**  
          - Kidneys fully functional; bladder empties regularly.  
          - Digestive system developing; intestines absorbing nutrients from swallowed amniotic fluid.  
          - Heart pumping efficiently, circulating blood throughout the body.  
        - **Movements:** Mom may feel consistent flutters and occasional stronger kicks.  
        - **Genitalia:** Clearly visible on ultrasound if parents wish to know the sex.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues adapting to a growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump increasingly visible.  
        - 💧 Mild backaches, round ligament pain, or leg cramps may appear.  
        - 👙 Breasts continue growing; colostrum may leak.  
        - 🌿 Energy levels high; early pregnancy discomforts largely gone.  
        - 💤 Sleep may be interrupted by bathroom trips or belly size.  
        - 🤰 Occasional swelling in feet or ankles, especially after standing long.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 18:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound: Anatomy scan often performed around 18–20 weeks.  
        - 🧬 Screening tests: Discuss results of previous tests or plan for mid-trimester screenings.  
        - 🩺 Report any unusual pain, bleeding, or reduced fetal movements.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Calcium & Vitamin D:** Crucial for bone development.  
            - **Iron & Vitamin C:** Support blood production.  
            - **Protein:** Lean meats, beans, eggs, and tofu for growth.  
            - **Omega-3 (DHA):** Supports brain and eye development.  
            - **Healthy Fats:** Avocado, nuts, seeds support fat layer and brain growth.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Consume **balanced meals** rich in vegetables, fruits, whole grains, and protein.  
            - Include fiber to prevent constipation.  
            - Hydrate well — 8–10 glasses of water daily.  
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
        - 📔 Track pregnancy milestones with a journal or photos.  
        - 🧘 Mindfulness, meditation, and deep-breathing exercises help reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Feeling Consistent Kicks",
      content: `
        "At 18 weeks, I could feel my baby moving consistently every day.  
        The kicks became more noticeable, and it felt like my little one was stretching and dancing inside me.  
        This week made the pregnancy feel so real and exciting!"  
        — Ananya, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 18",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals with calcium and protein.",
        "✔️ Attend prenatal appointments and anatomy scan.",
        "✔️ Engage in gentle exercises suitable for pregnancy.",
        "✔️ Monitor baby movements and report concerns if any.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document your pregnancy journey.",
        "✔️ Rest, hydrate, and enjoy feeling regular movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 18 is full of excitement as your baby grows stronger, movements become more distinct, and the skeleton begins hardening.  
        Cherish these moments, continue self-care, and celebrate your growing baby. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 18 — Skeleton Hardening & Stronger Movements"
      description="Pregnancy Week 18 marks skeletal development and stronger baby movements. Baby is bell pepper-sized, and mom may feel regular kicks. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
