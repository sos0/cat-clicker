Cat = function(){
	this.count	= 0;
	this.name = "";
	this.src = "";
	this.catDOM = null;
	this.buttonDOM = null;
	this.adminDOM = null;
	this.displayStatus = false;

	this.init = function(name, src){
		this.name   = name;
		this.src 	= src;
		this.catDOM	= $('#cat-template').clone().removeAttr('id');
		this.adminDOM = $(this.catDOM).find('.admin-panel');
		$(this.catDOM).appendTo('#five-cats');
	}

	this.render = function(){
		$(this.catDOM).find('h3').text(this.name);
		$(this.catDOM).find('.count').text(this.count);
		var catRef = this;
		$(this.catDOM).find('img').attr('src', this.src).click(function(){
			catRef.countUp();
			$(catRef.catDOM).find('.count').text(catRef.count);
		});

		// this.renderAdmin();
		// $(this.adminDOM).find('.admin-cancel').click(function(){
		// 	catRef.renderAdmin();
		// });
		// $(this.adminDOM).find('.admin-save').click(function(){
		// 	catRef.update();
		// });

		$(this.catDOM).show();
	}

	this.countUp = function(){
		this.count++;
		$(this.adminDOM).find('input[name="count"]').val(this.count);
	}

	this.toggle = function(){
		if(this.displayStatus == false){
			this.render();
			this.renderAdmin();
			this.displayStatus = true;
		}
		else{
			$(this.catDOM).hide();
			this.displayStatus = false;
		}
	}

	this.update = function(){
		this.name = $(this.adminDOM).find('input[name="name"]').val();
		this.src = $(this.adminDOM).find('input[name="src"]').val();
		this.count = $(this.adminDOM).find('input[name="count"]').val();

		this.render();
		$(this.buttonDOM).text(this.name);
	}

	this.renderAdmin = function(){
		$(this.adminDOM).find('input[name="name"]').val(this.name);
		$(this.adminDOM).find('input[name="src"]').val(this.src);
		$(this.adminDOM).find('input[name="count"]').val(this.count);
		if($('#admin').checkbox('is checked')){
			$(this.adminDOM).show();
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
	},
	initButtonList: function(){
		for(var i in this.catList){
			var cat = this.catList[i];
			initButton(cat);
			
			function initButton(cat){
				var $button = $('<button/>', {
					text: cat.name,
					'class': 'ui toggle button',
					click: function(){
						cat.toggle();
						if(cat.displayStatus){
							$(this).addClass('active');
						}else{
							$(this).removeClass('active');
						}
					}
				}).appendTo('.list-container > .buttons');
				cat.buttonDOM = $button;
			}
		}
	}
}

Cats.initCats();
Cats.initButtonList();

// $('#admin').on('change', function(){
// 	if($(this).checkbox('is checked')){
// 		$('.admin-panel').show();
// 	}else{
// 		$('.admin-panel').hide();
// 	}
// })