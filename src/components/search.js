import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Search } from 'tabler-icons-react';
import { useRouter } from "next/router";

export default function SearchInput() {
  const [value, setValue] = useState("")
  const router = useRouter()

  const submit = () => {
    router.push('/search/' + value)
  }

  useEffect(() => {
    const text = decodeURI(location.pathname.replace('/search/', ''))
    setValue(text == "/" ? "" : text)
  }, [])

  return <Input
    rounded
    bordered
    placeholder="Search"
    onChange={(e) => setValue(e.target.value)}
    value={value}
    onKeyPress={(e) => {
      if (e.key === "Enter") {
        setValue(e.target.value)
        submit()
      }
    }}
    contentRight={< Search size={48} className="text" />}
  />
}