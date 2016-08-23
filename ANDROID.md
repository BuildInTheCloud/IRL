# android setup
1. run `ionic platform add android`. (RUN ONCE)
2. androind-key-gen.bat (ONLY RUN ONCE)
3. Make sure you have the latest JDK
4. set system environment variable `JAVA_HOME` to point to the latest JDK
5. set system environment variable `ANDROID_HOME` to point to the Android SDK path like `C:\Program Files (x86)\Android\android-sdk`

# android debug
1. run visual studio emulator for android
2. click on `debug` in `VS Code` and select `Run Android on device`. requires (Cordova tools to be installed in VS Code.)

# android release
1. ionic build android --release
3. androind-apk-sign.bat
4. androind-apk-zipalign.bat
5. login to https://play.google.com/apps
6. upload platforms\android\build\outputs\apk\android-release-signed.apk

