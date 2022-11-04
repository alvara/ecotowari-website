import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ISticker, IInstagram } from '../type';

interface IAirtableProvider {
  children: React.ReactNode;
}

interface IAirtableContext {
  stickersState: [ISticker[], Dispatch<SetStateAction<ISticker[]>>];
  instagramState: [IInstagram[], Dispatch<SetStateAction<IInstagram[]>>];
}
const AirtableContext = createContext({} as IAirtableContext);

function AirtableProvider({ children }: IAirtableProvider) {
  const [stickers, setStickers] = useState<ISticker[]>([]);
  const [instagram, setInstagram] = useState<IInstagram[]>([]);

  return (
    <AirtableContext.Provider
      value={{
        stickersState: [stickers, setStickers],
        instagramState: [instagram, setInstagram],
      }}
    >
      {children}
    </AirtableContext.Provider>
  );
}

export { AirtableContext, AirtableProvider };
