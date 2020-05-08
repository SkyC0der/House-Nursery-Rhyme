// Implentation of London Bridge Rhyme

const white = "My Fair Lady";
const word = [
    " falling down",
    "iron bars",
    " bend and break",
    "gold and silver"
]
const start = [
    "London Bridge is ",
    "Build it up with ",
    "Iron bars will "
]


class Bridge {
     static verses(num){
        let lyric = [];
        for (let i = 0; i < 6; i++) {  
        const one = `${start[i]}${word[i]}\n`
        const double  = `${word[i]}${word[i]}\n`
        if (num == 1 || num == 5){
            return one +double + one + white;
        }
        if (num ==2){
            return one +double + one + white;
        }
        if (num == 3){
            return one +double + one + white;
        }
        if (num == 4){
            return one +double + one + white;
        }
    }
    }
}

Bridge.verses(2);