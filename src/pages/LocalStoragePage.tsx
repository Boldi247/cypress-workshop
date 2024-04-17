import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-label";
import { useRef } from "react";

const LocalStoragePage = () => {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string) => {
    toast({
      title: "Saved to localstorage + sessionstorage",
      description: message,
      variant: "default",
    });
  };

  const saveTextToLocalStorage = (text: string | undefined) => {
    if (text) {
      localStorage.setItem("text", text);
      sessionStorage.setItem("text", text);
      showToast("Key: text; Value: " + text);
    }
  };

  return (
    <>
      <Toaster />
      <SectionContainer>
        <h1 className="text-2xl mb-4">Localstorage, sessionstorage testing</h1>
        <Label>Save text to localstorage and sessionstorage</Label>
        <div className="flex items-center gap-2">
          <Input type="text" className="w-fit" ref={inputRef} />
          <Button
            variant="secondary"
            onClick={() => saveTextToLocalStorage(inputRef.current?.value)}
          >
            Save
          </Button>
        </div>
      </SectionContainer>
    </>
  );
};

export default LocalStoragePage;
