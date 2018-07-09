
let theYear = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013','2014', '2015', '2016', '2017'];
let theChamp = ['Pittsburgh Penguins', 'Chicago Blackhawks', 'Los Angeles Kings', 'Boston Bruins', 'Detroit Red Wings', 'Anaheim Ducks', 'Carolina Hurricanes']
let message = null;

switch (theYear[7]) {
    case theYear[0]:
        message = `The NHL champs in ${theYear[0]} were the ${theChamp[6]}`
        break;
    case theYear[1]:
        message = `The NHL champs in ${theYear[1]} were the ${theChamp[5]}`
        break;
    case theYear[2]:
        message = `The NHL champs in ${theYear[2]} were the ${theChamp[0]}`
        break;
    case theYear[3]:
        message = `The NHL champs in ${theYear[3]} were the ${theChamp[1]}`
        break;
    case theYear[4]:
        message = `The NHL champs in ${theYear[4]} were the ${theChamp[3]}`
        break;
    case theYear[5]:
        message = `The NHL champs in ${theYear[5]} were the ${theChamp[2]}`
        break;
    case theYear[6]:
        message = `The NHL champs in ${theYear[6]} were the ${theChamp[1]}`
        break;
    case theYear[7]:
        message = `The NHL champs in ${theYear[7]} were the ${theChamp[2]}`
        break;
    case theYear[8]:
        message = `The NHL champs in ${theYear[8]} were the ${theChamp[1]}`
        break;
    case theYear[9]:
        message = `The NHL champs in ${theYear[7]} were the ${theChamp[0]}`
        break;
    case theYear[10]:
        message = `The NHL champs in ${theYear[8]} were the ${theChamp[0]}`
        break;
    case theYear[11]:
        message = `The NHL champs in ${theYear[9]} were the ${theChamp[0]}`
        break;
    default:
        message = 'I believe in science!'
}

console.log(message);