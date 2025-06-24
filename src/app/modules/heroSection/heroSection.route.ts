import express from "express";
import { multerUpload } from "../../config/multer.config";
import { parseBody } from "../../middleware/bodyParser";
import validateRequest from "../../middleware/validateRequest";
import { HeroSecitonValidations } from "./heroSection.validation";
import { HeroSectionControllers } from "./heroSection.controller";

const router = express.Router();

router.post(
  "/create-hero-section",
  multerUpload.single("backgroundImage"),
  parseBody,
  validateRequest(HeroSecitonValidations.createHeroSectionSchema),
  HeroSectionControllers.createHeroSection
);
router.patch(
  "/:id",
  multerUpload.single("backgroundImage"),
  parseBody,
  validateRequest(HeroSecitonValidations.updateHeroSectionSchema),
  HeroSectionControllers.updateHeroSection
);
router.get('/', HeroSectionControllers.getHeroSection)

export const HeroSectionRoutes = router;
