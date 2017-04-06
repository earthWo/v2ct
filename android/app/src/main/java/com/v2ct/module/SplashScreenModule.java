package com.v2ct.module;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by wuzefeng on 2017/1/4.
 */

public class SplashScreenModule extends ReactContextBaseJavaModule{


    public SplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SplashScreen";
    }





    @ReactMethod
    public void dismiss(){
       SplashDialog.dismissDialog();
    }

}
