:: filepath: /C:/Users/ijlal/Desktop/New folder (2)/bin/postbuild.bat
@echo off

:: Remove the .amplify-hosting directory if it exists
if exist .\.amplify-hosting (
    rmdir /s /q .\.amplify-hosting
)

:: Create the necessary directories
mkdir .\.amplify-hosting\compute
mkdir .\.amplify-hosting\compute\default
mkdir .\.amplify-hosting\static

:: Copy the dist directory
xcopy /e /i /h .\dist .\.amplify-hosting\compute\default

:: Copy the node_modules directory
xcopy /e /i /h .\node_modules .\.amplify-hosting\compute\default\node_modules

:: Copy the public directory
xcopy /e /i /h .\public .\.amplify-hosting\static

:: Copy the deploy-manifest.json file
copy .\deploy-manifest.json .\.amplify-hosting\deploy-manifest.json