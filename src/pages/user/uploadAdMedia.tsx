import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import { AdFormat, SupportedFormat, UserAdOptionsList } from "@/constants/common";
import { adListAtom, listingAtom, targetAdIdListAtom } from "@/states/atom";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useRecoilState, useRecoilValue } from "recoil";

const availableFormats = ['MP4', 'JPEG 81*81', 'JPEG 330*330', 'JPEG 1080*1080'];

const UploadAdMedia = () => {
  const [supportedFormats, setSupportedFormats] = useState<SupportedFormat[]>([
    {
      format: AdFormat.MP4
    }
  ]);


  const [isLoading, setIsLoading] = useState(false);

  const [adIds, setAdIds] = useRecoilState(targetAdIdListAtom);
  const [adList, setAdList] = useRecoilState(adListAtom);

  const { push } = useRouter();

  const onSubmit = () => {
    setIsLoading(true);
    const newAds = UserAdOptionsList.filter((item) => adIds.includes(item.id))
    setAdList((prevList) => [...newAds, ...prevList]);
    setAdIds([]);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    push('/user/dashboard');
  }

  return (
    <>
      <PrivateLayout title="UPLOAD AD MEDIA">
        <Container className="d-flex px-5 w-75 flex-column align-items-center">
          <Container className="d-flex justify-content-around my-5">
            <div className="bg-light p-4 rounded" style={
              { borderColor: 'black', borderWidth: 5, border: 'solid' }}
            >
              <div className="p-2 rounded" style={{ backgroundColor: '#D9D9D9' }}>
                <Icon url="/icons/digital.png" width={60} height={60} />
              </div>
            </div>
          </Container>
          <Container style={{ marginTop: '150px' }}>
            <p style={{ fontSize: '20px', color: '#8898AA', display: 'flex', marginLeft: '30px' }}>UPLOAD MULTIMEDIA</p>
            <Container style={{ flexWrap: 'wrap', justifyContent: 'space-evenly', minWidth: '800px', }} className="d-flex">
              {availableFormats.map((format) => <Form.Group style={{ width: '400px' }} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '14px', color: '#8898AA' }}>{format}</Form.Label>
                <Form.Control type="file" onChange={(e) => {}} placeholder="digital-billboard-metro-1" />
              </Form.Group>)}
            </Container>
          </Container>
          <div style={{ width: 206, height: 54, margin: '50px 0px 50px 0px', background: '#DADEF6', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', position:'relative' }}>
            <div style={{ color: '#525F7F', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word', paddingRight: 5 }}>
              USE OUR AI WIZARD
            </div>
          <Icon url="/icons/wand.png" />

            <Icon style={{position: 'absolute', right: -10, top: -10}} url="/icons/crown.png" />
          </div>
          <Button
            disabled={isLoading}
            onClick={onSubmit}
            style={{ backgroundColor: '#5E72E4' }}
            className="mt-2"
            variant="primary">
            Preview and Submit
          </Button>
        </Container>
      </PrivateLayout>
    </>
  );
};

export default UploadAdMedia;
