import React from 'react';
import { BotMessageSquare, CircleUserRound } from 'lucide-react';

type MessageSenderProps = {
  direction: 'incoming' | 'outcoming';
  children: React.ReactNode;
};
const MessageBox = ({ direction, children }: MessageSenderProps) => {
  return (
    <React.Fragment>
      {direction === 'incoming' && (
        <BotMessageSquare className="text-blue-500" />
      )}
      <div className="bg-blue-200 dark:bg-blue-700 w-64 h-auto min-h-9 rounded-xl p-2">
        {children}
      </div>
      {direction === 'outcoming' && (
        <CircleUserRound className="text-blue-500" />
      )}
    </React.Fragment>
  );
};

export { MessageBox };
