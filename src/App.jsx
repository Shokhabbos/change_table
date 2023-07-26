import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);

  const handleBackClick = () => {
    setStep(step - 1);
  };

  // const handleTitleSubmit = () => {
  //   setStep(1);
  // };

  const handleDescriptionSubmit = () => {
    setStep(2);
  };

  const handleSubmit = () => {
    // Submit form data
    setStep(3);
  };

  return (
    <div className="bg-[#8E44AD] w-screen h-screen flex justify-center items-center">
      <div className="box bg-white flex rounded p-4 w-[600px] justify-between">
        <div className="list-decimal pl-4">
          <button
            className={`text-${step >= 0 ? "black" : "neutral-500"} block`}
            onClick={() => setStep(0)}
            disabled={step === 2}
          >
            <span
              className={`${
                step >= 0 ? "bg-blue-600" : "bg-neutral-200"
              } px-3 py-1 mr-2 font-semibold text-center rounded-2xl mb-2 inline-block`}
            >
              1
            </span>
            <span
              className={`${step >= 0 ? "text-black" : "text-neutral-500"}`}
            >
              Choose title
            </span>
          </button>
          <button
            className={`text-${step >= 1 ? "black" : "neutral-500"} block`}
            onClick={() => setStep(1)}
            disabled={step === 3}
          >
            <span
              className={`${
                step >= 1 ? "bg-blue-600" : "bg-neutral-200"
              } px-3 py-1 mr-2 font-semibold text-center rounded-2xl mb-2 inline-block`}
            >
              2
            </span>
            <span
              className={`${step >= 1 ? "text-black" : "text-neutral-500"}`}
            >
              Choose description
            </span>
          </button>
          <button
            className={`text-${step >= 2 ? "black" : "neutral-500"} block`}
            onClick={() => setStep(2)}
            disabled={step === 0}
          >
            <span
              className={`${
                step >= 2 ? "bg-blue-600" : "bg-neutral-200"
              } px-3 py-1 mr-2 font-semibold text-center rounded-2xl mb-2 inline-block`}
            >
              3
            </span>
            <span
              className={`${step >= 2 ? "text-black" : "text-neutral-500"}`}
            >
              Confirm data
            </span>
          </button>
        </div>
        <div>
          {step === 0 && (
            <>
              <h4 className="mb-3">Choose title content</h4>
              <button
                className="border bg-neutral-300 px-4 py-3"
                onClick={() => setStep(1)}
              >
                Submit title
              </button>
            </>
          )}
          {step === 1 && (
            <>
              <h4 className="mb-3">Choose description content</h4>
              <button
                className="border bg-neutral-300 mr-2 px-4 py-3"
                type="button"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
              <button
                className="border bg-neutral-300 px-4 py-3"
                onClick={() => setStep(2)}
                disabled={step === 3}
              >
                Submit description
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <h4 className="mb-3">Are you happy?</h4>
              <button
                className="border bg-neutral-300 px-4 py-3"
                type="button"
                onClick={() => {
                  if (step > 0) {
                    handleBackClick();
                  }
                }}
              >
                No, go Back
              </button>
              <button
                className="border bg-neutral-300 ml-2 px-4 py-3"
                onClick={() => {
                  if (step < 2) {
                    handleDescriptionSubmit();
                  } else {
                    handleSubmit();
                  }
                }}
              >
                Yes, go ahead
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <h4 className="mb-3">
                Ok, you're done. Thanks for submitting your data!{" "}
              </h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
