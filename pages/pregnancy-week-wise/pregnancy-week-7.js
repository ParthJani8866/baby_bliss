"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek7() {
  const sections = [
    {
      title: "🌸 Intro — The Rapid Growth Phase",
      content: `
        By **Week 7**, your pregnancy is in full swing. Your baby is growing at an incredible rate — almost doubling in size from last week.  
        Organs are developing quickly, little arms and legs are sprouting, and facial features are beginning to form.  

        For you, this week can be physically challenging. **Morning sickness, fatigue, and mood swings** may be peaking.  
        But remember — every wave of nausea is a reminder of the powerful changes happening inside. 💖
      `
    },
    {
      title: "👶 Baby’s Development — From Embryo to Little Human",
      content: `
        Your baby is still tiny, but already looks more human-like.  

        - **Size:** About 10–13 mm (the size of a blueberry 🫐).  
        - **Head & Face:** The brain is growing rapidly. Dark spots mark where eyes, nostrils, and the mouth will form. Ear structures are starting to develop.  
        - **Limbs:** Small paddles are turning into **arm and leg buds** with visible hand plates (tiny fingers will follow soon!).  
        - **Heart:** Beats at **150–170 bpm**, nearly twice as fast as yours.  
        - **Internal Organs:** Kidneys, liver, and pancreas are beginning to develop.  
        - **Umbilical Cord:** Now fully functional, carrying nutrients and oxygen from you to your baby.  

        Fun fact: Your baby is producing its own cells for blood and tiny bones are starting to form!
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Hormones are at their highest so far, which means stronger symptoms.  

        **Common Week 7 symptoms:**  
        - 🤢 **Morning sickness** — may be worse in the mornings or triggered by smells.  
        - 😴 **Extreme fatigue** — your body is working overtime.  
        - 👙 **Breast changes** — soreness, swelling, and darkening are common.  
        - 💧 **Frequent urination** — expanding uterus puts pressure on the bladder.  
        - 🤯 **Food cravings/aversions** — some women can’t tolerate foods they once loved.  
        - 😭 **Mood swings** — emotional highs and lows are common due to hormonal surges.  
        - 🌡️ **Bloating & mild cramping** — as the uterus continues to expand.  

        👉 Severe cramps or heavy bleeding are not normal — contact your doctor if you experience these.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        - 📅 If you haven’t yet, schedule your **first prenatal appointment**.  
        - 🩺 Some doctors may perform an **early ultrasound** to confirm heartbeat, check growth, and rule out complications.  
        - 🧬 **Bloodwork** may continue: hCG levels, progesterone, and general health screening.  
        - 🧾 Discuss **medical history** with your doctor (family conditions, medications, allergies).  
        - 💊 Ask about safe remedies for nausea, constipation, or headaches.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Eating for Two (Wisely)",
          content: `
            - No need to “eat double” — focus on nutrient density.  
            - **Protein**: eggs, lentils, beans, chicken.  
            - **Folate-rich foods**: spinach, oranges, broccoli.  
            - **Omega-3s**: walnuts, chia seeds, salmon (cooked).  
            - **Fiber**: fruits, oats, and whole grains to fight constipation.  
          `
        },
        {
          subtitle: "Nausea Relief",
          content: `
            - Eat small meals every 2–3 hours.  
            - Keep **plain crackers** or nuts by your bed to snack before getting up.  
            - Ginger tea, lemon water, or vitamin B6 may help.  
            - Avoid greasy, spicy, or strong-smelling foods.  
          `
        },
        {
          subtitle: "Hydration",
          content: `
            - Aim for **8–10 glasses** of water daily.  
            - Add lemon, cucumber, or mint if plain water is hard to drink.  
            - Coconut water is a natural electrolyte boost.  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Emotional Wellness",
      content: `
        - 🛌 Rest as much as possible — short naps help recharge.  
        - 🚶 Gentle exercise (walking, yoga) boosts energy and reduces stress.  
        - 🧘 Try meditation, guided breathing, or journaling to calm mood swings.  
        - 🧴 Begin a **pregnancy-safe skincare routine** for acne or dryness caused by hormones.  
        - 🤝 Share your experiences with your partner — building emotional support is key.  
      `
    },
    {
      title: "💌 Real Mom Story — Blueberry Week",
      content: `
        "At 7 weeks, I learned my baby was the size of a blueberry. That made it so real!  
        The nausea was overwhelming, and I could barely stand the smell of onions, but knowing my baby’s heart was beating inside me gave me strength.  
        I even started journaling letters to my 'blueberry,' and it became my favorite ritual each night."  
        — Kavya, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 7",
      list: [
        "✔️ Continue daily prenatal vitamins (especially folic acid).",
        "✔️ Eat small, frequent meals to ease nausea.",
        "✔️ Stay hydrated with water, herbal teas, or coconut water.",
        "✔️ Schedule your first prenatal checkup if you haven’t already.",
        "✔️ Track your symptoms in a pregnancy journal/app.",
        "✔️ Avoid alcohol, smoking, and unsafe foods.",
        "✔️ Rest whenever possible — your body is working hard!",
        "✔️ Begin thinking about maternity clothing if regular clothes feel tight."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 7 is all about **rapid baby growth and intense body changes**.  
        While symptoms like nausea and fatigue can be draining, they are signs that your pregnancy is progressing normally.  

        Your baby is developing tiny arms, legs, and facial features — a true transformation in just a few weeks.  
        Stay focused on self-care, nutrition, and emotional well-being. You’re doing amazing, mama! 💖
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 7 — Baby’s Rapid Growth & Mom’s Changing Body"
      description="Pregnancy Week 7 brings rapid baby development — arms, legs, and facial features are forming, while moms may experience stronger symptoms. Learn growth, nutrition, and wellness tips."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
