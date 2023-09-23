'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Contact() {
  return (
    <form className="flex items-center justify-center my-12 flex-col gap-4">
      <div>
        
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your Name"
          />
        </div>
        <TextInput
          id="password1"
          placeholder='Your name'
          type="text"
        />
      </div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          placeholder="Email ID"
          required
          type="email"
        />
      </div>
    
      <Button type="submit">
        Contact me
      </Button>
    </form>
  )
}


