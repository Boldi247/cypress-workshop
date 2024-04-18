import { FaLocationCrosshairs } from "react-icons/fa6";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import SectionContainer from "@/components/SectionContainer";

const LocatorsPage = () => {
  const { toast } = useToast();

  const showToast = (message: string) => {
    toast({
      title: message,
      description: "This is a toast message",
      variant: "default",
    });
  };

  return (
    <>
      <Toaster />
      <SectionContainer>
        <h1 className="text-2xl text-center flex gap-2 items-center justify-center mb-4 capitalize">
          What Are Locators? <FaLocationCrosshairs />
        </h1>
        <p>
          Cypress locators are used to find WebElements in the HTML Document
          Object Model (DOM). A Selector or Locator is an object that finds and
          returns web page items/elements on a page based on the query. In
          Automation, to perform any operation on the web elements first you
          need to locate an element and perform an action on that element. Once
          you find multiple elements on webpage, relevant operations can be
          performed on these elements or assert their presence for validation.
        </p>

        <div className="flex flex-col space-y-2 mt-4">
          <button
            className="bg-green-700 rounded-lg px-4 py-2"
            id="button-with-id"
            onClick={() => showToast("Button with ID clicked!")}
          >
            Button with ID
          </button>
          <button
            className="bg-green-700 rounded-lg px-4 py-2 button-with-classname"
            onClick={() => {
              showToast("Button with classname clicked!");
            }}
          >
            Button with classname
          </button>
          <button
            className="bg-green-700 rounded-lg px-4 py-2"
            data-cy="button-data-cy"
            onClick={() => {
              showToast("Button with data-cy clicked!");
            }}
          >
            Button with data-cy attribute
          </button>
          <button
            className="bg-green-700 rounded-lg px-4 py-2"
            onClick={() => {
              showToast("Button with content clicked!");
            }}
          >
            Button with content
          </button>
        </div>
      </SectionContainer>
    </>
  );
};

export default LocatorsPage;
