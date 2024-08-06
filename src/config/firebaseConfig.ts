import admin from "firebase-admin";
import serviceAccount from "../../serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://xrpl-zoniqx.firebaseio.com"
});

const db = admin.firestore();

export { db };
