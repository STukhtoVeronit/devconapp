Soo... It was a long journey.

1. To deploy by react-native run-ios, you should run next commands in root directory(at least that work for me)[1]:

`rm -rf node_modules && npm cache clean --force && npm install`

cd node_modules/react-native
scripts/ios-install-third-party.sh
cd third-party

cd glog-0.3.x
./configure
cd ../../../../

Remove library libfishhook.a and add again in “Libraries/RCTWebSoket.xcodeproj”

then you can try...

And check port, if step 1 does not work:

` sudo lsof -i :8081`

and if it is kill process:

`kill -9 <process name(15412)>`

2.To run avd from console

2.1 `emulator -list-avds`

2.2 `cd $ANDROID_HOME/tools && emulator -avd <Nexus_5X_API_24/or another avd>`

2.3`cd $ANDROID_HOME/tools && emulator -avd Nexus_5X_API_24`

3 Example how can bind persist to store. 
link : https://github.com/ItsNoHax/EventFinder

_Reference link:_
1. https://github.com/facebook/react-native/issues/19529
