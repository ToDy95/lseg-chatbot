import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMessage,
  setStocks,
  setClicked,
} from '@/redux/reducers/messageSlice';
import { messagesSelector } from '@/redux/selectors/messageSelectors';
import { MessageSender } from './messageSender';
import { Message } from '@/redux/reducers/message';
import { AppDispatch } from '@/redux/store';

export type MessageLayoutProps = {
  message: string;
  direction: 'incoming' | 'outcoming';
  options?: string[];
  index: number;
};

const MessageLayout = ({
  message,
  direction,
  options,
  index,
}: MessageLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector(messagesSelector);

  const handlerClick = (option: string) => {
    if (!messages[index].clicked) {
      const userResponse: Message = {
        message: option,
        sendTime: 'just now',
        sender: 'User',
        direction: 'outcoming',
      };
      dispatch(setMessage(userResponse));
      dispatch(setStocks(userResponse.message, userResponse.sender));
      dispatch(setClicked(index));
    }
  };

  return (
    <div
      className={`flex gap-2 mb-4 items-end ${
        direction === 'incoming' ? 'justify-start' : 'justify-end'
      }`}>
      <MessageSender direction={direction}>
        {options && options.length > 0 ? (
          <div className="flex flex-col gap-1">
            <div>{message}</div>
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handlerClick(option)}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                {option}
              </button>
            ))}
          </div>
        ) : (
          message
        )}
      </MessageSender>
    </div>
  );
};

export { MessageLayout };
