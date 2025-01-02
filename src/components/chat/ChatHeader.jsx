import { IoAdd } from 'react-icons/io5';

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <h1 className="text-xl font-bold">CHAT A.I+</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
        <IoAdd /> New chat
      </button>
    </div>
  );
}