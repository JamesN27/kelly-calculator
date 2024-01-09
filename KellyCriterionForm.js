'use client';

import { useState } from 'react';

const KellyCriterionForm = () => {
  const [winProbability, setWinProbability] = useState('');
  const [odds, setOdds] = useState('');
  const [bankroll, setBankroll] = useState('');
  const [fractionalKellyInput, setFractionalKellyInput] = useState('');
  const [betAmount, setBetAmount] = useState(null);

  const calculateKelly = () => {
    const winProbabilityNum = 1 / parseFloat(winProbability);

    const oddsNum = parseFloat(odds);
    const bankrollNum = parseFloat(bankroll);
    const fractionalKellyInputNum = parseFloat(fractionalKellyInput);

    const b = oddsNum - 1; // b represents the bet gained with a win
    const q = 1 - winProbabilityNum;
    const kelly = winProbabilityNum - q / b;

    const bet = kelly * bankrollNum * fractionalKellyInputNum;

    setBetAmount(bet);
  };

  return (
    <div>
      <h2>Kelly Criterion Calculator</h2>
      <div>
        <label>
          Win Probability (%):
          <input
            type="number"
            value={winProbability}
            onChange={(e) => setWinProbability(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Odds (e.g., 2 for 2:1 odds):
          <input
            type="number"
            value={odds}
            onChange={(e) => setOdds(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Bankroll:
          <input
            type="number"
            value={bankroll}
            onChange={(e) => setBankroll(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Fractional Kelly:
          <input
            type="number"
            step="0.01"
            value={fractionalKellyInput}
            onChange={(e) => setFractionalKellyInput(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateKelly}>Calculate</button>
      {betAmount !== null && (
        <div>
          <p>Bet Amount: {betAmount}</p>
        </div>
      )}
    </div>
  );
};

export default KellyCriterionForm;
