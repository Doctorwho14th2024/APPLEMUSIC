import { app, BrowserWindow, nativeImage } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
    // Créer l'icône
    const icon = nativeImage.createFromPath(path.join(__dirname, '..', 'src', 'assets', 'logo.png'));
    
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        title: 'Apple Music',
        autoHideMenuBar: true, // Cache automatiquement la barre de menu
        icon: icon, // Utilisation de l'icône créée
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });

    // Masquer complètement la barre de menu
    mainWindow.setMenuBarVisibility(false);
    mainWindow.removeMenu();

    // Charger Apple Music
    mainWindow.loadURL('https://music.apple.com/fr/home');

    // Ouvrir les outils de développement en mode développement
    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});