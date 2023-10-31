import { useEffect, useContext } from "react";
import {  getDairies } from "../../services/dairyServices";
import { DairyCard } from "../dairies/SingleDairyCard";
import { AppContext, AppContextType } from "../../context/AppContextProvider";
import { getAllDairies } from "../../reducer/actionCreators";


interface DairiesProps {}

export const Dairies: React.FC<DairiesProps> = () => {
  const {state , dispatch} = useContext<AppContextType>(AppContext);

  // const [dairies, setDairies] = useState<DairyData[] | null>(null);

  useEffect(() => {
    getDairies()
      .then((res) => {
        dispatch(getAllDairies( res.data.data ))
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Dairies Data</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {state.dairies?.map((el) => {
          return <DairyCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};
