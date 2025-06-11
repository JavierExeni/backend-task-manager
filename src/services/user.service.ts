import db from '../firebase';

const usersCollection = db.collection('users');

export const findUserByEmail = async (email: string) => {
  const snapshot = await usersCollection.where('email', '==', email).get();
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
};

export const createUser = async (email: string) => {
  const newUser = await usersCollection.add({ email });
  return { id: newUser.id, email };
};