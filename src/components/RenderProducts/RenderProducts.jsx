import "./RenderProducts.css";

import { useContext, useEffect, useState } from "react";
import { fetchProductsContext } from "../../context/Context";
import { Link } from "react-router-dom";

const RenderProducts = ({ filteredData }) => {
  console.log(filteredData);

  // context for fetching all products
  const { productsData, setProductsData } = useContext(fetchProductsContext);
  // -- stattdessen einen globalen State, in den immer alle gefilterten und gesuchten Ergebnisse reingespeichert werden, und den dann hier in einen eigenen state speichern (damit er sich nicht selbst überschreibt) und dessen Daten hier ausgeben lassen? (analog zu PokeDex?)

  // state for first 20 loaded products
  const [loadItems, setLoadItems] = useState(20);

  return (
    <>
      <section className="render">
        {/* render filtered products */}
        {filteredData.length > 0 &&
          filteredData?.slice(0, loadItems).map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}>
              <article>
                {/* Product image */}
                <img src={item.thumbnail} alt={`image of ${item.title}`} />

                {/* Star + Rating */}
                <div className="render-rate">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_1364)">
                      <path
                        d="M8.00008 11.3333L4.08141 13.7266L5.14674 9.25996L1.66008 6.27329L6.23674 5.90663L8.00008 1.66663L9.76341 5.90663L14.3407 6.27329L10.8534 9.25996L11.9187 13.7266L8.00008 11.3333Z"
                        fill="#FDC34E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1364">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{item.rating}</p>
                </div>

                {/* Title + Price + Plus-Icon */}
                <div className="render-title">
                  <section>
                    <h4>{item.title}</h4>
                    <p>$ {item.price}</p>
                  </section>
                  {/* Round blue plus-icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_102_2004)">
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                        fill="#364FD4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_2004">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </article>
            </Link>
          ))}

        {/* render all products */}
        {filteredData.length === 0 &&
          productsData?.products?.slice(0, loadItems).map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}>
              <article>
                {/* Product image */}
                <img src={item.thumbnail} alt={`image of ${item.title}`} />

                {/* Star + Rating */}
                <div className="render-rate">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_1364)">
                      <path
                        d="M8.00008 11.3333L4.08141 13.7266L5.14674 9.25996L1.66008 6.27329L6.23674 5.90663L8.00008 1.66663L9.76341 5.90663L14.3407 6.27329L10.8534 9.25996L11.9187 13.7266L8.00008 11.3333Z"
                        fill="#FDC34E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1364">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{item.rating}</p>
                </div>

                {/* Title + Price + Plus-Icon */}
                <div className="render-title">
                  <section>
                    <h4>{item.title}</h4>
                    <p>$ {item.price}</p>
                  </section>
                  {/* Round blue plus-icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_102_2004)">
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                        fill="#364FD4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_2004">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </article>
            </Link>
          ))}
      </section>

      {/* Load-More-Button */}
      <div className="render-btn">
        <Link className="btn" onClick={() => setLoadItems(loadItems + 20)}>
          Load More
        </Link>
      </div>
    </>
  );
};

export default RenderProducts;

// : productsData?.products?.slice(0, loadItems).map((item, index) => (
//   <Link to={`/details/${item.id}`} key={index}>
//     <article>
//       {/* Product image */}
//       <img src={item.thumbnail} alt={`image of ${item.title}`} />

//       {/* Star + Rating */}
//       <div className="render-rate">
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g clipPath="url(#clip0_1_1364)">
//             <path
//               d="M8.00008 11.3333L4.08141 13.7266L5.14674 9.25996L1.66008 6.27329L6.23674 5.90663L8.00008 1.66663L9.76341 5.90663L14.3407 6.27329L10.8534 9.25996L11.9187 13.7266L8.00008 11.3333Z"
//               fill="#FDC34E"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_1_1364">
//               <rect width="16" height="16" fill="white" />
//             </clipPath>
//           </defs>
//         </svg>
//         <p>{item.rating}</p>
//       </div>

//       {/* Title + Price + Plus-Icon */}
//       <div className="render-title">
//         <section>
//           <h4>{item.title}</h4>
//           <p>$ {item.price}</p>
//         </section>
//         {/* Round blue plus-icon */}
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g clipPath="url(#clip0_102_2004)">
//             <path
//               d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
//               fill="#364FD4"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_102_2004">
//               <rect width="24" height="24" fill="white" />
//             </clipPath>
//           </defs>
//         </svg>
//       </div>
//     </article>
//   </Link>
// ))
