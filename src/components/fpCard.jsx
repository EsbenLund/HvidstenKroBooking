
export default function FpCard({img, title}) {
    return (
        <main className="flex flex-col w-full justify-center  ">
            <div className="text-black w-3/4 rounded-2xl bg-red-800 h-52">
                <img src={img}/>
                <p className="">{title}</p>
            </div>
        </main>
    )
}