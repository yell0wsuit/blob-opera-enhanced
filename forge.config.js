module.exports = {
    packagerConfig: {
        icon: "./icons/appicon",
    },
    makers: [
        /*{
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "BlobOpera",
                setupIcon: "./icons/appicon.ico", // Specific for Squirrel.Windows
            },
        },*/
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin", "linux", "win32"],
        },
        {
            name: "@electron-forge/maker-dmg",
            config: {
                icon: "./icons/appicon-macos.icns", // macOS specific icon
            },
        },
        {
            name: "@electron-forge/maker-deb",
            config: {
                icon: "./icons/appicon-linux.png", // Linux specific icon for deb
            },
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {
                icon: "./icons/appicon-linux.png", // Linux specific icon for rpm
            },
        },
    ],
};
