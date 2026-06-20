export type Product = {
  id: string;
  title: string;
  description: string;
  /** Display price, e.g. "$29" or "pay what you want" */
  price?: string;
  /** Gumroad, Lemon Squeezy, Stripe, etc. */
  buyUrl?: string;
  published: boolean;
  tags?: string[];
};

/** Add products here when you're ready to sell. Set published: true to show on /kits */
export const PRODUCTS: Product[] = [
  // {
  //   id: "build-or-buy-skill",
  //   title: "build or buy skill pack",
  //   description: "the full claude skill plus setup walkthrough.",
  //   price: "$9",
  //   buyUrl: "https://gumroad.com/...",
  //   published: true,
  //   tags: ["claude", "workflow"],
  // },
];

export function getPublishedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.published);
}
