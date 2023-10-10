export const calculateExperienceYearsFromToday = () => {
  const startYear = 2008;
  return new Date().getFullYear() - startYear;
};
