import React,{useState,useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import questions from './Questions';
import "./Style.css"
function Voice(){  
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN'});
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }
   const [matched, setMatched] = useState(null);
 const editDistance = (a, b) => {
    const dp = Array.from({ length: a.length + 1 }, () =>
      Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1].toLowerCase() === b[j - 1].toLowerCase()) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }
    return dp[a.length][b.length];
  };
  // Effect: whenever transcript changes, find closest subject
  useEffect(() => {
    if (!transcript) return;

    const spoken = transcript.trim();
    if (!spoken) return;

    let bestMatch = null;
    let minDist = Infinity;

    questions.forEach((q) => {
      const dist = editDistance(spoken, q.name);
      if (dist < minDist) {
        minDist = dist;
        bestMatch = q;
      }
    });

    if (bestMatch) {
      setMatched(bestMatch);
      // Speak it
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(bestMatch.text);
      utterance.lang = bestMatch.lang;
      window.speechSynthesis.speak(utterance);
    }
  }, [transcript]);

       return (
        <>
         <div className="container">
                <h2>EchoLearn</h2>
                <br/>
                <p>If you are blind,don't hesitate to learn.I am here to help you by recognizing your voice.
                    </p>

                <div className="main-content">
                    {transcript}
                </div>

                <div className="btn-style">
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                </div>
                <div>
                   
                   {matched && (
        <div className="result">
          <p>{matched.text}</p>
        </div>
      )}                                     
        </div>     
            </div>

        </>
       )


}
export default Voice ;