import random from 'random';
import { labTestGenerateMethod, diseaseType } from '@resusio/simlab';

/**
 * Contains information about the trauma category of diseases, as well as
 * the information for each trauma disease
 */
const traumaDiseases: diseaseType[] = [
  {
    id: 'trauma.rhabdo',
    nomenclature: {
      long: 'Rhabdomyolysis',
      short: 'Rhabdo',
      description: 'Rhabdomyolysis with elevated CK and renal failure',
    },
    testOverrides: [
      {
        id: 'ck',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => 20000,
        sd: () => 4000,
      },
      {
        id: 'cr',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 3,
        sd: (mean, sd) => sd,
      },
      {
        id: 'bun',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean * 3,
        sd: (mean, sd) => sd,
      },
      {
        id: 'udip-rbc',
        method: labTestGenerateMethod.DERIVED,
        calculate: () => `${random.int(3, 4)}+`,
      },
      {
        id: 'udip-sg',
        method: labTestGenerateMethod.NORMAL,
        mean: (mean) => mean + 0.01,
        sd: (mean, sd) => sd,
      },
    ],
  },
];

export default traumaDiseases;
