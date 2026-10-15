const admin = require("firebase-admin");

// Load Firebase credentials from environment variable (production/Render)
// or fall back to local JSON file (development)
let serviceAccount;
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
  serviceAccount = require("./firebase-service-account.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

  storageBucket:
    "mozartify-msa.firebasestorage.app",
});

const bucket =
  admin.storage().bucket();

module.exports = bucket;