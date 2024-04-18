import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Button } from '../button';
import { WizardProps } from './types';

export function Wizard({ steps }: WizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4 px-6 py-3 flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center flex-col text-sm">
              {currentStep === index ? (
                <div className="border p-2 rounded-full bg-primary">
                  <p className="text-white text-sm">{step.icon}</p>
                </div>
              ) : (
                <div className="border p-2 rounded-full">
                  <p className="text-sm">{step.icon}</p>
                </div>
              )}
            </div>
            {index !== totalSteps - 1 && (
              <div className="w-[20%] h-[1px] bg-slate-300 mx-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex-1 text-sm text-center">
        {steps[currentStep].component}
      </div>
      <div className="flex justify-between py-4 px-6 ">
        <div>
          {currentStep > 0 && (
            <Button
              onClick={handlePrevious}
              text="Anterior"
              iconLeft={<BiChevronLeft size={18} />}
            />
          )}
        </div>
        <div>
          {currentStep < totalSteps - 1 ? (
            <Button
              onClick={handleNext}
              text="Próximo"
              iconRight={<BiChevronRight size={18} />}
            />
          ) : (
            <Button onClick={handleReset} text="Resetar" />
          )}
        </div>
      </div>
    </div>
  );
}
