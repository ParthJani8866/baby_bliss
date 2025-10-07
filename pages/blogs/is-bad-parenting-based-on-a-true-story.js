"use client";

import { useState } from "react";
import BlogLayout from "../components/BlogLayout";

export default function BadParentingStoryFull() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  const sections = [
    {
      title: 'Is "Bad Parenting" Based on a True Story? — Short Answer & What This Article Does',
      content: `Short answer: sometimes — but most often what you see in books, films, games, and articles is a mixture of factual inspiration and creative shaping. People ask “is bad parenting based on a true story?” for two reasons: they want to know if a specific narrative retells one real life case, and they want to know whether the broader portrayals of harmful parenting reflect true lived experience.

This article does three things:
1) explains what people usually mean by “bad parenting” and the many real-life causes behind harmful caregiving behaviors;
2) shows how creators (writers, filmmakers, game developers, journalists) use real material and why their depictions feel true even when they are fictionalized; and
3) gives practical, compassionate guidance — do’s and don’ts, a 6-week recovery/repair plan for parents, tools for friends and professionals, and an expanded FAQ.

If reading this raises personal concerns, please remember: recognizing a problem is the first step to changing it. Help exists, repair is possible, and small consistent actions protect children more effectively than shame ever will.`
    },

    {
      title: "What people often mean by 'bad parenting' — clarifying the term",
      content: `The phrase “bad parenting” is often used as shorthand, but it’s too broad to be useful on its own. Pinpointing behaviors and patterns helps us respond constructively. Below are common categories that people mean when they say "bad parenting":`,
      list: [
        "Neglect — persistent failure to meet basic needs (food, medical care, safe supervision). This can be intentional or result from lack of resources.",
        "Abuse — physical, sexual, or severe emotional harm that directly injures or endangers a child.",
        "Inconsistent caregiving — unpredictable caregiving that swings between warmth and cold, creating chronic insecurity.",
        "Harsh or shaming discipline — punishment that uses fear, humiliation, or physical pain rather than teaching and boundaries.",
        "Emotional unavailability — being physically present but emotionally disconnected or dismissive of a child's feelings.",
        "Overcontrol/enmeshment — using a child to satisfy a parent’s emotional needs or denying a child autonomy and healthy boundaries.",
        "Well-intentioned harmful behaviors — practices born from ignorance or cultural norms that nevertheless harm, such as pressuring a child beyond developmental capability."
      ]
    },

    {
      title: "How fiction and journalism borrow from real life — why stories feel 'true'",
      content: `Creators want audiences to care. Real details create emotional truth: the cadence of a parent's reprimand, a child's particular coping habit, a home’s sensory texture. To craft that truth, writers and journalists collect source material: interviews with parents and children, anonymized clinical notes, investigative reporting, and personal experience. But they also change things for story clarity and privacy.`,
      list: [
        "Composite characters — traits from multiple people are fused into one person to protect identities and sharpen a narrative arc.",
        "Compressed timelines — years of interaction may be shown in one scene so viewers can see cause and effect.",
        "Selective emphasis — certain details are highlighted (a scream, a missed appointment) to symbolize larger patterns.",
        "Emotional truth prioritized over literal chronology — the feelings are preserved even if exact events are rearranged."
      ]
    },

    {
      title: "Examples: when 'based on a true story' is literal vs. thematic",
      content: `Some works are literal retellings; others are thematic explorations. Both have value but different uses.`,
      list: [
        "Literal retelling: investigative journalism exposing a single case with court records, interviews, and dates. Use these for factual detail and legal context.",
        "Thematic fiction: a novel or film drawing on many interviews to depict a believable family. Use these to understand emotional patterns and social dynamics — but not as literal evidence of a single case.",
        "Composite reportage: long-form features often blend multiple cases to show systemic patterns (e.g., child welfare failures). These are useful for identifying policy needs."
      ]
    },

    {
      title: "Real causes behind harmful parenting (not excuses — explanations)",
      content: `When caregivers harm children, it's crucial to ask why. Understanding causes points toward solutions rather than only punishment. The list below describes common root causes observed in social work and clinical practice.`,
      list: [
        "Unresolved intergenerational trauma — patterns learned from one's own childhood often repeat unless actively addressed.",
        "Untreated mental illness — depression, PTSD, bipolar disorder, severe anxiety can reduce emotional availability and increase reactivity.",
        "Substance use disorders — addiction shifts priorities, impairs judgment, and increases neglect risk.",
        "Chronic poverty and scarcity — food insecurity, overcrowding, and unstable housing create situations where basic caregiving is difficult.",
        "Lack of social support — single or isolated parents without community help face chronic stress.",
        "Cultural or community norms — some practices accepted in a culture may nonetheless harm children (e.g., extremely harsh discipline).",
        "Knowledge gaps — loving but uninformed parents may use harmful methods out of ignorance."
      ]
    },

    {
      title: "How professionals detect real harm — markers to watch",
      content: `Teachers, pediatricians, and social workers look for patterns more than single episodes. These warning signs frequently indicate the need for assessment or intervention.`,
      list: [
        "Repeated missed medical or dental appointments and untreated chronic conditions.",
        "Multiple unexplained injuries or an implausible explanation for harm.",
        "Chronic school absenteeism, persistent hunger, or poor hygiene.",
        "A child showing developmental regression (bedwetting, loss of language, new clinginess).",
        "A parent who minimizes concerns or refuses to seek help for the child or themselves.",
        "Frequent changes in caregivers or unstable housing that disrupt routines."
      ]
    },

    {
      title: "Short- and long-term impacts on children",
      content: `The effects of harmful parenting vary widely depending on severity, duration, timing, and protective buffers. Understanding impacts helps prioritize intervention.`,
      list: [
        "Short-term effects: poor sleep, behavior outbursts, anxiety, withdrawal, irritability, and physical illness due to neglect.",
        "Attachment impacts: anxious or avoidant attachment styles that make it harder to form trusting relationships.",
        "Cognitive/learning impacts: difficulty concentrating and school readiness delays tied to chronic stress.",
        "Emotional health: increased risk of depression, anxiety disorders, and PTSD in adolescence and adulthood.",
        "Behavioral risks: higher rates of substance use, running away, or involvement with juvenile justice in severe cases.",
        "Life-course effects: disrupted education, unemployment, and health problems tied to toxic stress exposure."
      ]
    },

    {
      title: "Stories that moved public opinion or policy",
      content: `True or inspired-by-true stories can be catalysts for change when paired with journalism or advocacy. Examples include investigative reporting that exposed systemic CPS failures and books/memoirs that illuminated survivor experiences, prompting policy debates and funding priorities.`,
      list: [
        "Investigative exposés revealing how bureaucratic failures left children at risk.",
        "Survivor memoirs that gave victims a voice and reduced stigma around seeking help.",
        "Documentaries linking institutional neglect to policy gaps, leading to legislative scrutiny or reform."
      ]
    },

    {
      title: "Fiction inspired by real trauma: Mr. Red Face & The Town of Light",
      content: `Art sometimes amplifies pain to make people notice what otherwise would be ignored. *Mr. Red Face* is a fictional narrative that dramatizes the horrors of child abuse — not as a literal retelling of a single documented case, but as a concentrated portrayal of emotional truth survivors often report: fear, fragmented memory, shame, and the long, slow work of healing.

*The Town of Light* is a psychological-horror video game set in the real Volterra Psychiatric Hospital in Italy. The game uses historical records and survivor testimony to shape its atmosphere and events. While the protagonist and many scenes are fictionalized for storytelling and gameplay reasons, the setting and institutional practices depicted are rooted in documented historical practices. Both works use narrative and mood to force an audience to confront institutional and interpersonal harm. They underline an important point: fiction can be a powerful vehicle for empathy and awareness when paired with responsible research and context.`
    },

    {
      title: "When fiction oversimplifies — the risks",
      content: `Dramatic condensation has drawbacks. Oversimplified portrayals can:
- Stigmatize entire groups of parents (e.g., single parents),
- Reduce complex social problems to individual blame,
- Re-traumatize survivors with sensationalized retellings,
- Encourage punitive responses instead of supportive interventions.

Critical consumers should ask: does the work point to systemic contributors? Does it provide context or resources? Does it acknowledge complexity? If not, the piece may inform emotion but mislead policy.`
    },

    {
      title: "Do’s and Don’ts — immediate behaviors that help",
      content: `When you are worried about a child or your own parenting, small, focused actions matter. Below are practical do’s and don’ts you can use right away.`,
      list: [
        "DO prioritize safety — if a child is in immediate danger, call emergency services.",
        "DO seek help early — pediatricians, family doctors, and community services can connect you to resources.",
        "DO ask for specific help from friends: 'Can you watch the baby for two hours on Sunday so I can sleep?'",
        "DO start small — replace one reactive habit with one calming strategy, rather than trying to change everything at once.",
        "DO apologize and repair when you overreact — sincere apologies plus consistent different behavior rebuild trust.",
        "DON’T shame or humiliate a child as discipline — it teaches hiding and shame rather than learning.",
        "DON’T assume poverty equals abuse — offer help and resources, and involve professionals when safety is at risk.",
        "DON’T post public accusations on social media — public shaming can escalate danger and block access to services.",
        "DON’T ignore your own mental health — untreated depression or addiction increases risk of harm."
      ]
    },

    {
      title: "A practical 6-week recovery plan for parents who want to change",
      content: `Change is a process. This 6-week plan is structured, small-step, and practical. Adapt it to your situation and repeat as needed.`,
      list: [
        "Week 1 — Safety and awareness: identify the moments you react poorly, write them down, and create a simple safety plan (a safe pause: place the child somewhere safe and take 5 minutes).",
        "Week 2 — Routine & small rest: build a minimal daily routine (meals, nap, play, calm time) and secure one 60–90 minute rest block with help.",
        "Week 3 — Emotional tools: practice one calming technique (deep breathing, counting, a short walk). Model it for your child visibly.",
        "Week 4 — Communication practice: use reflective listening ('I hear you are upset because…') and practice short apologies for mistakes.",
        "Week 5 — Limits & consistency: choose one limit (screen time, bedtime) and apply a brief consistent consequence for a week.",
        "Week 6 — Support & maintenance: connect with a local parenting group, schedule a therapy session, and plan monthly check-ins with a friend."
      ]
    },

    {
      title: "Daily tools and habits that actually work",
      content: `Small, consistent habits beat rare grand gestures. Use these day-to-day tools:`,
      list: [
        "Micro-breaks: set a timer for a 5–10 minute break when you feel overwhelmed (child safe in crib/playpen).",
        "Concrete requests for help: ask someone to bring a meal, watch the child for one hour, or pick up essentials.",
        "Emotion naming: label feelings out loud for yourself and your child ('I’m frustrated right now') to model regulation.",
        "One consistent calming response: pick a simple behavior when you feel triggered (count to 10, step outside for 2 minutes).",
        "Simple consequences: short, predictable, and non-shaming (e.g., 5 minutes calm-down time).",
        "Sleep and nutrition: keep a water bottle and snacks in your feeding area and protect short naps when possible."
      ]
    },

    {
      title: "When to involve professionals — red flags that require immediate action",
      content: `Sometimes a situation requires mandatory or urgent professional involvement. These are clear red flags:`,
      list: [
        "Unexplained physical injuries, multiple injuries, or injuries not consistent with told explanations.",
        "Disclosure by a child of sexual contact or sexualized behavior inconsistent with age.",
        "Severe neglect resulting in poor growth, inability to meet medical needs, or unsanitary conditions that threaten health.",
        "A caregiver who is frequently intoxicated, unconscious, or otherwise unable to safely supervise.",
        "A parent expresses intent to harm the child or themselves."
      ]
    },

    {
      title: "How friends, family members, and neighbors can help safely",
      content: `If you want to help a struggling family, the way you offer support matters. Here are safe, effective options:`,
      list: [
        "Offer specific, practical help: a meal, a ride to a clinic, or babysitting for two hours.",
        "Listen non-judgmentally: often parents need to tell their story without immediate moralizing.",
        "Document concerns factually (dates, times, what you observed) if you may need to report later.",
        "Consult a local confidential hotline for advice — many offer guidance without triggering immediate removal.",
        "Avoid public shaming or social media posts — these can escalate risk and push families away from help.",
        "If a child is in immediate danger, call emergency services — do not assume someone else will act."
      ]
    },

    {
      title: "How to read and use 'based on a true story' responsibly",
      content: `When a book, film, or game claims to be "based on a true story," use it as an opportunity to learn rather than to generalize or stigmatize. Good follow-up steps include:`,
      list: [
        "Read the author's note or acknowledgments to understand the degree of factual basis.",
        "Search for investigative or journalistic reporting for factual context if the case was public.",
        "Reflect on systemic drivers — does the story point to policy or resource gaps that need changes?",
        "If the story is triggering, seek factual resources (support groups, hotlines) rather than trying to diagnose a situation from fiction."
      ]
    },

    {
      title: "Expanded FAQ — common reader questions answered",
      content: `This FAQ collects the most frequent and urgent questions people ask after reading about harmful parenting. Answers are practical and action-oriented.`,
      list: [
        "Q: Is one bad incident enough to label someone a bad parent?\nA: No. A single incident is rarely sufficient to label someone harmful. However, certain incidents (serious physical injury or sexual harm) require immediate intervention. Patterns over time are the real concern.",
        "Q: Can parents who hurt their children repair relationships?\nA: Yes. Repair requires acknowledgment of harm, consistent changes in behavior, and often professional support. Apologies must be accompanied by different behavior to rebuild trust.",
        "Q: What if a parent is neglectful because of poverty?\nA: Poverty is not in itself abuse. Offer help and refer families to community resources. If a child’s immediate safety is at risk due to neglect caused by scarcity, involve professionals who can assess and connect the family to services.",
        "Q: Where can I get immediate help if I'm at my limit?\nA: If you fear you may harm your child or yourself, call emergency services. For exhaustion and stress, contact crisis lines, your pediatrician, or local community mental health centers.",
        "Q: Are there parenting programs that work?\nA: Yes. Programs like Parent-Child Interaction Therapy (PCIT), Triple P (Positive Parenting Program), Circle of Security, and home-visiting nurse programs have evidence of effectiveness. Check local availability.",
        "Q: Should I confront a parent I suspect of abuse?\nA: If the child is in immediate danger, call authorities. If not, offering supportive, nonjudgmental practical help is often more effective than confrontation. Consult a hotline if unsure."
      ]
    },

    {
      title: "Resources & next steps — practical places to start",
      content: `If this article raised concerns for you — about a child you know or your own parenting — here are practical next steps and the kinds of resources that help most:`,
      list: [
        "Contact a pediatrician for medical or behavioral concerns — they can triage and refer.",
        "Call community health centers for low-cost mental health services and parenting supports.",
        "Search for local parent helplines (often run by nonprofits or health departments) that give confidential advice and referrals.",
        "Look for evidence-based parenting classes or home-visiting programs in your area.",
        "If you are in immediate danger, call emergency services; if you suspect abuse, contact child protective services or a mandated reporter (teacher, doctor).",
        "If you want country-specific hotlines and links, tell me your country and I’ll provide a curated list."
      ]
    },

    {
      title: "Closing: compassion plus action",
      content: `“Bad parenting” is a label that tells us a child may be harmed — but it does not describe causes or remedies. Stories based on real events can teach and motivate, but they are most useful when paired with nuanced understanding and practical supports. If something in this piece resonated with you as a parent or a friend, the best next step is a concrete small action: phone your pediatrician, ask a friend for one hour of respite, or call a local support line. Repair is possible, and community support prevents harm far better than shame.`
    }
  ];

  const faqs = [
    {
      q: "Is every story about bad parenting a factual account?",
      a: "No. Many narratives are 'inspired by' rather than literal retellings. Filmmakers and authors often combine real accounts into composite characters to protect identities and sharpen the narrative. If you need factual information, look for investigative reporting, court records, or the author's notes."
    },
    {
      q: "How do I tell the difference between a 'bad day' and a harmful pattern?",
      a: "Everyone has bad days. Harmful parenting is recurring behavior that jeopardizes a child's safety, health, or development. If risky behavior is repeated and unaddressed, it becomes a pattern requiring intervention."
    },
    {
      q: "Can a parent who has caused harm repair the relationship?",
      a: "Yes. Repair involves acknowledging harm, taking responsibility, consistently changing behavior, and usually getting support such as therapy or parenting programs. Rebuilding trust takes time and repeated reliable action."
    },
    {
      q: "When should I call child protective services?",
      a: "If a child is in immediate danger — physical injury, severe neglect, or sexual harm — call emergency services. For non-urgent but serious concerns (chronic neglect, untreated medical needs), contact child protective services or consult your pediatrician for advice."
    },
    {
      q: "Does poverty equal abuse?",
      a: "No. Poverty increases the risk of neglect because basic needs can be harder to meet, but poverty itself is not abuse. Community supports (food, housing, cash assistance) reduce neglect risk dramatically. If a child’s safety is compromised because of scarcity, contact local services for help."
    },
    {
      q: "What are some evidence-based parenting programs I can look for?",
      a: "Parent-Child Interaction Therapy (PCIT), Triple P (Positive Parenting Program), Circle of Security, and home-visiting nurse programs are well-studied. Many programs have online or sliding-scale options."
    },
    {
      q: "How can I help a friend who might be harming their child unintentionally?",
      a: "Offer specific help (meals, babysitting), listen without judgment, provide resource referrals, and if urgent danger is present, contact professionals or a confidential hotline for guidance."
    },
    {
      q: "My child was raised in a harmful environment. Can they heal?",
      a: "Yes. With supportive relationships, therapy (including trauma-informed therapy), and stable environments, many children recover and go on to lead healthy lives. Early intervention improves outcomes."
    }
  ];

  return (
    <BlogLayout
      title='Is Bad Parenting Based on a True Story? — Full Guide, Do’s & Don’ts, Tips & FAQs'
      description='A compassionate, evidence-informed long-form guide exploring whether portrayals of bad parenting reflect reality. Includes practical do’s & don’ts, a 6-week recovery plan, daily tools, and expanded FAQs.'
      mainImage="/images/blog-is-bad-parenting-based-on-a-true-story.jpg"
      sections={sections}
      faqs={faqs}
    >
      {/* FAQ Accordion — this content duplicates the faqs prop so your layout has an inline accordion similar to your other pages */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          ❓ Frequently Asked Questions — Bad Parenting: Truth, Help & Tips
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg">
              <button
                className="w-full text-left px-4 py-3 font-medium text-gray-700 hover:bg-orange-50 flex justify-between items-center"
                onClick={() => toggleFAQ(idx)}
              >
                {faq.q}
                <span>{openFAQ === idx ? "−" : "+"}</span>
              </button>
              {openFAQ === idx && (
                <div className="px-4 pb-4 text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </BlogLayout>
  );
}
