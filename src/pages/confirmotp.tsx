import PublicLayout from "@/components/PublicLayout";
import { brandName } from "@/constants/common";
import { userAtom } from "@/states/atom";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useRecoilState } from "recoil";

export default function ConfirmOtp() {
  const [otp, setOtp] = useState('');
  const [user,] = useRecoilState(userAtom);

  const { replace } = useRouter();

  const submitDisabled = !otp.length;


  const onButtonClick = () => {
    replace('/host/home');
  }

  return (
    <PublicLayout>
      <div style={{ marginTop: '30px' }} className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="text-white">Welcome Aboard!</h3>
        <p style={{
          color: "#CED4DA",
          fontSize: '16px',
          fontWeight: 'lighter'

        }} className="text-center">Sign Up and Rent Out the space for people to find new spaces <br /> and dimensions! A click away to explore</p>
      </div>
      <div style={{
        marginTop: '50px',
      }} className="d-flex justify-content-center align-items-center">
        <div
          style={styles.boxContainer}
          className="mb-3 mt-md-4">
          <p style={styles.title} className="fw-bold text-center mb-2">{`${user?.name}, we are a click away`}</p>
          <p style={styles.message} className="fw-bold text-center mb-2">{`Enter the OTP sent to 91******${user?.phoneNumber.slice(-2)}`}</p>
          <div className="mb-3">
            <Form className="d-flex flex-column">
            <Form.Group
                className="mb-3"
                style={styles.inputContainer}
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={otp}
                  className="otp"
                  onChange={(e) => setOtp(e.target.value)}
                  type="text" placeholder="OTP" />
              </Form.Group>
              <Button style={{
                backgroundColor: '#5E72E4',
                borderColor: '#5E72E4',
                padding: '8px 35px 8px 35px',
                alignSelf: 'center'
              }} onClick={onButtonClick} disabled={submitDisabled}>
                Dive in!
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

const styles = {
  title: {
    fontSize: '24px',
    color: '#8898AA',
    fontWeight: 'lighter',
    paddingTop: '80px',
  },
  message: {
    fontSize: '18px',
    color: '#8898AA',
    fontWeight: 'lighter',
    paddingBottom: '40px'
  },
  boxContainer: {
    backgroundColor: '#F4F5F7',
    paddingLeft: '48px',
    paddingRight: '48px',
    borderRadius: '6px',
    paddingBottom: '25px'
  },
  inputContainer: {
    width: '450px',
    paddingBottom: '25px'
  }
}