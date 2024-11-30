'use client';
import React from 'react';
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
import { AppDispatch } from '@/redux/store';
import { MessageSender } from './sender';
import ChatBody, { ChatBodyHandle } from './chat-body';

const ChatBot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector(messagesSelector);
  const exchanges = useSelector(exchangesSelector);
  const typing = useSelector(typingSelector);
  const scrollRef = React.useRef<ChatBodyHandle>(null);

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
    if (scrollRef.current) {
      scrollRef.current.scrollToBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  React.useEffect(() => {
    addMsg();
  }, [addMsg]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 ">Chat BOT</h1>
      <div className="min-w-[30rem] max-w-4xl w h-[60vh] overflow-auto  border rounded-lg shadow-lg  flex flex-col p-1">
        <ChatBody ref={scrollRef} messages={messages} />
        {typing && <Loader />}
        <MessageSender />
      </div>
    </div>
  );
};

export default ChatBot;
