# StingersDownYPSA
CSC 190 Stingers Down Attendance System

# Firebase
Firebase is used in this project to deploy, use the Realtime Database, and to test using `serve`.

## Installation
Use NPM (recommended to use NVM to get NPM from here: [NVM])

Use the following code in project directory to install the firebase and firebase-cli modules:
```powershell
npm i firebase
npm i firebase-tools
npm i firebase-cli
```
You can use `-g` appended to the NPM command to install it globally.

## Setting up Firebase
The Firebase project should already be initialized but you need to sign in using:
```powershell
firebase login
```
You can use `firebase projects:list` to check if you are logged in correctly.

## Testing
You can test the project by using the command:
```powershell
firebase serve
```
This will create a local server that you can access at `localhost:5000` by default. You can change the host or port using `--host x.x.x.x` or `--port x`. You can turn off the local server by pressing `ctrl`+`c`.

## Deploying
Deploying pushes the Firebase project to the hosting site and allows it to be accessed globally from the internet. Deploy it using:
```powershell
firebase deploy
```

[NVM]: https://github.com/coreybutler/nvm-windows