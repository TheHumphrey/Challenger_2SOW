import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

import { UserFrom } from "../../";

const NewUserModal = () => {
  const [open, setOpen] = React.useState(false);

  const modalFuction = () => {
    setOpen(false);
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
