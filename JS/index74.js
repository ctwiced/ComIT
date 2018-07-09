for(myRow = 1; myRow <= 9; myRow+=2)
{
  for(myColumn = 0; myColumn <= myRow; myColumn++)
    message = '*'.repeat(myColumn)
    console.log(message);          
}