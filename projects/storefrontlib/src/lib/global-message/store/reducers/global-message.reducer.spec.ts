import * as fromGlobalMessage from './global-message.reducer';
import * as fromActions from './../actions';
import { GlobalMessage, GlobalMessageType } from '../../models/message.model';

describe('Cart reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromGlobalMessage;
      const action = {} as any;
      const state = fromGlobalMessage.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('ADD_MESSAGE action', () => {
    it('should add message to the list of messages', () => {
      const { initialState } = fromGlobalMessage;

      const mockMessage: GlobalMessage = {
        text: 'test',
        type: GlobalMessageType.MSG_TYPE_CONFIRMATION
      };

      const action = new fromActions.AddMessage(mockMessage);

      const state = fromGlobalMessage.reducer(initialState, action);

      expect(state.entities[mockMessage.type]).toEqual([mockMessage.text]);
    });
  });

  describe('REMOVE_MESSAGE action', () => {
    it('should remove the message from the state with an index', () => {
      const map = new Map<GlobalMessageType, string[]>();
      map.set(GlobalMessageType.MSG_TYPE_CONFIRMATION, ['test']);
      const initialState = {
        entities: map
      };

      const action = new fromActions.RemoveMessage({
        type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
        index: 0
      });

      const state = fromGlobalMessage.reducer(initialState, action);

      expect(state.entities[GlobalMessageType.MSG_TYPE_CONFIRMATION]).toEqual(
        []
      );
    });
  });
});
