'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import CompletionScreen from "./completeScreen";
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const countries = [
  { code: 'CN', name: 'Chinese' },
  { code: 'US', name: 'English' },
  { code: 'FR', name: 'French' },
  { code: 'JP', name: 'Japanese' },
  { code: 'IT', name: 'Italian' },
  { code: 'DE', name: 'German' },
  { code: 'ES', name: 'Spanish' },
  { code: 'RU', name: 'Russian' },
  { code: 'KE', name: 'Swahili' },
  { code: 'VA', name: 'Latin' },
  { code: 'IL', name: 'Hebrew' },
  { code: 'PT', name: 'Portuguese' },
  { code: 'KR', name: 'Korean' },
  { code: 'PL', name: 'Polish' },
  { code: 'SE', name: 'Swedish' },
  { code: 'HT', name: 'Haitian Creole' },
  { code: 'HU', name: 'Hungarian' },
  { code: 'IE', name: 'Irish' },
  { code: 'IL', name: 'Yiddish' },
  { code: 'IN', name: 'Hindi' }
];

export const proficiencyLevels = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' }
];

export const timeTargets = [
  { duration: '5', label: '5 mins' },
  { duration: '10', label: '10 mins' },
  { duration: '30', label: '30 mins' },
  { duration: '50', label: '50 mins' },
  { duration: '60', label: '60 mins' }
];



const questions = [
  { id: 1, text: "I want to learn:", options: countries },
  { id: 2, text: "What's your proficiency level?", options: proficiencyLevels },
  { id: 3, text: "Set a daily target to smash your learning goals", options: timeTargets }
];

export interface UserLanguagePreferences {
  language: string;
  proficiency: string;
  timeTarget: string;
  languageName: string;
}

export default function Questionnaire() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const isComplete = currentStep === questions.length;

  const savePreferences = () => {
    const selectedLanguage = countries.find(c => c.code === answers[1]);
    const preferences: UserLanguagePreferences = {
      language: answers[1],
      languageName: selectedLanguage?.name || '',
      proficiency: answers[2],
      timeTarget: answers[3],
    };

    localStorage.setItem('languagePreferences', JSON.stringify(preferences));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === questions.length - 1) {
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
//       [questions[currentStep].id]: e.target.value,
//     });
//   };

  const renderQuestion = () => {
    const currentQuestion = questions[currentStep];
    
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
          <div>
            <h2 className="text-2xl font-bold text-center mt-4 mb-4">{currentQuestion.text}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.map((country) => (
                <div 
                  key={country.code}
                  className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setAnswers({
                      ...answers,
                      [currentQuestion.id]: country.code
                    });
                    handleNext();
                  }}
                >
                  <Image
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                    alt={`${country.name} flag`}
                    width={60}
                    height={40}
                    className="mb-2 border"
                  />
                  <span className="text-sm text-center">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {currentQuestion.id === 2 && (
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mt-4 mb-8">{currentQuestion.text}</h2>
            <div className="space-y-4">
              {proficiencyLevels.map((level) => (
                <div
                  key={level.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all hover:border-teal-400 ${
                    answers[currentQuestion.id] === level.id ? 'border-teal-400 bg-teal-50' : 'border-gray-200'
                  }`}
                  onClick={() => {
                    setAnswers({
                      ...answers,
                      [currentQuestion.id]: level.id
                    });
                    handleNext();
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{level.label}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {level.id === 'beginner'}
                        {level.id === 'intermediate'}
                        {level.id === 'advanced'}
                      </p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion.id] === level.id ? 'border-teal-400 bg-teal-400' : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion.id] === level.id && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {currentQuestion.id === 3 && (
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
          onStartStudyPlan={() => router.push('/user/education/setup')}
          onNotNow={() => router.push('/user')}
        />
      )}
    </div>
  );
}