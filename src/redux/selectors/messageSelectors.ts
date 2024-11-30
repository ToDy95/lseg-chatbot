import { createSelector } from '@reduxjs/toolkit';
import { selectData } from '../reducers/messageSlice';
import { Exchange } from '../reducers/message';

export const messagesSelector = createSelector(
  selectData,
  message => message.messages
);

export const exchangesSelector = createSelector([selectData], data =>
  data.defaultData.map((exchange: Exchange) => exchange.exchange)
);

export const typingSelector = createSelector([selectData], data => data.typing);
