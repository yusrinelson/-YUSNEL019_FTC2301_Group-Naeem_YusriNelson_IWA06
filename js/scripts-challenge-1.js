const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line
const number = secondaryPhone && primaryPhone
const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == 'string'

console.log('Primary phone is valid numerical string:', primaryValid )
console.log('Secondary phone is valid numerical string:', secondaryValid  )