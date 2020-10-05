import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sayHello = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs info!", {structuredData: true});
  response.send({
    message: "Hi from firebase function :)"
  });
});
