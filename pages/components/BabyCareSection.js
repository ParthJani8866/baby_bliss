import Link from 'next/link';
import { FaStethoscope, FaLeaf } from 'react-icons/fa';

// Move data to separate file or API
const blogPosts = [
  { title: "Newborn Baby Clothes: What You Need to Know in 2025", slug: "newborn-baby-clothes", description: "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions." },
  { title: "10 Best Baby Diapers: Absorbency, Comfort & Eco-friendly Picks", slug: "best-baby-diapers", description: "Explore the top diapers for babies, including eco-friendly and comfortable options." },
  { title: "Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider", slug: "breastfeeding-vs-formula", description: "Learn about breastfeeding and formula feeding, and decide what's best for your baby." },
  { title: "5 Ways to Calm a Crying Baby: Tested and Soothing Remedies", slug: "calm-crying-baby", description: "Effective tips to calm your baby when crying, backed by expert advice." },
  { title: "How to Make Your Home Baby-Safe: A Complete Baby-Proofing Guide", slug: "baby-proofing-guide", description: "Step-by-step guide to make your home safe for newborns and toddlers." },
  { title: "10 Best Lullabies to Help Your Baby Sleep Peacefully", slug: "best-baby-lullabies", description: "Discover soothing lullabies that help your baby sleep better at night." },
  { title: "5 Milestones to Expect in Your Baby's First Year", slug: "baby-first-year-milestones", description: "Track your baby's development with these important first-year milestones." },
  { title: "How to Swaddle Your Baby: Step-by-Step Techniques for Comfort", slug: "how-to-swaddle", description: "Learn proper swaddling techniques to keep your baby comfortable and secure." },
  { title: "What to Expect the First 24 Hours After Giving Birth", slug: "first-24-hours-after-birth", description: "Guide for new parents on what happens in the first 24 hours after birth." },
  { title: "Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance", slug: "self-care-for-moms", description: "Important self-care tips for stay-at-home moms to maintain health and balance." },
  { title: "Baby Diapers: Absorbency, Comfort, Disposable Bags & Diaper Liners", slug: "disposable-bags-and-diaper-liners", description: "Guide on disposable diaper bags and liners for a cleaner, easier diaper-changing routine." },
  { title: "Top 10 Must-Have Baby Gear Essentials for New Parents", slug: "baby-gear-essentials", description: "Bringing a newborn home can be overwhelming, but having the right gear can make a huge difference." }
];

export default function BabyCareSection() {
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <FaStethoscope className="w-6 h-6 text-emerald-600" />
          Essential Baby Care Guides
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert advice on everything from feeding and sleeping to safety and development
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={post.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-emerald-200 p-6 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white mb-4">
              <FaStethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
              <Link href={`/blogs/${post.slug}`} className="hover:no-underline">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
            <Link 
              href={`/blogs/${post.slug}`} 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors group/link"
            >
              Read Guide
              <FaLeaf className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}