export const NIT_SAT = '((([1-9])+([0-9])*([0-9]|K))|(([1-9]+[0-9]){12,13})|^([A-Z0-9]{3,18}))$';

export const LIST_FIELD_13: any = [
  {id: 1, value: 'Turismo / Tourism'},
  {id: 2, value: 'Oficial / Official'},
  {id: 3, value: 'Negocios / Business'},
  {id: 4, value: 'Residencia / Residence'},
  {id: 5, value: 'Tránsito / Transit'},
  {id: 6, value: 'Otros / Other'},
];

export const LIST_FIELD_14: any = [
  {id: 1, value: 'Aéreo / By Air'},
  {id: 2, value: 'Terrestre / By Ground'},
  {id: 3, value: 'Marítimo / By Sea'}
];

export const LIST_FIELD_16: any = [
  {id: 1, value: 'Si / Yes'},
  {id: 2, value: 'No'}
];

export const LIST_FIELD_18: any = [
  {
    id: 1, es: 'Artículos, regalos, donaciones o cualquier tipo de encomiendas distintas al equipaje personal',
    en: 'Goods, gifts, donations, or any kind of parcels different from personal belongings', yes: false,
    no: false, valueUs: 0, sat: 0
  },
  {
    id: 2, es: 'Artículos con fines comerciales',
    en: 'Commercial merchandise', yes: false,
    no: false, valueUs: 0, sat: 0
  },
  {
    id: 3, es: 'Equipo de trabajo, material promocional o herramientas',
    en: 'Goods related to my profession (tools, equipment)', yes: false,
    no: false, valueUs: 0, sat: 0
  },
  {
    id: 4, es: 'Muestras o muestrarios de cualquier tipo de productos',
    en: 'Samples of any kind', yes: false,
    no: false, valueUs: 0, sat: 0
  },
  {
    id: 5, es: 'Animales vivos, plantas, flores, semillas, frutas, carnes o comida',
    en: 'Live animals, plants, flowers, seeds, fruits, meats or any kind of food', yes: false,
    no: false, valueUs: 0, sat: 0
  },
  {
    id: 6, es: 'Armas de fuego o de otro tipo, municiones o explosivos de cualquier tipo',
    en: 'Firearms or other weapons, ammunition or explosives of any kind', yes: false,
    no: false, valueUs: 0, sat: 0
  },
  {
    id: 7, es: 'Medícamentos o medicinas sujetas a permisos',
    en: 'Drugs or medicines subject to special permissions', yes: false,
    no: false, valueUs: 0, sat: 0
  },
  {
    id: 8, es: 'Permanecí en granjas y campos de cultivo durante mi viaje',
    en: 'I stayed in farms and crop fields during my visit', yes: false,
    no: false, valueUs: 0, sat: 0
  }
];
