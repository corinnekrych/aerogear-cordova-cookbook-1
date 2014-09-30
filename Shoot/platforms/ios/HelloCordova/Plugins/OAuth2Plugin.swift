//
//  OAuth2Plugin.swift
//  HelloCordova
//
//  Created by Erik Jan de Wit on 29/9/14.
//
//

import Foundation

@objc(OAuth2Plugin) class OAuth2Plugin : CDVPlugin {
    func getGoogleDriveFiles(command: CDVInvokedUrlCommand) {
        //var message = command.arguments[0] as String
        let googleConfig = GoogleConfig(
            clientId: "873670803862-g6pjsgt64gvp7r25edgf4154e8sld5nq.apps.googleusercontent.com",
            scopes:["https://www.googleapis.com/auth/drive"])
        
        let gdModule = AccountManager.addGoogleAccount(googleConfig)
        let http = Http(url: "https://www.googleapis.com/upload/drive/v2/files")
        http.authzModule = gdModule
        
        http.baseURL = NSURL(string: "https://www.googleapis.com/drive/v2/files")
        http.GET(success: { (object: AnyObject?) -> Void in
            if let mine: AnyObject = object {
                println("Success using http GET")
                
                var pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: "Hello \(message)")
                commandDelegate.sendPluginResult(pluginResult, callbackId:command.callbackId)
            }
            }, failure: { (error: NSError) -> Void in
                println("Error getting files: \(error)")
        })
    }
}