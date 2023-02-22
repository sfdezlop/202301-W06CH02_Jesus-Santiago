import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/Character";
import * as ac from "./character.actions.creator";

const initialState: CharacterStructure[] = [];

export const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);

  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) =>
      item.characterName === payload.characterName ? payload : item
    )
  );

  builder.addDefaultCase((state) => state);
});
