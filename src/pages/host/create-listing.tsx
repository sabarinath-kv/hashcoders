import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import SupportedFormats from "@/components/SupportedFormats";
import { AdFormat, Listing, SupportedFormat, UnitType, formats, locations, spotList } from "@/constants/common";
import { listingAtom } from "@/states/atom";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import { useRecoilState } from "recoil";

const greyCardClass = "rounded shadow-sm d-flex flex-column justify-content-center align-items-center mb-2";

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
      console.log((items.length - 1) % (formats.length - 1));
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
        <Container className="d-flex mt-5 px-5 w-75 flex-column align-items-center">
          <div className="d-flex flex-column justify-content-start">
            <p style={{ paddingTop: '30px' }} className="text-white">SELECT DISPLAY TYPE</p>
            <div style={{ paddingTop: '10px' }} className="d-flex gap-4">
              {spotList.slice(0,8)?.map((item, index) => (
                <div onClick={() => setUnitType(item.name)} className={greyCardClass} 
                style={{ backgroundColor: '#F1F1F1',
                border: `4px solid ${unitType === item.name ? '#2DCE89' : '#F1F1F1'}`,
                 padding: '40px', marginRight: '16', cursor: 'grab', }}>
                  <Icon url={item.icon} width={40} height={40} />
                  <span style={{ fontSize: '10px', marginTop: '5px' }}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <Container style={{ paddingTop: '40px' }} className="mt-4">
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
            <div style={{ marginBottom: 10 }} className="d-flex justify-content-between align-items-center gap-2">
              <p className="text-secondary" style={{ margin: 0 }}>SUPPORTED FORMATS</p>
              {<div onClick={addNew}><Icon url="/icons/add.png" style={{ marginRight: 50 }} /></div>}
            </div>
            {supportedFormats.map((item, index) => {
              return (
                <SupportedFormats
                  onPlusClick={addNew}
                  supportedFormat={item}
                  onChange={(updatedData) => onChange(index, updatedData)}
                  showPlus={index === supportedFormats.length - 1}
                />)
            })}
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
