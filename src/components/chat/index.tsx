'use client';
import React from 'react';
import { Send } from 'lucide-react';
import { Loader } from '@/components/common/loader';
import { delay } from '@/utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, setTyping } from '@/redux/reducers/messageSlice';
import {
  messagesSelector,
  exchangesSelector,
  typingSelector,
} from '@/redux/selectors/messageSelectors';
import { Message } from '@/redux/reducers/message';
import { MessageLayout } from '@/components/chat/message';
import { AppDispatch } from '@/redux/store';

const ChatBot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector(messagesSelector);
  const exchanges = useSelector(exchangesSelector);
  const typing = useSelector(typingSelector);
  const ref = React.useRef<HTMLDivElement>(null);

  const addMsg = React.useCallback(async () => {
    if (!exchanges || exchanges.length === 0) {
      await delay(500);
      addMsg();
      return;
    }
    dispatch(setTyping());
    await delay(2000);
    const newMsg: Message = {
      message: 'Please select a stock exchange:',
      sendTime: 'just now',
      sender: 'LSEG BOT',
      direction: 'incoming',
      options: exchanges,
    };
    dispatch(setMessage(newMsg));
    dispatch(setTyping());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  React.useEffect(() => {
    addMsg();
  }, [addMsg]);

  React.useEffect(() => {
    if (messages.length > 0 && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages.length]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 ">Chat BOT</h1>
      <div className="min-w-[30rem] max-w-4xl w h-[60vh] overflow-auto  border rounded-lg shadow-lg  flex flex-col p-1">
        <div className="h-full custom-scrollbar overflow-auto p-4 flex-1">
          {messages.length > 0 &&
            messages.map((msg, index) => {
              return (
                <MessageLayout
                  key={index}
                  index={index}
                  message={msg.message}
                  direction={msg.direction}
                  options={msg.options}
                />
              );
            })}
          <div ref={ref} />
        </div>
        {typing && <Loader />}
        <div className="flex gap-2 p-4 border-t">
          <input
            className="flex-1 border rounded-lg p-2"
            type="text"
            placeholder="Type any question here ..."
          />
          <button className="bg-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-600">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
