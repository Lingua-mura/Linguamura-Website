import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '../ui/button';
import { AlertDialogAction } from '../ui/alert-dialog';

interface LearningModuleProps {
  heading: string;
  description?: string;
  question: string;
  audioSrc?: string;
  correctAnswer: string;
}

const LearningModule: React.FC<LearningModuleProps> = ({
  heading,
    description,
  question,
  audioSrc,
  correctAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowCorrectAnswer(answer === correctAnswer);
  };

  const handleContinue = () => {
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent>
      <h2 className="text-lg font-medium mb-4">{description}</h2>
        <h2 className="text-lg font-medium mb-4">{question}</h2>
        <div className="mb-4">
          <audio controls>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            variant={selectedAnswer === 'Bonjour' ? 'default' : 'ghost'}
            onClick={() => handleAnswerSelect('Bonjour')}
          >
            Bonjour
          </Button>
          <Button
            // variant={selectedAnswer === 'Incorrect' ? 'destructive' : 'ghost'}
            onClick={() => handleAnswerSelect('Incorrect')}
          >
            Incorrect
          </Button>
        </div>
        {showCorrectAnswer && (
          <Alert variant={selectedAnswer === correctAnswer ? 'default' : 'destructive'}>
            <AlertTitle>
              {selectedAnswer === correctAnswer ? 'Brava!' : 'Not quite right'}
            </AlertTitle>
            <AlertDescription>
              {selectedAnswer === correctAnswer
                ? 'Good morning! How are you?'
                : 'The right word is Bonjour.'}
            </AlertDescription>
            <AlertDialogAction>
              <Button onClick={handleContinue}>Continue</Button>
            </AlertDialogAction>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default LearningModule;