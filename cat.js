Cat = function(){
	this.init = function(name, src){
		this.name   = name;
		this.src 	= src;
	}

	this.count	= 0;

	this.update = function(){
		console.log('name:', this.name);
		console.log('count:', this.count);
		this.count++;
	}
}

Cats = {
	catList: [],
	initCats: function(){
		var photoCat = new Cat();
		photoCat.init('Real Kitty', 'kitten.png');
		var illuCat  = new Cat();
		illuCat.init('Drawing Kitty', 'kitten2.png');
		this.catList.push(photoCat);
		this.catList.push(illuCat);
	}
}

Cats.initCats();

$('#two-cats > .column').each(function(i){
	var cat = Cats.catList[i];
	var $newCat = $('#cat-template').clone();
	$(this).append($newCat).removeAttr('id');

	$newCat.find('h3').text(cat.name);
	$newCat.find('img').attr('src', cat.src).click(function(){
		cat.update();
		$newCat.find('.count').text(cat.count);
	});

	$newCat.show();
})