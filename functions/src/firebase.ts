import * as admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Inicializa Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIRE_PROJECT_ID,
    clientEmail: process.env.FIRE_CLIENT_EMAIL,
    privateKey: process.env.FIRE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
});

const db = admin.firestore();
export default db;