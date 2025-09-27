import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    /* const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h1>Modal Page</h1>
            <Button primary onClick={toggleModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2>Modal Content</h2>
                <p>This is a modal!</p>
            </Modal>
        </div>
    ); */

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleClickAccept = () => {
        console.log("Accepted");
        handleCloseModal();
    }

    const actionBar = (
        <Button primary onClick={handleClickAccept}>I Accept</Button>
    );

    const modal = <Modal onClose={handleCloseModal} actionBar={actionBar}>
        <h2>Agreement</h2>
        <p>Here is the agreement content for you to accept.</p>
        <p>By clicking &quot;I Accept&quot;, you agree to the terms and conditions.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.</p>
        <p>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum.</p>
        <p>Quisque id sodales libero. In et odio nec mi tempor dignissim.</p>
    </Modal>;

    return (
        <div>
            <h1>Modal Page</h1>
            <Button primary onClick={handleOpenModal}>Open Modal</Button>
            {showModal && modal}
            <p>Scroll down to see more content</p>
            <div style={{ height: "150vh" }}>
                This div is here to create some space to scroll. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </div>
            <p>End of the page</p>
        </div>
    );
}

export default ModalPage;
