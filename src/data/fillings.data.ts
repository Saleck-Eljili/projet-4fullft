export interface Filling {
  name: string;
  slug: string;
  image: string;
}

const fillings: Filling[] = [
  {
    name: 'Salade',
    slug: 'salade',
    image: `${process.env.PUBLIC_URL}/images/fillings/salade.png`,
  },
  {
    name: 'Tomate',
    slug: 'tomate',
    image: `${process.env.PUBLIC_URL}/images/fillings/tomate.png`,
  },
  {
    name: 'Oignon',
    slug: 'oignon',
    image: `${process.env.PUBLIC_URL}/images/fillings/oignon.png`,
  },
];
export default fillings;