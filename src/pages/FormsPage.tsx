import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useRef, useState } from "react";

interface PersonDefinition {
  name: string;
  email: string;
  dob: string;
}

const FormsPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);

  const [personData, setPersonData] = useState<PersonDefinition | undefined>(
    undefined
  );

  const savePersonData = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const dob = dobRef.current?.value;

    if (name && email && dob) {
      setPersonData({ name, email, dob });
    }

    console.log("Form submitted!");
  };

  return (
    <div className="max-w-[800px] pt-8 space-y-4 mx-auto">
      <div className="w-full mx-auto bg-black px-6 py-4 rounded-lg">
        <h1 className="text-2xl">Input fields, forms</h1>
        <form
          className="space-y-2 mt-4"
          onSubmit={(event) => {
            event.preventDefault();
            savePersonData();
          }}
        >
          <div className="space-y-1">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" type="text" ref={nameRef} />
          </div>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
              ref={emailRef}
            />
          </div>
          <div className="space-y-1">
            <Label>Date of Birth</Label>
            <Input type="date" ref={dobRef} />
          </div>

          <Button variant="secondary" className="mt-4">
            Save Data
          </Button>
        </form>
      </div>
      <div className="w-full mx-auto bg-black px-6 py-4 rounded-lg">
        <h1 className="text-2xl mb-4">Employee Data</h1>
        {personData ? (
          <div className="bg-green-200 text-green-700 px-4 py-2 rounded-2xl border border-green-700">
            <p>Name: {personData.name}</p>
            <p>Email: {personData.email}</p>
            <p>Date of Birth: {personData.dob}</p>
          </div>
        ) : (
          <div className="bg-red-200 text-red-700 px-4 py-2 rounded-2xl border border-red-700">
            <h3>Your saved data will appear here</h3>
            <p>You haven't saved a persons details yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormsPage;
