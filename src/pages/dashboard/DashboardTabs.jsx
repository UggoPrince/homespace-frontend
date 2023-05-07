import { IoIosPeople, IoIosHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';
import { activePaths } from '../../Utils/paths';

const { dashboard } = activePaths;

const Card = ({
  Icon, text, to, setActive,
}) => {
  const { setIsActive } = setActive;
  return (
    <Link
      to={to}
      className="
    w-[90%]
    max-w-[300px]
    h-[200px]
    shadow-lg
    rounded
    flex
    flex-col
    items-center
    place-content-center
    content-evenly
    text-indigo-400
    hover:text-indigo-500
    cursor-pointer
    box-border
    shadow-slate-300 border-t border-slate-200"
      onClick={() => setIsActive(dashboard)}
    >
      <Icon className="text-6xl text-slate-600" />
      <div className=" inline text-xl font-semibold">{text}</div>
    </Link>
  );
};

export const DashboardTabs = () => {
  const { setIsActive } = useAuth();
  return (
    <div className="h-[80%]
    flex
    flex-row
    flex-wrap
    justify-evenly my-auto items-center"
    >
      <Card
        Icon={IoIosPeople}
        text="Agencies"
        to="agency"
        setActive={{ setIsActive }}
      />
      <Card
        Icon={IoIosHome}
        text="Properties"
        to="properties"
        setActive={{ setIsActive }}
      />
    </div>
  );
};
