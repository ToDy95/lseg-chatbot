'use client';

import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useEffect,
} from 'react';
import { MessageLayout } from './message';
import { Message } from '@/redux/reducers/message';

type ChatBodyProps = {
  messages: Message[];
};

export interface ChatBodyHandle {
  scrollToBottom: () => void;
}

const ChatBody = forwardRef<ChatBodyHandle, ChatBodyProps>(
  ({ messages }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      scrollToBottom: () => {
        if (innerRef.current) {
          innerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      },
    }));

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }, [messages]);

    return (
      <div className="h-full custom-scrollbar overflow-auto p-4 flex-1">
        {messages.length > 0 &&
          messages.map((msg, index) => (
            <MessageLayout
              key={index}
              index={index}
              message={msg.message}
              direction={msg.direction}
              options={msg.options}
            />
          ))}
        <div ref={innerRef} />
      </div>
    );
  }
);

ChatBody.displayName = 'ChatBody';

export default ChatBody;
