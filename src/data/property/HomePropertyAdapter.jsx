import PropertyCard from '../../components/PropertyCard';
import Pager from '../../components/SearchPaginator';
import { displayCardDetails } from '../../Utils/EventHandlers';

export default (props) => {
  const {
    properties, count, number, loading, data, offset,
  } = props;
  const returnPropCard = (propObj) => (
    <div key={propObj.id} onClick={(e) => displayCardDetails(e, propObj, number)} className="cursor-pointer">
      <PropertyCard property={propObj} />
    </div>
  );
  const propertiesInDom = properties.map((propObj) => returnPropCard(propObj));
  let pageIndex = 0;
  if (!loading && data) {
    pageIndex = (offset / 10) + 1;
  }
  const isPage1 = pageIndex === 1;
  let itemCount = <div>{`Page ${pageIndex} of ${count} results`}</div>;
  if (isPage1) itemCount = <div>{`About ${count} results`}</div>;

  return (
    <div>
      <div className="w-auto mb-10 text-lg">
        {itemCount}
      </div>
      <div className="flex flex-row flex-wrap gap-10 lg:justify-between justify-evenly w-auto">
        {propertiesInDom}
      </div>
      <div className="mt-16 w-full">
        <Pager counted={count} offset={offset} />
      </div>
    </div>
  );
};
