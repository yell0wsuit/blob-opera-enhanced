module.exports = {
    packagerConfig: {
        icon: "./icons/appicon",
    },
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "Blob Opera",
                setupIcon: "./icons/appicon.ico", // Specific for Squirrel.Windows
            },
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin", "linux", "win32"],
        },
        {
            name: "@electron-forge/maker-dmg",
            config: {
                name: "Blob Opera",
                icon: "./icons/appicon-macos.icns", // macOS specific icon
            },
        },
        {
            name: "@electron-forge/maker-deb",
            config: {
                name: "Blob Opera",
                icon: "./icons/appicon-linux.png", // Linux specific icon for deb
            },
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {
                name: "Blob Opera",
                icon: "./icons/appicon-linux.png", // Linux specific icon for rpm
            },
        },
        {
            name: "@electron-forge/maker-appimage",
            config: {
                options: {
                    icon: "./icons/appicon-linux.png", // Linux specific icon base path
                },
            },
        },
    ],
};
