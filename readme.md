
## MAKAH HR Application
ICT 2102 Team 09 <br>
Angelene Joshna,
Aloysius Yeo Wei Jie,
Kamarullah Bin Mohamad Salim,
Mary Michelle Olivo Ambrosio,
Yip Hou Liang


### Requirements (To install):
IDE: Visual Studio Code <br>
Test: Android Studio @V2020.3.1 <br>
Libraries: Node.js @V14.18.1, Java @V1.8.0.3_11

# Installation Guide
You may launch the application via any of the methods stated below.

### 1. Install and launch the ```makahapp-v1.2.apk``` 
Supported on Android only.

### OR

### 2. Launch Web App on Computer Browser (VS Code):
1.  Open terminal
2.  ```cd makah-hr-application```
3.  ```npm install```
4.  ```ionic serve```
5.  Navigate to ```Localhost:8000``` or ```Localhost:8100```
6.  Inspect on web browser and select a mobile device (Preferred: iPhone 6/7/8)


### OR

### 3. Launch Web App on Android phone OR simulator
1.  Open project folder on Visual Studio Code
2.  ```npm install```
3.  ```npm i -g native-run```
4.  ```ionic build```
5.  ```ionic cap add android```
6.  ```ionic cap copy```
7.  ```ionic cap sync```


#### Android setup
- Install Android studio<br>
- Install Java SDK & Java JDK
8. ```ionic cap open android``` (VSCode terminal)<br>
9. Set up Virtual Device with AVD Manager<br>
    - Tools<br>
    - AVD Manager<br>
    - Create Virtual Device<br>
    - Select hardware (Nexus 6P)<br>
    - Select System Image (Oreo 26)<br>
    - Launch App on Virtual Device<br>
10. Install App on Android<br>
    - Enable developer option<br>
    - Enable USB debugging<br>
    - Launch App on Own Device<br>
11. To debug phone on web browser:<br>
    - Connect phone usb to computer<br>
    - On computer browser: chrome://inspect/#devices<br>


## Usage:
-   Login with any username and password you would like.
-   For simiplicity, the same password used in login will be used for
    other secured features <br> (i.e. downloading of payslips).
-   If using on browser, try not to refresh the page to prevent data loss as data is stored in session.



## Troubleshooting:
- Name too long for Git files:<br>
https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows

- Cannot Located Capacitor in Node\_Module: <br>
```npm add capacitor android``` (VSCode terminal)
