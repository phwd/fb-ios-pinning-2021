/*
 * fb-ios-pinning-2021.js
 *
 * Tells Liger not to handle URLs which defaults to NSURLs
 *
 * The purpose of this script is for bug hunting within the scope of facebook.com/whitehat
 * 
 * Copyright (c) 2021 Philippe Harewood, @phwd_, https://philippeharewood.com/
 * 
 * Released under MIT License, feel free to fork it, incorporate into other software etc.
 */

var shouldLigerHandleUrlOnApp = ObjC.classes["FBLigerProtocol"]['+ shouldLigerHandleUrlOnApp:']

Interceptor.attach(shouldLigerHandleUrlOnApp.implementation, {
  onLeave: function (retval) {
    retval.replace(0)
  }
});
