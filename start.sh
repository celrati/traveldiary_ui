
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="2717", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
adb devices

ANDROID_HOME="/home/hraf/Android/Sdk" react-native run-android