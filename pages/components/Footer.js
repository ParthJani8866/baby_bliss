"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Belly Buds</h3>

          <p className="text-sm">
            Belly Buds Boutique is your one-stop shop for premium baby products. We care about quality, safety, and comfort for your little ones.
          </p>
          <p className="text-sm">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-3">Explore More</h4>
            <p className="text-sm leading-relaxed">
              Pregnancy tips • Motherhood journey • Newborn care • Baby milestones •
              Breastfeeding guidance • Bottle feeding • Postpartum recovery • Prenatal yoga •
              Labor and delivery • Cesarean birth • Natural birth • Pregnancy nutrition •
              Morning sickness relief • Trimester week-by-week • Baby development month-by-month •
              Sleep training • Infant colic solutions • Baby teething • Diapering and hygiene •
              Parenting hacks • Working moms • Stay-at-home moms • Baby toys • Baby gear •
              Hospital bag checklist • Baby shower ideas • Maternity fashion • Emotional health •
              Postpartum depression support • Bonding with baby • First-time mom tips •
              Toddler transitions • Baby food introduction • Vaccination schedule •
              Growth spurts • Baby’s first words • Baby’s first steps
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Contact Us</h3>
          <p className="text-sm">Email: parthskyward@gmail.com</p>
          <p className="text-sm">Phone: +91-8866398281</p>
          <p className="text-sm">Address: Ahmedabad, Gujarat , India</p>

          <div className="flex space-x-3 mt-4">

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Belly Buds Boutique. All rights reserved.
      </div>
    </footer>
  );
}
