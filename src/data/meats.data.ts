export interface Meat {
  name: string;
  slug: string;
  image: string;
}

const meats: Meat[] = [
  {
    name: 'Viande',
    slug: 'viande',
    image: `${process.env.PUBLIC_URL}/images/meats/viande.png`,
  },
  {
    name: 'Tofu',
    slug: 'tofu',
    image: `${process.env.PUBLIC_URL}/images/meats/tofu.png`,
  },
];
export default meats;