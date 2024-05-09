function parseBody(req) {
    return new Promise((resolve) => {
        let body="";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            resolve(body);
            
        })
        req.on("error", (error) => {
            resolve(error, null);
        }
        );
    });
}

module.exports = parseBody;