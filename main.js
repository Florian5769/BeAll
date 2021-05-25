/*
 * File: main.js                                                               *
 * Project: erp                                                                *
 * Created Date: Tu May yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Tue May 25 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */



const { app, BrowserWindow} = require('electron')
const url = require("url");
const indexPath = require("path");

let win

function createWindow () {;
  win = new BrowserWindow({
    center: true,
    resizable: true,
    width:1000,
    hasShadow: true,
    frame: false, 
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent:true,
      contextIsolation: false,  // false if you want to run 2e2 test with Spectron
      enableRemoteModule : true // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular)
    },
  })

  /*____    l18 -> l20: Live Reload   ____*/
  try {
    require('electron-reloader')(module)
  } catch (_) {}


  win.webContents.openDevTools();

  win.loadURL(
    url.format({
      pathname: indexPath.join(__dirname, `/dist/ERP/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)

/*____  Menu  ____*/
// Menu.setApplicationMenu(null)



app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})