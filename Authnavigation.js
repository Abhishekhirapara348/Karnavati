import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Signoutstack, Singninstack } from "./navigation";
import { firebase } from "./firebase";

const Authnavigation = () => {
  const [currentUser, setcurrentUser] = useState(null);

  const userHandler = (user) =>
    user ? setcurrentUser(user) : setcurrentUser(null);
  useEffect(
    () => firebase.auth().onAuthStateChanged((user) => userHandler(user)),
    []
  );

  console.log(currentUser);

  return (
    <>
      {currentUser ? (
        <Singninstack userID={"eWwpGR6vdiMMxWrHRznAolDZkzp1"} />
      ) : (
        <Signoutstack />
      )}
    </>
  );
};

export default Authnavigation;
