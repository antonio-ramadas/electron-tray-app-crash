# Electron Tray *destroy* method crashes the app
This repository has been created to demonstrated a possible a bug on Electron 1.6.11 on macOS 10.12.5 with npm 5.0.3.

## Install
Install the dependencies (just Electron) with `npm install`

## Run
Just typing `npm start` is enough. To show the crash log, the electron flags ELECTRON_ENABLE_LOGGING and ELECTRON_ENABLE_STACK_DUMPING have been set to true.

## The app
This app is based on the [sample provided by Electron](https://electron.atom.io/docs/tutorial/quick-start/). The added functionalities are a HTML button and a tray. The HTML button just [creates a new instance of the tray](https://github.com/antonio-ramadas/electron-tray-app-crash/blob/master/main.js#L58). The tray has [a context Menu, built from template, which contains a button to destroy the tray instance](https://github.com/antonio-ramadas/electron-tray-app-crash/blob/master/main.js#L69).

## Expected behaviour
Create and destroy the tray instance multiple times with no issues or faulty behaviour.

## How to reproduce the crash
Create the tray instance and destroy it, one after the other. You may need to repeat these steps multiple times. The crash will eventually happen when destroying the instance. The app crash seems to happen randomly. From my experience, it may happen on the first time or only after multiple repetitions (7 or so). The app will crash with `Received signal 11 SEGV_MAPERR` followed by the stack dump.

