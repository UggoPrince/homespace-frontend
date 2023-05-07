import { CustomButton as Button } from '../../components/Button';
import Modal from '../../components/Modal';
import CreateAgency from '../agency/form/createAgency';
import useModal from '../../components/Modal/useModal';
import { useAuth } from '../../auth/AuthProvider';

export const ProfileBody = (props) => {
  const {
    open, setOpen, handleOpen, handleClose,
  } = useModal();
  const { user } = useAuth();
  const { profile: { hasAgency } } = user;
  return (
    <div className="container hs-max-width-85">
      <div className="w-full">
        <div className="flex flex-col box-border px-2 sticky top-0 w-full">
          <div className="w-full pt-2 pb-1 px-3 font-semibold text-2xl text-slate-600">
            <h1>Agency</h1>
          </div>
          <div className="w-[100%] bg-slate-100 px-3 py-3 box-border flex flex-row place-content-end">
            <span className="order-last">
              <Button
                inactive={hasAgency}
                classname={`
                  bg-indigo-600
                  hover:bg-blue-600
                  focus:ring-purple-600
                  ${hasAgency ? 'cursor-not-allowed opacity-50' : ' cursor-pointer'}
                `}
                handleclick={(e) => handleOpen()}
                text="Create Agency"
                type="button"
              />
            </span>
          </div>
        </div>
      </div>
      <Modal
        header="Create Agency"
        open={open}
        handleClose={handleClose}
      >
        <CreateAgency
          handleClose={handleClose}
          modalIsOpen={open}
          // doneRefetching={doneRefetching}
          // setReFetchMyAgencies={setReFetchMyAgencies}
        />
      </Modal>
    </div>
  );
};
