import React from 'react';
import style from '../styles/Features.css';
import Popup from 'reactjs-popup';

const popTest = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
          alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default popTest;
// const Features = function(props) {
//   const home = props.homes;
//   const sixHomes = home.slice(0, 6);
//   return (
//     <div className="row small-up-1 medium-up-2 large-up-3">
//       {sixHomes.map(homes => (
//         <div className={`column ${style.column}`}>
//           <div className={`callout ${style.callout}`}>
//             <p className={`listing ${style.listing}`}>{`Listing ${
//               homes.listing_id
//             }`}</p>
//             <p className={`price ${style.price}`}>{`${homes.price}`}</p>
//             <p>
//               <img className={`imgs ${style.image}`} src={homes.image} />
//             </p>
//             <p className={`lead ${style.lead}`}>{homes.address}</p>
//             <p className={`subheader ${style.subheader}`}>
//               {homes.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Features;
