"use client";
import { Button } from "@/components/ui/button";
import { Listbox, ListboxItem } from "@heroui/react";

const Page = () => {
  return (
    <div>
      <Listbox>
        <ListboxItem key="home" href="/home">
          Home
        </ListboxItem>
        <ListboxItem key="about" href="/about">
          About
        </ListboxItem>
      </Listbox>
      <Button variant="new">Hello</Button>
    </div>
  );
};

export default Page;
