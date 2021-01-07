import { labTestGenerateMethod, diseaseType } from '@resusio/simlab';

/**
 * Contains information about the endocrine category of diseases, as well as
 * the information for each endocrine disease
 */
const respDiseases: diseaseType[] = [
  {
    id: 'resp.copd.ae',
    nomenclature: {
      long: 'Acute Exacerbation of COPD',
      short: 'AECOPD',
      description: 'Acute respiratory acidosis with partial metabolic compensation, and hypoxia',
    },
    testOverrides: [
      {
        id: 'neut',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.75,
        sd: (mean, sd) => sd * 1.25,
      },
      {
        id: 'abg-paco2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 85,
        sd: (mean, sd) => 10,
      },
      {
        id: 'hco3',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean + 85 / 10,
        sd: (mean, sd) => sd,
      },
      {
        id: 'abg-pao2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 50,
        sd: (mean, sd) => sd,
      },
      {
        id: 'lactate',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 2.5,
        sd: (mean, sd) => 0.5,
      },
    ],
  },
  {
    id: 'resp.copd.chronic',
    nomenclature: {
      long: 'Chronic COPD',
      short: 'COPD',
      description: 'Chronic hypercapneic COPD',
    },
    testOverrides: [
      {
        id: 'neut',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 1.75,
        sd: (mean, sd) => sd * 1.25,
      },
      {
        id: 'abg-paco2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 70,
        sd: (mean, sd) => 10,
      },
      {
        id: 'hco3',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean + 3.5 * (70 / 10),
        sd: (mean, sd) => sd,
      },
      {
        id: 'abg-pao2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 65,
        sd: (mean, sd) => sd,
      },
      {
        id: 'lactate',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 2.5,
        sd: (mean, sd) => 0.5,
      },
    ],
  },
];

export default respDiseases;
