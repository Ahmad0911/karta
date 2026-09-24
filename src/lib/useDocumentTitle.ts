import { useEffect } from 'react';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Karta` : 'Karta | Curated furniture & home living';
  }, [title]);
}
