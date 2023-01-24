import React from "react";
import { Carousel } from "flowbite-react";
function SlideTop() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border shadow my-6   w-[90%] ml-[5%]">
      <Carousel className="bg-gray-200">
        {/* slide1 */}
        <div className="grid  grid-cols-2 ml-[100px]  ">
          <div className="mb-[1px] ">
            <h1 className="text-2xl mt-[50px] ">Bootcamp Regular</h1>
            <h3>
              Bootcamp reguler dilakukan secara offline di sentul bogor <br />{" "}
              kamu akan diisolasi disana selama 3 bulan, makan gratis 3x,
              menginap gratis
              <br /> dan kamu bisa belajar bareng bersama mentor dan teman2mu
            </h3>
          </div>
          <div className="mr-[170px] mt-[10px]">
            {/* gambar slide 1 */}
            <img
              className="w-auto h-auto  border shadow my-6"
              src="http://localhost:3000/assets/images/codeid.png"
            />
          </div>
        </div>

        {/* slide2 */}
        <div className="grid  grid-cols-2 ml-[100px]  ">
          <div className="mb-[18px]">
            <h1 className="text-2xl mt-[50px]">Bootcamp Online</h1>
            <h3>
              Bootcamp Online dilakukan secara online dan diguide by mentor,
              kamu akan <br /> belajar dari senin-jumat, dari jam 8.00-17.00
              Materi selain diajarkan mentor,akan
              <br /> di provide juga materi video
            </h3>
          </div>

          <div className="mr-[170px] mt-[10px] ">
            <img
              className="w-auto h-auto border shadow my-6 "
              src="http://localhost:3000/assets/images/codeid.png"
            />
          </div>
        </div>
        {/* slide3 */}
        <div className="grid  grid-cols-2 ml-[100px]  ">
          <div className="mb-[18    0px]">
            <h1 className="text-2xl mt-[50px] ">Bootcamp Corporate</h1>
            <h3>
              Bootcamp Corporate adalah bootcamp spesial, artinya kamu akan
              langsung di
              <br /> placement ketika baru masuk bootcamp, tapi filtering test
              nya sanglatlah strict,
              <br />
              karena yang melakukan filtering test adalah client corporate
            </h3>
          </div>

          <div className="mr-[170px] mt-[10px] ">
            <img
              className="w-auto h-auto border shadow my-6"
              src="http://localhost:3000/assets/images/codeid.png"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SlideTop;
