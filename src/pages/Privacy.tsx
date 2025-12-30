import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Privacy: React.FC = () => (
  <>
    <Helmet>
      <title>Privacy Policy - Chyworld</title>
      <meta name="description" content="Chyworld privacy policy." />
    </Helmet>
    <Layout>
      <section className="py-16">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">
            We respect your privacy. This policy describes how we handle your data when you use our website and services.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
          <p className="text-muted-foreground">Contact details you provide, order details, and basic analytics.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Information</h2>
          <p className="text-muted-foreground">To fulfill orders, provide support, and improve our services.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
          <p className="text-muted-foreground">Questions? Email us at chyworld@gmail.com</p>
        </div>
      </section>
    </Layout>
  </>
);

export default Privacy;
