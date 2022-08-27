import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useBearStore from 'store';

const Check = () => {
  const roles = useBearStore((state) => state.roles);
  let history = useHistory();
  useEffect(() => {
    if (roles === 'Admin') {
      history.push('/dashboard');
    } else {
      history.push('/view-cases');
    }
  }, [roles]);
  return <div></div>;
};

export default Check;
