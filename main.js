function transform(lan)
{
  const input = $('#input').val();
  var arr = Array.from(input);

  if (lan == "R2E") //俄語轉英語
  {
    for(i=0;i<input.length;i++)
    {
      switch (arr[i])
      {
        case "а":
          arr[i] = "a";
          break;
        case "б":
          arr[i] = "b";
          break;
        case "ц":
          arr[i] = "c";
          break;
        case "д":
          arr[i] = "d";
          break;
        case "е":
          arr[i] = "е";
          break;
        case "ф":
          arr[i] = "f";
          break;
        case "г":
          arr[i] = "g";
          break;
        case "ч":
          arr[i] = "h";
          break;
        case "и":
          arr[i] = "i";
          break;
        case "й":
          arr[i] = "j";
          break;
        case "к":
          arr[i] = "k";
          break;
        case "л":
          arr[i] = "l";
          break;
        case "м":
          arr[i] = "m";
          break;
        case "н":
          arr[i] = "n";
          break;
        case "о":
          arr[i] = "o";
          break;
        case "п":
          arr[i] = "p";
          break;
        case "я":
          arr[i] = "q";
          break;
        case "р":
          arr[i] = "r";
          break;
        case "с":
          arr[i] = "s";
          break;
        case "т":
          arr[i] = "t";
          break;
        case "у":
          arr[i] = "u";
          break;
        case "в":
          arr[i] = "v";
          break;
        case "ш":
          arr[i] = "w";
          break;
        case "х":
          arr[i] = "x";
          break;
        case "ы":
          arr[i] = "y";
          break;
        case "з":
          arr[i] = "z";
          break;
        case "А":
          arr[i] = "A";
          break;
        case "Б":
          arr[i] = "B";
          break;
        case "Ц":
          arr[i] = "C";
          break;
        case "Д":
          arr[i] = "D";
          break;
        case "Е":
          arr[i] = "E";
          break;
        case "Ф":
          arr[i] = "F";
          break;
        case "Г":
          arr[i] = "G";
          break;
        case "Ч":
          arr[i] = "H";
          break;
        case "И":
          arr[i] = "I";
          break;
        case "Й":
          arr[i] = "J";
          break;
        case "К":
          arr[i] = "K";
          break;
        case "Л":
          arr[i] = "L";
          break;
        case "М":
          arr[i] = "M";
          break;
        case "Н":
          arr[i] = "N";
          break;
        case "О":
          arr[i] = "O";
          break;
        case "П":
          arr[i] = "P";
          break;
        case "Я":
          arr[i] = "Q";
          break;
        case "Р":
          arr[i] = "R";
          break;
        case "С":
          arr[i] = "S";
          break;
        case "Т":
          arr[i] = "T";
          break;
        case "У":
          arr[i] = "U";
          break;
        case "В":
          arr[i] = "V";
          break;
        case "Ш":
          arr[i] = "W";
          break;
        case "Х":
          arr[i] = "X";
          break;
        case "Ы":
          arr[i] = "Y";
          break;
        case "З":
          arr[i] = "Z";
          break;
        default:
          break;
      }
    }
  }

  if (lan == "E2R") //英語轉俄語
  {
    for(i=0;i<input.length;i++)
    {
      switch (arr[i])
      {
        case "a":
          arr[i] = "а"
          break;
        case "b":
          arr[i] = "б"
          break;
        case "c":
          arr[i] = "ц"
          break;
        case "d":
          arr[i] = "д"
          break;
        case "е":
          arr[i] = "е"
          break;
        case "f":
          arr[i] = "ф"
          break;
        case "g":
          arr[i] = "г"
          break;
        case "h":
          arr[i] = "ч"
          break;
        case "i":
          arr[i] = "и"
          break;
        case "j":
          arr[i] = "й"
          break;
        case "k":
          arr[i] = "к"
          break;
        case "l":
          arr[i] = "л"
          break;
        case "m":
          arr[i] = "м"
          break;
        case "n":
          arr[i] = "н"
          break;
        case "o":
          arr[i] = "о"
          break;
        case "p":
          arr[i] = "п"
          break;
        case "q":
          arr[i] = "я"
          break;
        case "r":
          arr[i] = "р"
          break;
        case "s":
          arr[i] = "с"
          break;
        case "t":
          arr[i] = "т"
          break;
        case "u":
          arr[i] = "у"
          break;
        case "v":
          arr[i] = "в"
          break;
        case "w":
          arr[i] = "ш"
          break;
        case "x":
          arr[i] = "х"
          break;
        case "y":
          arr[i] = "ы"
          break;
        case "z":
          arr[i] = "з"
          break;
        case "A":
          arr[i] = "А"
          break;
        case "B":
          arr[i] = "Б"
          break;
        case "C":
          arr[i] = "Ц"
          break;
        case "D":
          arr[i] = "Д"
          break;
        case "E":
          arr[i] = "Е"
          break;
        case "F":
          arr[i] = "Ф"
          break;
        case "G":
          arr[i] = "Г"
          break;
        case "H":
          arr[i] = "Ч"
          break;
        case "I":
          arr[i] = "И"
          break;
        case "J":
          arr[i] = "Й"
          break;
        case "K":
          arr[i] = "К"
          break;
        case "L":
          arr[i] = "Л"
          break;
        case "M":
          arr[i] = "М"
          break;
        case "N":
          arr[i] = "Н"
          break;
        case "O":
          arr[i] = "О"
          break;
        case "P":
          arr[i] = "П"
          break;
        case "Q":
          arr[i] = "Я"
          break;
        case "R":
          arr[i] = "Р"
          break;
        case "S":
          arr[i] = "С"
          break;
        case "T":
          arr[i] = "Т"
          break;
        case "U":
          arr[i] = "У"
          break;
        case "V":
          arr[i] = "В"
          break;
        case "W":
          arr[i] = "Ш"
          break;
        case "X":
          arr[i] = "Х"
          break;
        case "Y":
          arr[i] = "Ы"
          break;
        case "Z":
          arr[i] = "З"
          break;
      }
    }
  }

  $('#input').val('');
  const output = arr.join('');
  $('#output').val(output);
}
