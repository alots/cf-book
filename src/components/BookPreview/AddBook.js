import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PropTypes from 'prop-types';

const AddBook = ({handleClick}) => {
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const addClick = (e) => {
    const firstHandler = toggle;
    const secondHandler = handleClick;
    firstHandler(e);
    secondHandler(e);
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}> Подписаться </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}> Условия подписки </ModalHeader>
        <ModalBody>
        В зависимости от суммы перевода, вы будете поощрены  личной подписью автора, мерчендайзом (футболками, кружками), упоминанием в благодарностяхю
        </ModalBody>
        <ModalFooter>
          <Button  color="primary" onClick={addClick} > Подписаться </Button>{' '}
          <Button color="secondary" onClick={toggle}> Закрыть </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

AddBook.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default AddBook
