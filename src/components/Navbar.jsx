import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav, NavbarBrand } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser } from "../redux/actions/user";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const detailUser = useSelector((state) => {
    return state.detailUser;
  });
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    dispatch(getDetailUser(localStorage.getItem("id"), navigate));
    setPhoto(
      detailUser.isLoading === true ? (
        <h1>Loading</h1>
      ) : detailUser.isError === true ? (
        <h1>Error</h1>
      ) : (
        detailUser.data.photo
      )
    );
  }, []);
  return (
    <nav
      className="ian navbar navbar-light bg-light"
      style={{
        display: "block",
        width: "100%",
      }}
    >
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">
          <NavbarBrand>
            <div className="form-title">
              <div className="icon"></div>
              <div className="text">Ankasa</div>
            </div>
          </NavbarBrand>
        </Link>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="row mr-auto" navbar>
            <div className="form-search col-4">
              <div className="icon"></div>
              <input
                type="text"
                className="input"
                placeholder="Where you want to go?"
              />
            </div>
            <div className="form-page col-2">
              <Link className="navbar-brand" to="/search">
                <div className="text">Find Ticket</div>
              </Link>
              {token && (
                <Link className="navbar-brand" to="/mybooking">
                  <div className="text">My Booking</div>
                </Link>
              )}
            </div>
          </Nav>
          <div className="form-user">
            {detailUser.data == undefined ? (
              <Link to="/login" className="navbar-brand">
                login
              </Link>
            ) : detailUser.isLoading === true ? (
              <h1>Loading</h1>
            ) : detailUser.isError === true ? (
              <h1>Error</h1>
            ) : (
              <>
                <div className="icon-message"></div>
                <div className="icon-notification"></div>
                <Link to="/profile">
                  <div>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${photo}`}
                      className="profile"
                      alt="profile"
                    />
                  </div>
                </Link>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default App;
