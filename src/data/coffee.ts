import expressoTradicional from '@assets/tradicional.svg';
import expressoAmericano from '@assets/americano.svg';
import expressoCremoso from '@assets/expressoCremoso.svg';
import latte from '@assets/latte.svg';
import expressoGelado from '@assets/cafeGelado.svg';
import capuccino from '@assets/capuccino.svg';
import mocaccino from '@assets/mochaccino.svg';
import chocolateQuente from '@assets/chocolateQuente.svg';
import cubano from '@assets/cubano.svg';
import havaiano from '@assets/havaiano.svg';
import arabe from '@assets/arabe.svg';
import irlandes from '@assets/irlandes.svg';

export const coffees = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
    price: 9.90
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos que o tradicional',
    type: 'tradicional',
    price: 9.90
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    type: 'tradicional',
    price: 9.90
  },
  {
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    type: 'tradicional',
    price: 9.90
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: 'tradicional',
    price: 9.90
  },
  {
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    type: 'doce',
    price: 9.90
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco de leite e espuma',
    type: 'doce',
    price: 9.90
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: 'doce',
    price: 9.90
  },
  {
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: 'especial',
    price: 9.90
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: 'especial',
    price: 9.90
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: 'especial',
    price: 9.90
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: 'especial',
    price: 9.90
  }
];

export const coffeesImage = {
  expressoTradicional,
  expressoAmericano,
  expressoCremoso,
  latte,
  expressoGelado,
  capuccino,
  mocaccino,
  chocolateQuente,
  cubano,
  havaiano,
  arabe,
  irlandes
};
