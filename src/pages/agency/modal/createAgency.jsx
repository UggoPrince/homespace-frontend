import Modal from '../../../components/Modal';
import CreateAgencyForm from '../form/createAgency';

const header = 'Create Agency';

export default (props) => {
  const { open, handleClose } = props;
  return (
    <Modal open={open} handleClose={handleClose} header={header}>
      <CreateAgencyForm handleClose={handleClose} />
    </Modal>
  );
};
