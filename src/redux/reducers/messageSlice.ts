import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { delay } from '@/utils/utils';
import { MessageState, Exchange, Message, Stock } from './message';
import { RootState, AppDispatch } from '@/redux/store';

const initialState: MessageState = {
  defaultData: [
    {
      code: 'LSEG',
      exchange: 'London Stock Exchange',
      stocks: [
        { name: 'CRODA INTERNATIONAL PLC', price: 4807.0 },
        { name: 'GSK PLC', price: 1574.8 },
        { name: 'ANTOFAGASTA PLC', price: 1746.0 },
        { name: 'FLUTTER ENTERTAINMENT PLC', price: 16340.0 },
        { name: 'BARRATT DEVELOPMENTS PLC', price: 542.6 },
      ],
    },
    {
      code: 'NASDAQ',
      exchange: 'Nasdaq',
      stocks: [
        { name: 'Advanced Micro Devices, Inc.', price: 164.21 },
        { name: 'Tesla, Inc.', price: 190.35 },
        { name: 'SoFi Technologies, Inc.', price: 8.24 },
        { name: 'Paramount Global', price: 14.92 },
        { name: 'Alphabet Inc.', price: 141.91 },
      ],
    },
    {
      code: 'NYSE',
      exchange: 'New York Stock Exchange',
      stocks: [
        { name: 'Ashford Hospitality Trust', price: 1.72 },
        { name: 'Kuke Music Holding Ltd', price: 1.2 },
        { name: 'Ashland Inc.', price: 93.42 },
        { name: 'Nomura Holdings Inc.', price: 5.84 },
        { name: 'LendingClub Corp', price: 9.71 },
      ],
    },
  ],
  messages: [
    {
      message: "Hello! Welcome to LSEG ChatBOT, I'm here to help you.",
      sendTime: 'just now',
      sender: 'BOT',
      direction: 'incoming',
      options: [],
      clicked: false,
    },
  ],
  typing: false,
  previousExchange: null,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push({ ...action.payload, clicked: false });
    },
    setTyping: state => {
      state.typing = !state.typing;
    },
    setPreviousExchange: (state, action: PayloadAction<Exchange | null>) => {
      state.previousExchange = action.payload;
    },
    resetConversation: state => {
      state.messages = initialState.messages;
    },
    setClicked: (state, action: PayloadAction<number>) => {
      const message = state.messages.find(
        (msg, index) => index === action.payload
      );
      if (message) {
        message.clicked = true;
      }
    },
  },
});

export const selectData = (state: RootState): MessageState => state.message;
export const {
  setMessage,
  setClicked,
  setTyping,
  resetConversation,
  setPreviousExchange,
} = messageSlice.actions;
export default messageSlice.reducer;

export const setStocks =
  (option: string, sender: string) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const data = getState().message.defaultData;
    if (sender === 'User') {
      dispatch(setTyping());
      await delay(2000);
      handleUserOption(option, data, dispatch, getState);
      dispatch(setTyping());
    }
  };

const handleUserOption = (
  option: string,
  data: Exchange[],
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const exchange = data.find(stock => stock.exchange === option);
  const stock = data
    .flatMap(stock => stock.stocks)
    .find(stock => stock.name === option);

  switch (true) {
    case option === 'Main Menu':
      dispatch(resetConversation());
      dispatch(
        setMessage({
          message: 'Please select a stock exchange:',
          sendTime: 'just now',
          sender: 'LSEG BOT',
          direction: 'incoming',
          options: data.map(stock => stock.exchange),
          clicked: false,
        })
      );
      break;
    case option === 'Go Back':
      const previousExchange = getState().message.previousExchange;
      if (previousExchange) {
        const newOptions = previousExchange.stocks.map(
          (stock: Stock) => stock.name
        );
        dispatch(
          setMessage({
            message: 'Please select a stock:',
            sendTime: 'just now',
            sender: 'BOT',
            direction: 'incoming',
            options: newOptions,
            clicked: false,
          })
        );
      }
      break;
    case !!exchange:
      dispatch(setPreviousExchange(exchange));
      const newOptions = exchange.stocks.map(stock => stock.name);
      dispatch(
        setMessage({
          message: 'Please select a stock:',
          sendTime: 'just now',
          sender: 'BOT',
          direction: 'incoming',
          options: newOptions,
          clicked: false,
        })
      );
      break;
    case !!stock:
      dispatch(
        setMessage({
          message: `The stock price of "${stock.name}" is ${stock.price}. Please choose an option:`,
          sendTime: 'just now',
          sender: 'BOT',
          direction: 'incoming',
          options: ['Main Menu', 'Go Back'],
          clicked: false,
        })
      );
      break;
    default:
      break;
  }
};
