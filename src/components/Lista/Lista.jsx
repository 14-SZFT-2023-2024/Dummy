import PropType from 'prop-types';
import './Lista.css';
import banan from '../../assets/images/banan.jpg';
import narancs from '../../assets/images/narancs.jpg';
import ananasz from '../../assets/images/ananasz.jpg';

const Lista = (props) => {
  const lista = props.lista.map((elem) => (
    <li key={elem.id}>
      {elem.name}
      {elem.name === 'banán' ? <img src={banan} alt="banán" /> : ''}
      {elem.name === 'narancs' ? <img src={narancs} alt="narancs" /> : ''}
      {elem.name === 'ananász' ? <img src={ananasz} alt="ananasz" /> : ''}
    </li>
  ));
  return <ol>{lista}</ol>;
};

Lista.propTypes = {
  lista: PropType.array,
};

export default Lista;
