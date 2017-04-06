package com.v2ct;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.v2ct.module.SplashDialog;

public class MainActivity extends ReactActivity {

 @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashDialog.showDialog(this);
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "v2ct";
    }
}
