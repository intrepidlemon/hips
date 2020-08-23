export const lifeExpectancy = (age, sex) => {
  return sex === 'male' ? maleLifeExpectancy(age) : femaleLifeExpectancy(age)
}

export const maleLifeExpectancy = age => {
  let le = 10
  switch (true) {
    case (age < 65):
      console.error('age is too low')
      break
    case (age < 70):
      le = 7
      break
    case (age < 75):
      le = 6
      break
    case (age < 80):
      le = 4
      break
    case (age < 85):
      le = 3
      break
    case (age < 90):
      le = 2
      break
    default:
      console.error('age is too high')
      le = 1
      break
  }
  return le
}

export const femaleLifeExpectancy = age => {
  let le = 15
  switch (true) {
    case (age < 65):
      console.error('age is too low')
      break
    case (age < 70):
      le = 13
      break
    case (age < 75):
      le = 9
      break
    case (age < 80):
      le = 7
      break
    case (age < 85):
      le = 5
      break
    case (age < 90):
      le = 4
      break
    default:
      console.error('age is too high')
      le = 3
      break
  }
  return le
}
