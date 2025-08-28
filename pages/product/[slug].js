import { products } from "../../data/products";
import { brands } from "../../data/brands";
import { categories } from "../../data/categories";
import { subcategories } from "../../data/subcategories";
import { slugify } from "../../utils/slugify";
import Header from "../components/header";

export default function ProductPage({ product, brand, category, subcategory }) {
  return (
    <div>
      <Header />
      <h1>{product.name}</h1>
      <p>Category: {category.name}</p>
      <p>Subcategory: {subcategory.name}</p>
      <p>Brand: {brand.name}</p>
      <p>Price: ₹{product.price}</p>
      {product.amazonUrl && (
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="nofollow noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#ff9900",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Buy Now
        </a>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = products.map((p) => ({
    params: { slug: slugify(p.name) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => slugify(p.name) === params.slug);
  const category = categories.find((c) => c.id === product.categoryId);
  const subcategory = subcategories.find((s) => s.id === product.subcategoryId);
  const brand = brands.find((b) => b.id === product.brandId);

  return { props: { product, category, subcategory, brand } };
}