import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import SupportedFormats from "@/components/SupportedFormats";
import { AdFormat, Listing, SupportedFormat, UnitType, formats, locations } from "@/constants/common";
import { listingAtom } from "@/states/atom";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useRecoilState } from "recoil";

const CreateListingPage = () => {
  const [unitType, setUnitType] = useState<UnitType>(UnitType.DIGITAL);
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>(locations[0]);
  const [dimension, setDimension] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [supportedFormats, setSupportedFormats] = useState<SupportedFormat[]>([
    {
      format: AdFormat.MP4
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const [listing, setListing] = useRecoilState(listingAtom);

  const { back } = useRouter();


  const addNew = () => {
    setSupportedFormats((items) => {
      return [...items, {
        format: formats[(items.length - 1) % (formats.length - 1)]
      }]
    });
  }

  const onChange = (index: number, supportedFormat: SupportedFormat) => {
    setSupportedFormats((items) => {
      return items.map((item, idx) => (index === idx ? supportedFormat : { ...item }))
    })
  }

  const onSubmit = () => {
    setIsLoading(true);
    setListing((prevList) => {
      return [{
        id: prevList.length.toString(),
        name,
        unitType,
        dimension,
        location,
        description,
        supportedFormats
      }, 
    ...prevList]
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    back();
  }

  return (
    <>
      <PrivateLayout title="CREATE LISTING">
        <Container className="d-flex px-5 w-75 flex-column align-items-center">
          <Container className="d-flex justify-content-around my-5">
            <div className="bg-light p-4 rounded" style={unitType === UnitType.DIGITAL ?
              { borderColor: 'black', borderWidth: 5, border: 'solid' }
              : { opacity: 0.5 }}
            >
              <div className="p-2 rounded" style={{ backgroundColor: '#D9D9D9' }}>
                <Icon url="/icons/digital.png" width={60} height={60} />
              </div>
            </div>
            <div className="bg-light p-4 rounded"
              style={unitType !== UnitType.DIGITAL ? { borderColor: 'black', borderWidth: 5, border: 'solid' } : { opacity: 0.5 }}>
              <div className="p-2 rounded" style={{ backgroundColor: '#D9D9D9' }}>
                <Icon url="/icons/physical.png" width={60} height={60} />
              </div>
            </div>
          </Container>
          <Dropdown className="mt-5 pt-5">
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="shadow-sm" style={{ minWidth: '200px' }}>
              {unitType === UnitType.DIGITAL ? 'Digital Billboard' : 'Physical Billboard'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setUnitType(UnitType.DIGITAL)}>Digital Billboard</Dropdown.Item>
              <Dropdown.Item onClick={() => setUnitType(UnitType.PHYSICAL)}>Physical Billboard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Container className="mt-4">
            <p className="text-secondary">LOCATION INFORMATION</p>
            <Container className="d-flex align-items-center justify-content-around">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-secondary">Name</Form.Label>
                  <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} placeholder="digital-billboard-metro-1" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-secondary">Location</Form.Label>
                  <Form.Select
                    onChange={(e) => setLocation(locations[Number(e.target.value)])}
                    placeholder="Choose your location" className="d-flex" style={{ minWidth: '200px' }}>
                    {
                      locations.map((value, index) => <option value={index.toString()}>{value}</option>)
                    }
                  </Form.Select>
                </Form.Group>
              </Form>
            </Container>
            <Container className="d-flex align-items-center justify-content-around">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-secondary">Dimensions</Form.Label>
                  <Form.Control onChange={(e) => { setDimension(e.target.value) }} type="text" placeholder="1080 x 1080" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-secondary">Description</Form.Label>
                  <Form.Control onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="Enter your description" />
                </Form.Group>
              </Form>
            </Container>
            <hr style={{ height: 5 }} className="bg-secondary" />
          </Container>
          <Container className="mt-4">
            <p className="text-secondary">SUPPORTED FORMATS</p>
            {supportedFormats.map((item, index) => (
              <SupportedFormats
                onPlusClick={addNew}
                supportedFormat={item}
                onChange={(updatedData) => onChange(index, updatedData)}
                showPlus={index === supportedFormats.length - 1}
              />
            ))}
          </Container>
          <Button
          disabled={isLoading}
          onClick={onSubmit}
            style={{ backgroundColor: '#5E72E4' }}
            className="mt-2"
            variant="primary">
            Create Listing
          </Button>
        </Container>
      </PrivateLayout>
    </>
  );
};

export default CreateListingPage;
