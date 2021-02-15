import { labTestGenerateMethod, diseaseType } from '@resusio/simlab';

/**
 * Contains information about the vascular category of diseases, as well as
 * the information for each vascular disease
 */
const vascDiseases: diseaseType[] = [
  {
    id: 'vasc.pe.submassive',
    nomenclature: {
      long: 'Submassive Pulmonary Embolism',
      short: 'Submassive PE',
      description: 'A pulmonary embolism with mild troponin elevation due to strain',
    },
    testOverrides: [
      {
        id: 'dimer',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 15,
        sd: (mean, sd) => sd * 5,
      },
      {
        id: 'hstnt',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 4,
        sd: (mean, sd) => sd,
      },
      {
        id: 'crp',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 10,
        sd: (mean, sd) => sd * 4,
      },
      {
        id: 'abg-paco2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean - 6,
        sd: (mean, sd) => sd,
      },
      {
        id: 'abg-pao2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 60,
        sd: (mean, sd) => sd,
      },
      {
        id: 'lactate',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 2.2,
        sd: (mean, sd) => sd,
      },
    ],
  },
  {
    id: 'vasc.pe.massive',
    nomenclature: {
      long: 'Massive Pulmonary Embolism',
      short: 'Massive PE',
      description:
        'A pulmonary embolism with marked troponin elevation due to strain and RV failure/infarct',
    },
    testOverrides: [
      {
        id: 'dimer',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 25,
        sd: (mean, sd) => sd * 2,
      },
      {
        id: 'hstnt',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 25,
        sd: (mean, sd) => sd,
      },
      {
        id: 'crp',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 10,
        sd: (mean, sd) => sd * 4,
      },
      {
        id: 'abg-paco2',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean - 10,
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
        mean: (mean) => 4.0,
        sd: (mean, sd) => sd / 2,
      },
    ],
  },
];

export default vascDiseases;
