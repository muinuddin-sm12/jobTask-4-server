import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { HeroSectionRoutes } from "../modules/heroSection/heroSection.route";
const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/hero-section',
        route: HeroSectionRoutes
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;