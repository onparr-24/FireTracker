const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();


    let mainWindow;

    function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        title: 'Fire Tracker',
        icon: path.join(__dirname, 'ui', 'public', 'logos', 'FireTrackerLogo_1.ico'
        )
    });

    mainWindow.loadFile(path.join(__dirname, 'ui', 'build', 'index.html'));
    mainWindow.maximize();
}

app.whenReady().then(createWindow);

const db = new sqlite3.Database('fireTracker.db');

//Databases:
//savings - id, Bank, Balance, Date
//Checking - id, Bank, Balance, Date

db.run(`CREATE TABLE IF NOT EXISTS savings (id INTEGER PRIMARY KEY, Bank TEXT, Balance INTEGER, Date TEXT)`);

// db.run('INSERT INTO savings (Bank, Balance, Date) VALUES (?, ?, ?)', ['Ally Bank', 5000, new Date().toISOString()], function(err) {
//     if (err) {
//         return console.log(err.message);
//     } else {
//         console.log(`A row has been inserted with rowid ${this.lastID}`);
//     }
// });

db.all('SELECT * FROM savings', [], (err, rows) => {
    if (err) {
        throw err;
    } else {
        rows.forEach((row) => {
            console.log(row);
        });
    }
});