'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Leaf,
} from 'lucide-react';

const fruitImage = '/images/ChatGPT Image Sep 7, 2026, 11_07_01 AM.png';
const whatsappNumber = '919837774919';

const positions = [
  'Sales', 'Marketing', 'Production', 'Quality Control',
  'Operations', 'Packaging', 'Business Development', 'Other',
];

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  position: z.string().min(1, 'Please select a position'),
  location: z.string().min(2, 'Please enter your location'),
  yearsExperience: z.string().optional(),
  linkedin: z.string().optional(),
  coverMessage: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function JobApplicationPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const message = [
      'New Careers Application - Crunchlisious',
      '',
      `Full Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Position: ${data.position}`,
      `Location: ${data.location}`,
      `Years of Experience: ${data.yearsExperience || 'Not provided'}`,
      `LinkedIn / Portfolio: ${data.linkedin || 'Not provided'}`,
      `Cover Message: ${data.coverMessage || 'Not provided'}`,
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
            <p className="eyebrow" style={{ justifyContent: 'center' }}>APPLICATION RECEIVED <span /></p>
            <h1>Thank you for your<br />interest in Crunchlisious.</h1>
            <p className="success-text">Our team will review your application and contact you if there is a suitable opportunity.</p>
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
          <p className="eyebrow light">CAREERS <span /></p>
          <h1 className="form-hero-title">Join our team</h1>
          <p className="form-hero-sub">Tell us a little about yourself and how you could be part of the Crunchlisious journey.</p>
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
              <label htmlFor="email">Email Address <span className="req">*</span></label>
              <input id="email" type="email" {...register('email')} className={errors.email ? 'has-error' : ''} placeholder="you@example.com" />
              {errors.email && <span className="field-error">{errors.email.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="phone">Phone Number <span className="req">*</span></label>
              <input id="phone" type="tel" {...register('phone')} className={errors.phone ? 'has-error' : ''} placeholder="+1 000 000 0000" />
              {errors.phone && <span className="field-error">{errors.phone.message}</span>}
            </div>
            <div className="field">
              <label htmlFor="position">Position Applying For <span className="req">*</span></label>
              <select id="position" {...register('position')} className={errors.position ? 'has-error' : ''}>
                <option value="">Select a position</option>
                {positions.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
              {errors.position && <span className="field-error">{errors.position.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="location">Current Location <span className="req">*</span></label>
              <input id="location" type="text" {...register('location')} className={errors.location ? 'has-error' : ''} placeholder="City, Country" />
              {errors.location && <span className="field-error">{errors.location.message}</span>}
            </div>
            <div className="field">
              <label htmlFor="yearsExperience">Years of Experience</label>
              <input id="yearsExperience" type="text" {...register('yearsExperience')} placeholder="e.g. 3 years" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="linkedin">LinkedIn / Portfolio</label>
            <input id="linkedin" type="url" {...register('linkedin')} placeholder="https://linkedin.com/in/yourname" />
          </div>

          <div className="field">
            <label htmlFor="coverMessage">Cover Message</label>
            <textarea id="coverMessage" rows={5} {...register('coverMessage')} placeholder="Tell us why you'd like to join Crunchlisious..." />
          </div>

          <button type="submit" className="button button-orange form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'} <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </main>
  );
}
