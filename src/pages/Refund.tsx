import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Refund: React.FC = () => (
  <>
    <Helmet>
      <title>Refund Policy - Chyworld</title>
      <meta name="description" content="Chyworld refund policy." />
    </Helmet>
    <Layout>
      <section className="py-16">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
          <p className="text-muted-foreground mb-4">
            We offer a 30-day hassle-free return policy. Items must be in original condition and packaging.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
          <p className="text-muted-foreground">Contact us at chyworld@gmail.com with your order number and reason for return.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Exceptions</h2>
          <p className="text-muted-foreground">Certain items may be non-returnable due to hygiene or licensing reasons.</p>
        </div>
      </section>
    </Layout>
  </>
);

export default Refund;
