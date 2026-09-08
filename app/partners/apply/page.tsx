'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const fruitImage = '/images/ChatGPT Image Sep 7, 2026, 11_07_01 AM.png';
const whatsappNumber = '919873774919';

const businessTypes = [
  'Distributor', 'Wholesaler', 'Retailer', 'Supermarket',
  'Food Business', 'Corporate Buyer', 'Other',
];

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  businessName: z.string().min(2, 'Please enter your business name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please enter your state'),
  businessType: z.string().min(1, 'Please select a business type'),
  yearsInBusiness: z.string().optional(),
  distributionNetwork: z.string().optional(),
  currentProducts: z.string().optional(),
  expectedMarket: z.string().optional(),
  website: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function DistributorApplicationPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const message = [
      'New Distribution Enquiry - Crunchlisious',
      '',
      `Full Name: ${data.fullName}`,
      `Business Name: ${data.businessName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `City: ${data.city}`,
      `State: ${data.state}`,
      `Business Type: ${data.businessType}`,
      `Years in Business: ${data.yearsInBusiness || 'Not provided'}`,
      `Distribution Network: ${data.distributionNetwork || 'Not provided'}`,
      `Current Products: ${data.currentProducts || 'Not provided'}`,
      `Expected Market / Area: ${data.expectedMarket || 'Not provided'}`,
      `Website / Business Profile: ${data.website || 'Not provided'}`,
      `Message: ${data.message || 'Not provided'}`,
    ].join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="form-page">
        <div className="container form-success-wrap">
          <div className="form-success">
            <div className="success-icon"><CheckCircle2 size={48} strokeWidth={1.4} /></div>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>ENQUIRY RECEIVED <span /></p>
            <h1>Thank you for your interest<br />in partnering with Crunchlisious.</h1>
            <p className="success-text">Our team will review your enquiry and contact you shortly.</p>
            <a className="button button-orange" href="/">Back to home <ArrowRight size={17} /></a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="form-page">
      <div className="form-hero" style={{ backgroundImage: `linear-gradient(rgba(25,59,39,.72), rgba(25,59,39,.72)), url("${fruitImage}")` }}>
        <div className="container form-hero-inner">
          <a href="/" className="back-link"><ArrowLeft size={18} /> Back to home</a>
          <p className="eyebrow light">PARTNER WITH US <span /></p>
          <h1 className="form-hero-title">Partner with Crunchlisious</h1>
          <p className="form-hero-sub">Tell us about your business and market. Our team will get in touch to discuss the opportunity.</p>
        </div>
      </div>

      <div className="container form-body">
        <form className="crunch-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="fullName">Full Name <span className="req">*</span></label>
              <input id="fullName" type="text" {...register('fullName')} className={errors.fullName ? 'has-error' : ''} placeholder="Your full name" />
              {errors.fullName && <span className="field-error">{errors.fullName.message}</span>}
            </div>
            <div className="field">
              <label htmlFor="businessName">Business Name <span className="req">*</span></label>
              <input id="businessName" type="text" {...register('businessName')} className={errors.businessName ? 'has-error' : ''} placeholder="Your business name" />
              {errors.businessName && <span className="field-error">{errors.businessName.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="email">Email Address <span className="req">*</span></label>
              <input id="email" type="email" {...register('email')} className={errors.email ? 'has-error' : ''} placeholder="you@business.com" />
              {errors.email && <span className="field-error">{errors.email.message}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone Number <span className="req">*</span></label>
              <input id="phone" type="tel" {...register('phone')} className={errors.phone ? 'has-error' : ''} placeholder="+1 000 000 0000" />
              {errors.phone && <span className="field-error">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="city">City <span className="req">*</span></label>
              <input id="city" type="text" {...register('city')} className={errors.city ? 'has-error' : ''} placeholder="Your city" />
              {errors.city && <span className="field-error">{errors.city.message}</span>}
            </div>
            <div className="field">
              <label htmlFor="state">State <span className="req">*</span></label>
              <input id="state" type="text" {...register('state')} className={errors.state ? 'has-error' : ''} placeholder="Your state" />
              {errors.state && <span className="field-error">{errors.state.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="businessType">Business Type <span className="req">*</span></label>
              <select id="businessType" {...register('businessType')} className={errors.businessType ? 'has-error' : ''}>
                <option value="">Select a business type</option>
                {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.businessType && <span className="field-error">{errors.businessType.message}</span>}
            </div>
            <div className="field">
              <label htmlFor="yearsInBusiness">Years in Business</label>
              <input id="yearsInBusiness" type="text" {...register('yearsInBusiness')} placeholder="e.g. 5 years" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="distributionNetwork">Current Distribution Network</label>
            <textarea id="distributionNetwork" rows={3} {...register('distributionNetwork')} placeholder="Describe your current distribution reach..." />
          </div>

          <div className="field">
            <label htmlFor="currentProducts">Products / Categories Currently Handled</label>
            <input id="currentProducts" type="text" {...register('currentProducts')} placeholder="e.g. Snacks, beverages, dry goods..." />
          </div>

          <div className="field">
            <label htmlFor="expectedMarket">Expected Market / Area</label>
            <input id="expectedMarket" type="text" {...register('expectedMarket')} placeholder="e.g. North region, 3 cities..." />
          </div>

          <div className="field">
            <label htmlFor="website">Website / Business Profile</label>
            <input id="website" type="url" {...register('website')} placeholder="https://yourbusiness.com" />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} {...register('message')} placeholder="Tell us about your interest in partnering with Crunchlisious..." />
          </div>

          <button type="submit" className="button button-orange form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Partnership Enquiry'} <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </main>
  );
}
