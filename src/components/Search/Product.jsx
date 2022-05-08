import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Product({ listProduct }) {
  return (
    <>
      <div className="d-flex justify-content-between my-3 d-none d-lg-flex">
        <h5>
          <b>Select Ticket</b>
          <small className="ms-2 text-secondary" style={{ fontSize: "14px" }}>
            ({listProduct.data.length} Ticket Found)
          </small>
        </h5>
        <div>
          <p className="d-inline me-2">
            <b>Sort By</b>
          </p>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3097 16.6888L9.43312 13.8123C9.22563 13.6048 9.1219 13.3329 9.1219 13.0609C9.1219 12.789 9.22563 12.5171 9.43312 12.3096C9.84806 11.8947 10.5208 11.8947 10.9357 12.3096L11.9985 13.3724L11.9985 2.23291C11.9985 1.64611 12.4742 1.17041 13.061 1.17041C13.6478 1.17041 14.1235 1.64611 14.1235 2.23291L14.1235 13.3724L15.1862 12.3096C15.6011 11.8947 16.2739 11.8947 16.6888 12.3096C17.1037 12.7246 17.1037 13.3973 16.6888 13.8123L13.8122 16.6888C13.3973 17.1037 12.7246 17.1037 12.3097 16.6888ZM5.00156 14.186L5.00156 3.62761L6.06429 4.69037C6.47923 5.10528 7.15196 5.10528 7.5669 4.69037C7.98184 4.2754 7.98184 3.6027 7.5669 3.18773L4.69035 0.311179C4.27541 -0.103727 3.60268 -0.103727 3.18774 0.311179L0.31119 3.18773C0.103704 3.39522 -2.30485e-05 3.66712 -2.30604e-05 3.93905C-2.30723e-05 4.21099 0.103704 4.48289 0.311189 4.69037C0.726129 5.10528 1.39886 5.10528 1.8138 4.69037L2.87653 3.62761L2.87653 14.186C2.87653 14.7728 3.35223 15.2485 3.93903 15.2485C4.52583 15.2485 5.00156 14.7728 5.00156 14.186Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {/* desktop */}
      <div className="product-item d-none d-md-block my-3">
        {listProduct.data.map((product) => (
          <Fragment key={product.id}>
            <img
              src="https://awsimages.detik.net.id/customthumb/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg?w=700&q=90"
              alt=""
              height={"80px"}
            />
            <span className="ms-3">{product.name}</span>
            <div className="d-flex align-items-center my-4">
              <div className="d-flex">
                <div className="d-flex flex-column me-3">
                  <h4>
                    <b>{product.origin}</b>
                  </h4>
                  <b></b>
                  <p className="text-secondary">12.33</p>
                </div>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
                    fill="#979797"
                  />
                </svg>
                <div className="d-flex flex-column ms-3">
                  <h4>
                    <b>{product.destination}</b>
                  </h4>
                  <b></b>
                  <p className="text-secondary">15.11</p>
                </div>
              </div>
              <div className="ms-5 text-secondary">
                <p>3 hours 11 minutes</p>
                <p className="text-center">
                  <small>{product.transit_total} Transit</small>
                </p>
              </div>
              <div className="ms-5 text-primary">
                <p>Rp. {product.price}/pax</p>
              </div>
              <div className="ms-auto">
                <Link
                  className="btn btn-primary px-5 py-3"
                  to={`/ticket-detail/${product.id}`}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#2395FF",
                  }}
                >
                  <b>Select</b>
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Link className="text-primary me-2 fw-bold" to={`/ticket-detail/${product.id}`}>
                View Details
              </Link>
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9999 1.07107L9.58757 7.43757C9.19565 7.82669 8.56021 7.82669 8.16829 7.43757L1.75597 1.07107"
                  stroke="#2395FF"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </Fragment>
        ))}
      </div>
      {/* mobile */}
      {listProduct.data.map((product) => (
        <Fragment key={product.id}>
          <div className="bg-white d-md-none my-4">
            <div className="border rounded p-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="me-3">
                    <h3>
                      <b>{product.origin}</b>
                    </h3>
                    <p>12.33</p>
                  </div>
                  <div className="mt-2">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
                        fill="#979797"
                      />
                    </svg>
                  </div>
                  <div className="ms-3">
                    <h3>
                      <b>{product.destination}</b>
                    </h3>
                    <div>15.21</div>
                  </div>
                </div>
                <div className="text-end">
                  <p>
                    Terminal <strong>{product.terminal}</strong>
                  </p>
                  <p>
                    Gate <strong>{product.gate}</strong>
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p>{product.name}</p>
                <p className="text-primary">Rp. {product.price}/pax</p>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
}
