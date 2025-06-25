import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { HeroSectionRoutes } from "../modules/heroSection/heroSection.route";
import { ServiceSectionRoutes } from "../modules/serviceSection/serviceSection.route";
import { ContactRoutes } from "../modules/contact/contact.route";
const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/hero-section',
        route: HeroSectionRoutes
    },
    {
        path: '/service-section',
        route: ServiceSectionRoutes
    },
    {
        path: '/contacts',
        route: ContactRoutes
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;