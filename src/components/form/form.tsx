'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../input/input";
import styles from "./form.module.scss"
import { Button } from "../button/button";



type Inputs = {
  example: string
  exampleRequired: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example"))

  return (
   
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

   
    <Input placeholder="Date" {...register("example")}/>
    <Input placeholder="Time" {...register("exampleRequired", { required: true })} />
    
      {errors.exampleRequired && <span>This field is required</span>}

   
      <Button children={'click'} type="submit"/>
    </form>
  )
}