import { useForm } from "react-hook-form";
import { Link } from "react-router";
import loginImg from "../../../assets/login_Reg/login.png";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const { signInUser } = useContext(AuthContext);

    const onSubmit = async (data) => {
        console.log(data);
        signInUser(data.email, data.password)
            .then((res) => {
                console.log("User successfully signed in:", res.user);
                reset();
            })
            .catch((error) => {
                console.error("Firebase Auth Error:", error.message);
            });
    };

    return (
        <section className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-5xl w-full bg-[#1e293b]/40 backdrop-blur-xl border border-[#334155]/60 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                
                <div className="p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1 relative z-10">
                    <div className="mb-8 space-y-2">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Back</span>
                        </h2>
                        <p className="text-slate-400 text-sm font-normal">
                            Welcome back! Please enter your details to access your dashboard.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Email Address
                            </label>
                            <div className="relative bg-[#0f172a]/60 border border-[#334155] rounded-xl focus-within:border-[#fef08a]/40 transition-all duration-200 overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none font-medium"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            // value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-rose-500 text-xs font-medium flex items-center gap-1 pl-1">
                                    ⚠ {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Password
                                </label>
                                <Link to="/forgot-password" className="text-xs font-semibold text-[#fef08a] hover:underline transition-all">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative bg-[#0f172a]/60 border border-[#334155] rounded-xl focus-within:border-[#fef08a]/40 transition-all duration-200 overflow-hidden">
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none font-medium"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Must be at least 6 characters long",
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                            message: "Must contain uppercase, lowercase, and special character",
                                        },
                                    })}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-rose-500 text-xs font-medium flex items-center gap-1 pl-1 leading-relaxed">
                                    ⚠ {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center space-x-2 pt-1">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-[#fef08a] focus:ring-0 focus:ring-offset-0"
                            />
                            <label id="remember" className="text-xs font-medium text-slate-400 select-none cursor-pointer">
                                Remember this device
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#fef08a] hover:bg-[#fde047] text-[#0f172a] text-sm font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(254,240,138,0.1)] hover:shadow-[0_15px_25px_rgba(254,240,138,0.2)] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-[#0f172a] border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <span>Sign In to Pilot</span>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs text-slate-400 font-medium">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-[#fef08a] font-bold hover:underline ml-1">
                            Create Account
                        </Link>
                    </p>
                </div>

                <div className="relative bg-[#0f172a]/40 border-b md:border-b-0 md:border-l border-[#334155]/40 flex items-center justify-center p-8 sm:p-12 order-1 md:order-2 bg-gradient-to-br from-[#1e293b]/20 to-transparent">
                    <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                    
                    <img
                        src={loginImg}
                        alt="Login Vector"
                        className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] animate-pulse"
                        style={{ animationDuration: "4s" }}
                    />
                </div>

            </div>
        </section>
    );
};

export default Login;