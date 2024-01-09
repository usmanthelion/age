import { useState, useEffect } from 'react';

const formatAge = (age: number) => age.toFixed(12);

const IndexPage: React.FC = () => {
  const dateOfBirth = new Date('2003-02-01T00:00:00Z'); // Hardcoded date of birth
  const [age, setAge] = useState<number>(calculateAge(dateOfBirth));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(dateOfBirth));
    }, 1000);

    return () => clearInterval(interval);
  }, [dateOfBirth]);

  function calculateAge(birthDate: Date): number {
    const currentDate = new Date();
    const ageMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageYears = ageMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
    return ageYears;
  }

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        textAlign: 'center',
        marginTop: '50px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      
      <p>Your time is running out USMAN</p>
      <p style={{ fontSize: '80px', fontWeight: 'bold', margin: '10px 0' }}>{formatAge(age)}</p>
      
    </div>
  );
};

export default IndexPage;
