import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Terms: React.FC = () => (
  <>
    <Helmet>
      <title>Terms of Service - Chyworld</title>
      <meta name="description" content="Chyworld terms of service." />
    </Helmet>
    <Layout>
      <section className="py-16">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-4">
            By using this site, you agree to these terms. Please read them carefully.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Use of Site</h2>
          <p className="text-muted-foreground">You agree not to misuse our services or violate applicable laws.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Purchases</h2>
          <p className="text-muted-foreground">All orders are subject to availability and confirmation of the order price.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
          <p className="text-muted-foreground">Questions? Email us at chyworld@gmail.com</p>
        </div>
      </section>
    </Layout>
  </>
);

export default Terms;
