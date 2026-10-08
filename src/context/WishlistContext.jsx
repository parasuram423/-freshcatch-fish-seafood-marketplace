import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem('freshcatchWishlist');

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  function addToWishlist(product) {
    setWishlist((currentWishlist) => {
      const alreadyExists = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return currentWishlist;
      }

      const updatedWishlist = [
        ...currentWishlist,
        product
      ];

      localStorage.setItem(
        'freshcatchWishlist',
        JSON.stringify(updatedWishlist)
      );

      return updatedWishlist;
    });
  }

  function removeFromWishlist(id) {
    setWishlist((currentWishlist) => {
      const updatedWishlist =
        currentWishlist.filter(
          (item) => item.id !== id
        );

      localStorage.setItem(
        'freshcatchWishlist',
        JSON.stringify(updatedWishlist)
      );

      return updatedWishlist;
    });
  }

  function isInWishlist(id) {
    return wishlist.some(
      (item) => item.id === id
    );
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}