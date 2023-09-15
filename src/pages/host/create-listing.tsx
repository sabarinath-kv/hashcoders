import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import SupportedFormats from "@/components/SupportedFormats";
import { useMemo, useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const CreateListingPage = () => {
  const [isDigital, setIsDigital] = useState<boolean>(true);
  const [formatCount, setFormatCount] = useState<number>(1);
  const countArray = useMemo(() => Array(formatCount).fill(0), [formatCount]);

  return (
    <>
      <PrivateLayout title="CREATE LISTING">
        <Container className="d-flex px-5 w-75 flex-column align-items-center">
        <Container className="d-flex justify-content-around my-5">
          <div className="bg-light p-4 rounded" style={isDigital ? 
            {borderColor: 'black', borderWidth: 5, border: 'solid'} 
            : {opacity: 0.5}}
          >
            <div className="p-2 rounded" style={{backgroundColor: '#D9D9D9'}}>
              <Icon url="/icons/digital.png" width={60} height={60} />
            </div>
          </div>
          <div className="bg-light p-4 rounded" style={!isDigital ? {borderColor: 'black', borderWidth: 5, border: 'solid'} : {opacity: 0.5}}>
            <div className="p-2 rounded" style={{backgroundColor: '#D9D9D9'}}>
              <Icon url="/icons/physical.png" width={60} height={60} />
            </div>
          </div>
        </Container>
        <Dropdown className="mt-5 pt-5">
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="shadow-sm" style={{minWidth: '200px'}}>
            {isDigital ? 'Digital Billboard' : 'Physical Billboard'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setIsDigital(true)}>Digital Billboard</Dropdown.Item>
            <Dropdown.Item onClick={() => setIsDigital(false)}>Physical Billboard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Container className="mt-4">
          <p className="text-secondary">LOCATION INFORMATION</p>
          <Container className="d-flex align-items-center justify-content-around">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">Name</Form.Label>
                <Form.Control type="text" placeholder="digital-billboard-metro-1" />
              </Form.Group>
            </Form>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-secondary">Location</Form.Label>
              <Form.Select placeholder="Choose your location" className="d-flex" style={{minWidth: '200px'}}>
                <option value="1">Kochi</option>
                <option value="2">Bengaluru</option>
                <option value="3">Mumbai</option>
              </Form.Select>
              </Form.Group>
            </Form>
          </Container>
          <Container className="d-flex align-items-center justify-content-around">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">Dimensions</Form.Label>
                <Form.Control type="text" placeholder="1080 x 1080" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">Description</Form.Label>
                <Form.Control type="text" placeholder="Enter your description" />
              </Form.Group>
            </Form>
          </Container>
          <hr style={{height: 5}} className="bg-secondary" />
        </Container>
        <Container className="mt-4">
          <p className="text-secondary">SUPPORTED FORMATS</p>
          {countArray.map((item, index) => (
            <SupportedFormats 
              onPlusClick={() => setFormatCount(prev => prev + 1)}
              showPlus={index === formatCount - 1}
              />
          ))}
        </Container>
        <Button className="mt-2" variant="primary">Upload Media</Button>
        </Container>
      </PrivateLayout>
    </>
  );
};

export default CreateListingPage;
