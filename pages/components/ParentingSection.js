import Link from 'next/link';
import { FaLeaf, FaUserFriends } from 'react-icons/fa';

// Move data to separate file
const motherhoodPosts = [
    { month: 1, title: "Month 1 — Surviving the First 30 Days", slug: "parenting-month-1", description: "Practical tips, feeding schedules, growth milestones, real mom stories, and checklists for the first month of parenting." },
    { month: 2, title: "Month 2 — Smiles & Early Connections", slug: "parenting-month-2", description: "Month 2 focuses on first smiles, bonding, and early growth milestones." },
    { month: 3, title: "Month 3 — Social Smiles & Tummy Time", slug: "parenting-month-3", description: "Month 3 emphasizes social interaction, improved motor skills, and strengthening neck muscles." },
    { month: 4, title: "Month 4 — Strengthening Muscles & Interaction", slug: "parenting-month-4", description: "Focus on rolling, better head control, and early communication cues." },
    { month: 5, title: "Month 5 — Rolling, Sitting & Exploring", slug: "parenting-month-5", description: "Babies start exploring more, rolling independently, and sitting with support." },
    { month: 6, title: "Month 6 — First Solids & Responsive Play", slug: "parenting-month-6", description: "Introduction of solids, improved grasping, and interactive play." },
    { month: 7, title: "Month 7 — Sitting Confidently & Babbling", slug: "parenting-month-7", description: "Babies sit steadily, babble more, and respond socially." },
    { month: 8, title: "Month 8 — Crawling, Grasping & Social Play", slug: "parenting-month-8", description: "Crawling begins, fine motor skills improve, and social interactions deepen." },
    { month: 9, title: "Month 9 — Standing, Stronger Communication & Play", slug: "parenting-month-9", description: "Babies pull to stand, understand more words, and enjoy active play." },
    { month: 10, title: "Month 10 — First Words, Peek-a-Boo & Mobility", slug: "parenting-month-10", description: "Early words emerge, mobility increases, and interactive games like peek-a-boo are fun." },
    { month: 11, title: "Month 11 — Early Walking & Playful Independence", slug: "parenting-month-11", description: "Babies take first steps, show independence, and explore surroundings safely." },
    { month: 12, title: "Month 12 — First Birthday, Walking & Talking", slug: "parenting-month-12", description: "Celebrate the first birthday; walking and talking skills develop rapidly." }
  ];

export default function ParentingSection() {
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <FaUserFriends className="w-6 h-6 text-blue-600" />
          Parenting Journey: Month by Month
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Navigate your baby{"'"}s first year with confidence using our month-by-month parenting guides
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {motherhoodPosts.map((post) => (
          <div key={post.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-200 p-6 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                {post.month}
              </div>
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Month</span>
                <div className="text-sm font-semibold text-gray-900">Milestones</div>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              <Link href={`/parenting-blogs/${post.slug}`} className="hover:no-underline">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
            <Link 
              href={`/parenting-blogs/${post.slug}`} 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/link"
            >
              Explore Month {post.month}
              <FaLeaf className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}