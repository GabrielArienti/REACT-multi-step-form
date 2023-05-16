import React from "react";
import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState[0];

  return {
    currentStep,
    currentComponen: steps[currentStep],
  };
}
