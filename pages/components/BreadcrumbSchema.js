"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function BreadcrumbSchema({ title, seoProperties }) {
  const pathname = usePathname();
  const canonicalUrl = `https://baby-toys.shop${pathname}`;

  let breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://baby-toys.shop/",
    },
  ];

  if (pathname.includes("/parenting-blogs")) {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "parenting Blogs",
      item: "https://baby-toys.shop/parenting-blogs",
    });
  } else if (pathname.includes("/pregnancy-week-wise")) {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "Pregnancy Week Wise",
      item: "https://baby-toys.shop/pregnancy-week-wise",
    });
  } else {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "Blogs",
      item: "https://baby-toys.shop/blogs",
    });
  }

  breadcrumbs.push({
    "@type": "ListItem",
    position: 3,
    name: title,
    item: canonicalUrl,
  });

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJson),
        }}
      />
    </Head>
  );
}
