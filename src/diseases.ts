import { diseaseType } from '@resusio/simlab';

import cvDiseases from './diseases/cv';
import endoDiseases from './diseases/endo';
import respDiseases from './diseases/resp';
import traumaDiseases from './diseases/trauma';
import urologyDiseases from './diseases/urology';
import vascDiseases from './diseases/vascular';

const diseases: diseaseType[] = [
  ...cvDiseases,
  ...endoDiseases,
  ...respDiseases,
  ...traumaDiseases,
  ...urologyDiseases,
  ...vascDiseases,
];

export default diseases;
