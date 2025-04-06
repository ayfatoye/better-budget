// import logo from "../assets/logo.svg";


function LandingPage() {

    return (
        <div style={{backgroundColor: "#C8A3D8"}} className="w-screen h-screen flex justify-center items-center">
            <div style={{backgroundColor: "#EAD9D9"}} className="w-[90vw] h-[40vh] md:w-[40vw] md:h-[40vh] xl:w-[30vw] xl:h-[40vh] ">
                <img src="/logo.svg" alt="Logo" className="w-[30%] h-[30%] mx-auto mt-2 mb-2"/>
                <div className="mt-20">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full">
                            <label className="font-poppins items-start ml-[9%]">Email</label>
                        </div>
                            <input className="bg-white w-[80%]" type="text" id="email"  placeholder="John" required />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full">
                            <label className="font-poppins items-start ml-[9%]">Password</label>
                        </div>
                            <input className="bg-white w-[80%]" type="text" id="password"  placeholder="John" required />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;