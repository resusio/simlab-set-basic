import random from 'random';

import { labTestType, labTestGenerateMethod, gender } from '@resusio/simlab';
import { testResultFlag } from '@resusio/simlab';

// TODO: These should be labTestGenerateMethod.ENUM rather than derived, as they indicate a calculator in the UI this way
const urinalysisLabTests: labTestType[] = [
  {
    id: 'udip-sg',
    nomenclature: {
      long: 'Urinalysis POC Specific Gravity',
      short: 'POC SG',
      category: 'Urinalysis',
      orderInCategory: 10,
    },
    display: {
      lowLimit: () => 1.01,
      highLimit: () => 1.02,
      units: [{ id: /.*/, unitDisplay: '', precision: 3, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.NORMAL,
      valueType: 'number',
      mean: () => 1.015,
      sd: () => 0.0025,
    },
  },
  {
    id: 'udip-ph',
    nomenclature: {
      long: 'Urinalysis POC pH',
      short: 'POC pH',
      category: 'Urinalysis',
      orderInCategory: 20,
    },
    display: {
      lowLimit: () => 4.5,
      highLimit: () => 8.0,
      units: [{ id: /.*/, unitDisplay: '', precision: 1, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.NORMAL,
      valueType: 'number',
      mean: () => 5.25,
      sd: () => 0.375,
    },
  },
  {
    id: 'udip-leuks',
    nomenclature: {
      long: 'Urinalysis POC Leukocytes',
      short: 'POC Leuks',
      category: 'Urinalysis',
      orderInCategory: 30,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative',
    },
  },
  {
    id: 'udip-nitrite',
    nomenclature: {
      long: 'Urinalysis POC Nitrite',
      short: 'POC Nitrite',
      category: 'Urinalysis',
      orderInCategory: 40,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative',
    },
  },
  {
    id: 'udip-protein',
    nomenclature: {
      long: 'Urinalysis POC Protein',
      short: 'POC Protein',
      category: 'Urinalysis',
      orderInCategory: 50,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative',
    },
  },
  {
    id: 'udip-glucose',
    nomenclature: {
      long: 'Urinalysis POC Glucose',
      short: 'POC Glucose',
      category: 'Urinalysis',
      orderInCategory: 60,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative',
    },
  },
  {
    id: 'udip-ketones',
    nomenclature: {
      long: 'Urinalysis POC Ketones',
      short: 'POC Ketones',
      category: 'Urinalysis',
      orderInCategory: 70,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative',
    },
  },
  {
    id: 'udip-urobili',
    nomenclature: {
      long: 'Urinalysis POC Urobilinogen',
      short: 'POC Urobilinogen',
      category: 'Urinalysis',
      orderInCategory: 80,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative',
    },
  },
  {
    id: 'udip-bili',
    nomenclature: {
      long: 'Urinalysis POC Bilirubin',
      short: 'POC Bilirubin',
      category: 'Urinalysis',
      orderInCategory: 90,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative',
    },
  },
  {
    id: 'udip-rbc',
    nomenclature: {
      long: 'Urinalysis POC Blood Erythrocytes',
      short: 'POC RBCs',
      category: 'Urinalysis',
      orderInCategory: 100,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      requires: ['udip-menses'],
      calculate: (testResults) =>
        (testResults['udip-menses'] as string) === 'No' ? 'Negative' : `${random.int(3, 4)}+`,
    },
  },
  {
    id: 'udip-menses',
    nomenclature: {
      long: 'Urinalysis Menstruation',
      short: 'POC Menstruation',
      category: 'Urinalysis',
      orderInCategory: 110,
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'No' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: (testResults, patient) => {
        if (patient && patient.gender === gender.Female && patient.age > 12 && patient.age < 50) {
          // Random chance of menstruation (1 in 3)
          return random.int(1, 3) === 3 ? 'Yes' : 'No';
        }

        return 'No';
      },
    },
  },
];

export default urinalysisLabTests;
