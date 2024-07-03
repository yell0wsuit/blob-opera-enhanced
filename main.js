const { app, Menu, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");

let splashWin;

const iconPath = path.join(
    __dirname,
    "app", "icons",
    process.platform === "win32"
        ? "appicon.ico"
        : process.platform === "darwin"
        ? "appicon-macos.icns"
        : "appicon-linux.png"
);

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        icon: iconPath,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            enableRemoteModule: false,
            devTools: false,
        },
    });

    mainWindow.loadFile(path.join(__dirname, "app", "index.html"));

    // Event listener for toggling menu bar visibility when in full-screen mode
    mainWindow.on("enter-full-screen", () => {
        mainWindow.setMenuBarVisibility(false);
    });

    mainWindow.on("leave-full-screen", () => {
        mainWindow.setMenuBarVisibility(true);
    });

    mainWindow.webContents.on("new-window", (event, url) => {
        if (url.startsWith("https://")) {
            event.preventDefault();
            shell.openExternal(url);
        }
    });

    mainWindow.webContents.on("will-navigate", (event, url) => {
        if (url.startsWith("https://")) {
            event.preventDefault();
            shell.openExternal(url);
        }
    });

    const menu = Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "Manage custom songs...",
                    click: () => {
                        mainWindow.loadFile(path.join(__dirname, "app", "customsong.html"));
                    },
                },
                { type: "separator" },
                { role: "quit" },
            ],
        },
        {
            label: "View",
            submenu: [
                { role: "reload" },
                { role: "forceReload" },
                { type: "separator" },
                { role: "resetZoom" },
                { role: "zoomIn" },
                { role: "zoomOut" },
                { type: "separator" },
                { role: "togglefullscreen" },
            ],
        },
        {
            label: "Window",
            submenu: [{ role: "minimize" }, { role: "zoom" }],
        },
        {
            label: "About",
            submenu: [
                {
                    label: "Project's GitHub page",
                    click: () => {
                        shell.openExternal("https://github.com/yell0wsuit/blob-opera-enhanced");
                    },
                },
            ],
        },
    ]);

    Menu.setApplicationMenu(menu);

    app.on("second-instance", () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
            }
            mainWindow.focus();
        }
    });

    mainWindow.once("ready-to-show", () => {
        mainWindow.maximize();
        mainWindow.show();
        if (mainWindow.isMinimized()) {
            mainWindow.restore();
        }
        if (splashWin) {
            splashWin.close();
        }
    });
}

function createSplashWindow() {
    splashWin = new BrowserWindow({
        width: 1200,
        height: 720,
        frame: false,
        alwaysOnTop: true,
        icon: iconPath,
    });

    splashWin.loadFile(path.join(__dirname, "app", "splash.html"));
    splashWin.on("closed", () => (splashWin = null));
}

// Check if another instance of the app is already running
const gotSingleLock = app.requestSingleInstanceLock();

if (!gotSingleLock) {
    app.quit(); // Quit the second instance
} else {
    app.whenReady().then(() => {
        //createSplashWindow();
        createWindow();
    });
}

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

ipcMain.handle("open-external-link", async (event, externalURL) => {
    await shell.openExternal(externalURL);
});
