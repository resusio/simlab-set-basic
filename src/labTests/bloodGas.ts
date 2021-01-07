import { labTestType, labTestGenerateMethod } from '@resusio/simlab';
import random from 'random';

const bloodGasLabTests: labTestType[] = [
  {
    id: 'abg-ph',
    nomenclature: {
      long: 'pH',
      short: 'pH',
      category: 'Arterial Blood Gas',
      orderInCategory: 10,
    },
    display: {
      criticalLowLimit: () => 7.1,
      lowLimit: () => 7.35,
      highLimit: () => 7.45,
      criticalHighLimit: () => 7.6,
      units: [{ id: /.*/, unitDisplay: '', precision: 2, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'number',
      requires: ['abg-paco2', 'abg-hco3'],
      calculate: (testResults, patient) => {
        const hco3 = testResults['abg-hco3'] as number;
        const paco2 = testResults['abg-paco2'] as number;

        const pH = 6.1 + Math.log10(hco3 / (0.03 * paco2));

        return pH;
      },
    },
  },
  {
    id: 'abg-paco2',
    nomenclature: {
      long: 'Partial Pressure of CO2',
      short: 'PaCO2',
      category: 'Arterial Blood Gas',
      orderInCategory: 20,
    },
    display: {
      criticalLowLimit: () => 15,
      lowLimit: () => 35,
      highLimit: () => 45,
      criticalHighLimit: () => 75,
      units: [{ id: /.*/, unitDisplay: 'mmHg', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.NORMAL,
      valueType: 'number',
      mean: () => 40,
      sd: () => 2.5,
    },
  },
  {
    id: 'abg-pao2',
    nomenclature: {
      long: 'Partial Pressure of O2',
      short: 'PaO2',
      category: 'Arterial Blood Gas',
      orderInCategory: 30,
    },
    display: {
      criticalLowLimit: () => 50,
      lowLimit: () => 75,
      highLimit: () => 100,
      criticalHighLimit: () => 500,
      units: [{ id: /.*/, unitDisplay: 'mmHg', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.NORMAL,
      valueType: 'number',
      mean: () => 90,
      sd: () => 5,
    },
  },
  {
    id: 'abg-hco3',
    nomenclature: {
      long: 'Bicarbonate',
      short: 'HCO3',
      category: 'Arterial Blood Gas',
      orderInCategory: 40,
    },
    display: {
      criticalLowLimit: () => 10,
      lowLimit: () => 22,
      highLimit: () => 26,
      criticalHighLimit: () => 50,
      units: [{ id: /.*/, unitDisplay: 'mmol/L', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'number',
      requires: ['hco3'],
      calculate: (testResults, patient) => (testResults['hco3'] as number) + random.normal(-2, 1)(),
    },
  },
  {
    id: 'abg-be',
    nomenclature: {
      long: 'Base Excess',
      short: 'BE',
      category: 'Arterial Blood Gas',
      orderInCategory: 45,
    },
    display: {
      lowLimit: () => -2,
      highLimit: () => 3,
      units: [{ id: /.*/, unitDisplay: 'mmol/L', precision: 1, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'number',
      requires: ['abg-hco3', 'abg-ph'],
      calculate: (testResults, patient) => {
        const ph = testResults['abg-ph'] as number;
        const hco3 = testResults['abg-hco3'] as number;

        const be = 0.9287 * hco3 + 13.77 * ph - 124.58;

        return be;
      },
    },
  },
  {
    id: 'abg-k',
    nomenclature: {
      long: 'Potassium',
      short: 'K+',
      category: 'Arterial Blood Gas',
      orderInCategory: 50,
    },
    display: {
      criticalLowLimit: () => 2,
      lowLimit: () => 3.5,
      highLimit: () => 5,
      criticalHighLimit: () => 7,
      units: [{ id: /.*/, unitDisplay: 'mmol/L', precision: 1, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'number',
      requires: ['k'],
      calculate: (testResults, patient) => (testResults['k'] as number) + random.normal(0, 0.25)(),
    },
  },
  {
    id: 'abg-na',
    nomenclature: {
      long: 'Sodium',
      short: 'Na+',
      category: 'Arterial Blood Gas',
      orderInCategory: 60,
    },
    display: {
      lowLimit: () => 135,
      highLimit: () => 145,
      units: [{ id: /.*/, unitDisplay: 'mmol/L', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'number',
      requires: ['na'],
      calculate: (testResults, patient) => (testResults['na'] as number) + random.normal(0, 3)(),
    },
  },
  {
    id: 'abg-cl',
    nomenclature: {
      long: 'Chloride',
      short: 'Cl-',
      category: 'Arterial Blood Gas',
      orderInCategory: 70,
    },
    display: {
      lowLimit: () => 98,
      highLimit: () => 106,
      units: [{ id: /.*/, unitDisplay: 'mmol/L', precision: 0, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'number',
      requires: ['cl'],
      calculate: (testResults, patient) => (testResults['cl'] as number) + random.normal(0, 3)(),
    },
  },
  {
    id: 'abg-lactate',
    nomenclature: {
      long: 'Lactate',
      short: 'Lactate',
      category: 'Arterial Blood Gas',
      orderInCategory: 80,
    },
    display: {
      lowLimit: () => 0,
      highLimit: () => 2,
      units: [{ id: /.*/, unitDisplay: 'mmol/L', precision: 1, convert: (value) => value }],
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'number',
      requires: ['lactate'],
      calculate: (testResults, patient) =>
        (testResults['lactate'] as number) + random.normal(0, 0.2)(),
    },
  },
];

export default bloodGasLabTests;
