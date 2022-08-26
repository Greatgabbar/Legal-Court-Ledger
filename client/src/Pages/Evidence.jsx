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
} from 'reactstrap';
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

  const [evidence, setEvidence] = useState('');
  const [flag, setFlag] = useState(false);

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
                                  <a href={data.link} target="_blank">
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
        )}
      </div>
    </div>
  );
};

export default Evidence;
