// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
    let bumps = x.split('').filter(char => char === 'n').length;
    return bumps > 15 ? 'Car Dead' : 'Woohoo!';
    }

//Learned to count character occurence in a string by splitting the string by the counted character and measuring the length of the resultant array

function countCharater(str, char){
    let count = str.split(char).length;
    return count
}