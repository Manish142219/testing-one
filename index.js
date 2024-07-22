const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 2000; // Use the PORT environment variable if available
const hostname = "0.0.0.0"; // Listen on all network interfaces
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        return res.end(home);
    }
    if (req.url === "/about") {
        return res.end("<h1>This is your About page!</h1>");
    }
    if (req.url === "/contact") {
        return res.end("<h1>This is your Contact page!</h1>");
    }
    if (req.url === "/service") {
        return res.end("<h1>This is your Service page!</h1>");
    }
    return res.end("404 Page Not Found!");
});

server.listen(PORT, hostname, () => {
    console.log(`Server is working on port ${PORT}`);
});
