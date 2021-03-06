export interface Bread {
  name: string;
  slug: string;
  image: string;
}

const breads: Bread[] = [
  {
    name: 'Pain',
    slug: 'pain',
    image: `${process.env.PUBLIC_URL}/images/breads/pain.png`,
  },
  {
    name: 'Galette',
    slug: 'galette',
    image: `${process.env.PUBLIC_URL}/images/breads/galette.png`,
  },
];
export default breads;