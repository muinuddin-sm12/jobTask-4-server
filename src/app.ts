import cors from 'cors';
import express, {Application, NextFunction, Request, Response} from 'express';
import os from 'os';
import router from './app/router';
import { StatusCodes } from 'http-status-codes';
import globalErrorhandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app:Application = express();

// Middleware setup 
app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}));


// Application routes 
app.use("/api/v1", router)


// Test route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    const currentDateTime = new Date().toISOString();
    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const serverHostname = os.hostname();
    const serverPlatform = os.platform();
    const serverUptime = os.uptime();

    res.status(StatusCodes.OK).json({
        success: true,
        message: "Welcome to jobtask-4",
        version: "1.0.0",
        clientDetails: {
            ipAddress: clientIp,
            accessedAt: currentDateTime,
        },
        setverDetails: {
            hostname: serverHostname,
            platform: serverPlatform,
            upTime: `${Math.floor(serverUptime / 60 / 60)} hours ${Math.floor((serverUptime/60) % 60)} minutes`,
        },
        developerContact: {
            email: "muinuddin.sm12@gmail.com",
            website: "https://muindev.vercel.app"
        }
    })
});

app.use(globalErrorhandler);

//Not Found
app.use(notFound);

export default app;