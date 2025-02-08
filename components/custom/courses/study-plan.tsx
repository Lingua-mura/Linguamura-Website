'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import CompletionScreen from "@/components/custom/catalogue/completeScreen";
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";


export const timeTargets = [
  { duration: '5', label: '5 mins' },
  { duration: '10', label: '10 mins' },
  { duration: '30', label: '30 mins' },
  { duration: '50', label: '50 mins' },
  { duration: '60', label: '60 mins' }
];



const studyPlan = [
  { id: 1, text: "Set a daily target to smash your learning goals", options: timeTargets }
];

export interface UserLanguagePreferences {
  timeTarget: string;
}

export default function Questionnaire() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const isComplete = currentStep === studyPlan.length;

  const savePreferences = () => {
    const preferences: UserLanguagePreferences = {
      timeTarget: answers[1],
    };

    localStorage.setItem('studyPlan', JSON.stringify(preferences));
  };

  const handleNext = () => {
    if (currentStep < studyPlan.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === studyPlan.length - 1) {
      savePreferences();
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

//   const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAnswers({
//       ...answers,
//       [studyPlan[currentStep].id]: e.target.value,
//     });
//   };

  const renderQuestion = () => {
    const currentQuestion = studyPlan[currentStep];
    
    return (
      <div className="relative">
        {currentStep > 0 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}
        
        {currentQuestion.id === 1 && (
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mt-4 mb-8">{currentQuestion.text}</h2>
            <div className="flex flex-col space-y-3">
              {timeTargets.map((time) => (
                <div
                  key={time.duration}
                  className={`p-4 rounded-full border cursor-pointer transition-all hover:bg-gray-50 ${
                    answers[currentQuestion.id] === time.duration ? 'border-teal-400' : 'border-gray-200'
                  }`}
                  onClick={() => {
                    setAnswers({
                      ...answers,
                      [currentQuestion.id]: time.duration
                    });
                    handleNext();
                  }}
                >
                  <div className="text-center">
                    <span className="text-gray-900">
                      {time.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {!isComplete ? (
        renderQuestion()
      ) : (
        <CompletionScreen 
          answers={answers} 
          onStartStudyPlan={() => router.push('/user/courses/study-plan')}
          onNotNow={() => router.push('/user/courses')}
        />
      )}
    </div>
  );
}