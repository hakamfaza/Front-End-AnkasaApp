import "../assets/styles/search.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getListProduct } from "../redux/actions/product";
import { getListAirline } from "../redux/actions/airline";
import Header from "../components/Search/Header";
import Filter from "../components/Search/Filter";
import Product from "../components/Search/Product";

export default function SearchFlight() {
  const dispatch = useDispatch();
  const { listProduct, listAirline } = useSelector((state) => state);
  // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4ZWE3M2Y3LTIyYjEtNGNhZi04NGUwLWExZDg1Zjc2YzA2OSIsImxldmVsIjoxLCJpYXQiOjE2NTE5NjY1NzgsImV4cCI6MTY1MTk4ODE3OH0.ESv3_ntciFIvkA9dc3075xhJDkc23dq9sy8IS0JF0Fs')
  // localStorage.setItem('id', 'f8ea73f7-22b1-4caf-84e0-a1d85f76c069')

  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const [transitFiltered, setTransitFiltered] = useState("");
  const [airlinesFiltered, setAirlinesFiltered] = useState("");
  const [minPriceFiltered, setMinPriceFiltered] = useState("");
  const [maxPriceFiltered, setMaxPriceFiltered] = useState("");
  const [originFiltered, setOriginFiltered] = useState("");
  const [destinationFiltered, setDestinationFiltered] = useState("");
  const [seatClassFiltered, setSeatClassFiltered] = useState("");

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Search Result`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/product?`;

    setTransitFiltered("");
    if (queryParams.get("transit")) {
      setTransitFiltered(queryParams.get("transit"));
      url += `&transitFiltered=${queryParams.get("transit")}`;
    }

    setAirlinesFiltered("");
    if (queryParams.get("airlines")) {
      setAirlinesFiltered(queryParams.get("airlines"));
      url += `&airlinesFiltered=${queryParams.get("airlines")}`;
    }

    setMinPriceFiltered("");
    if (queryParams.get("min")) {
      setMinPriceFiltered(queryParams.get("min"));
      url += `&minPriceFiltered=${queryParams.get("min")}`;
    }

    setMaxPriceFiltered("");
    if (queryParams.get("max")) {
      setMaxPriceFiltered(queryParams.get("max"));
      url += `&maxPriceFiltered=${queryParams.get("max")}`;
    }

    setOriginFiltered("");
    if (queryParams.get("origin")) {
      setOriginFiltered(queryParams.get("origin"));
      url += `&originFiltered=${queryParams.get("origin")}`;
    }

    setDestinationFiltered("");
    if (queryParams.get("destination")) {
      setDestinationFiltered(queryParams.get("destination"));
      url += `&destinationFiltered=${queryParams.get("destination")}`;
    }

    setSeatClassFiltered("");
    if (queryParams.get("class")) {
      setSeatClassFiltered(queryParams.get("class"));
      url += `&seatClassFiltered=${queryParams.get("class")}`;
    }

    dispatch(getListProduct(url, navigate));
    dispatch(getListAirline(navigate));
  }, [dispatch, navigate, queryParams]);

  const applyFilter = () => {
    let url = "/search?";
    if (transitFiltered || transitFiltered === 0) {
      url += `&transit=${transitFiltered}`;
    }
    if (airlinesFiltered) {
      url += `&airlines=${airlinesFiltered}`;
    }
    if (minPriceFiltered) {
      url += `&min=${minPriceFiltered}`;
    }
    if (maxPriceFiltered) {
      url += `&max=${maxPriceFiltered}`;
    }
    if (originFiltered) {
      url += `&origin=${originFiltered}`;
    }
    if (destinationFiltered) {
      url += `&destination=${destinationFiltered}`;
    }
    if (seatClassFiltered) {
      url += `&class=${seatClassFiltered}`;
    }
    return navigate(url);
  };

  const reset = () => {
    setTransitFiltered("");
    setAirlinesFiltered("");
    setMinPriceFiltered("");
    setMaxPriceFiltered("");
  };

  return (
    <div className="container-fluid p-0">
      <div className="andry-sr">
        <Header
          originFiltered={originFiltered}
          setOriginFiltered={setOriginFiltered}
          destinationFiltered={destinationFiltered}
          setDestinationFiltered={setDestinationFiltered}
          seatClassFiltered={seatClassFiltered}
          applyFilter={applyFilter}
        />
        <main className="px-4 px-md-5 py-3">
          <div className="row">
            <div className="col-md-12 col-lg-3">
              <Filter
                reset={reset}
                listProduct={listProduct}
                setShowMobileFilter={setShowMobileFilter}
                showMobileFilter={showMobileFilter}
                setTransitFiltered={setTransitFiltered}
                transitFiltered={transitFiltered}
                listAirline={listAirline}
                setAirlinesFiltered={setAirlinesFiltered}
                airlinesFiltered={airlinesFiltered}
                setMinPriceFiltered={setMinPriceFiltered}
                minPriceFiltered={minPriceFiltered}
                setMaxPriceFiltered={setMaxPriceFiltered}
                maxPriceFiltered={maxPriceFiltered}
              />
            </div>
            <div className="col-12 col-md-12 col-lg-9">
              <Product listProduct={listProduct} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
