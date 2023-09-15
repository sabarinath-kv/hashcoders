import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LineChart from './Charts/LineChart';
import DoughnutChart from './Charts/DoughnutChart';
import ReviewCard from './ReviewCard';
import { Card } from 'react-bootstrap';

const CustomModal = ({
    show, setShow
}: {
    show: boolean;
    setShow: (a: boolean) => void;
}) => {

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="my-modal"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ justifyContent: 'center' }} className='d-flex gap-4'>
                    <div>
                        <LineChart width={850} />
                        <div style={{ marginTop: '24px' }} className='d-flex gap-2'>
                            <DoughnutChart labels={['18-25', '25-30', '30-40', '40+']} percentages={[20, 40, 20, 20,]} />
                            <DoughnutChart labels={['a', 'b', 'c']} percentages={[20, 40, 40]} />
                            <div className='d-flex flex-column' style={{ gap: '30px' }}>
                                <ReviewCard id='UUID40032' name='JAMES NICOLA MARY' rating={4} review='Very useful website, You might want to review some Dummy Text generation which contains words and even sentences with a meaning and that should not suppose to happen)' backgroundColor='#11CDEF' />

                                <ReviewCard id='UUID78901' name='BENNY THOMAS JACK' rating={4} review='Well, seems like a nice plugin and all, but it doesn`t work on mac.. Or atleast, I can`t get it to work :( Tried to open the "Generate" by shortcut and by right-click - no such luck.. I won`t be rating this plug dont work on Mac, so no worries -- won`t destroy the ratings.. Atleast not untill I try the I won`t be rating this plugin, since it don`t work on Mac, s' backgroundColor='#2DCE89' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ margin: 0, padding: '0 0 10px 0' }}>/digital/Metro-BillBoard-1</h5>
                        <p style={{ margin: 0, fontSize: '14px' }}>Size: 14' x 48'</p>
                        <p style={{ margin: 0, fontSize: '14px' }}>Unit Type: Billboard</p>
                        <p style={{ margin: 0, fontSize: '14px' }}>Screen Type: Static</p>
                        <p style={{ margin: 0, fontSize: '14px' }}>Face ID: 4057684</p>
                        <p style={{ margin: 0, fontSize: '14px' }}>ZIP Code: 62201</p>
                        <p style={{ margin: 0, fontSize: '14px' }}>Attribution: Has attribution</p>
                        <h5 style={{ paddingTop: 20 }}>Upcoming Displays</h5>
                        <Card style={{padding: 10, fontSize: '12px'}}>
                           <p style={{ margin: 0, padding: '2px 0px 2px 0px' }}>User: UUID40032</p>
                            <p style={{ margin: 0, padding: '2px 0px 2px 0px' }}>Schedule Start: 01 Jan, 2023 03:00 PM IST</p>
                            <p style={{ margin: 0, padding: '2px 0px 2px 0px' }}>Schedule End: 07 Jan, 2023 03:00 PM IST</p>
                        </Card>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CustomModal;
