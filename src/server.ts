import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`🍃 Database Connected Successfully !`);

        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        });
    } catch (error) {
        console.log(`Failed to Connect Database`, error);
    }
}


main();