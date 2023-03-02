export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  edsText: string;
}

export const products = [
  {
    id: 1,
    name: 'EdS Phone XL',
    price: 799,
    description: 'A large EdS phone with one of the best screens',
    edsText: 'eds price 799'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    edsText: 'eds price 699'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    edsText: 'eds price 299'
  },
  {
    id: 4,
    name: 'EdS Standard',
    price: 999,
    description: 'eds',
    edsText: 'eds price 999'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/