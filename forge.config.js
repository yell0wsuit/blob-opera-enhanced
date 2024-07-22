module.exports = {
    packagerConfig: {
        icon: "./app/icons/appicon",
        ignore: [
            "^/\\.github$", // Ignore the .github directory
            "^/venv$", // Ignore the venv directory
            "^/node_modules$", // Ignore the node_modules directory
            "^/\\.vscode$", // Ignore .vscode if exists
            "^/tests$", // Ignore tests directory if exists
            "^/scripts$", // Ignore scripts directory if exists
            "^/\\..*$", // Ignore any dotfiles (e.g., .gitignore, .eslintrc, etc.)
            "^/README.md$", // Ignore README.md file
            "^/package-lock.json$", // Ignore package-lock.json file
        ],
        files: [
            {
                from: "./app",
                to: "./",
                filter: ["**/*"],
            },
        ],
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
            platforms: ["linux", "win32"],
        },
        {
            name: "@electron-forge/maker-dmg",
            config: {
                icon: "./app/icons/appicon-macos.icns", // macOS specific icon
                format: "ULFO",
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
