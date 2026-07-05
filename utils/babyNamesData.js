import babyNames from '../data/babyNamesArray';

export const getNamesByLetterAndGender = (letter, gender = 'All') => {
  if (!letter) return [];
  
  return babyNames.filter(name => 
    name.name.startsWith(letter) && 
    (gender === 'All' || name.gender === gender)
  );
};

export const getAllNames = () => {
  return babyNames;
};

export const NAMES_PER_PAGE = 100;