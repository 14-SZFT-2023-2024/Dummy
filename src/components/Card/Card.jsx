import './Card.css';
import PropType from 'prop-types';

const Card = (props) => {
  const igaz = 'Igen Tanuló';
  const hamis = 'Nem, nem tanuló';
  return (
    <>
      <p className="elso-paragrafus">Hello {props.elsoNev}!</p>
      <p className="masodik-paragrafus">Hello {props.masodikNev}!</p>
      <p>Tanuló-e: {props.tanuloE ? igaz : hamis}</p>
    </>
  );
};

Card.propTypes = {
  elsoNev: PropType.string,
  masodikNev: PropType.string,
  tanuloE: PropType.bool,
};

Card.defaultProps = {
  elsoNev: 'Csiga-biga',
  masodikNev: 'Makk Marci',
  tanuloE: true,
};
export default Card;
