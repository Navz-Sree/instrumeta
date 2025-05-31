import React, { useState } from 'react';

const VirtualInstruments = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const instruments = {
    piano: {
      title: 'Piano',
      description: 'Learn to play keys with our interactive piano. Perfect for beginners and intermediate players.',
      icon: '🎹',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      content: {
        history: 'The piano was invented around 1700 by Bartolomeo Cristofori in Italy. It evolved from the harpsichord and clavichord, offering dynamic expression through touch sensitivity.',
        basics: 'Piano has 88 keys - 52 white keys and 36 black keys. The white keys represent natural notes (C, D, E, F, G, A, B) while black keys are sharps and flats.',
        technique: 'Proper posture is crucial: sit straight, feet flat on floor, curved fingers, and relaxed wrists. Start with simple scales and arpeggios.',
        famous: 'Famous pianists include Mozart, Chopin, Beethoven, and contemporary artists like Elton John and Billy Joel.'
      },
      quiz: [
        {
          question: 'Who invented the piano?',
          options: ['Mozart', 'Bartolomeo Cristofori', 'Bach', 'Chopin'],
          correct: 1
        },
        {
          question: 'How many keys does a standard piano have?',
          options: ['76', '88', '61', '104'],
          correct: 1
        },
        {
          question: 'What should be the proper finger position?',
          options: ['Flat fingers', 'Curved fingers', 'Straight fingers', 'Bent backwards'],
          correct: 1
        },
        {
          question: 'Which keys represent natural notes?',
          options: ['Black keys', 'White keys', 'Both', 'Neither'],
          correct: 1
        },
        {
          question: 'What is the most important aspect of piano posture?',
          options: ['Standing up', 'Sitting straight', 'Leaning forward', 'Slouching'],
          correct: 1
        }
      ]
    },
    guitar: {
      title: 'Guitar',
      description: 'Master chords, strumming patterns, and fingerpicking with our virtual guitar.',
      icon: '🎸',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      content: {
        history: 'The guitar evolved from ancient stringed instruments. Modern acoustic guitar design was standardized in the 19th century by Antonio Torres in Spain.',
        basics: 'Standard guitar has 6 strings tuned to E-A-D-G-B-E from lowest to highest. Frets divide the neck into semitone intervals.',
        technique: 'Hold the guitar against your body, left hand forms chords on fretboard, right hand strums or picks strings. Start with basic open chords.',
        famous: 'Legendary guitarists include Jimi Hendrix, Eric Clapton, Jimmy Page, and contemporary artists like John Mayer and Ed Sheeran.'
      },
      quiz: [
        {
          question: 'How many strings does a standard guitar have?',
          options: ['4', '5', '6', '7'],
          correct: 2
        },
        {
          question: 'What is the tuning of guitar strings from lowest to highest?',
          options: ['E-A-D-G-B-E', 'A-D-G-C-E-A', 'G-C-F-Bb-D-G', 'D-G-C-F-A-D'],
          correct: 0
        },
        {
          question: 'What divides the guitar neck into semitone intervals?',
          options: ['Strings', 'Frets', 'Bridge', 'Nut'],
          correct: 1
        },
        {
          question: 'Which hand typically forms chords?',
          options: ['Right hand', 'Left hand', 'Both hands', 'Neither'],
          correct: 1
        },
        {
          question: 'Who is considered a legendary guitar player?',
          options: ['Mozart', 'Beethoven', 'Jimi Hendrix', 'Bach'],
          correct: 2
        }
      ]
    },
    xylophone: {
      title: 'Xylophone',
      description: 'Explore melody and rhythm with our colorful and intuitive xylophone interface.',
      icon: '🎵',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      content: {
        history: 'Xylophone originated in Southeast Asia and Africa. The word comes from Greek "xylon" (wood) and "phone" (sound). It was introduced to orchestras in the 19th century.',
        basics: 'Xylophone consists of wooden bars arranged chromatically. Each bar produces a specific pitch when struck with mallets.',
        technique: 'Hold mallets with relaxed grip, strike bars in the center for best tone. Use wrist motion rather than arm movement for rapid passages.',
        famous: 'Notable xylophone players include Lionel Hampton, Red Norvo, and contemporary percussionist Evelyn Glennie.'
      },
      quiz: [
        {
          question: 'What does "xylon" mean in Greek?',
          options: ['Sound', 'Music', 'Wood', 'Metal'],
          correct: 2
        },
        {
          question: 'Where should you strike the xylophone bars for best tone?',
          options: ['At the edges', 'In the center', 'Anywhere', 'On the sides'],
          correct: 1
        },
        {
          question: 'What motion should be used for rapid passages?',
          options: ['Arm movement', 'Shoulder movement', 'Wrist motion', 'Full body'],
          correct: 2
        },
        {
          question: 'When was xylophone introduced to orchestras?',
          options: ['18th century', '19th century', '20th century', '17th century'],
          correct: 1
        },
        {
          question: 'Which famous percussionist is known for xylophone?',
          options: ['John Bonham', 'Neil Peart', 'Evelyn Glennie', 'Buddy Rich'],
          correct: 2
        }
      ]
    },
    drums: {
      title: 'Drums',
      description: 'Build your rhythm skills and learn drum patterns with our interactive drum kit.',
      icon: '🥁',
      color: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
      content: {
        history: 'Drums are among the oldest musical instruments. Modern drum kits developed in the early 20th century, combining various percussion instruments.',
        basics: 'Standard drum kit includes bass drum, snare drum, hi-hats, and tom-toms. Each component produces different sounds and serves specific rhythmic functions.',
        technique: 'Proper stick grip is crucial - hold sticks like pencils but firmer. Use rebounds to your advantage and practice rudiments for coordination.',
        famous: 'Legendary drummers include John Bonham, Neil Peart, Buddy Rich, and contemporary artists like Travis Barker and Dave Grohl.'
      },
      quiz: [
        {
          question: 'When did modern drum kits develop?',
          options: ['Late 19th century', 'Early 20th century', 'Mid 20th century', 'Late 20th century'],
          correct: 1
        },
        {
          question: 'Which is NOT typically part of a standard drum kit?',
          options: ['Bass drum', 'Snare drum', 'Piano', 'Hi-hats'],
          correct: 2
        },
        {
          question: 'How should drum sticks be held?',
          options: ['Like a hammer', 'Like pencils but firmer', 'Very loosely', 'With full fist'],
          correct: 1
        },
        {
          question: 'What should drummers practice for coordination?',
          options: ['Scales', 'Rudiments', 'Arpeggios', 'Chords'],
          correct: 1
        },
        {
          question: 'Who is a legendary drummer?',
          options: ['Eric Clapton', 'John Bonham', 'Jimi Hendrix', 'Mozart'],
          correct: 1
        }
      ]
    }
  };

  const handleStartPlaying = (instrument) => {
    setCurrentView(instrument);
    setCurrentQuiz(0);
    setQuizAnswers({});
    setQuizCompleted(false);
    setScore(0);
  };

  const handleStartQuiz = () => {
    setCurrentView(`${currentView}-quiz`);
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    const newAnswers = { ...quizAnswers, [questionIndex]: answerIndex };
    setQuizAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuiz < 4) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const instrument = instruments[currentView.replace('-quiz', '')];
    let correctCount = 0;
    
    instrument.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setQuizCompleted(true);
  };

  const resetToHome = () => {
    setCurrentView('home');
    setCurrentQuiz(0);
    setQuizAnswers({});
    setQuizCompleted(false);
    setScore(0);
  };

  if (currentView === 'home') {
    return (
      <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        {/* Hero Section */}
        <div className="container py-2">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">Interactive Virtual Instruments</h1>
            <p className="lead text-muted">
              Master your skills with our collection of virtual instruments. Practice, learn, and enjoy making music from anywhere.
            </p>
          </div>

          {/* Instruments Grid */}
          <div className="row g-4">
            {Object.entries(instruments).map(([key, instrument]) => (
              <div key={key} className="col-lg-3 col-md-6">
                <div 
                  className="card h-100 shadow-sm border-0"
                  style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => e.target.closest('.card').style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.closest('.card').style.transform = 'translateY(0)'}
                >
                  <div 
                    className="card-img-top d-flex align-items-center justify-content-center"
                    style={{
                      height: '200px',
                      background: instrument.color,
                      position: 'relative'
                    }}
                  >
                    <div 
                      className="bg-white rounded p-3 shadow"
                      style={{ fontSize: '3rem' }}
                    >
                      {instrument.icon}
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{instrument.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{instrument.description}</p>
                    <button 
                      className="btn btn-primary mt-auto"
                      onClick={() => handleStartPlaying(key)}
                    >
                      Start Playing
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Quiz View
  if (currentView.includes('-quiz')) {
    const instrumentKey = currentView.replace('-quiz', '');
    const instrument = instruments[instrumentKey];
    const currentQuestion = instrument.quiz[currentQuiz];

    if (quizCompleted) {
      return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="card shadow-lg border-0" style={{ maxWidth: '600px', width: '100%' }}>
            <div className="card-body text-center p-5">
              <h2 className="card-title mb-4">Quiz Completed!</h2>
              <div className="mb-4">
                <span style={{ fontSize: '4rem' }}>
                  {score >= 4 ? '🎉' : score >= 3 ? '👍' : '📚'}
                </span>
              </div>
              <h4>Your Score: {score}/5</h4>
              <p className="text-muted">
                {score >= 4 ? 'Excellent work!' : score >= 3 ? 'Good job!' : 'Keep practicing!'}
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary" onClick={() => handleStartPlaying(instrumentKey)}>
                  Learn Again
                </button>
                <button className="btn btn-outline-secondary" onClick={resetToHome}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="card shadow-lg border-0" style={{ maxWidth: '700px', width: '100%' }}>
          <div className="card-header bg-primary text-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{instrument.title} Quiz</h5>
              <span className="badge bg-light text-dark">Question {currentQuiz + 1}/5</span>
            </div>
          </div>
          <div className="card-body p-4">
            <h4 className="mb-4">{currentQuestion.question}</h4>
            <div className="d-grid gap-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`btn btn-outline-primary text-start ${
                    quizAnswers[currentQuiz] === index ? 'active' : ''
                  }`}
                  onClick={() => handleQuizAnswer(currentQuiz, index)}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-secondary" onClick={resetToHome}>
                Back to Home
              </button>
              <button 
                className="btn btn-primary"
                onClick={handleNextQuestion}
                disabled={quizAnswers[currentQuiz] === undefined}
              >
                {currentQuiz < 4 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Instrument Learning View
  const instrument = instruments[currentView];
  
  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="container py-4">
        <div className="row mb-4">
          <div className="col">
            <button className="btn btn-outline-secondary mb-3" onClick={resetToHome}>
              ← Back to Instruments
            </button>
            <div className="d-flex align-items-center mb-3">
              <span style={{ fontSize: '3rem', marginRight: '1rem' }}>{instrument.icon}</span>
              <h1 className="display-5 fw-bold mb-0">{instrument.title}</h1>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">History & Background</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">{instrument.content.history}</p>
              </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">Basic Information</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">{instrument.content.basics}</p>
              </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-warning text-white">
                <h5 className="mb-0">Playing Technique</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">{instrument.content.technique}</p>
              </div>
            </div>

            <div className="card shadow-sm border-0">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">Famous Artists</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">{instrument.content.famous}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm border-0 sticky-top">
              <div className="card-body text-center p-4">
                <div 
                  className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: instrument.color,
                    borderRadius: '50%'
                  }}
                >
                  <span style={{ fontSize: '4rem', color: 'white' }}>{instrument.icon}</span>
                </div>
                <h4 className="mb-3">Ready to test your knowledge?</h4>
                <p className="text-muted mb-4">
                  Take our 5-question quiz to see how much you've learned about the {instrument.title.toLowerCase()}!
                </p>
                <button 
                  className="btn btn-primary btn-lg w-100"
                  onClick={handleStartQuiz}
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualInstruments;