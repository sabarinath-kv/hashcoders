import PublicLayout from "@/components/PublicLayout";
import { userAtom } from "@/states/atom";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useRecoilState } from "recoil";

export default function SignUp() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setChecked] = useState(false);

  const [, setUsername] = useRecoilState(userAtom);


  const { replace } = useRouter();

  const submitDisabled = !(name.length && password.length && phoneNumber.length && isChecked);


  const onSignUp = () => {
    setUsername({
      name,
      phoneNumber
    })
    replace('/confirmotp');
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
          <p style={styles.title} className="fw-bold text-center mb-2">Sign up with</p>
          <div className="mb-3">
            <Form className="d-flex flex-column">
              <Form.Group style={styles.inputContainer} className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name" />
              </Form.Group>

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" placeholder="Set a Password" />
                <div className="custom-control custom-checkbox">
                  <input onClick={() => setChecked(!isChecked)} type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label style={{
                    fontSize: '14px',
                    color: '#8898AA',
                    marginLeft: 10,
                    marginTop: '25px',

                  }}>I agree with the <span style={{
                    fontSize: '14px',
                    color: '#5E72E4'

                  }}>Privacy Policy</span> </label>
                </div>
              </Form.Group>
              <Button style={{
                backgroundColor: '#5E72E4',
                borderColor: '#5E72E4',
                padding: '8px 35px 8px 35px',
                alignSelf: 'center'
              }} onClick={onSignUp} disabled={submitDisabled}>
                Continue
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