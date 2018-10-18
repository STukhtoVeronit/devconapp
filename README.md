Soo... It was a long journey.

1. To deploy by react-native run-ios, you should run next commands in root directory(at least that work for me):

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