import React, { createContext, useState } from "react";
export const MainContect = createContext();

const MainContextProvider = (props) => {
  const [offerPop, setOfferPop] = useState(false);
  const [datePop, setDatepop] = useState(false);
  const [offers, setOffers] = useState("");
  const [dates, setDates] = useState("");
  const [FormData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const closeOffer = () => setOfferPop(false);
  const closeDate = () => setOfferPop(false);
  return (
    <MainContect.Provider
      value={{
        setOffers,
        setDates,
        setFormData,
        FormData,
        closeOffer,
        closeDate,
        offerPop,
        setOfferPop,
        datePop,
        setDatepop,
      }}
    >
      {props.children}
    </MainContect.Provider>
  );
};

export default MainContextProvider;
