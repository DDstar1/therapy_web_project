import React, { useEffect, useRef } from "react";
import { useUser } from "./user";

function initUser({ user }: any) {
  const initState = useRef(false);

  useEffect(() => {
    if (!initState.current) {
      useUser.setState({ user });
    }

    initState.current = true;
  }, []);
  return <div></div>;
}

export default initUser;
