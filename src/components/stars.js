import React from 'react';
import StarsRate from '../actions/startsrate-action';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    Starsrate: (starindex) => dispatch(StarsRate(starindex)),
  };
}

// const Stars = ({ starscolor, Starsrate = () => {}, starcolor = () => {} }) => {
//   let tabstars = [];

//   for (let i = 0; i < 5; i++) {
//     const Onclickhandle = () => {
//       Starsrate(i + 1);
//       starcolor(i + 1);
//     };

//     if (i < starscolor) {
//       tabstars.push(
//         <i className="fas fa-star fa-2x isyellow" onClick={Onclickhandle}></i>
//       );
//     } else
//       tabstars.push(
//         <i className="fas fa-star fa-2x" onClick={Onclickhandle}></i>
//       );
//   }
//   return <div className="heart">{tabstars}</div>;
// };
const Stars = ({ starscolor, Starsrate = () => {}, starcolor = () => {} }) => {
  let tabstars = [];

  for (let i = 0; i < 5; i++) {
    const Onclickhandle = () => {
      Starsrate(i + 1);
      starcolor(i + 1);
    };

    if (i < starscolor) {
      tabstars.push(
        <i className="fas fa-star fa-2x isyellow" onClick={Onclickhandle}></i>
      );
    } else
      tabstars.push(
        <i className="fas fa-star fa-2x" onClick={Onclickhandle}></i>
      );
  }
  switch (starscolor) {
    case 1:
      return <div className="filmName">EasyCinema</div>;
      break;
    case 2:
      return <div className="filmName">Luxor</div>;
      break;
    case 3:
      return <div className="filmName">Svetofor</div>;
      break;
    case 4:
      return <div className="filmName">Grace</div>;
      break;
    case 5:
      return <div className="filmName">MoscowCinema</div>;
      break;
    default:
      return <div className="filmName">Bravo</div>;
      break;
  }
};

export default connect(null, mapDispatchToProps)(Stars);
