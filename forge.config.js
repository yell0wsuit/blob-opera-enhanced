module.exports = {
    packagerConfig: {
        icon: "./app/icons/appicon",
    },
    makers: [
        /*{
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "BlobOpera",
                setupIcon: "./app/icons/appicon.ico", // Specific for Squirrel.Windows
            },
        },*/
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin", "linux", "win32"],
        },
        {
            name: "@electron-forge/maker-dmg",
            config: {
                icon: "./app/icons/appicon-macos.icns", // macOS specific icon
            },
        },
        {
            name: "@electron-forge/maker-deb",
            config: {
                icon: "./app/icons/appicon-linux.png", // Linux specific icon for deb
            },
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {
                icon: "./app/icons/appicon-linux.png", // Linux specific icon for rpm
            },
        },
    ],
};
