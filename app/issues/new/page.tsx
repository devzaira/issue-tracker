'use client';

import dynamic from 'next/dynamic';
import { TextField, Button } from '@radix-ui/themes';
import React from 'react';
import { useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

// Dynamically import the editor
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

const NewIssuePage = () => {
  const router = useRouter(); 
  const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <form 
      className='max-w-xl space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}>
        <TextField.Root placeholder='Title' {...register("title")}>
        </TextField.Root>
        <Controller 
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Description" {...field}/>}
        />
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage