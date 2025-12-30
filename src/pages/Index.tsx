import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TrustSection from '@/components/home/TrustSection';
import CTASection from '@/components/home/CTASection';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CHYWORLD ENTERPRISE</title>
        <meta
          name="description"
          content="Discover our curated collection of high-performance laptops from world-leading brands. Gaming, Business, Student, and Ultrabook laptops with free shipping and 2-year warranty."
        />
        <meta name="keywords" content="laptops, gaming laptops, business laptops, ultrabooks, laptop store" />
      </Helmet>

      <Layout>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <TrustSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
