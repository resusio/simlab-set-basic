import { labTestType, labTestGenerateMethod } from '@resusio/simlab';
import { testResultFlag } from '@resusio/simlab';

const urinalysisLabTests: labTestType[] = [
  {
    id: 'udip-rbc',
    nomenclature: {
      long: 'Urinalysis RBCs',
      short: 'Dip RBCs',
      category: 'Urinalysis',
      orderInCategory: 10
    },
    display: {
      computeTestResultFlag: (testResult) =>
        testResult === 'Negative' ? testResultFlag.NORMAL : testResultFlag.ABNORMAL,
      units: [{ id: /.*/, unitDisplay: '', precision: 0, convert: (value) => value }]
    },
    generate: {
      method: labTestGenerateMethod.DERIVED,
      valueType: 'string',
      calculate: () => 'Negative'
    }
  }
];

export default urinalysisLabTests;
