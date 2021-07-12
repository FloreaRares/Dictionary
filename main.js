var addedWordId = 0;
var wordsArray = [];

function addWord() {
	var word = $('#addWordInput').val();
	word = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
	if(word) {
		++addedWordId;	
		wordsArray.push( word );
		$('#addedWords').append(`
			<li id= "` + addedWordId + `">` + word + `
				<a href="#" class="btn btn-danger" onClick="return deleteWord(` + addedWordId + `);"><i class="las la-trash"></i></a>
			</li>
		`);
	}
	$('#addWordInput').val('');
	return false;
}

function deleteWord(wordId) {
	wordsArray.splice(wordsArray[wordId], 1);
	$('#' + wordId).remove();
	return false;
}

function searchWord() {
	var searchedWord = $('#searchWordInput').val();
	if(searchedWord) {
		searchedWord = searchedWord.charAt(0).toUpperCase() + searchedWord.substr(1).toLowerCase();
		var foundWord = false;
		for(var i = 0; i < wordsArray.length; ++i) {
			if(searchedWord.localeCompare(wordsArray[i]) == 0) {
				foundWord = true;
			}	
		}
		if(foundWord == true) {
			alert('Cuvantul cautat exista in dictionar!');
		} else {
			alert('Cuvantul cautat nu exista in dictionar!');
		}
	}
	return false;
}
