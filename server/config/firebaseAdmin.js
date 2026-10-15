const admin = require("firebase-admin");

// Load Firebase credentials from environment variable (production/Render)
// or fall back to local JSON file (development)
let serviceAccount;
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
  serviceAccount = require("./firebase-service-account.json");
}

const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;

if (!storageBucket) {
  throw new Error(
    "FIREBASE_STORAGE_BUCKET environment variable is not set. " +
      "Set it to your Firebase bucket name, e.g. your-project-id.firebasestorage.app"
  );
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

  storageBucket: storageBucket,
});

const bucket =
  admin.storage().bucket();

module.exports = bucket;