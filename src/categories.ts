import { categoryType } from '@resusio/simlab';

/**
 * Contains a numeric value for each category that indicates the order in which that
 * category should be displayed (lowest to highest). This is to allow consistent
 * appearing lab reports.
 */
const categories: categoryType[] = [
  { categoryName: 'Arterial Blood Gas', sortIndex: 10 },
  { categoryName: 'Hematology', sortIndex: 20 },
  { categoryName: 'Coagulation', sortIndex: 30 },
  { categoryName: 'Chemistry', sortIndex: 40 },
  { categoryName: 'Renal Function', sortIndex: 50 },
  { categoryName: 'Cardiac', sortIndex: 60 },
  { categoryName: 'Hepatology', sortIndex: 70 },
];

export default categories;
