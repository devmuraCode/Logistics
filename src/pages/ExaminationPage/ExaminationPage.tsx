import Headers from "@/components/headers/Headers";
import Examination from "@/components/examination/Examination";
import Documents from "@/components/Documents/Documents";
import Info from "@/components/info/Info";

const ExaminationPage = () => {
  return (
    <div>
      <Headers />
      <Examination />
      <Documents/>
      <Info/>
    </div>
  );
};

export default ExaminationPage;
