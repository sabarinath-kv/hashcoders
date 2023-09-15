import { userAtom } from "@/states/atom";
import { FC, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRecoilState } from "recoil";
import { useRouter } from 'next/navigation';
import { Alert } from "react-bootstrap";


const TextInput: FC = () => {
    const [, setUsername] = useRecoilState(userAtom);

    const [value, setValue] = useState<string>('');

    const [showAlert, setShowAlert] = useState<boolean>(false);

    const onInput = (e: any) => {
      if (showAlert) {
        setShowAlert(false);
      }
      setValue(e.target.value);
    };

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        if (value === '') {
          setShowAlert(true);
        } else {
          setUsername({name: '', phoneNumber: ''});
          push('/username');
        }
      };

      const { push } = useRouter();

    return (
    <Form className="w-100" onSubmit={onFormSubmit}>
        <Form.Label className="mt-4" htmlFor="basic-url">Enter your username</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="basic-url"
          value={value}
          onChange={onInput}
        />
      </InputGroup>
      <div style={{
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: '40%',
      }}>
      <button type="submit" className="rounded bg-info" style={{marginRight: 20}}>
        Submit
      </button>
      {showAlert && <Alert variant="warning">
        Please enter a valid username
      </Alert>}
      </div>
    </Form>
    );
};

export default TextInput;
