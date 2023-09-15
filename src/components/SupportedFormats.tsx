import { FC, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { PlusCircleFill } from 'react-bootstrap-icons';

type SupportedFormatsParams = {
    onPlusClick: () => void;
    showPlus: boolean;
};

const SupportedFormats: FC<SupportedFormatsParams> = ({
    onPlusClick,
    showPlus
}: SupportedFormatsParams) => {
    const [isBidding, setIsBidding] = useState<boolean>(true);
    return (
        <Container className="d-flex align-items-center">
            <Container className="d-flex align-items-center justify-content-around">
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-secondary">FORMAT</Form.Label>
              <Form.Select placeholder="Choose your location" className="d-flex" style={{minWidth: '200px'}}>
                <option value="1">MP4</option>
                <option value="2">JPEG</option>
              </Form.Select>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">PRICING</Form.Label>
                <Form.Control type="text" placeholder="$30" />
              </Form.Group>
            </Form>
            <Form>
                <Form.Switch
                    onChange={() => setIsBidding(prev => !prev)}
                    id="custom-switch"
                    label={isBidding ? 'Bid' : 'Rent'}
                    checked={isBidding}
                    className="mt-3"
                />
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">AVAILABILITY</Form.Label>
                <Form.Control type="text" placeholder="JAN 1, 2024 - FEB 1, 2024" />
              </Form.Group>
            </Form>
          </Container>
          {showPlus && <PlusCircleFill className="flex-end" onClick={onPlusClick} />}
        </Container>
    );
};

export default SupportedFormats;
