module.exports = {
    apps: [
        {
            name: 'social-app',
            script: 'dist/server.js',
            instances: 1,
            autorestart: true,
            watch: false,
            env_local: {
                NODE_ENV: 'local',
            },
        },
    ],
};