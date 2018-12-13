# pdp-chat
A private chat client application, built with react-native, gifted chat, and firebase.

# Set up :fire:
## Dependencies
Once repo is cloned, make sure to do an `npm install` to grab all dependencies in the `package-lock.json` file. This will make sure all the react-native and external libaries are configured on your local environment for the app to run.

## React-native
First, make sure you have npm, watchman, and react-native installed. Run these commands:

`brew install node
brew install watchman`

If you do not have `homebrew`, search it on Google and download it. Its a package manager for the command line that helps download files online from terminal

Next install react-native CLI tools:
`npm install -g react-native-cli`

Next you have to install xcode, which is Apple's app development software. React-native will fetch tools from here to help us compile our project.
`npm install -g react-native-cli`

Once everything is installed try running an app emulator for ios while in the repo directory:
`react-native run-ios`

If the setup was done correctly, the app should've been built and an iPhone emulator pop up with the current components added. If it doesn't work debug through terminal and use stack overflow (or message group chat).

## App Emulator
Use `cmd + r` to refresh app and `cmd +d` to shake the app.


# Helpful Links
React-native docs: https://facebook.github.io/react-native/docs/getting-started.html#creating-a-new-application
How to buld a chat app (our initial stack): https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c
