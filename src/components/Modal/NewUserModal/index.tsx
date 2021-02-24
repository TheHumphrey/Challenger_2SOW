import React from "react";
import { Button, Modal } from "semantic-ui-react";

import { toast } from "react-semantic-toasts";

import { UserFrom } from "../../";

const NewUserModal = () => {
  const [open, setOpen] = React.useState(false);

  const modalFuction = () => {
    setOpen(false);

    toast({
      type: "success",
      icon: "envelope",
      title: "User Created",
      description: "User create with success!",
      animation: "drop",
      time: 5000,
    });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="green">Create New User</Button>}
    >
      <Modal.Header>Create New User</Modal.Header>
      <Modal.Content>
        <UserFrom callback={modalFuction} />
      </Modal.Content>
    </Modal>
  );
};

export default NewUserModal;
