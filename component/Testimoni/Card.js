export default function Card({name, desc, src, work}) {
    return (
        <div className={"rounded-xl justify-center boxShadow group"}>
            <div
                className="left-side w-full h-full border-2 rounded-lg transition-all duration-500 transform group-hover:scale-125">
                <p className={"px-7 py-3 italic"}>
                    {`"`}{desc}{`"`}
                </p>
                <div className={"flex px-7 mb-5"}>
                    <img
                        src={src}
                        alt="Photo profile"
                        className={"rounded-full w-[70px] h-[70px] mr-7"}
                    />
                    <div className={"py-3"}>
                        <h1 className={"text-xl font-medium"}>
                            {name}
                        </h1>
                        <p className={"text-md text-blackContent opacity-75 font-light"}>
                            {work}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
