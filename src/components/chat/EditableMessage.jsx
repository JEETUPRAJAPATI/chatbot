import { useState, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';

export default function EditableMessage({ message, onSave, onCancel }) {
  const [editedContent, setEditedContent] = useState(message.content);

  useEffect(() => {
    setEditedContent(message.content);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedContent);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          <IoSend className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}