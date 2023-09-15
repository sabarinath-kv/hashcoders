import PublicLayout from "@/components/PublicLayout";
import { userFlowAtom } from "@/states/atom";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRecoilValue } from "recoil";

export default function Login() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSend, setOtpSend] = useState(false);

  const router = useRouter();

  const submitDisabled = !(!isOtpSend && phoneNumber.length || isOtpSend && !!otp.length);

  const userFlow = useRecoilValue(userFlowAtom);


  const onButtonClick = () => {
    if (isOtpSend) {
      router.replace(userFlow === 'host' ? '/host/home' : '/user/dashboard');
    }
    else {
      setOtpSend(true);
    }
  }

  return (
    <PublicLayout>
      <div style={{ marginTop: '30px' }} className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="text-white">Welcome Back!</h3>
        <p style={{
          color: "#CED4DA",
          fontSize: '16px',
          fontWeight: 'lighter'

        }} className="text-center">Let’s continue the creation & Embrace the existence</p>
      </div>
      <div style={{
        marginTop: '50px',
      }} className="d-flex justify-content-center align-items-center">
        <div
          style={styles.boxContainer}
          className="mb-3 mt-md-4">
          <p style={styles.title} className="fw-bold text-center mb-2">Dive In</p>
          <div className="mb-3">
            <Form className="d-flex flex-column">
              <Form.Group
                className="mb-3"
                style={styles.inputContainer}
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="number"
                  placeholder="Your 10 digit Mobile No" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                style={styles.inputContainer}
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={otp}
                  disabled={!isOtpSend}
                  onChange={(e) => setOtp(e.target.value)}
                  type="text" placeholder="OTP" />
              </Form.Group>
              <Button style={{
                backgroundColor: '#5E72E4',
                borderColor: '#5E72E4',
                padding: '8px 35px 8px 35px',
                alignSelf: 'center'
              }} onClick={onButtonClick} disabled={submitDisabled}>
                {isOtpSend ? 'Confirm' : 'Send OTP'}
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
    paddingBottom: '40px'
  },
  boxContainer: {
    backgroundColor: '#F4F5F7',
    paddingLeft: '48px',
    paddingRight: '48px',
    borderRadius: '6px'
  },
  inputContainer: {
    width: '450px',
    paddingBottom: '25px'
  }
}