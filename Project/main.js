const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win


function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})

    win.loadURL(url.format({
      pathname: path.join(__dirname, 'home.html'),
      protocol: 'file:',
      slashes: true
    }))

      win.on('closed', () => {
      win = null
    })
}

function ShowMe() {
    alert("I want to see a box :-)");
}


//Here we call the createWindow function when the app has finished loading.

app.on('ready', createWindow)

//darwin is the name of the macOS kernal
//The default behavior for a mac app is that the app is not shutdown completely when we close it.

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//If the app becomes active, but the win variable is empty then the instruction is set to create a new window.

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})