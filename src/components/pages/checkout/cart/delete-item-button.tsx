'use client'
import React from 'react'
import { FiDelete } from "react-icons/fi";
interface Props{
  uuid:string;
}
const DeleteItemButton = ({uuid}:Props) => {
  const onDelete = (item: any) => {
    console.log("on delete", item);
  };
  return (
    <button onClick={() => onDelete(uuid)}>
    <FiDelete className="text-primary" />
  </button>
  )
}

export default DeleteItemButton