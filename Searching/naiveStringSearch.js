// Buscar uma string menor dentro de uma string maior

function naiveSearch(longa, curta) {
    var count = 0;
    for (var i = 0; i < longa.length; i++) {
        for (var j = 0; j < curta.length; j++) {
            console.log(curta[j], longa[i + j])
            if (curta[j] !== longa[i + j]) {
                // console.log("BREAK!")
                break;
            }
            if (j === curta.length - 1) {
                //console.log("FOUND ONE!")
                count++;
            }
        }
    }
    return count;
}

module.exports = { naiveSearch }
//naiveSearch("kkaiqualçlççlasdmmqiiiaiasl", "ai")
