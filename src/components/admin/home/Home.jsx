import React, { useEffect, useState } from "react";
import Loader from "../../loader/Loader";

const Home = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h3>Dashboard ~</h3>
          <p>
            This is the <b>Dashboard Page for the user</b>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
