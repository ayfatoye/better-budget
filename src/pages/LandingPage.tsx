import { useNavigate } from "react-router-dom";
import {supabase} from "../../supabase-config";


async function handleSignIn() {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const email = emailInput?.value;
    const password = passwordInput?.value;

    const navigate = useNavigate();

    const {data: signUpData, error: signUpError} = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if(!signUpError) {
        console.log("Sign up successful: ", signUpData.user?.email);
        navigate('/envelopes');
        return signUpData.user;
    }

    // console.error("Sign up error: ", signUpError);
    // console.log("Sign up error message2: ", signUpError.message);

    if (signUpError.message.includes("User already registered")){
        console.log("the user is already registered");

        const {data: signInData, error: signInError} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if(!signInError){
            console.log("Sign in successful: ", signInData.user?.email);
            navigate('/envelopes');
            return signInData?.user;
        }
    }
}


function LandingPage() {

    return (
        <div style={{backgroundColor: "#C8A3D8"}} className="w-screen h-screen flex justify-center items-center">
            <div style={{backgroundColor: "#EAD9D9"}} className="rounded-2xl w-[90vw] h-[40vh] md:w-[40vw] md:h-[40vh] xl:w-[30vw] xl:h-[40vh] overflow-y-auto">
                <img src="/logo.svg" alt="Logo" className="w-[30%] h-[30%] mx-auto mt-2 mb-2"/>
                <div className="mt-3">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full">
                            <label style={{color: "#33186B"}} className="font-poppins items-start ml-[9%] text-">Email</label>
                        </div>
                            <input className="font-poppins bg-white w-[80%] text-black" type="text" id="email"  placeholder=" example@gmail.com" required />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full">
                            <label style={{color: "#33186B"}} className="font-poppins items-start ml-[9%]">Password</label>
                        </div>
                            <input className="font-poppins bg-white w-[80%] text-black" type="text" id="password"  placeholder=" please don't use the word &quot;password&quot;" required />

                            <button type="button" onClick={handleSignIn} style={{backgroundColor: "#7E4E92"}} className="font-poppins mt-[5%] w-[75%] py-2">Log In/Sign Up</button>
                            <p style={{color: "#000000"}} className="font-poppins items-center mt-1">Forgot Password</p>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage;