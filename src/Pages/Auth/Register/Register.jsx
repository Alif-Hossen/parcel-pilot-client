import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import loginImg from "../../../assets/login_Reg/login.png";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const password = watch("password", "");

    const onSubmit = (data) => {
        registerUser(data.email, data.password)
            .then((res) => {
                console.log("User successfully created in Firebase:", res.user);
                reset();
            })
            .catch((error) => {
                console.error("Firebase Auth Error:", error.message);
            });
    };

    return (
        <section className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-5xl w-full bg-[#1e293b]/40 backdrop-blur-xl border border-[#334155]/60 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                
                {/* LEFT: Registration Form */}
                <div className="p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1 relative z-10">
                    <div className="mb-6 space-y-2">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Account</span>
                        </h2>
                        <p className="text-slate-400 text-sm font-normal">
                            Join us today! Please fill in your details to get started.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Full Name</label>
                            <div className="relative bg-[#0f172a]/60 border border-[#334155] rounded-xl focus-within:border-[#fef08a]/40 transition-all duration-200 overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none font-medium"
                                    {...register("name", { required: "Full name is required" })}
                                />
                            </div>
                            {errors.name && <p className="text-rose-500 text-xs font-medium pl-1">⚠ {errors.name.message}</p>}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Address</label>
                            <div className="relative bg-[#0f172a]/60 border border-[#334155] rounded-xl focus-within:border-[#fef08a]/40 transition-all duration-200 overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none font-medium"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                            </div>
                            {errors.email && <p className="text-rose-500 text-xs font-medium pl-1">⚠ {errors.email.message}</p>}
                        </div>

                        {/* File Choose Option (PC or Phone Upload) */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Choose Profile Picture</label>
                            <div className="relative bg-[#0f172a]/60 border border-[#334155] rounded-xl focus-within:border-[#fef08a]/40 transition-all duration-200 overflow-hidden">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full bg-transparent px-4 py-2.5 text-sm text-slate-400 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#fef08a] file:text-[#0f172a] hover:file:bg-[#fde047] cursor-pointer font-medium"
                                    {...register("photo", { required: "Profile picture file is required" })}
                                />
                            </div>
                            {errors.photo && <p className="text-rose-500 text-xs font-medium pl-1">⚠ {errors.photo.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Password</label>
                            <div className="relative bg-[#0f172a]/60 border border-[#334155] rounded-xl focus-within:border-[#fef08a]/40 transition-all duration-200 overflow-hidden">
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none font-medium"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Must be at least 6 characters long" },
                                    })}
                                />
                            </div>
                            {errors.password && <p className="text-rose-500 text-xs font-medium pl-1 leading-relaxed">⚠ {errors.password.message}</p>}
                        </div>

                        {/* Confirm Password Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Confirm Password</label>
                            <div className="relative bg-[#0f172a]/60 border border-[#334155] rounded-xl focus-within:border-[#fef08a]/40 transition-all duration-200 overflow-hidden">
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none font-medium"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) => value === password || "Passwords do not match",
                                    })}
                                />
                            </div>
                            {errors.confirmPassword && <p className="text-rose-500 text-xs font-medium pl-1">⚠ {errors.confirmPassword.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#fef08a] hover:bg-[#fde047] text-[#0f172a] text-sm font-bold py-3.5 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(254,240,138,0.1)] hover:shadow-[0_15px_25px_rgba(254,240,138,0.2)] flex items-center justify-center space-x-2 transform active:scale-[0.99]"
                        >
                            <span>Create Pilot Account</span>
                        </button>
                    </form>

                    {/* Form Footer */}
                    <p className="mt-6 text-center text-xs text-slate-400 font-medium">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#fef08a] font-bold hover:underline ml-1">
                            Sign In
                        </Link>
                    </p>
                </div>

                {/* RIGHT: Banner Image Container */}
                <div className="relative bg-[#0f172a]/40 border-b md:border-b-0 md:border-l border-[#334155]/40 flex items-center justify-center p-8 sm:p-12 order-1 md:order-2 bg-gradient-to-br from-[#1e293b]/20 to-transparent">
                    <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                    <img
                        src={loginImg}
                        alt="Register Vector"
                        className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] animate-pulse"
                        style={{ animationDuration: "4s" }}
                    />
                </div>

            </div>
        </section>
    );
};

export default Register;