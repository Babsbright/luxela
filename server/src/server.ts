import { AppConfig } from "./config/app.config";
import app from "./app";
import { exit } from "process";
import { InitializeDb } from "./config/firebase/config.firebase.";

const port = AppConfig.server.port;
app.listen(port, async () => {
    try {
        InitializeDb.getApp()
        console.log("server is running on this port: ", port);
    } catch (error) {
        console.error(error)
        return exit(0)
    }
})

