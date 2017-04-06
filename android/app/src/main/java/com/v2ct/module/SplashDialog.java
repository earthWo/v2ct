package com.v2ct.module;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;

import com.v2ct.R;

/**
 * Created by wuzefeng on 2017/1/4.
 */

public class SplashDialog extends Dialog {

    private  SplashDialog(Context context) {
        super(context, R.style.SplashScreen_Fullscreen);
        setContentView(R.layout.launch_screen);
        setCancelable(false);
    }


    private static Dialog dialog;

    public static void showDialog(Activity activity){
        if(dialog==null){
            dialog=new SplashDialog(activity);
        }
        dialog.show();
    }

    public static void dismissDialog(){
        if(dialog!=null){
            dialog.dismiss();
        }
    }
}
