import { labTestGenerateMethod, diseaseType } from '@resusio/simlab';

/**
 * Contains information about the endocrine category of diseases, as well as
 * the information for each endocrine disease
 */
const endoDiseases: diseaseType[] = [
  {
    id: 'endo.dka',
    nomenclature: {
      long: 'Diabetic Ketoacidosis',
      short: 'DKA',
      description: 'Acidosis with high glucose and ketosis, and other metabolic disturbances',
    },
    testOverrides: [
      {
        id: 'neut',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.75,
        sd: (mean, sd) => sd * 1.25,
      },
      {
        id: 'hgb',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.1,
        sd: (mean, sd) => sd,
      },
      {
        id: 'plt',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.1,
        sd: (mean, sd) => sd,
      },
      {
        id: 'gluc',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 35,
        sd: (mean, sd) => sd,
      },
      {
        id: 'na',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.05,
        sd: (mean, sd) => sd,
      },
      {
        id: 'cl',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1,
        sd: (mean, sd) => sd,
      },
      {
        id: 'k',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.2,
        sd: (mean, sd) => sd * 1.2,
      },
      {
        id: 'hco3',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 8,
        sd: (mean, sd) => 2,
      },
      {
        id: 'cr',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.3,
        sd: (mean, sd) => sd,
      },
      {
        id: 'bun',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.2,
        sd: (mean, sd) => sd,
      },
      {
        id: 'lactate',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 3,
        sd: (mean, sd) => 1,
      },
      {
        // TODO: allow disease states to override method as well (e.g. a normal distributed value can have a disease that changes it into a derived one.)
        id: 'abg-paco2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 1.5 * 5 + 8, // uses mean of hco3 (5) to calculate resp compensation
        sd: (mean, sd) => sd,
      },
    ],
  },
];

export default endoDiseases;
