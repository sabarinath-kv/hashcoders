import { brandName } from "@/constants/common";
import Head from "next/head";
import React, { FC } from "react";
import Image from 'next/image';

const PublicLayout: FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{brandName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
        background: `url(/pageBackground.png) no-repeat`,
        backgroundSize: '100% 100%',
        position: 'fixed',
        bottom: '0px',
        top: '0px',
        right: '0px',
        left: '0px',
        padding: '46px',
      }}>
        <div className="d-flex justify-content-between">
          <img src="logo.png" />
          <div className="d-flex align-items-center gap-4">
            <a href="/signup" className="d-flex align-items-start gap-2 text-center text-decoration-none">
              <Image
                priority
                src="/icons/user.svg"
                alt="Follow us on Twitter"
                style={{
                  marginTop: '2px'
                }}
                height={20}
                width={20}
              />
              <p className="text-white">Register</p>
            </a>
            <a href="/" className="d-flex align-items-start gap-2 text-center text-decoration-none">
              <Image
                priority
                src="/icons/login.svg"
                alt="Follow us on Twitter"
                style={{
                  marginTop: '2px'
                }}
                height={20}
                width={20}
              />
              <p className="text-white">Login</p>
            </a>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default PublicLayout;
