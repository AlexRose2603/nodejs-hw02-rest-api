const express = require("express");

const router = express.Router();

const controller = require("../../controllers/contacts");

const { validator, isValidId, authentication } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authentication, controller.listContacts);

router.get("/:id", authentication, isValidId, controller.getContactById);

router.post(
  "/",
  authentication,
  validator(schemas.objectStructure),
  controller.addContact
);

router.put(
  "/:id",
  authentication,
  isValidId,
  validator(schemas.objectStructure),
  controller.updateContact
);

router.patch(
  "/:id/favourite",
  authentication,
  isValidId,
  validator(schemas.updateFavouriteSchema),
  controller.updateFavourite
);

router.delete(
  "/:id",
  authentication,
  isValidId,
  isValidId,
  controller.removeContact
);

module.exports = router;
