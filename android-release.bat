@echo off
call ionic build android --release
call androind-apk-sign.bat
call androind-apk-zipalign.bat