import React, { useState } from 'react';

function App() {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);

  const [targets] = useState({
    calories: 2200,
    protein: 110,
    carbs: 275,
    fat: 73
  });

  const addSampleMeal = () => {
    setCalories(prev => prev + 350);
    setProtein(prev => prev + 25);
    setCarbs(prev => prev + 30);
    setFat(prev => prev + 15);
  };

  const resetDay = () => {
    setCalories(0);
    setProtein(0);
    setCarbs(0);
    setFat(0);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    card: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    title: {
      textAlign: 'center',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      marginBottom: '20px'
    },
    macroCard: {
      textAlign: 'center',
      padding: '15px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
      border: '2px solid #e9ecef'
    },
    macroValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    macroLabel: {
      fontSize: '0.8rem',
      color: '#666',
      marginBottom: '3px'
    },
    macroTarget: {
      fontSize: '0.7rem',
      color: '#666'
    },
    button: {
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: '#10b981',
      color: 'white'
    }
  };

  const getPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const getMacroColor = (current, target) => {
    const percentage = getPercentage(current, target);
    if (percentage < 50) return '#fee2e2';
    if (percentage < 80) return '#fef3c7';
    return '#dcfce7';
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Health App</h1>
        <p style={{textAlign: 'center', color: '#666', marginBottom: '20px'}}>
          Macro Tracker & Fitness Goals
        </p>

        <div style={styles.grid}>
          <div style={{...styles.macroCard, backgroundColor: getMacroColor(calories, targets.calories)}}>
            <div style={{...styles.macroValue, color: '#dc2626'}}>
              {Math.round(getPercentage(calories, targets.calories))}%
            </div>
            <div style={styles.macroLabel}>Calories</div>
            <div style={styles.macroTarget}>
              {calories} / {targets.calories}
            </div>
          </div>

          <div style={{...styles.macroCard, backgroundColor: getMacroColor(protein, targets.protein)}}>
            <div style={{...styles.macroValue, color: '#2563eb'}}>
              {Math.round(getPercentage(protein, targets.protein))}%
            </div>
            <div style={styles.macroLabel}>Protein</div>
            <div style={styles.macroTarget}>
              {protein}g / {targets.protein}g
            </div>
          </div>

          <div style={{...styles.macroCard, backgroundColor: getMacroColor(carbs, targets.carbs)}}>
            <div style={{...styles.macroValue, color: '#16a34a'}}>
              {Math.round(getPercentage(carbs, targets.carbs))}%
            </div>
            <div style={styles.macroLabel}>Carbs</div>
            <div style={styles.macroTarget}>
              {carbs}g / {targets.carbs}g
            </div>
          </div>

          <div style={{...styles.macroCard, backgroundColor: getMacroColor(fat, targets.fat)}}>
            <div style={{...styles.macroValue, color: '#d97706'}}>
              {Math.round(getPercentage(fat, targets.fat))}%
            </div>
            <div style={styles.macroLabel}>Fat</div>
            <div style={styles.macroTarget}>
              {fat}g / {targets.fat}g
            </div>
          </div>
        </div>

        <button
          style={{...styles.button, ...styles.secondaryButton}}
          onClick={addSampleMeal}
        >
          Add Sample Meal (+350 cal)
        </button>

        <button
          style={{...styles.button, ...styles.primaryButton}}
          onClick={resetDay}
        >
          Reset Day
        </button>
      </div>

      <div style={styles.card}>
        <h3 style={{marginBottom: '15px'}}>Daily Progress</h3>
        <div style={{backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px'}}>
          <p style={{margin: '5px 0', fontSize: '14px'}}>
            <strong>Calories:</strong> {calories} / {targets.calories}
            ({Math.round(getPercentage(calories, targets.calories))}%)
          </p>
          <p style={{margin: '5px 0', fontSize: '14px'}}>
            <strong>Protein:</strong> {protein}g / {targets.protein}g
            ({Math.round(getPercentage(protein, targets.protein))}%)
          </p>
          <p style={{margin: '5px 0', fontSize: '14px'}}>
            <strong>Carbs:</strong> {carbs}g / {targets.carbs}g
            ({Math.round(getPercentage(carbs, targets.carbs))}%)
          </p>
          <p style={{margin: '5px 0', fontSize: '14px'}}>
            <strong>Fat:</strong> {fat}g / {targets.fat}g
            ({Math.round(getPercentage(fat, targets.fat))}%)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;