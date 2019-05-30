> This app was built with firebase; for the db and login functionality. So, to use it you'll need to [create a new firebase app](https://console.firebase.google.com/u/0/). Then follow the installation process below.

# Installation
- yarn
- Chnage the configs in the [firebase file](https://github.com/hasan-sh/poetry/blob/master/src/firebase.ts#L6-L13) to correspond to your appropriate credentials.
> credentails from https://console.firebase.google.com/u/0/project/YOUR_APP_NAME/overview. Change `YOUR_APP_NAME` with the actual name of the app you craeted.
- Create a `.env` file, in the root dir, with `REACT_APP_API_KEY`=YOUR_FIREBASE_API_KEY

### firebase
- Enable `Google` sign in method. 
- Finally you need to make sure that you've created a database in the firebase console.
> Make sure you choose`firestore` technology!

Then your should be able to run the app just fine => `yarn start`.
