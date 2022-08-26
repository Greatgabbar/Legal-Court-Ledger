import React from 'react';
import classes from './Cases.module.css';

import { Table, Button, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';

const arr = [
  {
    caseId: '1',
    name: 'Raja vs Moti',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
  {
    caseId: '2',
    name: 'Abhilaksh vs Shruti ',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'DIVORCE PETITION',
    caseStatus: 'pending',
  },
  {
    caseId: '3',
    name: 'Sajan vs Sjanaa',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
  {
    caseId: '1',
    name: 'Akshay Khandelwal vs Yoshna ',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Human Trafficing',
    caseStatus: 'pending',
  },
  {
    caseId: '1',
    name: 'Tanmay Dukhija vs Saeed',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'AGAINST ACQUITALS',
    caseStatus: 'pending',
  },
  {
    caseId: '1',
    name: 'Rupali vs Abdul',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
  {
    caseId: '1',
    name: 'Anmol Tiwari vs Sarthak Gupta',
    judge: 'Shubham Trivedi',
    lawyer: 'Akshat Gupta',
    caseType: 'Crime',
    caseStatus: 'pending',
  },
];

const Cases = () => {
  return (
    <div className={classes.container}>
      <h1>Cases Assigned</h1>
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
