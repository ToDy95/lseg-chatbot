'use client';

import React from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const MessageSender = () => {
  const [inputValue, setInputValue] = React.useState<string | number>('');

  const handleInput = () => {
    toast('You cannot send messages for the moment', {
      description: 'Please try again later.',
    });
    setInputValue('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleInput();
    }
  };

  return (
    <div className="flex gap-2 p-4 border-t">
      <Input
        className="flex-1 border rounded-lg p-2"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Type any question here ..."
      />
      <Button
        onClick={handleInput}
        className="bg-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-600">
        <Send />
      </Button>
    </div>
  );
};

export { MessageSender };
