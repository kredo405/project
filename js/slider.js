let slider = {
    imgUrls: [],
    imgSlide: document.querySelector(".slider_slide"),
    prevBtn: document.querySelector(".prev"),
    nextBtn: document.querySelector(".next"),
    nameLanguage: document.querySelector(".nameLanguage"),
    name: [],
    startPosition: 0,
    start: function() {
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/4.png?itok=Hv-GZpob");
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/3_0.jpg?itok=a78l-A6k");
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/5.jpg?itok=qGFcZlYL");
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/7_0.jpg?itok=ufx1oC4t");
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/6.jpg?itok=JLjnQ9G_");
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/7.jpg?itok=ki0I_UZg");
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/9.jpg?itok=-LzG1z-v");
        this.imgUrls.push("https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/12/16/2359/10.jpg?itok=Cdk0TRy3");
       
        this.name.push("JavaScript");
        this.name.push("Elixir");
        this.name.push("Python");
        this.name.push("Ruby");
        this.name.push("Java");
        this.name.push("Scala");
        this.name.push("Clojure");
        this.name.push("Kotlin");




        this.imgSlide.src = this.imgUrls[this.startPosition];
        this.nameLanguage.innerHTML = slider.name[slider.startPosition];

        this.nextBtn.addEventListener("click", onClickOfNextBtn);
        this.prevBtn.addEventListener("click", onClickOfPrevBtn);

        function onClickOfNextBtn() {
            slider.startPosition++;
            if(slider.startPosition == slider.imgUrls.length) {
                slider.startPosition = 0;
            } 
            slider.imgSlide.src = slider.imgUrls[slider.startPosition];
            slider.nameLanguage.innerHTML = slider.name[slider.startPosition];
        };
        
         
        function onClickOfPrevBtn() {
            if(slider.startPosition == 0) {
                slider.startPosition = slider.imgUrls.length;
            }
            slider.startPosition--;
            slider.imgSlide.src = slider.imgUrls[slider.startPosition];
            slider.nameLanguage.innerHTML = slider.name[slider.startPosition];
        };




    }
   


};






slider.start();

