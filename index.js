const noun_phrases = [
    'the horse and the hound and the horn',
    'the farmer sowing his corn',
    'the rooster that crowed in the morn',
    'the priest all shaven and shorn',
    'the man all tattered and torn',
    'the maiden all forlorn',
    'the cow with the crumpled horn',
    'the dog',
    'the cat',
    'the rat',
    'the malt',
    'the house that Jack built.'
  ]
  

  
  const VERBS = [
    '',
    'belonged to ',
    'kept ',
    'woke ',
    'married ',
    'kissed ',
    'milked ',
    'tossed ',
    'worried ',
    'killed ',
    'ate ',
    'lay in '
  ]
class House {
    static verse(verse_no) {
      let first_line = 'This is '
      const lyrics = []
      for (let i=noun_phrases.length-verse_no; i<=(noun_phrases.length-1);i++) {
        if (first_line) {
          lyrics.push(first_line + noun_phrases[i])
          first_line = ''
        } else {
          lyrics.push('that ' + VERBS[i] + noun_phrases[i])
        }
      }
      return lyrics
    }
  
    static verses(start, end) {
      const lyrics = []
      for (let i=start; i<end+1; i++) {
        lyrics.push(...House.verse(i))
        lyrics.push('')
      }
      lyrics.pop()
      return lyrics
    }
  }
module.exports = House;