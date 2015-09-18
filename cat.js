Cat = function(name, src){
	this.count	= 0;
	this.name = name;
	this.src = src;
	this.catDOM = $('#cat-template').clone().removeAttr('id').appendTo('#five-cats');
	this.adminDOM = $(this.catDOM).find('.admin-panel');
	this.buttonDOM = null;
	this.displayStatus = false;

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
	}

	this.countUp = function(){
		this.count++;
		$(this.adminDOM).find('input[name="count"]').val(this.count);
	}

	this.toggle = function(){
		if(this.displayStatus == false){
			// this.renderAdmin();
			$(this.catDOM).show();
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
		var photoCat = new Cat('Kitten (Real)', 'assets/kitten.png');
		photoCat.render();
		this.catList.push(photoCat);

		var kittenCat  = new Cat('Kitten', 'assets/kitten2.png');
		kittenCat.render();
		this.catList.push(kittenCat);

		var boxPrinceCat  = new Cat('Box Prince', 'assets/BoxPrince.png');
		boxPrinceCat.render();
		this.catList.push(boxPrinceCat);

		var cakeCat  = new Cat('Cake', 'assets/Cake_001.png');
		cakeCat.render();
		this.catList.push(cakeCat);

		var meMowCat  = new Cat('MeMow', 'assets/MeMow.png');
		meMowCat.render();
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