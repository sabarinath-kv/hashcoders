import { AdFormat, SupportedFormat, formats } from "@/constants/common";
import { FC, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { PlusCircleFill } from 'react-bootstrap-icons';

type SupportedFormatsParams = {
    onPlusClick: () => void;
    showPlus: boolean;
    supportedFormat: SupportedFormat;
    onChange: (supportedFormat: SupportedFormat) => void;
};

const SupportedFormats: FC<SupportedFormatsParams> = ({
    onPlusClick,
    showPlus,
    supportedFormat,
    onChange,
}: SupportedFormatsParams) => {
    const [isBidding, setIsBidding] = useState<boolean>(true);
    return (
        <Container className="d-flex align-items-center">
            <Container className="d-flex align-items-center justify-content-around">
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-secondary">FORMAT</Form.Label>
              <Form.Select onChange={(e) => onChange({
                ...supportedFormat,
                format: formats[e.target.value as any] as AdFormat
              })} placeholder="Choose your location" className="d-flex" style={{minWidth: '200px'}}>
                {formats.map((format, index) =>  <option value={index.toString()}>{format}</option>)}
              </Form.Select>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group
               className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">PRICING</Form.Label>
                <Form.Control
                onChange={(e) => onChange({
                  ...supportedFormat,
                  rating: e.target.value as AdFormat
                })}
                 type="text" placeholder="$30" />
              </Form.Group>
            </Form>
            <Form>
                <Form.Switch
                    onChange={(e) => {
                      setIsBidding(!isBidding);
                      onChange({
                      ...supportedFormat,
                      isBiding: !isBidding
                    })}}
                    id="custom-switch"
                    label={isBidding ? 'Bid' : 'Rent'}
                    checked={isBidding}
                    className="mt-3"
                />
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">AVAILABILITY</Form.Label>
                <Form.Control 
                onChange={(e) => {
                  onChange({
                  ...supportedFormat,
                  availability: e.target.value
                })}}
                 type="text" placeholder="JAN 1, 2024 - FEB 1, 2024" />
              </Form.Group>
            </Form>
          </Container>
          {showPlus && <PlusCircleFill className="flex-end" onClick={onPlusClick} />}
        </Container>
    );
};

export default SupportedFormats;
