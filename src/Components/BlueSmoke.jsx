

const BlueSmoke =()=>{
    return(
        <>
            <div className="pointer-events-none flex absolute left-12 -top-20 rotate-[15deg]
                before:h-[350px] after:h-[190px] sm:after:w-[240px]
                after:bg-gradient-conic after:from-blue-300 after:via-blue-600 after:blur-3xl after:dark:from-blue-700 after:dark:via-blue-400 after:dark:opacity-80
                before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-500 before:dark:opacity-30">
            </div>
        </>
    )
}

export default BlueSmoke