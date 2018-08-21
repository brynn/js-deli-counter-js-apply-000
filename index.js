function takeANumber(katzDeliLine, newPerson) {
  var number = katzDeliLine.length + 1;
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    var personBeingServed = katzDeliLine[0];
    katzDeliLine.shift(personBeingServed);
    return `Currently serving ${personBeingServed}`.;
  } else {
    return "There is nobody waiting to be served!";
  }
  
}

function currentLine(katzDeliLine) {
  
}