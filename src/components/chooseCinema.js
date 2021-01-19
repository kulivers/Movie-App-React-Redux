import React from 'react';
import StarsRate from '../actions/startsrate-action';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    Starsrate: (starindex) => dispatch(StarsRate(starindex)),
  };
}

const ChooseCinema = ({
  starscolor,
  Starsrate = () => {},
  starcolor = () => {},
}) => {
  const Onclickhandle = (event) => {
    Starsrate(parseInt(event.target.value));
    // console.log(event.target.value);
  };

  return (
    <label>
      <select onChange={Onclickhandle}>
        <option value="1">EasyCinema</option>
        <option value="2">Luxor</option>
        <option value="3">Svetofor</option>
        <option value="4">Grace</option>
        <option value="5">MoscowCinema</option>
      </select>
    </label>
  );
};
//  case 1:
//       return <div className="filmName">EasyCinema</div>;
//       break;
//     case 2:
//       return <div className="filmName">Luxor</div>;
//       break;
//     case 3:
//       return <div className="filmName">Svetofor</div>;
//       break;
//     case 4:
//       return <div className="filmName">Grace</div>;
//       break;
//     case 5:
//       return <div className="filmName">MoscowCinema</div>;
//       break;
//     default:
//       return <div className="filmName">Bravo</div>;
//       break;
export default connect(null, mapDispatchToProps)(ChooseCinema);
