import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/user";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);


  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div>
        {user.isLoading ? (
          <h1 className="bg-success p-3">Loading...</h1>
        ) : (
          user.data.map((item) => <div key={item.id}>{item.name}</div>)
        )}
      </div>
      <Footer/>
    </>
  );
}
