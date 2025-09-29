"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth3() {

  const faqs = [
    {
      q: "What are the most important 3-month milestones I should look for?",
      a: "Key milestones include: social smiling in response to your face, improved head control (can hold head up during tummy time), cooing and gurgling sounds, following objects with eyes across the room, bringing hands to mouth, showing excitement when seeing familiar people, and beginning to bat at dangling toys. Most babies will show several of these by 3 months."
    },
    {
      q: "How much should my 3-month-old be sleeping?",
      a: "Most 3-month-olds sleep 14-16 hours per day, with longer stretches of 4-6 hours at night. Daytime naps typically total 4-5 hours spread across 3-4 naps. Sleep patterns are becoming more organized, but night wakings for feeding are still normal and expected."
    },
    {
      q: "How often should a 3-month-old eat?",
      a: "Breastfed babies typically feed 7-9 times daily (every 2-3 hours), while formula-fed babies take 4-6 ounces every 3-4 hours. Feeding becomes more efficient this month. Watch for hunger cues like rooting and hand-sucking rather than sticking strictly to a schedule."
    },
    {
      q: "Is it normal for my 3-month-old to drool excessively?",
      a: "Yes, excessive drooling is completely normal at 3 months. Babies' salivary glands become more active around this age, and they haven't yet learned to swallow the excess saliva. While it can be a precursor to teething, most babies don't actually get teeth for several more months."
    },
    {
      q: "How much tummy time should my 3-month-old have?",
      a: "Aim for at least 30-60 minutes of tummy time spread throughout the day, broken into 5-10 minute sessions. Your baby should be able to lift their head 45-90 degrees and may start pushing up on their forearms. Always supervise tummy time and do it when your baby is alert and content."
    },
    {
      q: "What vaccinations does my baby need at 3 months?",
      a: "The 3-month checkup typically includes DTwP/DTaP, Hib, IPV, Rotavirus oral drops, PCV, and possibly Hepatitis B if not given earlier. These are often combined in pentavalent vaccines to reduce injections. Your pediatrician will discuss each vaccine and address any concerns."
    },
    {
      q: "When should I be concerned about my baby's development?",
      a: "Consult your pediatrician if your baby: shows no social smiles by 3 months, cannot hold head up during tummy time, doesn't follow moving objects with eyes, shows no response to loud sounds, or has difficulty feeding. However, most babies develop at their own pace within normal ranges."
    },
    {
      q: "How can I help my baby with gas and digestion issues?",
      a: "Try bicycle legs motion, gentle tummy massage clockwise, frequent burping during feeds, upright positioning after feeding, and consider probiotic drops if recommended by your doctor. Most digestive issues improve as your baby's system matures around 3-4 months."
    },
    {
      q: "Is it normal for my baby to have irregular breathing patterns?",
      a: "Yes, periodic breathing where babies pause for 5-10 seconds between breaths is normal. However, contact your doctor immediately if you notice blue lips, consistent rapid breathing, grunting with each breath, or flaring nostrils as these could indicate respiratory issues."
    },
    {
      q: "When will my baby start sleeping through the night?",
      a: "Most babies aren't developmentally ready for uninterrupted night sleep until 4-6 months. At 3 months, 5-6 hour stretches are considered good night sleep. Focus on establishing consistent bedtime routines rather than expecting full nights of sleep at this age."
    },
    {
      q: "How can I tell if my baby is getting enough milk?",
      a: "Look for 6-8 wet diapers daily, steady weight gain, alertness during awake periods, and contentment after feeds. Breastfed babies should have regular bowel movements, while formula-fed babies may have fewer. Your pediatrician will monitor weight gain at the 3-month checkup."
    },
    {
      q: "What toys are best for a 3-month-old?",
      a: "Best toys include: high-contrast books and images, soft rattles, easy-to-grasp toys, activity gyms for tummy time, soft textured balls, and mirrors. Your face and voice remain the most engaging 'toy' for social development at this stage."
    },
    {
      q: "Is it too early to start a bedtime routine?",
      a: "No, 3 months is an excellent time to establish a consistent bedtime routine. A simple sequence like bath, massage, pajamas, feeding, and lullaby can help signal sleep time. Keep it calm and consistent to help your baby learn sleep cues."
    },
    {
      q: "Why does my baby keep staring at her hands?",
      a: "This 'hand regard' is a wonderful developmental milestone! Around 3 months, babies discover their hands and realize they can control them. This is an important step in body awareness, cause-and-effect learning, and motor coordination development."
    },
    {
      q: "Can I give my baby water or start solid foods?",
      a: "No, breast milk or formula provides all the hydration and nutrition your 3-month-old needs. Water isn't recommended until 6 months, and solid foods should wait until around 6 months when your baby can sit with support and show interest in food."
    }
  ];
  const sections = [
    {
      title: "In this article",
      content: "Key takeaways",
      list: [

        "3-month-old growth",
        "Milestones and development",
        "3-month-old health",
        "3-month-old feeding",
        "3-month-old sleep",
        "Schedule and routine",
        "Activities for baby",
        "Tips for parents",
        "Parenting wins, challenges and wisdom",
        "Frequently asked questions",
        "This month's checklist"
      ]
    },
    {
      title: "Key takeaways",
      content: "Month 3 marks a joyful turning point where your baby becomes more interactive with social smiles, coos, and better head control. You'll likely see longer sleep stretches and more predictable patterns, while your confidence as a parent grows alongside your baby's development."
    },
    {
      title: "3-month-old growth",
      list: [
        "Most babies have gained 1.8–2.7 kg since birth",
        "Steady weight gain of about 150-200 grams per week",
        "Head circumference increases by about 2 cm this month",
        "Clothing size transitions from 0-3 months to 3-6 months",
        "Chubbier cheeks and more filled-out limbs appear"
      ]
    },
    {
      title: "Milestones and development",
      list: [
        "Social smiling in response to faces and voices",
        "Improved head control during tummy time and when held upright",
        "Cooing, gurgling, and early laughter emerges",
        "Hands open more often and baby discovers them as toys",
        "Visual tracking improves - can follow objects across room",
        "Recognizes familiar faces and shows excitement"
      ]
    },
    {
      title: "Visual Inspiration: Milestones and development",
      content: "Milestones and development",
      image: "https://i.pinimg.com/736x/7e/d0/96/7ed096fe554e9213ffe08c53f51e4566.jpg"
    },
    {
      title: "3-month-old health",
      subsections: [
        {
          subtitle: "Medical Check-up & Vaccinations",
          list: [
            "Comprehensive physical examination including weight, length, and head circumference",
            "Hip check for dysplasia and assessment of soft spots",
            "Developmental milestone assessment",
            "Vaccinations: DTwP/DTaP, Hib, IPV, Hepatitis B (if not given at birth), Rotavirus oral drops, PCV"
          ]
        },
        {
          subtitle: "Common Health Considerations",
          list: [
            "Post-vaccination care for fever and discomfort",
            "Monitoring for normal developmental progress",
            "Skin care for common issues like baby acne or eczema",
            "Understanding normal vs concerning symptoms"
          ]
        }
      ]
    },
    {
      title: "3-month-old feeding",
      subsections: [
        {
          subtitle: "Breastfed Baby",
          list: [
            "Average 7–9 feeds per day",
            "Feeding sessions last 15–20 minutes each",
            "Cluster feeding may occur in evenings",
            "Watch for 6–8 wet diapers daily as hydration check"
          ]
        },
        {
          subtitle: "Formula-fed Baby",
          list: [
            "4–6 oz (120–180 ml) every 3–4 hours",
            "Some babies begin sleeping through one longer stretch at night",
            "Avoid overfeeding - watch for turning away from bottle",
            "Steady weight gain indicates adequate nutrition"
          ]
        }
      ]
    },
    {
      title: "3-month-old sleep",
      list: [
        "Night sleep stretches may lengthen to 5–6 hours",
        "Total sleep: 14-16 hours per day (including naps)",
        "Typically 3-4 naps during the day",
        "Bedtime routine becomes more important",
        "May start showing sleep preferences and patterns",
        "Night feeds still common but may reduce in frequency"
      ]
    },
    {
      title: "Schedule and routine",
      content: "A sample daily routine for your 3-month-old (remember, this is flexible - follow your baby's cues):",
      list: [
        "7:00 AM - 8:00 AM: Wake up, diaper change, and first feed",
        "8:00 AM - 9:00 AM: Playtime with tummy time and interaction",
        "9:00 AM - 10:30 AM: Morning nap",
        "10:30 AM: Wake up, diaper change, and feed",
        "11:00 AM - 12:00 PM: Active time and possible walk",
        "12:30 PM - 2:00 PM: Afternoon nap",
        "2:00 PM: Wake up, diaper change, and feed",
        "2:30 PM - 4:00 PM: Quiet play and reading",
        "4:00 PM - 5:00 PM: Catnap (shorter nap)",
        "5:00 PM: Feed and quiet time",
        "5:30 PM - 6:30 PM: Fussy period management",
        "6:30 PM: Begin bedtime routine",
        "7:00 PM: Final feed and down for the night"
      ]
    },
    {
      title: "Activities for baby",
      list: [
        "Supervised tummy time on play mat",
        "High-contrast book reading and picture viewing",
        "Gentle baby massage after bath time",
        "Singing and talking to encourage vocalization",
        "Introducing easy-to-grasp rattles and toys",
        "Babywearing during household activities",
        "Outdoor stroller walks for sensory stimulation"
      ]
    },
    {
      title: "Tips for parents",
      list: [
        "Trust your growing confidence - you know your baby best",
        "Take photos and videos to capture early smiles and coos",
        "Accept help from family and friends when offered",
        "Connect with other parents of 3-month-olds for support",
        "Be patient with sleep patterns - they're still developing",
        "Celebrate small victories and milestones",
        "Remember self-care - your well-being matters too"
      ]
    },
    {
      title: "Visual Inspiration: Tips for parents",
      content: "Tips for parents",
      image: "https://i.pinimg.com/736x/02/d1/b5/02d1b5f78c151e2f1cf1a77759f9408e.jpg"
    },
    {
      title: "Parenting wins, challenges and wisdom",
      subsections: [
        {
          subtitle: "Real Mom Stories",
          content: ""
        },
        {
          subtitle: "The Giggle That Fixed Everything",
          content: "\"After a particularly rough night, I was exhausted and in tears. I picked up my 3-month-old daughter, and she looked right at me and let out this tiny, airy giggle. It was the first time. All the frustration melted away. It was her way of telling me, 'You're doing great, Mom.'\" — Kavya, Bangalore"
        },
        {
          subtitle: "The Vaccination Cuddles",
          content: "\"The 3-month shots were heartbreaking. He cried so hard. But the whole day after, he just wanted to be held and cuddled. It was tiring, but it also felt so primal and comforting, like my presence was his only medicine. We got through it together.\" — Alisha, Pune"
        }
      ]
    },
    {
      title: "Understanding Baby Development & Milestones",
      content: "The third month brings remarkable developmental leaps that transform your baby from a sleepy newborn into an interactive little person. This period is characterized by emerging social skills and physical capabilities that will delight and amaze you.",
      list: [
        "Social smiling typically emerges between 2-3 months, but every baby develops at their own unique pace. Some infants may take until 4 months to show consistent social smiles. This variation is completely normal and doesn't indicate any developmental concerns.",
        "Tummy time should gradually increase to 30-60 minutes daily, distributed across multiple sessions. Begin with brief 3-5 minute periods when your baby is alert and content, slowly extending the duration as their neck and shoulder muscles strengthen.",
        "Head control shows significant improvement this month. Your baby should be able to lift their head 45-90 degrees during tummy time and maintain steady head position when held upright against your shoulder.",
        "Visual tracking becomes more sophisticated - your baby can now follow moving objects across a 180-degree arc and will show clear recognition of familiar faces, often responding with excited movements and sounds.",
        "Hand discovery is a major milestone. Your baby will spend increasing time staring at their hands, bringing them together, and eventually bringing them to their mouth as they develop body awareness and coordination."
      ]
    },
    {
      title: "Mastering Feeding & Sleep Patterns",
      content: "Month 3 brings more predictability to feeding and sleep routines, though flexibility remains essential as your baby's needs continue to evolve.",
      subsections: [
        {
          subtitle: "Feeding Fundamentals",
          list: [
            "Most 3-month-olds require 6-8 feeds in 24 hours, including nighttime sessions. Breastfed babies often feed more frequently due to faster digestion, while formula-fed babies may maintain longer intervals between feedings.",
            "Feeding efficiency improves dramatically - sessions typically last 15-20 minutes as your baby becomes more skilled at extracting milk.",
            "Cluster feeding may occur in the evenings as your baby prepares for longer sleep stretches. This is normal behavior that helps increase milk supply and satisfy growing nutritional needs.",
            "Watch for hunger cues like rooting, hand-sucking, and increased alertness rather than relying solely on the clock. Your baby's appetite will vary day by day."
          ]
        },
        {
          subtitle: "Sleep Development",
          list: [
            "Night sleep stretches typically lengthen to 4-6 hours, though many babies still require 1-3 nighttime feedings. This progression toward longer sleep periods is gradual and varies significantly between infants.",
            "Total daily sleep averages 14-16 hours, distributed across nighttime sleep and 3-4 daytime naps. The longest sleep period usually occurs at night, with daytime naps becoming more predictable.",
            "Sleep routines become increasingly important. Establishing consistent pre-sleep rituals like bathing, reading, or singing helps signal bedtime and promotes better sleep habits.",
            "The concept of 'sleeping through the night' (8+ hours) typically emerges between 4-6 months. At 3 months, focus on creating healthy sleep associations rather than expecting uninterrupted sleep."
          ]
        }
      ]
    },
    {
      title: "Essential Health & Care Guidelines",
      content: "Proper health management and care routines ensure your baby thrives during this rapid development phase.",
      subsections: [
        {
          subtitle: "Medical Monitoring",
          list: [
            "Fever in infants under 3 months requires immediate medical attention. A rectal temperature of 100.4°F (38°C) or higher warrants an urgent pediatric consultation, as young babies have immature immune systems.",
            "Vaccination care is crucial after the 3-month immunizations. While mild fever and fussiness are normal responses, proper monitoring ensures any concerning symptoms are addressed promptly.",
            "Regular developmental assessments with your pediatrician help track progress and identify any areas needing additional support or early intervention.",
            "Skin care remains important as baby acne and cradle cap may appear. Gentle cleansing and moisturizing with baby-safe products maintain healthy skin barrier function."
          ]
        },
        {
          subtitle: "Daily Care Practices",
          list: [
            "Bathing after vaccinations is generally safe and can be soothing. Use lukewarm water and avoid vigorous scrubbing near injection sites. The warm water may help relieve muscle soreness from immunizations.",
            "Umbilical cord care is usually complete by this age, but continue gentle cleaning until the area is fully healed and resembles normal skin.",
            "Nail care becomes more important as your baby gains control of hand movements. Regular trimming prevents accidental scratches and supports developing self-soothing behaviors.",
            "Diaper area care should focus on prevention of irritation. Frequent changes and use of barrier creams protect against diaper rash as your baby's skin remains sensitive."
          ]
        }
      ]
    },
    {
      title: "This month's checklist",
      list: [
        "Schedule 3-month pediatrician appointment and vaccinations",
        "Update baby's clothing to 3-6 month sizes",
        "Introduce new toys for developing skills (rattles, activity gym)",
        "Establish consistent bedtime routine",
        "Capture photos/videos of first social smiles and coos",
        "Register birth certificate if not already done",
        "Stock up on next size diapers",
        "Create baby memory book or digital album",
        "Plan gentle outings for sensory stimulation",
        "Practice self-care as a parent"
      ]
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 3 — Smiles, Shots, and Schedules"
      mainImage="/images/motherhood-3.jpg"
      description="Your complete guide to Month 3 of motherhood. Learn about 3-month vaccinations, a sample daily routine, birth certificate registration, and how to handle your baby's exciting new milestones."
      sections={sections}
      faqs={faqs}
      sidebarCategory="motherhood"
      sidebarTitle="Parenting Essentials"
    />
  );
}