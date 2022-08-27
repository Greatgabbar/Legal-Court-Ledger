import React, { useState } from 'react';
import classes from './ViewCase.module.css';

import {
  Badge,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  Form,
} from 'reactstrap';
import useBearStore from 'store';
const Evidence = () => {
  const arr = [
    {
      id: 1,
      type: 'file',
      link: 'https://google.com',
      date: '12/08/2022',
      hash: '31233gyu13ugy1312',
    },
    {
      id: 2,
      type: 'image',
      link: 'https://google.com',
      date: '12/08/2022',
      hash: '89th4ubt3uhgbg4g',
    },
    {
      id: 3,
      type: 'mp3',
      link: 'https://google.com',
      date: '12/08/2022',
      hash: '90ripugb8422903323k3',
    },
    {
      id: 4,
      type: 'file',
      link: 'https://google.com',
      date: '12/08/2022',
      hash: '232fh39fb34fb349ff34',
    },
    {
      id: 5,
      type: 'file',
      link: 'https://google.com',
      date: '12/08/2022',
      hash: 't276t8r3fv34fvbuifiu3',
    },
  ];
  const roless = useBearStore((state) => state.roles);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [evidence, setEvidence] = useState('');
  const [flag, setFlag] = useState(false);
  const [modalNotice, setModalNotice] = React.useState(false);
  const toggleModalNotice = () => {
    setModalNotice(!modalNotice);
  };

  const evidencees = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px',
      }}
    >
      <Button href="#" color="info" onClick={toggleModalNotice}>
        Add Evidence
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
              >
                <option>File</option>
                <option>Image</option>
                <option>audio</option>
                <option>Large File</option>
                <option>video</option>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              history.push('/auth/login');
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
  );

  return (
    <div className={classes.container}>
      <h1>Evidences </h1>

      <div className={classes.input}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="nc-icon nc-single-02"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            placeholder="Enter Court case Number .."
            value={evidence}
            onChange={(e) => setEvidence(e.target.value)}
          />
        </InputGroup>
        <Button
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setFlag(true);
          }}
        >
          {' '}
          Search{' '}
        </Button>
      </div>
      <div>
        {flag && (
          <div>
            {roless === 'Admin' ? evidencees : <></>}
            <div className="content">
              <div className="header text-center">
                <h3 className="title">Evidences</h3>
              </div>

              <Row>
                <Col md="12">
                  <Card className="card-timeline card-plain">
                    <CardBody>
                      <ul className="timeline">
                        {arr.map((data, i) => {
                          return (
                            <li
                              className={i % 2 === 0 ? 'timeline-inverted' : ''}
                            >
                              <div className="timeline-badge danger">
                                <i className="nc-icon nc-single-copy-04" />
                              </div>
                              <div className="timeline-panel">
                                <div className="timeline-heading">
                                  <Badge color="danger" pill>
                                    {data.type}
                                  </Badge>
                                </div>
                                <div className="timeline-body">
                                  <p>
                                    <a
                                      href={
                                        'https://res.cloudinary.com/flyingbing/image/upload/v1661511291/ledger/preambler-1661511288939.jpg'
                                      }
                                      target="_blank"
                                    >
                                      Click here to access file
                                    </a>
                                  </p>
                                  <p>hash : {data.hash}</p>
                                </div>
                                <h6>
                                  <i className="fa fa-clock-o" />
                                  {data.date}
                                </h6>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Evidence;
