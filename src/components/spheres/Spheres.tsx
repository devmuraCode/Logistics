import Container from "../container/Container";
import cls from "./Spheres.module.scss";
const Spheres = () => {
  return (
    <div className={cls.wrapper}>
      <Container>
        <div>
          <div className={cls.content}>
            <h1 id="title" className="text-4xl pb-4 font-semibold ">
              СФЕРЫ ДЕЯТЕЛЬНОСТИ
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
              <div className={cls.item1}>
                <div>
                  <h1>01</h1>
                </div>
              </div>
              <div className={cls.item2}>
                <div>
                  <h1>02</h1>
                </div>
              </div>
              <div className={cls.item1}>
                <div>
                  <h1>03</h1>
                </div>
              </div>
              <div className={cls.item2}>
                <div>
                  <h1>04</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Spheres;
