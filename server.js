const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 8080;


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