import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Button from 'react-bootstrap/Button';

function Dictaphone(props) {
  const { finalTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
      <>
    <div className="controls"> 
      <Button onClick={SpeechRecognition.startListening} variant="primary" size="lg" className="control-buttons" disabled={props.isGameOver}>Listen</Button>{' '} 
      <Button onClick={props.skipWord} variant="secondary" size="lg"className="control-buttons" disabled={props.isGameOver}>Skip</Button>{' '}
      <Button disabled={!finalTranscript.length || props.isGameOver ? true : false} onClick={() => props.checkSpokenWord(finalTranscript)} variant="primary" size="lg" className="control-buttons">Check</Button>{' '} 
    </div>
    <h2 className={props.isGameOver ? "spoken-word-off" : "spoken-word"}>{finalTranscript}</h2>
    </>
  )
}
export default Dictaphone;