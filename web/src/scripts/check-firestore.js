const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

// Since I don't have the service account key, I can't use firebase-admin easily without it.
// I'll try to use the regular firebase JS SDK in a node script.
// Wait, Firestore JS SDK in Node needs some setup.

// Alternative: check the src/data/books.ts to see if it was updated by the CSV script.
// I know it was.

// Let's use a simple node script with the client SDK to count documents.
const { initializeApp: initClient } = require('firebase/app');
const { getFirestore: getFirestoreClient, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

async function check() {
    try {
        const app = initClient(firebaseConfig);
        const db = getFirestoreClient(app);
        const snapshot = await getDocs(collection(db, "books"));
        console.log(`Firestore has ${snapshot.size} books.`);
        if (snapshot.size > 0) {
            console.log(`Example ID: ${snapshot.docs[0].id}`);
        }
    } catch (e) {
        console.error(e);
    }
    process.exit();
}

check();
