import React, { useState, useContext } from 'react';
import classes from './Cases.module.css';

import {
  Table,
  Button,
  UncontrolledTooltip,
  Modal,
  Row,
  Col,
  ModalBody,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import useBearStore from 'store';
import { UserContext } from 'context/UserContext';

const arr = [
  {
    caseId: 'UPHR059364232022',
    name: 'Raja vs Moti',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
  {
    caseId: 'PUCD909363492022',
    name: 'Abhilaksh vs Shruti ',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'DIVORCE PETITION',
    caseStatus: 'pending',
  },
  {
    caseId: 'APCE032423423434',
    name: 'Sajan vs Sjanaa',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
  {
    caseId: 'CDHR059313123233',
    name: 'Akshay Khandelwal vs Yoshna ',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Human Trafficing',
    caseStatus: 'pending',
  },
  {
    caseId: 'HRCE233423423424',
    name: 'Tanmay Dukhija vs Saeed',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'AGAINST ACQUITALS',
    caseStatus: 'pending',
  },
  {
    caseId: 'DLCE059363492022',
    name: 'Rupali vs Abdul',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
  {
    caseId: 'DLCE0423',
    name: 'Anmol Tiwari vs Sarthak Gupta',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
];

const Cases = () => {
  const {makeTransaction} = useContext(UserContext);
  const roless = useBearStore((state) => state.roles);
  let history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [modalNotice, setModalNotice] = React.useState(false);
  const toggleModalNotice = () => {
    setModalNotice(!modalNotice);
  };
  return (
    <div className={classes.container}>
      <h1>Cases Assigned</h1>
      {roless === 'Admin' && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '20px',
          }}
        >
          <Button href="#" color="info" onClick={toggleModalNotice}>
            Add Case
          </Button>

          <Modal isOpen={modalNotice} toggle={toggleModalNotice}>
            <div className="modal-header">
              <button
                aria-hidden={true}
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={toggleModalNotice}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <h5 className="modal-title" id="myModalLabel">
                Add Case
              </h5>
            </div>
            <div className="modal-body">
              <Form action="" className="form" method="">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="title"
                    type="text"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="lawyer"
                    type="text"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Judge"
                    type="text"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-circle-10" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Description"
                    type="text"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Enter Clause (IPC Section)"
                    type="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Location of Incident"
                    type="text"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name Of Accused"
                    type="text"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Age"
                    type="text"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="select"
                    name="select"
                    id="inputState"
                    // value={roles}
                    // onChange={(e) => setRoles(e.target.value)}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer Not to Say</option>
                  </Input>
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="upload evidence"
                    type="file"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Form>
              <Button
                className="btn-round"
                color="info"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const data = {
                    firstName,
                    lastName,
                    roles,
                    password,
                    email,
                  };
                  console.log(data);
                  setModalNotice(false);
                  makeTransaction("DLERC0423",'Akshat','0xD1cF8530E688159aCD7cc7D5F3Dd1D02FB41d3d3','12322','Shubham Trivedi','Akshat','15322');
                  // history.push('/view-cases');
                }}
              >
                Register
              </Button>
            </div>
            <div className="modal-footer justify-content-center">
              <Button
                className="btn-round"
                color="info"
                data-dismiss="modal"
                type="button"
                onClick={toggleModalNotice}
              >
                Sounds good!
              </Button>
            </div>
          </Modal>
        </div>
      )}
      <div className={classes.table}>
        <Table responsive>
          <thead className="text-primary">
            <tr>
              <th className="text-center">Case Id</th>
              <th>Name</th>
              <th>Assigned Judge</th>
              <th className="text-center">Assigned Lawyer</th>
              <th className="text-right">Case Type</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((data, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{data.caseId}</td>
                  <td>{data.name}</td>
                  <td>{data.lawyer}</td>
                  <td className="text-center">{data.judge}</td>
                  <td className="text-right">{data.caseType}</td>
                  <td className="text-right">
                    <Link to="/view-cases/1">View Status</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cases;
