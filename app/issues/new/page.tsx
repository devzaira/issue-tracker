'use client';

import dynamic from 'next/dynamic';
import { TextField, Button } from '@radix-ui/themes';
import React from 'react';

// Dynamically import the editor
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

const NewIssuePage = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSubmit = () => {
    console.log("New Issue Submitted:", { title: value });
    // Add your form submission logic here
  };

  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Title'>
        </TextField.Root>
        <SimpleMDE value={value} onChange={handleChange} placeholder="Description" />
        <Button onClick={handleSubmit}>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage