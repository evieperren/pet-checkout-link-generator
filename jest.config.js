module.exports = {   
    "roots": [
        "./src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(scss|sass|css)$": "identity-obj-proxy"
    },
    transformIgnorePatterns: ['./node_modules/'],
    
}
// module.exports = {
//     collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
//     testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"],
//     "moduleNameMapper": {
//          "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
//         "\\.(scss|sass|css)$": "identity-obj-proxy"
//    },
//     transform: {
//         "^.+\\.(js|jsx|mjs|tsx)$": "ts-jest"
//     },
//     transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
// };