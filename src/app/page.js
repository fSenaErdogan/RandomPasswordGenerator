import FuchsiaSmoke from "@/Components/FuchsiaSmoke";
import BlueSmoke from "@/Components/BlueSmoke";
import GreenSmoke from "@/Components/GreenSmoke";


export default function Home() {
  return (
      <main className=" w-full h-screen">

          <div className="w-full text-center text-5xl pt-10 relative">
              <div className="bg-gradient-to-r text-transparent bg-clip-text text-clip-content
              from-fuchsia-500 from-40%
              via-blue-500 via-50%
              to-green-500 to-60%">
                  PASS WORLD
              </div>
          </div>
          <div className="flex gap-5 flex-row relative w-full h-[90%] items-center justify-between place-items-center ">

              <div className="mx-20 w-full h-full flex flex-row">
                  <div className="w-1/2 m-auto relative flex place-items-center">
                      <FuchsiaSmoke/>
                      <BlueSmoke/>
                      <GreenSmoke/>
                      <input type="text"
                             className="w-4/5 h-16 outline-0 m-auto bg-white/30 rounded-full px-6 text-3xl font-light z-50"/>
                      <button className="h-16 bg-white/30 rounded-full px-10">Copy</button>
                  </div>
                  <div className="w-1/2  border border-white/20 rounded-[2.5rem] ms-16 my-10">

                  </div>
              </div>
          </div>
      </main>
  );
}
