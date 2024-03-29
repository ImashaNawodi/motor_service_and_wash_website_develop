const router = require("express").Router();
const {
  create,
  updateReservation,
  viewReservations,
  deleterReservation,
  previewReservation,
} = require("../controllers/reservation");

//onst requireAuth = require("../middleware/requireAuth");
//require auth for all reservations
//router.use(requireAuth);

// Add resrvation create route
router.post("/create", create, (req, res) => {
  console.log("Received a request to create a user:", req.body);
  create(req, res);
});
// virw all reservation
router.get("/view-reservations", viewReservations);
router.get("/preview-reservation/:id", previewReservation);
router.put("/update/:id", updateReservation);
router.delete("/delete/:id", deleterReservation);
// add signIn route
//router.post("/signIn",signInValidator, validate, signIn);
//Add forget Password route

module.exports = router;
