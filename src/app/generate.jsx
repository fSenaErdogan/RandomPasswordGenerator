import {TbReload} from "react-icons/tb";
import {error} from "next/dist/build/output/log";


const Generate = ({
                      password,
                      setPassword,
                      passRange,
                      checkLowerLetter,
                      checkUpperLetter,
                      checkSpecialLetter,
                      checkNumber,
                      setError,
                      setMessage
                  }) => {

    const passwordGenerate = () => {

        let finalText = ""

        const passLength = parseInt(passRange)

        const upperCaseLetter = "QWERTYUIOPASDFGHJKLZXCVBNM";
        const lowerCaseLetter = "qwertyuiopasdfghjklzxcvbnm";
        const numbers = "0123456789";
        const specialCharacters = ",./<>?;':\"[]{}\\|`~!@#$%^&*()_+";

        if (checkLowerLetter) {
            finalText += lowerCaseLetter
        }
        if (checkUpperLetter) {
            finalText += upperCaseLetter
        }
        if (checkNumber) {
            finalText += numbers
        }
        if (checkSpecialLetter) {
            finalText += specialCharacters
        }

        if (finalText === "") {
            return setError(1)
        }

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let finalPassword = ""

        for (let i = 0; i < passLength; i++) {
            let randomNumber = getRandomNumber(0, finalText.length - 1);
            finalPassword += finalText[randomNumber]
            console.log(finalPassword)
        }
        setPassword(finalPassword)

    }

    const copier = () => {
        if (password) {
            navigator.clipboard.writeText(password)
                .then(() => {
                    setMessage(1)
                })
                .catch(err => {
                    setMessage(0)
                });
        }
    };

    return (
        <>
            <div className="w-4/5 relative">
                <input type="text" value={password} onChange={e => setPassword(e.target.value)}
                       className=" w-full h-16 outline-0 m-auto bg-white/30 rounded-full px-6 text-3xl font-light z-50"/>
                <button
                    className="h-12 w-12 bg-black/50 hover:bg-black/70 transition-all duration-500 rounded-full absolute right-2 top-2 grid place-content-center"
                    onClick={passwordGenerate}>
                    <TbReload className="md:text-2xl text-xl"/>
                </button>
            </div>
            <button onClick={copier} className="h-16 bg-white/30 rounded-full px-10">Copy</button>
        </>
    )
}


export default Generate