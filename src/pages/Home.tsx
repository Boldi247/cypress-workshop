import { TbBrandCypress } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { Button } from "@/components/ui/button";
import { FaBook } from "react-icons/fa6";

import WidgetsBanner from "@/assets/widgets-banner.png";
import NavigationButton from "@/components/NavigationButton";

const Home = () => {
  const reditrectToPage = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="max-w-[800px] pt-8 space-y-4 mx-auto">
        <div className="w-full mx-auto text-center bg-black px-6 py-4 rounded-lg">
          <h1 className="text-3xl flex items-center gap-3 justify-center mb-4">
            <span className="flex items-center gap-1 font-bold">
              Cypress <TbBrandCypress className="text-green-700" />
            </span>
            <span>Workshop</span>
          </h1>
          <p className="text-slate-400">2024.04.23</p>
          <p>Let's learn Cypress from the ground up through this project!</p>
          <div className="flex gap-2 justify-center items-center mt-4">
            <Button
              variant="secondary"
              className="w-[130px]"
              onClick={() => reditrectToPage("https://cypress.io")}
            >
              Cypress.io
            </Button>
            <Button
              variant="secondary"
              className="w-[130px]"
              onClick={() =>
                reditrectToPage("https://npmjs.com/package/cypress")
              }
            >
              Cypress on npm
            </Button>
          </div>
        </div>
        <div className="w-full mx-auto bg-black px-6 py-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl">
              Check out our use of <span className="font-bold">Cypress</span> on
              a real project!
            </h1>
            <Button variant="secondary">
              <span className="flex gap-2 items-center">
                Widgets Repository <VscAzureDevops />
              </span>
            </Button>
          </div>

          <img
            src={WidgetsBanner}
            alt=""
            className="bg-secondary p-2 rounded-lg"
          />
        </div>

        <div className="w-full mx-auto bg-black px-6 py-4 rounded-lg">
          <h1 className="text-2xl mb-4 flex items-center gap-2">
            Learning Path <FaBook />
          </h1>
          <div className="space-y-2">
            <NavigationButton url="/locators">
              What are locators, especially data-cy attributes?
            </NavigationButton>
            <NavigationButton url="/forms">
              Testing input fields and form submissions
            </NavigationButton>
            <NavigationButton url="/advanced-input-types">
              Checkboxes, dropdowns
            </NavigationButton>
            <NavigationButton url="/localstorage">
              Local Storage and Session Storage testing
            </NavigationButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
