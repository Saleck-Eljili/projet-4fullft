import breads, { Bread } from './breads.data';
import fillings, { Filling } from './fillings.data';
import meats, { Meat } from './meats.data';
import sauces, { Sauce } from './sauces.data';

export interface Kebab {
  name?: string;
  slug?: string;
  price?: number;
  image?: string;
  bread?: Bread;
  meat?: Meat;
  fillings?: Filling[];
  sauces?: Sauce[];
};

const kebabs: Kebab[] = [
  
];
export default kebabs