import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { BsChatLeftText } from 'react-icons/bs';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate('/new-chat');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 p-6 lg:p-12 text-white relative">
        <div className="mb-8 lg:mb-12">
          <h2 className="text-2xl font-bold">CHAT A.I+</h2>
        </div>
        
        <div className="space-y-6 lg:space-y-8">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Learn, Discover &<br />
            Automate in One Place.
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-xl">
            <div className="flex items-center gap-2 text-sm mb-2">
              <BsChatLeftText />
              <span>CHAT A.I +</span>
            </div>
            <p className="text-base lg:text-lg">Create a chatbot gpt using python language what will be step for that</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-xl">
            <p className="text-sm">Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:</p>
            <ol className="list-decimal ml-5 mt-4 space-y-2">
              <li>Install the required libraries: You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.</li>
              <li>Load the pre-trained model: GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model.</li>
            </ol>
          </div>
        </div>
        
        <div className="hidden lg:block absolute bottom-12 left-12 right-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 flex items-center">
            <input
              type="text"
              placeholder="Reply..."
              className="bg-transparent flex-1 outline-none text-white placeholder-white/70"
            />
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <IoSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Sign up with free trial</h2>
          <p className="text-gray-600 mb-6 lg:mb-8">Empower your experience, sign up for a free account today</p>
          
          <form onSubmit={handleGetStarted} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="ex. email@domain.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password*
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <p className="text-xs lg:text-sm text-gray-600">
              By registering for an account, you are consenting to our{' '}
              <a href="#" className="text-blue-600">Terms of Service</a> and confirming that you have reviewed and accepted the{' '}
              <a href="#" className="text-blue-600">Global Privacy Statement</a>.
            </p>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get started free
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="#" className="text-blue-600">Login</a>
              </p>
              
              <div className="my-4 text-sm text-gray-500">Or better yet...</div>
              
              <div className="space-y-3">
                <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <FaGoogle className="text-xl" />
                  Continue with Google
                </button>
                <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <FaApple className="text-xl" />
                  Continue with Apple
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}