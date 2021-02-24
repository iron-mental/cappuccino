import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
// import AppLayout from '../components/AppLayout';
import TestLayout from '../components/TestLayout';

const Terminal = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Terminal</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <TestLayout>
        <Component />
      </TestLayout>
    </>
  );
};

Terminal.propTypes = {
  Component: PropTypes.elementType,
};

export default Terminal;
