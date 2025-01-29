import Image from 'next/image';
import { countries, timeTargets } from './eduQuestionnaire';
import { Button } from '@/components/ui/button';

interface CompletionScreenProps {
  answers: Record<number, string>;
  onStartStudyPlan: () => void;
  onNotNow: () => void;
}

export default function CompletionScreen({ 
  answers, 
  onStartStudyPlan, 
  onNotNow 
}: CompletionScreenProps) {
  const selectedLanguage = countries.find(c => c.code === answers[1])?.name;
  const selectedTime = timeTargets.find(t => t.duration === answers[3])?.duration;

  return (
    <div className="text-center w-1/2 mx-auto my-4">
      <h2 className="text-xl font-bold mt-4 mb-4">You are off to a great start!</h2>
      <div className="mb-4">
        <Image 
          src="/icons/dart.png" 
          alt="Target" 
          width={96} 
          height={96} 
          className="mx-auto" 
        />
      </div>
      <p className="mb-6">
        Learning {selectedLanguage} {selectedTime} mins/day will make you a great speaker in no time.
      </p>
      <Button 
        className="w-full mb-3 bg-teal-400 text-white rounded-full py-3 px-6"
        onClick={onStartStudyPlan}
      >
        Start a Study Plan
      </Button>
      <Button 
        variant="default"
        className="w-full border border-gray-300 rounded-full py-3 px-6"
        onClick={onNotNow}
      >
        Not now
      </Button>
    </div>
  );
}