"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek8() {
  const sections = [
    {
      title: "🌸 Intro — Entering the Fetal Stage Soon",
      content: `
        Congratulations! At **Week 8**, your baby is growing rapidly and starting to look more human-like.  
        This is the **last week of the embryonic stage** — from next week, your baby will officially be called a *fetus*.  

        For you, symptoms like nausea, fatigue, and mood swings may continue.  
        While this can feel exhausting, remember: every wave of change means your baby is thriving. 💖
      `
    },
    {
      title: "👶 Baby’s Development — Tiny Fingers & Toes",
      content: `
        Your baby is making incredible progress this week.  

        - **Size:** About 15–18 mm (the size of a raspberry 🍓).  
        - **Head:** Still large, but starting to straighten and lift from the chest.  
        - **Limbs:** Arm and leg buds now show **elbows, wrists, and tiny fingers and toes** beginning to separate.  
        - **Face:** Upper lip, nose, and eyelids are forming. Ears continue to develop inside and out.  
        - **Organs:** Heart has four chambers and beats strongly at **150–170 bpm**.  
        - **Brain:** Neural pathways are forming — baby’s brain is developing at lightning speed.  
        - **Movements:** Baby may make tiny spontaneous movements (though you can’t feel them yet).  
        - **Umbilical Cord:** Fully developed, supplying nutrients and removing waste.  

        Fun fact: By Week 8, your baby’s fingers already have **tiny ridges** that will one day form fingerprints!
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Week 8 can feel intense as hormone levels peak.  

        **Common symptoms this week:**  
        - 🤢 **Morning sickness** — often at its worst around now.  
        - 😴 **Extreme fatigue** — naps may become essential.  
        - 👙 **Breast changes** — fuller, tender, and veins more visible.  
        - 💧 **Frequent urination** — growing uterus presses on the bladder.  
        - 😭 **Mood swings** — rapid hormonal shifts may cause tears or irritability.  
        - 🥴 **Food cravings/aversions** — strong likes and dislikes for certain foods.  
        - 🌡️ **Mild cramping or bloating** — uterus expanding to make room.  

        👉 Severe pain or heavy bleeding isn’t normal — contact your doctor if this happens.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        - 🩺 Your **first prenatal visit** often happens around now.  
        - 📷 An **early ultrasound** may show the baby’s heartbeat and movements — a special milestone!  
        - 🧬 **Bloodwork & urine tests** may include checking blood type, Rh factor, hemoglobin, thyroid, and infections.  
        - 📑 Doctor may discuss your **diet, supplements, and lifestyle habits**.  
        - 💊 Ask about safe remedies for nausea and constipation.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Nutrient Priorities",
          content: `
            - **Folic acid**: prevents neural tube defects.  
            - **Iron**: supports increased blood volume.  
            - **Calcium & Vitamin D**: for bone development.  
            - **Protein**: eggs, beans, fish (cooked), and lentils.  
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw/undercooked meat, fish, or eggs.  
            - Unpasteurized dairy.  
            - Excess caffeine.  
            - Alcohol and tobacco (strictly avoid).  
          `
        },
        {
          subtitle: "Morning Sickness Hacks",
          content: `
            - Snack on crackers before getting out of bed.  
            - Ginger tea, peppermint, or vitamin B6 can help.  
            - Avoid greasy, spicy, or strong-smelling foods.  
            - Eat small meals every 2–3 hours.  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Emotional Wellness",
      content: `
        - 🛌 Prioritize rest — your body is working overtime.  
        - 🚶‍♀️ Light exercise (walking, prenatal yoga) supports circulation and reduces stress.  
        - 🧘 Try breathing exercises, meditation, or journaling for emotional balance.  
        - 💕 Share how you’re feeling with your partner or loved ones — support matters.  
        - 📖 Consider starting a **pregnancy diary** — this is a special memory you’ll cherish later.  
      `
    },
    {
      title: "💌 Real Mom Story — The First Heartbeat",
      content: `
        "At 8 weeks, I heard my baby’s heartbeat for the first time.  
        I cried instantly — it made everything feel real.  
        The nausea and exhaustion were overwhelming, but hearing that tiny heart racing made every struggle worth it."  
        — Anjali, Mumbai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 8",
      list: [
        "✔️ Continue prenatal vitamins (especially folic acid).",
        "✔️ Schedule/attend your first prenatal appointment.",
        "✔️ Eat small, frequent meals to ease nausea.",
        "✔️ Stay hydrated with water, soups, or coconut water.",
        "✔️ Avoid alcohol, smoking, and unsafe foods.",
        "✔️ Rest and nap whenever you need it.",
        "✔️ Begin thinking about safe exercise routines.",
        "✔️ Start documenting your pregnancy journey (photos, journal, or app)."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 8 marks a huge milestone — your baby is developing tiny fingers, toes, and facial features.  
        You may feel drained with nausea and fatigue, but remember: this is the last week your baby is considered an embryo.  

        From next week, you’ll officially enter the **fetal stage** of pregnancy — a new chapter of growth and excitement.  
        Hang in there, mama, you’re doing beautifully! 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 8 — Baby’s Fingers, Toes & First Heartbeat"
      mainImage="/images/Pregnancy week 8.jpg"
      description="Pregnancy Week 8 is the last week of the embryonic stage. Your baby develops tiny fingers, toes, and facial features, while moms may feel stronger symptoms. Learn what to expect."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}
