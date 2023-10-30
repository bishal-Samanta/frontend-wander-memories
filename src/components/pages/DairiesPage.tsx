import { useEffect, useState } from "react";
import { DairyData, getDairies } from "../../services/dairyServices";
import { DairyCard } from "../dairies/SingleDairyCard";

interface DairiesProps {}

export const Dairies: React.FC<DairiesProps> = () => {
  const [dairies, setDairies] = useState<DairyData[] | null>(null);

  useEffect(() => {
    getDairies()
      .then((res) => {
        setDairies(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Dairies Data</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dairies?.map((el) => {
          return <DairyCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};
