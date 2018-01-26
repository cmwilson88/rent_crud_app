module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
    },
    "plugins": [
        "react"
    ],
    "extends": ["airbnb-base", "plugin:react/recommended"],
    "rules": {
        "comma-dangle": 0,
        "no-underscore-dangle": [
            "error", 
            { "allow": 
                ["__REDUX_DEVTOOLS_EXTENSION__"] 
            }
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ]
    },
    "env": {
        "browser": true,
        "jest": true
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.4.2"
        }
    }
}