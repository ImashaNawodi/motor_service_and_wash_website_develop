import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Typography, DialogHeader, DialogBody } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import ManageReservations from "./ManageReservations";

export default function ApprovalForm() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [Status, setStatus] = useState("");
  const statuses = ["Pending", "Approved", "Rejected"];
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/reservation/preview-reservation/${id}`)
      .then((response) => {
        const userData = response.data;
        console.log("Fetched user data:", userData);
        setStatus(userData.status);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred. Please check the console.", {
          variant: "error",
        });
        console.error(error);
      });
  }, [id, enqueueSnackbar]);

  const handleOutsideClick = () => {
    setOpen(false);
    navigate("/reservation/view-reservations");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/reservation/view-reservations");
  };

  const handleUpdateStatus = (e) => {
    e.preventDefault();
    const newStatus = {
      Status,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/approval/updateStatus/${id}`, newStatus)
      .then(() => {
        setLoading(false);
        alert("Status is Updated");
        navigate("/reservation/view-reservations");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error updating status,Try again");

        console.error(error);
      });
  };

  return (
    <div>
      <ManageReservations />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          onClose={handleClose}
          initialFocus={cancelButtonRef}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="sm:flex sm:items-start">
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <DialogHeader className="grid place-items-center">
                      <Typography
                        variant="h5"
                        color="red"
                        className="text-center"
                      >
                        <h4>Approve Customer Reservation</h4>
                      </Typography>
                    </DialogHeader>
                    <DialogBody divider className="grid place-items-center">
                      <img
                        src="https://www.bitdefender.com/images/Knowledge%20Base%20SMB/admonitions/important.png"
                        alt=""
                        className="max-w-24 h-24 md:max-w-md lg:max-w-24 md:h-24 w-24"
                      />
                      <Typography className="mt-1 mb-2" variant="h6">
                        Are you sure to approve?
                      </Typography>
                      <Typography className="mt-3 mb-2" variant="h6">
                        Choose Action:
                      </Typography>
                      <div>
                        <select
                          value={Status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="bg-white border border-gray-200 rounded py-1 px-6 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        >
                          <option value="">Update your status</option>
                          {statuses.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </DialogBody>
                    <div className="mt-2 flex justify-center">
                      <Button
                        onClick={handleOutsideClick}
                        style={{
                          marginRight: "10px",
                          backgroundColor: "blue",
                          color: "white",
                        }}
                      >
                        No
                      </Button>
                      <Button
                        onClick={handleUpdateStatus}
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        Yes
                      </Button>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
