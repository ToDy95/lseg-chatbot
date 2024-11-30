export type Stock = {
  name: string;
  price: number;
};

export type Exchange = {
  code: string;
  exchange: string;
  stocks: Stock[];
};

export type Message = {
  message: string;
  sendTime: string;
  sender: string;
  direction: 'incoming' | 'outcoming';
  options?: string[];
  clicked?: boolean;
};

export type PreviousExchange = {
  code: string;
  exchange: string;
  stocks: Stock[];
} | null;

export type MessageState = {
  defaultData: Exchange[];
  messages: Message[];
  typing: boolean;
  previousExchange: PreviousExchange;
};
