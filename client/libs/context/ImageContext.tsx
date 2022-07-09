import { createContext, useContext, useState } from 'react';

type ImageContextState = [string | null, (currentImage: string | null) => void];

const ImageContext = createContext<ImageContextState | null>(null);

interface Props {
  children: React.ReactNode;
}

export function ImageContextProvider({ children }: Props) {
  const imageState = useState<string | null>(null);

  return (
    <ImageContext.Provider value={imageState}>{children}</ImageContext.Provider>
  );
}

export function useImageState() {
  const imageState = useContext(ImageContext);

  if (!imageState) {
    throw new Error('Image Context is not used');
  }

  return imageState;
}
