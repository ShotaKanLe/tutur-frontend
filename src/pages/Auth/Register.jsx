import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-200 via-cyan-200 to-teal-200 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
                <div className='flex gap-5 w-full justify-between my-5'>
                    <div className='flex flex-col justify-center'>
                        {/* Logo */}
                        <div className="text-center mb-10">
                            <div className="text-6xl font-black text-cyan-600 mb-2">FunLingo</div>
                            <p className="text-gray-700 text-lg font-semibold">Join our learning adventure!</p>
                        </div>

                        {/* Character Mascot */}
                        <div className="flex justify-center mb-10">
                            <div className="relative w-40 h-40">
                                {/* Head */}
                                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-400 rounded-full border-4 border-white shadow-lg">
                                {/* Hair */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-28 h-10 bg-red-400 rounded-t-full border-4 border-white"></div>

                                {/* Eyes - Happy */}
                                <div className="absolute top-7 left-4 flex gap-3">
                                    <div className="w-6 h-6 bg-gray-900 rounded-full border-2 border-black">
                                    <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1"></div>
                                    </div>
                                    <div className="w-6 h-6 bg-gray-900 rounded-full border-2 border-black">
                                    <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1"></div>
                                    </div>
                                </div>

                                {/* Big Smile */}
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-5 border-4 border-gray-800 rounded-full border-t-0"></div>
                                </div>

                                {/* Arms raised */}
                                <div className="absolute top-16 -left-6 w-6 h-3 bg-orange-400 rounded-full border-2 border-white transform -rotate-45"></div>
                                <div className="absolute top-16 -right-6 w-6 h-3 bg-orange-400 rounded-full border-2 border-white transform rotate-45"></div>

                                {/* Stars */}
                                <div className="absolute top-0 left-0 text-2xl">⭐</div>
                                <div className="absolute top-2 right-0 text-2xl">✨</div>
                                <div className="absolute bottom-2 right-4 text-2xl">🌟</div>
                            </div>
                        </div>
                    </div>

                    {/* Register Card */}
                    <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8 border-4 border-cyan-300">
                        <form className="space-y-5">
                            {/* Full Name */}
                            <div>
                            <label className="block text-gray-800 font-bold text-sm mb-2">
                                👤 Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Learner"
                                className="w-full px-4 py-3 border-3 border-cyan-300 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-gray-800 font-semibold"
                            />
                            </div>

                            {/* Email */}
                            <div>
                            <label className="block text-gray-800 font-bold text-sm mb-2">
                                📧 Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 border-3 border-cyan-300 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-gray-800 font-semibold"
                            />
                            </div>

                            {/* Password */}
                            <div>
                            <label className="block text-gray-800 font-bold text-sm mb-2">
                                🔐 Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a strong password"
                                className="w-full px-4 py-3 border-3 border-cyan-300 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-gray-800 font-semibold"
                            />
                            </div>

                            {/* Confirm Password */}
                            <div>
                            <label className="block text-gray-800 font-bold text-sm mb-2">
                                ✅ Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 border-3 border-cyan-300 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-gray-800 font-semibold"
                            />
                            </div>

                            {/* Terms & Conditions */}
                            <label className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded mt-0.5" />
                            <span className="text-gray-700 font-semibold text-sm">
                                I agree to the <a href="#" className="text-cyan-500 font-bold hover:underline">Terms and Conditions</a> and <a href="#" className="text-cyan-500 font-bold hover:underline">Privacy Policy</a>
                            </span>
                            </label>

                            {/* Register Button */}
                            <button
                            type="submit"
                            className="w-full bg-linear-to-r from-cyan-500 to-teal-500 text-white font-black text-lg py-4 rounded-2xl hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg transform hover:scale-105 active:scale-95"
                            >
                            🎉 Create Account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
                            <span className="text-gray-600 font-bold text-sm">OR</span>
                            <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
                        </div>

                        {/* Social Register */}
                        <div className="space-y-3">
                            <button type="button" className="w-full border-3 border-gray-300 text-gray-800 font-bold py-3 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                            🍎 Sign up with Apple
                            </button>
                            <button type="button" className="w-full border-3 border-gray-300 text-gray-800 font-bold py-3 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                            🔵 Sign up with Google
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="text-center text-gray-700 mt-8 font-semibold">
                            Already have an account?{' '}
                            <Link to="/login" className="text-cyan-500 font-black hover:text-teal-600 underline">
                            Sign In
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Fun Footer */}
                <div className="text-center mt-8 text-gray-700 font-bold">
                    🌍 Start your language journey today! 🌍
                </div>
            </div>
        </div>
    );
}
