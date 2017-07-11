const { ipcRenderer: ipc } = require('electron')

function createTray() {
    ipc.send('create-tray');
}