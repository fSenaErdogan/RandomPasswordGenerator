

const GreenSmoke =()=>{
    return(
        <>
            <div className=" flex absolute -right-10 top-1
                before:h-[50px] after:h-[110px] sm:after:w-[240px] -rotate-[35deg]
                after:bg-gradient-conic after:from-green-300 after:via-green-600 after:blur-3xl after:dark:from-green-800 after:dark:via-green-400 after:dark:opacity-80
                before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-500 before:dark:opacity-30">
            </div>
        </>
    )
}

export default GreenSmoke