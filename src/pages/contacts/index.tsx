// Import necessary components and modules from various files and packages.
import Button from "@/common/Button";
import Title from "@/common/Title";
import Typography from "@/common/Typography";
import iconComponents from "@/assets/iconComponents";
import AllContacts from "./components/AllContacts";
import { useToggleState } from "@/hooks/useToggleState";
import { useState } from "react";
import CreateOrUpdateContact, {
  IValues,
} from "./components/CreateOrUpdateContact";
import DeleteContact from "./components/DeleteContact";

// Define the Contacts functional component.
const Contacts = () => {
  // Set up state and custom hooks to manage modal toggling and selected contact.
  const [contact, setContact] = useState<IValues>();
  const {
    close: closeModal,
    open: openModal,
    state: isModalOpen,
  } = useToggleState();

  const {
    close: closeDelete,
    open: openDelete,
    state: isDeleteOpen,
  } = useToggleState();

  // Helper function to unselect a contact and close a modal.
  const unSelectItem = (callbackFn: () => void) => () => {
    setContact(undefined);
    callbackFn();
  };

  // Render the main layout of the Contacts component.
  return (
    <div className="w-full bg-contact-shades-bg px-6 pb-8 flex flex-col gap-4 justify-start items-start">
      <header className="flex justify-between items-center w-full">
        <Typography className="md: sm:h4 lg:text-[28px] capitalize lg:leading-[40px] text-contact-shades-gray-2 hover:text-contact-shades-black font-semibold sm:font-medium">
          Contacts
        </Typography>
        <Button
          label={
            <>
              <span className="hidden md:inline-block">Create New Contact</span>
              <span className="md:hidden">
                <iconComponents.dashboard.AddIcon className="w-5 h-5 stroke-white" />
              </span>
            </>
          }
          className="-mt-1 !uppercase !w-12  md:!w-auto"
          onClick={openModal}
        />
        <Title>{"Contact App - Contacts"}</Title>
      </header>
      <main className="w-full flex flex-col">
        {/* Display the All Contact Table */}
        <AllContacts
          setContact={setContact}
          createOrUpdateContact={openModal}
          deleteContact={openDelete}
        />
      </main>

      {/* Modal to Create or Update existing contact detail */}
      <CreateOrUpdateContact
        open={isModalOpen}
        onClose={unSelectItem(closeModal)}
        data={contact}
      />

      {/* Modal for deleting a contact */}
      <DeleteContact
        open={isDeleteOpen}
        onClose={unSelectItem(closeDelete)}
        data={contact}
      />
    </div>
  );
};
// Export the Contacts component as the default export of this module.
export default Contacts;
