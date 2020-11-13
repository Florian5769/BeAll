const { app, BrowserWindow, Menu } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    center: true,
    movable: false,
    resizable: false,
    /*____  Have to be turn on when dev is over ____*/
    //skipTaskbar: true,
    frame: false,
    height: 800,
    width: 1200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  /*____    l18 -> l20: Live Reload   ____*/
  try {
    require('electron-reloader')(module)
  } catch (_) {}

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/ERP/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

/*____  Menu  ____*/

Menu.setApplicationMenu(null)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})