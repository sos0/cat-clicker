Cat = function(){
	this.count	= 0;
	this.name = "";
	this.src = "";
	this.DOM = null;

	this.init = function(name, src){
		this.name   = name;
		this.src 	= src;
		this.DOM	= $('#cat-template').clone().removeAttr('id');
	}

	this.render = function(){
		$(this.DOM).find('h3').text(this.name);
		var catRef = this;
		$(this.DOM).find('img').attr('src', this.src).click(function(){
			catRef.countUp();
			$(catRef.DOM).find('.count').text(catRef.count);
		});
		
		$(this.DOM).appendTo('#five-cats');
		$(this.DOM).show();
	}

	this.countUp = function(){
		this.count++;
	}

	this.DOM	= null;
	this.displayStatus = false;
	this.toggle = function(){
		if(this.displayStatus == false){
			this.render();
			this.displayStatus = true;
		}
		else{
			$(this.DOM).remove();
			this.displayStatus = false;
		}
	}
}

Cats = {
	catList: [],
	initCats: function(){
		var photoCat = new Cat();
		photoCat.init('Kitten (Real)', 'assets/kitten.png');
		this.catList.push(photoCat);

		var kittenCat  = new Cat();
		kittenCat.init('Kitten', 'assets/kitten2.png');
		this.catList.push(kittenCat);

		var boxPrinceCat  = new Cat();
		boxPrinceCat.init('Box Prince', 'assets/BoxPrince.png');
		this.catList.push(boxPrinceCat);

		var cakeCat  = new Cat();
		cakeCat.init('Cake', 'assets/Cake_001.png');
		this.catList.push(cakeCat);

		var meMowCat  = new Cat();
		meMowCat.init('MeMow', 'assets/MeMow.png');
		this.catList.push(meMowCat);
	}
}

Cats.initCats();

$('.list-container > .buttons').children().each(function(i){
	var cat = Cats.catList[i];
	$(this).click(function(){
		cat.toggle();
		if(cat.displayStatus){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	})
})