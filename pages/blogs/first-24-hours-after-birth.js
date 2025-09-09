"use client";

import BlogLayout from "../components/BlogLayout";

export default function First24HoursAfterBirth() {
  const sections = [
    {
      title: "Physical Recovery",
      list: [
        "Vaginal bleeding (lochia) for several days",
        "Uterine contractions as the uterus shrinks",
        "Fatigue, soreness, or muscle aches",
        "Breast engorgement or milk coming in for breastfeeding mothers"
      ]
    },
    {
      title: "Medical Monitoring",
      list: [
        "Vital signs (blood pressure, pulse, temperature)",
        "Uterine and bleeding assessment",
        "Newborn vitals and Apgar score",
        "Screenings and routine newborn tests"
      ]
    },
    {
      title: "Bonding and Skin-to-Skin",
      content: "Early bonding is critical. Skin-to-skin contact helps regulate the baby’s temperature, breathing, and heart rate. It also encourages breastfeeding and emotional connection."
    },
    {
      title: "Feeding Your Baby",
      list: [
        "Feed on demand, usually every 2-3 hours",
        "Watch for hunger cues such as rooting or sucking motions",
        "Ensure proper latch if breastfeeding",
        "Keep the baby upright after feeding to prevent spit-ups"
      ]
    },
    {
      title: "Emotional Changes",
      content: "Hormonal shifts and exhaustion can cause mood swings, tears, or anxiety. This is normal, but seek help if you feel overwhelmed or notice signs of postpartum depression."
    },
    {
      title: "Sleep and Rest",
      content: "Sleep is crucial for recovery. Take naps when possible and accept help from family or hospital staff to rest while your baby is cared for."
    },
    {
      title: "Conclusion",
      content: "The first 24 hours after birth are a time of adjustment, healing, and bonding. Understanding what to expect helps reduce anxiety and allows new parents to focus on recovery and nurturing their newborn."
    }
  ];

  return (
    <BlogLayout
      title="What to Expect the First 24 Hours After Giving Birth"
      description="Learn what to expect during the first 24 hours after giving birth. Tips for recovery, newborn care, and bonding with your baby."
      sections={sections}
      sidebarCategory="newborn-care"
      sidebarTitle="Essential Products"
    />
  );
}
