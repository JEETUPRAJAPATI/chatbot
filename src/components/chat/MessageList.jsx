import ChatMessage from './ChatMessage';

export default function MessageList({ 
  messages, 
  editingMessageId,
  onEditMessage,
  onUpdateMessage,
  onCancelEdit
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          isEditing={message.id === editingMessageId}
          onEdit={onEditMessage}
          onSave={(content) => onUpdateMessage(message.id, content)}
          onCancel={onCancelEdit}
        />
      ))}
    </div>
  );
}