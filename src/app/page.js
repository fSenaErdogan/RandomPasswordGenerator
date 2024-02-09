"use client"

import FuchsiaSmoke from "@/Components/FuchsiaSmoke";
import BlueSmoke from "@/Components/BlueSmoke";
import GreenSmoke from "@/Components/GreenSmoke";
import {useEffect, useState} from "react";
import Generate from "@/app/generate";

export default function Home() {

    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [password, setPassword] = useState("")
    const [passRange, setPassRange] = useState(8)
    const [checkNumber, setCheckNumber] = useState(0)
    const [checkUpperLetter, setCheckUpperLetter] = useState(0)
    const [checkLowerLetter, setCheckLowerLetter] = useState(0)
    const [checkSpecialLetter, setCheckSpecialLetter] = useState(0)

    useEffect(() => {
        if (message !== null) {
            const timeout = setTimeout(() => {
                setMessage(null);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [message]);

    return (
        <main className="w-1/3 h-screen flex flex-col gap-36 justify-center mx-auto">
            <div className="w-full text-center text-5xl pt-12 relative">
                <div className="bg-gradient-to-r text-transparent bg-clip-text text-clip-content
                 from-fuchsia-500 from-40%
                 via-blue-500 via-50%
                 to-green-500 to-60%">
                    PASS WORLD
                    <br/>
                    <code className=" text-3xl"> Random-Password-Generator </code>
                </div>
                <div className="grid place-content-center place-items-center w-full mt-4">
                    <div className={` fixed text-xl transition-all duration-700 ${message ? 'translate-y-10 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        {message && (
                            <>
                                {message === 1 && (
                                    <p className="text-green-600">
                                        Parolanız başarıyla kopyalandi
                                    </p>
                                )}
                                {message === 0 && (
                                    <p className="text-red-600">
                                        Bir Hata Oluştu
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </div>

            </div>

            <div className=" relative flex gap-8 place-items-center">
                <FuchsiaSmoke/>
                <BlueSmoke/>
                <GreenSmoke/>
                <Generate password={password} setPassword={setPassword} passRange={passRange}
                          checkUpperLetter={checkUpperLetter} checkLowerLetter={checkLowerLetter}
                          checkSpecialLetter={checkSpecialLetter} checkNumber={checkNumber} setError={setError}
                          setMessage={setMessage}/>

            </div>
            <div className=" rounded-[2.5rem]  ">
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <input type="range" className="w-full" min="8" max="30" value={passRange}
                               onChange={e => setPassRange(e.target.value)}/>
                        <p className="text-center mt-3">Seçilen Değer: {passRange}</p>
                    </div>
                    <div className="flex gap-10 items-center justify-center mt-5 text-xl">
                        <div className="flex">
                            <input type="checkbox" checked={checkUpperLetter}
                                   className=" w-fit h-6 w-6 "
                                   onChange={e => setCheckUpperLetter(e.target.checked)}/>
                            <span className="ml-2 text-white">ABC</span>
                        </div>
                        <div className="flex">
                            <input type="checkbox" checked={checkLowerLetter}
                                   className=" w-fit  h-6 w-6 "
                                   onChange={e => setCheckLowerLetter(e.target.checked)}/>
                            <span className="ml-2 text-white">abc</span>
                        </div>
                        <div className="flex">
                            <input type="checkbox" checked={checkSpecialLetter}
                                   className="w-fit  h-6 w-6 "
                                   onChange={e => setCheckSpecialLetter(e.target.checked)}/>
                            <span className="ml-2 text-white">+?%</span>
                        </div>
                        <div className="flex">
                            <input type="checkbox" checked={checkNumber}
                                   className=" w-fit  h-6 w-6 "
                                   onChange={e => setCheckNumber(e.target.checked)}/>
                            <span className="ml-2 text-white">123</span>
                        </div>
                    </div>
                    <div className="text-red-600 font-semibold text-center">
                        {error &&
                            <p>
                                En az 1 karakter seti secilmelidir.
                            </p>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
