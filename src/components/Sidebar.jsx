import { IoAdd, IoClose } from 'react-icons/io5';
import Settings from './Settings';
import UserProfile from './sidebar/UserProfile';
import ConversationList from './sidebar/ConversationList';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed top-0 left-0 h-screen bg-white z-50 w-64
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-0
      `}>
        <div className="flex flex-col h-full">
          <div className="p-3">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold">CHAT A.I+</h2>
              <button 
                onClick={onClose}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
              >
                <IoClose />
              </button>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 mb-4">
              <IoAdd /> New chat
            </button>

            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Your conversations</span>
              <button className="text-blue-600 text-xs">Clear All</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <ConversationList />
          </div>

          <div className="p-3 border-t">
            <Settings />
            <UserProfile />
          </div>
        </div>
      </aside>
    </>
  );
}