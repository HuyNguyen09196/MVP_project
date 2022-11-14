module.exports = {
    dev: {
        apiUrl: "http://localhost:",
        port: 4321
    },
    production: {
        apiUrl: process.env.API_URL,
        port: process.env.port
    }
}