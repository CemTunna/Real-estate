import { FieldValue } from 'firebase/firestore';

export interface User {
  name: string;
  timestamp: FieldValue;
  email: string;
}
