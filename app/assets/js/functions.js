var Portfolio = {
  init : function(){
    var _this = this;

    this.reorganize.init();
    this.navBar.init();
    this.animateContact();

    //reorganize layout when resize browser
    $( window ).resize(function() {
      _this.reorganize.init();
    });

    //functions activate by scrolling browser
    $( window ).scroll(function() {
      _this.animateContact();
    });

    //change color and background-image when click button on menu
    $('header nav .change-color').click(function(){
      _this.navBar.changeColor();
      _this.navBar.changeBackground();
    });
  },

  isMobile : {
    Android : function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry : function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS : function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera : function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows : function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any : function() {
      return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
    }
  },

  reorganize : {

    init : function(){
      this.contactPosition();
      this.homeHeight();
    },

    homeHeight : function(){
      var winH      = (window.innerHeight > 430) ? window.innerHeight : 430,
          $homeElms = $('.cover-bg, .cover-image, #home, .home-holder');

      $homeElms.css({'height' : winH+'px'});
    },
    
    contactPosition : function(){
      var winW    = window.innerWidth,
          objConLks = $('.contact-list > li');

      objConLks.css(winW < 902 ? { marginLeft: -((902 - winW) / 2) } : { marginLeft: 0 });
    }

  },

  navBar : {
    
    init : function(){
      this.openMenu();
      this.changeColor();
      this.changeBackground();
      this.navigation();
    },

    openMenu : function(){
      $('.tab').click(function(){
        $('header').toggleClass('opened');
      });
    },

    navigation : function(){
      var $homeLink   = $('header nav ul li .logo'),
          $links      = 'header nav ul li a',
          $btnGoAbout = '#home .go-next',
          $btnBackTop = $('footer a');

      function anchor(pos){
        $('header').removeClass();
        $("html, body").animate({ scrollTop: pos }, '2000', 'swing');
      };
      
      $homeLink.click(function(e){
        e.preventDefault();
        anchor(0);
      });
      
      $btnBackTop.click(function(e){
        e.preventDefault();
        anchor(0);
      });
      
      $($links).add($btnGoAbout).click(function(e){
        e.preventDefault();

        var target = $(this).attr('href').split('#')[1],
            top    = $('#' + target).offset().top;

        if(target == 'contact') top += 20;
        if(target == 'projects') top -= 45;
        
        anchor(top);
      });
    },

    changeColor : function(){
      var arrColors = ['theme-blue', 'theme-pink', 'theme-orange', 'theme-green'],
          $target   = $('body');

      $target.removeClass();
      $target.addClass(arrColors[Math.floor(Math.random()*arrColors.length)]);
    },

    changeBackground : function(){
      var $target   = $('.cover-image'),
          randomImg = Math.floor(Math.random() * 4) + 1;

      $target.fadeOut('fast', function(){
        $target.css({ 'background-image' : 'url("app/assets/img/img_cover0' + randomImg + '.jpg")' });
        $target.fadeIn('slow');
      });
    }
  },

  openProjects : function(elm, images){
    var _this          = this,
        $projects      = $('#projects .projects-list li'),
        $mask          = $('.mask'),
        $projectDetail = $('#projects .project-detail'),
        $closeButton   = $('#projects .project-detail .fa-times-circle, .mask'),
        scrollPos      = $(window).scrollTop(),
        top            = $(elm).offset().top,
        winW           = window.innerWidth,
        isMobile       = _this.isMobile.any() === null && winW > 690;

    //Show modal according with device
    if( isMobile ){

      $('header').hide();
      $mask.fadeIn();
      $projectDetail.css({'top': top}).fadeIn();

    } else {
      
      var modalH = $projectDetail.height();
      
      $projectDetail.show();
      $('body').height(modalH).css({'overflow':'hidden'});
      $(window).scrollTop(0);

    }

    //Close modal
    $closeButton.click(function(){
      var winW     = window.innerWidth,
          isMobile = _this.isMobile.any() === null && winW > 690;

      if( isMobile ){
        $('header').show();
        $mask.fadeOut();
        $projectDetail.fadeOut();
      } else {
        $(window).scrollTop(scrollPos);
        $('header').show();
        $projectDetail.hide();
        $('body').height('100%').css({'overflow':'visible'});
      }
    });
  },

  animateContact : function(){
    var $contactList = $('#contact .contact-list'),
        distanceTop  = $contactList.offset().top,
        contactH     = $contactList.height(),
        scrollTop    = $(window).scrollTop(),
        winH         = window.innerHeight,
        winW         = window.innerWidth,
        isMobile     = this.isMobile.any() === null && winW > 690;

    if ( isMobile ){
      if ( scrollTop + winH >= distanceTop + winH / 2 ) {
        $contactList.addClass('anim');
      } else if ( scrollTop < distanceTop - 500 ) {
        $contactList.removeClass('anim');
      }
    }
  }

}

$(function(){
  Portfolio.init();
});