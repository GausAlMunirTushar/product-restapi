const app = require('./app');
const PORT = 5000;


const server = async () => {
    try {
        await app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
}
server();