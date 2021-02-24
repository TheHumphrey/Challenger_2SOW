import React from "react";
import { Button, Modal } from "semantic-ui-react";

import { toast } from "react-semantic-toasts";

import { UserFrom } from "../../";
import { User } from "../../../types/User";

interface Props {
  user: User;
}

const NewUserModal = ({ user }: Props) => {
  const [open, setOpen] = React.useState(false);

  const modalFuction = () => {
    setOpen(false);

    toast({
      type: "success",
      icon: "envelope",
      title: "User Update",
      description: "User update with success!",
      animation: "drop",
      time: 3000,
    });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="blue">Edit</Button>}
    >
      <Modal.Header>Edit User</Modal.Header>
      <Modal.Content>
        <UserFrom callback={modalFuction} type="edit" user={user} />
      </Modal.Content>
    </Modal>
  );
};

export default NewUserModal;
