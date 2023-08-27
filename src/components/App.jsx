
import React, { useState } from 'react';
import { SectionTitle } from './Title/Title';
import { Rates } from './Rates/Rates';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section'; 
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [showNotification, setShowNotification] = useState(true);
  const [showStatistics, setShowStatistics] = useState(false);

  const countFeedback = rate => {
        if (rate === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (rate === 'bad') {
      setBad(prevBad => prevBad + 1);
    } else if (rate === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    setShowNotification(false);
    setShowStatistics(true);
  };

  const totalCount = () => good + bad + neutral;
  
  const positiveCount = () => {
    const total = good + bad + neutral;
     return total === 0 ? 0 : (good / total) * 100;
   }

  const rates = ['good', 'bad', 'neutral'];
  
     return (
       <div> 
         <SectionTitle title='Please leave feedback' />
         <Rates rates={rates} countFeedback={countFeedback} />
         <Section title='STATISTICS'>
           <Notification message={showNotification ? "There is no feedback" : ''} />
         {showStatistics && (
  <Statistic 
    good={good}
    neutral={neutral}
    bad={bad}
    total={totalCount()}
    positive={positiveCount()} />
)}
        </Section>
      </div>
    )
  }
