var  pJS  =  função ( tag_id ,  params ) {

    var  canvas_el  =  documento . querySelector ( '#' + tag_id + '> .particles-js-canvas-el' ) ;
  
    / * partículas.js variáveis ​​com valores padrão * /
    isso . pJS  =  {
      canvas : {
        el : canvas_el ,
        w : canvas_el . offsetWidth ,
        h : canvas_el . offsetHeight
      } ,
      partículas : {
        número : {
          valor : 400 ,
          densidade : {
            enable : true ,
            value_area : 800
          }
        } ,
        cor : {
          valor : '#fff'
        } ,
        forma : {
          tipo : 'círculo' ,
          acidente vascular cerebral : {
            largura : 0 ,
            cor : '# ff0000'
          } ,
          polígono : {
            nb_sides : 5
          } ,
          imagem : {
            src : '' ,
            largura : 100 ,
            height : 100
          }
        } ,
        opacidade : {
          valor : 1 ,
          aleatório : falso ,
          anim : {
            enable : false ,
            velocidade : 2 ,
            opacity_min : 0 ,
            sync : false
          }
        } ,
        tamanho : {
          valor : 20 ,
          aleatório : falso ,
          anim : {
            enable : false ,
            velocidade : 20 ,
            size_min : 0 ,
            sync : false
          }
        } ,
        line_linked : {
          enable : true ,
          distância : 100 ,
          cor : '#fff' ,
          opacidade : 1 ,
          largura : 1
        } ,
        mover : {
          enable : true ,
          velocidade : 2 ,
          direção : 'nenhuma' ,
          aleatório : falso ,
          reta : falsa ,
          out_mode : 'out' ,
          salto : falso ,
          atrair : {
            enable : false ,
            rotateX : 3000 ,
            rotateY : 3000
          }
        } ,
        matriz : [ ]
      } ,
      interatividade : {
        detect_on : 'tela' ,
        eventos : {
          onhover : {
            enable : true ,
            mode : 'grab'
          } ,
          onclick : {
            enable : true ,
            mode : 'push'
          } ,
          redimensionar : true
        } ,
        modos : {
          agarrar : {
            distância : 100 ,
            line_linked : {
              opacidade : 1
            }
          } ,
          bolha : {
            distância : 200 ,
            tamanho : 80 ,
            duração : 0.4
          } ,
          repulsa : {
            distância : 200 ,
            duração : 0.4
          } ,
          push : {
            partículas_nb : 4
          } ,
          remover : {
            partículas_nb : 2
          }
        } ,
        mouse : { }
      } ,
      retina_detect : false ,
      fn : {
        interagir : { } ,
        modos : { } ,
        fornecedores : { }
      } ,
      tmp : { }
    } ;
  
    var  pJS  =  isso . pJS ;
  
    / * configurações de parâmetros * /
    if ( params ) {
      Objeto . deepExtend ( pJS ,  parâmetros ) ;
    }
  
    pJS . tmp . obj  =  {
      tamanho_valor : pJS . partículas . tamanho . valor ,
      size_anim_speed : pJS . partículas . tamanho . anim . velocidade ,
      move_speed : pJS . partículas . mover . velocidade ,
      line_linked_istance : pJS . partículas . line_linked . distância ,
      line_linked_width : pJS . partículas . line_linked . largura ,
      mode_grab_distance : pJS . interatividade . modos . agarrar . distância ,
      mode_bubble_distance : pJS . interatividade . modos . bolha . distância ,
      mode_bubble_size : pJS . interatividade . modos . bolha . tamanho ,
      mode_repulse_distance : pJS . interatividade . modos . repulsa . distância
    } ;
  
  
    pJS . fn . retinaInit  =  function ( ) {
  
      if ( pJS . retina_detect  &&  window . devicePixelRatio  >  1 ) {
        pJS . lona . pxratio  =  janela . devicePixelRatio ; 
        pJS . tmp . retina  =  verdadeiro ;
      } 
      mais {
        pJS . lona . pxratio  =  1 ;
        pJS . tmp . retina  =  falsa ;
      }
  
      pJS . lona . w  =  pJS . lona . el . offsetWidth * PJS . lona . pxratio ;
      pJS . lona . h  =  pJS . lona . el . offsetHeight * pJS . lona . pxratio ;
  
      pJS . partículas . tamanho . valor  =  pJS . tmp . obj . tamanho_valor * pJS . lona . pxratio ;
      pJS . partículas . tamanho . anim . velocidade  =  pJS . tmp . obj . size_anim_speed * pJS . lona . pxratio ;
      pJS . partículas . mover . velocidade  =  pJS . tmp . obj . move_speed * pJS . lona . pxratio ;
      pJS . partículas . line_linked . distância  =  pJS . tmp . obj . line_linked_distance * pJS . lona . pxratio ;
      pJS . interatividade . modos . agarrar . distância  =  pJS . tmp . obj . mode_grab_distance * pJS . lona . pxratio ;
      pJS . interatividade . modos . bolha . distância  =  pJS . tmp . obj . mode_bubble_distance * pJS . lona . pxratio ;
      pJS . partículas . line_linked . width  =  pJS . tmp . obj . line_linked_width * pJS . lona . pxratio ;
      pJS . interatividade . modos . bolha . tamanho  =  pJS . tmp . obj . mode_bubble_size * pJS . lona . pxratio ;
      pJS . interatividade . modos . repulsa . distância  =  pJS . tmp . obj . mode_repulse_distance * pJS . lona . pxratio ;
  
    } ;
  
  
  
    / * ---------- funções pJS - canvas ------------ * /
  
    pJS . fn . canvasInit  =  function ( ) {
      pJS . lona . ctx  =  pJS . lona . el . getContext ( '2d' ) ;
    } ;
  
    pJS . fn . canvasSize  =  function ( ) {
  
      pJS . lona . el . width  =  pJS . lona . w ;
      pJS . lona . el . altura  =  pJS . lona . h ;
  
      if ( pJS  &&  pJS . interatividade . eventos . redimensionar ) {
  
        janela . addEventListener ( 'redimensionar' ,  function ( ) {
  
            pJS . lona . w  =  pJS . lona . el . offsetWidth ;
            pJS . lona . h  =  pJS . lona . el . offsetHeight ;
  
            / * redimensionar tela * /
            if ( pJS . tmp . retina ) {
              pJS . lona . w * = pJS . lona . pxratio ;
              pJS . lona . h * = pJS . lona . pxratio ;
            }
  
            pJS . lona . el . width  =  pJS . lona . w ;
            pJS . lona . el . altura  =  pJS . lona . h ;
  
            / * repintar tela no anim desativado * /
            if ( ! pJS . particulas . move . enable ) {
              pJS . fn . particulasEmpty ( ) ;
              pJS . fn . particulasCriar ( ) ;
              pJS . fn . particulasDraw ( ) ;
              pJS . fn . fornecedores . densityAutoParticles ( ) ;
            }
  
          / * partículas de densidade ativadas * /
          pJS . fn . fornecedores . densityAutoParticles ( ) ;
  
        } ) ;
  
      }
  
    } ;
  
  
    pJS . fn . canvasPaint  =  function ( ) {
      pJS . lona . ctx . fillRect ( 0 ,  0 ,  pJS . canvas . w ,  pJS . canvas . h ) ;
    } ;
  
    pJS . fn . canvasClear  =  function ( ) {
      pJS . lona . ctx . clearRect ( 0 ,  0 ,  pJS . canvas . w ,  pJS . canvas . h ) ;
    } ;
  
  
    / * --------- funções pJS - partículas ----------- * /
  
    pJS . fn . partícula  =  função ( cor ,  opacidade ,  posição ) {
  
      /* Tamanho */
      isso . raio  =  ( pJS . partículas . tamanho . aleatório ? Matemática . aleatório ( ) : 1 ) * pJS . partículas . tamanho . valor ;
      if ( pJS . partículas . tamanho . anim . habilitar ) {
        isso . size_status  =  false ;
        isso . vs  =  pJS . partículas . tamanho . anim . velocidade / 100 ;
        if ( ! pJS . partículas . tamanho . anim . sincronização ) {
          isso . vs  =  isso . vs * Matemática . aleatório ( ) ;
        }
      }
  
      / * posição * /
      isso . x  =  posição ? posição . x : matemática . random ( ) * pJS . lona . w ;
      isso . y  =  posição ? posição . y : Matemática . random ( ) * pJS . lona . h ;
  
      / * verificar posição - na tela * /
      if ( this . x  >  pJS . canvas . w  -  this . radius * 2 )  this . x  =  isso . x  -  isso . raio ;
       caso contrário, se ( isto . x  <  isto . raio * 2 )  isto . x  =  isso . x  +  isso . raio ;
      if ( this . y  >  pJS . canvas . h  -  this . radius * 2 )  this . y  =  isso . y  -  isso . raio ;
       caso contrário, se ( isto . y  <  isto . raio * 2 )  isto . y  =  isso . y  +  isso . raio ;
  
      / * verificar posição - evitar sobreposição * /
      if ( pJS . partículas . movimento . salto ) {
        pJS . fn . fornecedores . checkOverlap ( este ,  posição ) ;
      }
  
      /* cor */
      isso . color  =  { } ;
      if ( typeof ( color . value )  ==  'objeto' ) {
  
        if ( color . value  instanceof  Array ) {
          var  color_selected  =  color . valor [ Math . floor ( Math . random ( ) * pJS . particulas . cor . valor . comprimento ) ] ;
          isso . cor . rgb  =  hexToRgb ( cor_selecionada ) ;
        } mais {
          if ( cor . valor . r ! = indefinido &&  cor . valor . g ! = indefinido &&  cor . valor . b ! = indefinido ) {
            isso . cor . rgb  =  {
              r : cor . valor . r ,
              g : cor . valor . g ,
              b : cor . valor . b
            }
          }
          if ( cor . valor . h ! = indefinido &&  cor . valor . s ! = indefinido &&  cor . valor . l ! = indefinido ) {
            isso . cor . hsl  =  {
              h : cor . valor . h ,
              s : cor . valor . s ,
              l : cor . valor . eu
            }
          }
        }
  
      }
       caso contrário, if ( color . value  ==  'random' ) {
        isso . cor . rgb  =  {
          r : ( Math . floor ( Math . random ( ) * ( 255  -  0  +  1 ) )  +  0 ) ,
          g : ( Math . floor ( Math . random ( ) * ( 255  -  0  +  1 ) )  +  0 ) ,
          b : ( Math . floor ( Math . random ( ) * ( 255  -  0  +  1 ) )  +  0 )
        }
      }
       caso contrário, if ( typeof ( color . value )  ==  'string' ) {
        isso . cor  =  cor ;
        isso . cor . RGB  =  hexToRgb ( esta . cor . valor ) ;
      }
  
      / * opacidade * /
      isso . opacidade  =  ( pJS . partículas . opacidade . aleatório ? Matemática . aleatório ( ) : 1 ) * pJS . partículas . opacidade . valor ;
      if ( pJS . partículas . opacidade . anim . ativar ) {
        isso . opacity_status  =  false ;
        isso . vo  =  pJS . partículas . opacidade . anim . velocidade / 100 ;
        if ( ! pJS . partículas . opacidade . anim . sincronização ) {
          isso . vo  =  isso . vo * Math . aleatório ( ) ;
        }
      }
  
      / * animação - velocidade por velocidade * /
      var  velbase  =  { }
      interruptor ( pJS . partículas . movimento . direção ) {
        case  'top' :
          velbase  =  {  x : 0 ,  y : - 1  } ;
        quebrar ;
        caso  'canto superior direito' :
          velbase  =  {  x : 0,5 ,  y : - 0,5  } ;
        quebrar ;
        case  'right' :
          velbase  =  {  x : 1 ,  y : - 0  } ;
        quebrar ;
        caso  "canto inferior direito" :
          velbase  =  {  x : 0,5 ,  y : 0,5  } ;
        quebrar ;
        case  'bottom' :
          velbase  =  {  x : 0 ,  y : 1  } ;
        quebrar ;
        caso  "inferior esquerdo" :
          velbase  =  {  x : - 0,5 ,  y : 1  } ;
        quebrar ;
        caso  'esquerdo' :
          velbase  =  {  x : - 1 ,  y : 0  } ;
        quebrar ;
        caso  'superior esquerdo' :
          velbase  =  {  x : - 0,5 ,  y : - 0,5  } ;
        quebrar ;
        padrão :
          velbase  =  {  x : 0 ,  y : 0  } ;
        quebrar ;
      }
  
      if ( pJS . partículas . mova . em linha reta ) {
        isso . vx  =  velbase . x ;
        isso . vy  =  velbase . y ;
        if ( pJS . partículas . movimento . aleatório ) {
          isso . vx  =  isso . vx * ( Math . random ( ) ) ;
          isso . vy  =  isso . vy * ( Math . random ( ) ) ;
        }
      } mais {
        isso . vx  =  velbase . x  +  matemática . aleatório ( ) - 0,5 ;
        isso . vy  =  velbase . y  +  matemática . aleatório ( ) - 0,5 ;
      }
  
      // var theta = 2.0 * Math.PI * Math.random ();
      // this.vx = Math.cos (teta);
      // this.vy = Math.sin (teta);
  
      isso . vx_i  =  isso . vx ;
      isso . vy_i  =  isso . vy ;
  
      
  
      / * se a forma for imagem * /
  
      var  shape_type  =  pJS . partículas . forma . tipo ;
      if ( typeof ( shape_type )  ==  'objeto' ) {
        if ( instance_type shapeof  Array ) { 
          var  shape_selected  =  shape_type [ Matemática . floor ( Math . random ( ) * shape_type . length ) ] ;
          isso . shape  =  shape_selected ;
        }
      } mais {
        isso . shape  =  shape_type ;
      }
  
      if ( this . shape  ==  'imagem' ) {
        var  sh  =  pJS . partículas . forma ;
        isso . img  =  {
          src : sh . imagem . src ,
          relação : sh . imagem . largura / sh . imagem . altura
        }
        if ( ! this . img . ratio )  isso . img . razão  =  1 ;
        if ( pJS . tmp . img_type  ==  'svg'  &&  pJS . tmp . source_svg ! = indefinido ) {
          pJS . fn . fornecedores . createSvgImg ( this ) ;
          if ( pJS . tmp . push ) {
            isso . img . carregado  =  falso ;
          }
        }
      }
  
      
  
    } ;
  
  
    pJS . fn . partícula . protótipo . draw  =  function ( )  {
  
      var  p  =  isto ;
  
      if ( p . radius_bubble ! = indefinido ) {
         raio  var =  p . radius_bubble ; 
      } mais {
         raio  var =  p . raio ;
      }
  
      if ( p . opacity_bubble ! = indefinido ) {
         opacidade  var =  p . opacity_bubble ;
      } mais {
         opacidade  var =  p . opacidade ;
      }
  
      if ( p . cor . rgb ) {
        var  color_value  =  'rgba (' + p . cor . rgb . r + ',' + p . cor . rgb . g + ',' + p . cor . rgb . b + ',' + opacidade + ')' ;
      } mais {
        var  color_value  =  'hsla (' + p . cor . hsl . h + ',' + p . cor . hsl . s + '%,' + p . cor . hsl . l + '%,' + opacidade + ') ' ;
      }
  
      pJS . lona . ctx . fillStyle  =  color_value ;
      pJS . lona . ctx . beginPath ( ) ;
  
      switch ( p . forma ) {
  
        case  'circle' :
          pJS . lona . ctx . arco ( p . x ,  p . y ,  raio ,  0 ,  matemática . PI * 2 ,  falso ) ;
        quebrar ;
  
        case  'edge' :
          pJS . lona . ctx . rect ( p . x - raio ,  p . y - raio ,  raio * 2 ,  raio * 2 ) ;
        quebrar ;
  
        caso  'triângulo' :
          pJS . fn . fornecedores . drawShape ( pJS . canvas . ctx ,  p . x - raio ,  p . y + raio / 1,66 ,  raio * 2 ,  3 ,  2 ) ;
        quebrar ;
  
        case  'polygon' :
          pJS . fn . fornecedores . drawShape (
            pJS . lona . ctx ,
            p . x  -  raio / ( pJS . partículas . forma . polígono . nb_sides / 3.5 ) ,  // startX
            p . y  -  raio / ( 2,66 / 3,5 ) ,  // startY
            raio * 2,66 / ( pJS . partículas . forma . polígono . nb_sides / 3 ) ,  // sideLength
            pJS . partículas . forma . polígono . nb_sides ,  // sideCountNumerator
            1  // sideCountDenominator
          ) ;
        quebrar ;
  
        caso  'estrela' :
          pJS . fn . fornecedores . drawShape (
            pJS . lona . ctx ,
            p . x  -  raio * 2 / ( pJS . partículas . forma . polígono . nb_sides / 4 ) ,  // startX
            p . y  -  raio / ( 2 * 2,66 / 3,5 ) ,  // startY
            raio * 2 * 2,66 / ( pJS . partículas . forma . polígono . nb_sides / 3 ) ,  // sideLength
            pJS . partículas . forma . polígono . nb_sides ,  // sideCountNumerator
            2  // sideCountDenominator
          ) ;
        quebrar ;
  
        case  'image' :
  
          função  draw ( ) {
            pJS . lona . ctx . drawImage (
              img_obj ,
              p . x - raio ,
              p . y - raio ,
              raio * 2 ,
              raio * 2 / p . img . Razão
            ) ;
          }
  
          if ( pJS . tmp . img_type  ==  'svg' ) {
            var  img_obj  =  p . img . obj ;
          } mais {
            var  img_obj  =  pJS . tmp . img_obj ;
          }
  
          if ( img_obj ) {
            draw ( ) ;
          }
  
        quebrar ;
  
      }
  
      pJS . lona . ctx . closePath ( ) ;
  
      if ( pJS . partículas . forma . curso . largura  >  0 ) {
        pJS . lona . ctx . strokeStyle  =  pJS . partículas . forma . acidente vascular cerebral . cor ;
        pJS . lona . ctx . lineWidth  =  pJS . partículas . forma . acidente vascular cerebral . largura ;
        pJS . lona . ctx . acidente vascular cerebral ( ) ;
      }
      
      pJS . lona . ctx . fill ( ) ;
      
    } ;
  
  
    pJS . fn . particulasCreate  =  function ( ) {
      para ( var  i  =  0 ;  i  <  pJS . partículas . número . valor ;  i ++ )  {
        pJS . partículas . array . push ( nova  pJS . fn . partícula ( pJS . partículas . cor ,  pJS . partículas . opacidade . valor ) ) ;
      }
    } ;
  
    pJS . fn . particuUpdate  =  function ( ) {
  
      para ( var  i  =  0 ;  i  <  pJS . partículas . matriz . comprimento ;  i ++ ) {
  
        / * a partícula * /
        var  p  =  pJS . partículas . matriz [ i ] ;
  
        // var d = (dx = pJS.interactivity.mouse.click_pos_x - px) * dx + (dy = pJS.interactivity.mouse.click_pos_y - py) * dy;
        // var f = -BANG_SIZE / d;
        // if (d <BANG_SIZE) {
        // var t = Math.atan2 (dy, dx);
        // p.vx = f * Math.cos (t);
        // p.vy = f * Math.sin (t);
        //}
  
        / * move a partícula * /
        if ( pJS . particulas . move . enable ) {
          var  ms  =  pJS . partículas . mover . velocidade / 2 ;
          p . x  + =  p . vx * ms ;
          p . y  + =  p . vy * ms ;
        }
  
        / * alterar status da opacidade * /
        if ( pJS . partículas . opacidade . anim . ativar )  {
          if ( p . opacity_status  ==  true )  {
            if ( p . opacidade > = pJS . partículas . opacidade . valor )  p . opacity_status  =  false ;
            p . opacidade  + =  p . vo ;
          } mais  {
            if ( p . opacidade <= pJS . partículas . opacidade . anim . opacity_min )  p . opacity_status  =  true ;
            p . opacidade  - =  p . vo ;
          }
          se ( p . opacidade  <  0 )  p . opacidade  =  0 ;
        }
  
        / * alterar tamanho * /
        if ( pJS . partículas . tamanho . anim . habilitar ) {
          if ( p . size_status  ==  true ) {
            if ( p . raio > = pJS . partículas . tamanho . valor )  p . size_status  =  false ;
            p . raio  + =  p . vs ;
          } mais {
            if ( p . raio <= pJS . partículas . tamanho . anim . size_min )  p . size_status  =  true ;
            p . raio  - =  p . vs ;
          }
          se ( p . raio  <  0 )  p . raio  =  0 ;
        }
  
        / * altera a posição das partículas se estiver fora da tela * /
        if ( pJS . particulas . move . out_mode  ==  'rejeição' ) {
          var  new_pos  =  {
            x_left : p . raio ,
            x_right :   pJS . lona . w ,
            y_top : p . raio ,
            y_bottom : pJS . lona . h
          }
        } mais {
          var  new_pos  =  {
            x_left : - p . raio ,
            x_right : pJS . lona . w  +  p . raio ,
            y_top : - p . raio ,
            y_bottom : pJS . lona . h  +  p . raio
          }
        }
  
        if ( p . x  -  p . raio  >  pJS . canvas . w ) {
          p . x  =  new_pos . x_left ;
          p . y  =  matemática . random ( ) * pJS . lona . h ;
        }
         caso contrário, se ( p . x  +  p . raio  <  0 ) {
          p . x  =  new_pos . x_right ;
          p . y  =  matemática . random ( ) * pJS . lona . h ;
        }
        if ( p . y  -  p . raio  >  pJS . canvas . h ) {
          p . y  =  novos_pos . y_top ;
          p . x  =  matemática . random ( ) * pJS . lona . w ;
        }
         caso contrário, se ( p . y  +  p . raio  <  0 ) {
          p . y  =  novos_pos . y_bottom ;
          p . x  =  matemática . random ( ) * pJS . lona . w ;
        }
  
        / * fora dos modos de tela * /
        switch ( pJS . particulas . mover . out_mode ) {
          case  'bounce' :
            if  ( p . x  +  p . raio  >  pJS . canvas . w )  p . vx  =  - p . vx ;
             caso  contrário, se ( p . x  -  p . raio  <  0 )  p . vx  =  - p . vx ;
            if  ( p . y  +  p . raio  >  pJS . canvas . h )  p . vy  =  - p . vy ;
             caso  contrário, se ( p . y  -  p . raio  <  0 )  p . vy  =  - p . vy ;
          quebrar ;
        }
  
        / * eventos * /
        if ( isInArray ( 'grab' ,  pJS . interatividade . eventos . onhover . modo ) ) {
          pJS . fn . modos . grabParticle ( p ) ;
        }
  
        if ( isInArray ( 'bolha' ,  pJS . interatividade . eventos . modo suspenso . | )) || isInArray ( 'bolha' , pJS . interatividade . eventos . onclick . modo ) ) {   
          pJS . fn . modos . bubbleParticle ( p ) ;
        }
  
        if ( isInArray ( ' repulse ' ,  pJS . interatividade . eventos . deslocamento . modo )  ||  isInArray ( ' repulse ' ,  pJS . interatividade . eventos . onclick . modo ) ) {
          pJS . fn . modos . repulseParticle ( p ) ;
        }
  
        / * interação automática entre partículas * /
        if ( pJS . particulas . line_linked . enable  ||  pJS . particulas . mover . atrair . habilitar ) {
          para ( var  j  =  i  +  1 ;  j  <  pJS . partículas . matriz . comprimento ;  j ++ ) {
            var  p2  =  pJS . partículas . matriz [ j ] ;
  
            / * partículas de link * /
            if ( pJS . particulas . line_linked . enable ) {
              pJS . fn . interagir . linkParticles ( p , p2 ) ;
            }
  
            / * atrair partículas * /
            if ( pJS . partículas . mova-se . atraia . habilite ) {
              pJS . fn . interagir . atrair partículas ( p , p2 ) ;
            }
  
            / * partículas de rejeição * /
            if ( pJS . partículas . movimento . salto ) {
              pJS . fn . interagir . bounceParticles ( p , p2 ) ;
            }
  
          }
        }
  
  
      }
  
    } ;
  
    pJS . fn . particulasDraw  =  function ( ) {
  
      / * tela transparente * /
      pJS . lona . ctx . clearRect ( 0 ,  0 ,  pJS . canvas . w ,  pJS . canvas . h ) ;
  
      / * atualiza cada parâmetro de partículas * /
      pJS . fn . particulasUpdate ( ) ;
  
      / * desenha cada partícula * /
      para ( var  i  =  0 ;  i  <  pJS . partículas . matriz . comprimento ;  i ++ ) {
        var  p  =  pJS . partículas . matriz [ i ] ;
        p . draw ( ) ;
      }
  
    } ;
  
    pJS . fn . particulasEmpty  =  function ( ) {
      pJS . partículas . matriz  =  [ ] ;
    } ;
  
    pJS . fn . particulasRefresh  =  function ( ) {
  
      / * init all * /
      cancelRequestAnimFrame ( pJS . fn . checkAnimFrame ) ;
      cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
      pJS . tmp . source_svg  = indefinido ;
      pJS . tmp . img_obj  = indefinido ;
      pJS . tmp . count_svg  =  0 ;
      pJS . fn . particulasEmpty ( ) ;
      pJS . fn . canvasClear ( ) ;
      
      /* reiniciar */
      pJS . fn . fornecedores . start ( ) ;
  
    } ;
  
  
    / * ---------- funções pJS - interação de partículas ------------ * /
  
    pJS . fn . interagir . linkParticles  =  function ( p1 ,  p2 ) {
  
      var  dx  =  p1 . x  -  p2 . x ,
          dy  =  p1 . y  -  p2 . y ,
          dist  =  Math . sqrt ( dx * dx  +  dy * dy ) ;
  
      / * desenha uma linha entre p1 e p2 se a distância entre eles estiver abaixo da distância de configuração * /
      if ( dist <= pJS . partículas . line_linked . distance ) {
  
        var  opacity_line  =  pJS . partículas . line_linked . opacidade  -  ( dist / ( 1 / pJS . partículas . line_linked . opacidade ) ) / pJS . partículas . line_linked . distância ;
  
        if ( opacity_line  >  0 ) {        
          
          /* estilo */
          var  color_line  =  pJS . partículas . line_linked . color_rgb_line ;
          pJS . lona . ctx . strokeStyle  =  'rgba (' + cor_linha . r + ',' + cor_linha . g + ',' + cor_linha . b + ',' + opacidade_linha + ')' ;
          pJS . lona . ctx . lineWidth  =  pJS . partículas . line_linked . largura ;
          //pJS.canvas.ctx.lineCap = 'round'; /* problema de desempenho */
          
          / * caminho * /
          pJS . lona . ctx . beginPath ( ) ;
          pJS . lona . ctx . moveTo ( p1 . x ,  p1 . y ) ;
          pJS . lona . ctx . lineTo ( p2 . x ,  p2 . y ) ;
          pJS . lona . ctx . acidente vascular cerebral ( ) ;
          pJS . lona . ctx . closePath ( ) ;
  
        }
  
      }
  
    } ;
  
  
    pJS . fn . interagir . atraParticles   =  function ( p1 ,  p2 ) {
  
      / * partículas condensadas * /
      var  dx  =  p1 . x  -  p2 . x ,
          dy  =  p1 . y  -  p2 . y ,
          dist  =  Math . sqrt ( dx * dx  +  dy * dy ) ;
  
      if ( dist <= pJS . partículas . line_linked . distance ) {
  
        var  ax  =  dx / ( pJS . partículas . movimento . atração . rotateX * 1000 ) ,
            ay  =  dy / ( pJS . partículas . movimento . atração . rotação Y * 1000 ) ;
  
        p1 . vx  - =  ax ;
        p1 . vy  - =  ay ;
  
        p2 . vx  + =  ax ;
        p2 . vy  + =  ay ;
  
      }
      
  
    }
  
  
    pJS . fn . interagir . bounceParticles  =  function ( p1 ,  p2 ) {
  
      var  dx  =  p1 . x  -  p2 . x ,
          dy  =  p1 . y  -  p2 . y ,
          dist  =  Math . sqrt ( dx * dx  +  dy * dy ) ,
          dist_p  =  p1 . raio + p2 . raio ;
  
      if ( dist <= dist_p ) {
        p1 . vx  =  - p1 . vx ;
        p1 . vy  =  - p1 . vy ;
  
        p2 . vx  =  - p2 . vx ;
        p2 . vy  =  - p2 . vy ;
      }
  
    }
  
  
    / * ---------- funções pJS - eventos de modos ------------ * /
  
    pJS . fn . modos . pushParticles  =  function ( nb ,  pos ) {
  
      pJS . tmp . empurrando  =  verdadeiro ;
  
      para ( var  i  =  0 ;  i  <  nb ;  i ++ ) {
        pJS . partículas . array . push (
          novo  pJS . fn . partícula (
            pJS . partículas . cor ,
            pJS . partículas . opacidade . valor ,
            {
              'x' : pos ? pos . pos_x : Matemática . random ( ) * pJS . lona . w ,
              'y' : pos ? pos . pos_y : Matemática . random ( ) * pJS . lona . h
            }
          )
        )
        if ( i  ==  nb - 1 ) {
          if ( ! pJS . particulas . move . enable ) {
            pJS . fn . particulasDraw ( ) ;
          }
          pJS . tmp . empurrando  =  falso ;
        }
      }
  
    } ;
  
  
    pJS . fn . modos . removeParticles  =  function ( nb ) {
  
      pJS . partículas . array . emenda ( 0 ,  nb ) ;
      if ( ! pJS . particulas . move . enable ) {
        pJS . fn . particulasDraw ( ) ;
      }
  
    } ;
  
  
    pJS . fn . modos . bubbleParticle  =  function ( p ) {
  
      / * no evento suspenso * /
      if ( pJS . interatividade . eventos . onhover . enable  &&  isInArray ( 'bolha' ,  pJS . interatividade . eventos . onhover . modo ) ) {
  
        var  dx_mouse  =  p . x  -  pJS . interatividade . mouse . pos_x ,
            dy_mouse  =  p . y  -  pJS . interatividade . mouse . pos_y ,
            dist_mouse  =  Math . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ,
            razão  =  1  -  dist_mouse / pJS . interatividade . modos . bolha . distância ;
  
        função  init ( ) {
          p . opacity_bubble  =  p . opacidade ;
          p . radius_bubble  =  p . raio ;
        }
  
        / * mousemove - taxa de verificação * /
        if ( dist_mouse <= pJS . interatividade . modos . bolha . distância ) {
  
          if ( razão > = 0  &&  pJS . interatividade . status  ==  'mousemove' ) {
            
            /* Tamanho */
            if ( pJS . interatividade . modos . bolha . tamanho ! = pJS . partículas . tamanho . valor ) {
  
              if ( pJS . interatividade . modos . bolha . tamanho  >  pJS . partículas . tamanho . valor ) {
                 tamanho  var =  p . raio  +  ( pJS . interatividade . modos . bolha . tamanho * razão ) ;
                if ( tamanho > = 0 ) {
                  p . radius_bubble  =  tamanho ;
                }
              } mais {
                var  dif  =  p . raio  -  pJS . interatividade . modos . bolha . tamanho ,
                    tamanho  =  p . raio  -  ( relação dif * ) ;
                if ( tamanho  >  0 ) {
                  p . radius_bubble  =  tamanho ;
                } mais {
                  p . radius_bubble  =  0 ;
                }
              }
  
            }
  
            / * opacidade * /
            if ( pJS . interatividade . modos . bolha . opacidade ! = pJS . partículas . opacidade . valor ) {
  
              if ( pJS . interatividade . modos . bolha . opacidade  >  pJS . partículas . opacidade . valor ) {
                 opacidade  var =  pJS . interatividade . modos . bolha . opacidade * razão ;
                if ( opacidade  >  p . opacidade  &&  opacidade <= pJS . interatividade . modos . bolha . opacidade ) {
                  p . opacity_bubble  =  opacidade ;
                }
              } mais {
                 opacidade  var =  p . opacidade  -  ( pJS . partículas . opacidade . valor - pJS . interatividade . modos . bolha . opacidade ) * razão ;
                if ( opacidade  <  p . opacidade  &&  opacidade > = pJS . interatividade . modos . bolha . opacidade ) {
                  p . opacity_bubble  =  opacidade ;
                }
              }
  
            }
  
          }
  
        } mais {
          init ( ) ;
        }
  
  
        / * mouseleave * /
        if ( pJS . interatividade . status  ==  'ratoeira' ) {
          init ( ) ;
        }
      
      }
  
      / * no evento de clique * /
       caso contrário, se ( pJS . interatividade . eventos . onclick . ativar  &&  isInArray ( 'bolha' ,  pJS . interatividade . eventos . onclick . modo ) ) {
  
  
        if ( pJS . tmp . bubble_clicking ) {
          var  dx_mouse  =  p . x  -  pJS . interatividade . mouse . click_pos_x ,
              dy_mouse  =  p . y  -  pJS . interatividade . mouse . click_pos_y ,
              dist_mouse  =  Math . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ,
              time_spent  =  ( new  Date ( ) . getTime ( )  -  pJS . interatividade . mouse . click_time ) / 1000 ;
  
          if ( time_spent  >  pJS . interatividade . modos . bolha . duração ) {
            pJS . tmp . bubble_duration_end  =  true ;
          }
  
          if (tempo gasto  >  pJS . interatividade . modos . bolha . duração * 2 ) {
            pJS . tmp . bubble_clicking  =  false ;
            pJS . tmp . bubble_duration_end  =  false ;
          }
        }
  
  
         processo de função ( bolha_param ,  partículas_param ,  p_obj_bubble ,  p_obj ,  id ) {
  
          if ( bolha_param ! = partículas_param ) {
  
            if ( ! pJS . tmp . bubble_duration_end ) {
              if ( dist_mouse <= pJS . interatividade . modos . bolha . distância ) {
                if ( p_obj_bubble ! = indefinido )  var  obj  =  p_obj_bubble ;
                else  var  obj  =  p_obj ;
                if ( obj ! = bubble_param ) {
                   valor  var =  p_obj  -  (tempo gasto * ( p_obj  -  bubble_param ) / pJS . interatividade . modos . bolha . duração ) ;
                  if ( id  ==  'tamanho' )  p . radius_bubble  =  valor ;
                  if ( id  ==  'opacidade' )  p . opacity_bubble  =  valor ;
                }
              } mais {
                if ( id  ==  'tamanho' )  p . radius_bubble  = indefinido ;
                if ( id  ==  'opacidade' )  p . opacity_bubble  = indefinido ;
              }
            } mais {
              if ( p_obj_bubble ! = undefined ) {
                var  value_tmp  =  p_obj  -  (tempo gasto * ( p_obj  -  bubble_param ) / pJS . interatividade . modos . bolha . duração ) ,
                    dif  =  bolha_param  -  valor_tmp ;
                    valor  =  bubble_param  +  dif ;
                if ( id  ==  'tamanho' )  p . radius_bubble  =  valor ;
                if ( id  ==  'opacidade' )  p . opacity_bubble  =  valor ;
              }
            }
  
          }
  
        }
  
        if ( pJS . tmp . bubble_clicking ) {
          /* Tamanho */
          processo ( pJS . interatividade . modos . bolha . tamanho ,  pJS . partículas . tamanho . valor ,  p . radius_bubble ,  p . raio ,  'tamanho' ) ;
          / * opacidade * /
          processo ( pJS . interatividade . modos . bolha . opacidade ,  pJS . partículas . opacidade . valor ,  p . opacity_bubble ,  p . opacidade ,  'opacidade' ) ;
        }
  
      }
  
    } ;
  
  
    pJS . fn . modos . repulseParticle  =  function ( p ) {
  
      if ( pJS . interatividade . eventos . onhover . ativar  &&  isInArray ( ' repulse ' ,  pJS . interatividade . eventos . onhover . modo )  &&  pJS . interatividade . status  ==  'mousemove' )  {
  
        var  dx_mouse  =  p . x  -  pJS . interatividade . mouse . pos_x ,
            dy_mouse  =  p . y  -  pJS . interatividade . mouse . pos_y ,
            dist_mouse  =  Math . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ;
  
        var  normVec  =  { x : dx_mouse / dist_mouse ,  y : dy_mouse / dist_mouse } ,
            repulseRadius  =  pJS . interatividade . modos . repulsa . distância ,
            velocidade  =  100 ,
            repulseFactor  =  grampo ( ( 1 / repulseRadius ) * ( - 1 * Math . pow ( dist_mouse / repulseRadius , 2 ) + 1 ) * repulseRadius * velocidade ,  0 ,  50 ) ;
        
        var  pos  =  {
          x : p . x  +  normVec . x * repulseFactor ,
          y : p . y  +  normVec . y * repulseFactor
        }
  
        if ( pJS . particulas . move . out_mode  ==  'rejeição' ) {
          if ( pos . x  -  p . raio  >  0  &&  pos . x  +  p . raio  <  pJS . tela . w )  p . x  =  pos . x ;
          if ( pos . y  -  p . raio  >  0  &&  pos . y  +  p . raio  <  pJS . tela . h )  p . y  =  pos . y ;
        } mais {
          p . x  =  pos . x ;
          p . y  =  pos . y ;
        }
      
      }
  
  
       caso contrário, se ( pJS . interatividade . eventos . onclick . ativar  &&  isInArray ( ' repulse ' ,  pJS . interatividade . eventos . onclick . modo ) )  {
  
        if ( ! pJS . tmp . repulse_finish ) {
          pJS . tmp . repulse_count ++ ;
          if ( pJS . tmp . repulse_count  ==  pJS . partículas . matriz . comprimento ) {
            pJS . tmp . repulse_finish  =  true ;
          }
        }
  
        if ( pJS . tmp . repulse_clicking ) {
  
          var  repulseRadius  =  Math . pow ( pJS . interatividade . modos . repulsa . distância / 6 ,  3 ) ;
  
          var  dx  =  pJS . interatividade . mouse . click_pos_x  -  p . x ,
              dy  =  pJS . interatividade . mouse . click_pos_y  -  p . y ,
              d  =  dx * dx  +  dy * dy ;
  
          var  force  =  - repulseRadius / d * 1 ;
  
          função  process ( ) {
  
            var  f  =  matemática . atan2 ( dy , dx ) ;
            p . vx  =  força * Matemática . cos ( f ) ;
            p . vy  =  força * Matemática . pecado ( f ) ;
  
            if ( pJS . particulas . move . out_mode  ==  'rejeição' ) {
              var  pos  =  {
                x : p . x  +  p . vx ,
                y : p . y  +  p . vy
              }
              if  ( pos . x  +  p . raio  >  pJS . canvas . w )  p . vx  =  - p . vx ;
               caso  contrário, se ( pos . x  -  p . raio  <  0 )  p . vx  =  - p . vx ;
              if  ( pos . y  +  p . raio  >  pJS . canvas . h )  p . vy  =  - p . vy ;
              outra  se  ( pos . y  -  p . raio  <  0 )  p . vy  =  - p . vy ;
            }
  
          }
  
          // padrão
          if ( d <= repulseRadius ) {
            processo ( ) ;
          }
  
          // bang - modo de câmera lenta
          // if (! pJS.tmp.repulse_finish) {
          // if (d <= repulseRadius) {
          // processo();
          //}
          // }outro{
          // processo();
          //}
          
  
        } mais {
  
          if ( pJS . tmp . repulse_clicking  ==  false ) {
  
            p . vx  =  p . vx_i ;
            p . vy  =  p . vy_i ;
          
          }
  
        }
  
      }
  
    }
  
  
    pJS . fn . modos . grabParticle  =  function ( p ) {
  
      if ( pJS . interatividade . eventos . onhover . ativar  &&  pJS . interatividade . status  ==  'mousemove' ) {
  
        var  dx_mouse  =  p . x  -  pJS . interatividade . mouse . pos_x ,
            dy_mouse  =  p . y  -  pJS . interatividade . mouse . pos_y ,
            dist_mouse  =  Math . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ;
  
        / * desenha uma linha entre o cursor e a partícula se a distância entre eles estiver abaixo da distância de configuração * /
        if ( dist_mouse <= pJS . interatividade . modos . agarrar . distância ) {
  
          var  opacity_line  =  pJS . interatividade . modos . agarrar . line_linked . opacidade  -  ( dist_mouse / ( 1 / pJS . interatividade . modos . agarrar . line_linked . opacidade ) ) / pJS . interatividade . modos . agarrar . distância ;
  
          if ( opacity_line  >  0 ) {
  
            /* estilo */
            var  color_line  =  pJS . partículas . line_linked . color_rgb_line ;
            pJS . lona . ctx . strokeStyle  =  'rgba (' + cor_linha . r + ',' + cor_linha . g + ',' + cor_linha . b + ',' + opacidade_linha + ')' ;
            pJS . lona . ctx . lineWidth  =  pJS . partículas . line_linked . largura ;
            //pJS.canvas.ctx.lineCap = 'round'; /* problema de desempenho */
            
            / * caminho * /
            pJS . lona . ctx . beginPath ( ) ;
            pJS . lona . ctx . moveTo ( p . x ,  p . y ) ;
            pJS . lona . ctx . lineTo ( pJS . interatividade . mouse . pos_x ,  pJS . interatividade . mouse . pos_y ) ;
            pJS . lona . ctx . acidente vascular cerebral ( ) ;
            pJS . lona . ctx . closePath ( ) ;
  
          }
  
        }
  
      }
  
    } ;
  
  
  
    / * ---------- Funções pJS - vendors ------------ * /
  
    pJS . fn . fornecedores . eventsListeners  =  function ( ) {
  
      / * elemento de destino de eventos * /
      if ( pJS . interatividade . detect_on  ==  'janela' ) {
        pJS . interatividade . el  =  janela ;
      }mais {
        pJS . interatividade . el  =  pJS . tela de pintura . el ;
      }
  
  
      / * detectar o mouse pos - ao passar o mouse / clicar em evento * /
      if ( pJS . interatividade . eventos . onhover . ativar  ||  pJS . interatividade . eventos . onclicar . ativar ) {
  
        / * el no mouse * /
        pJS . interatividade . el . addEventListener ( 'mousemove' ,  function ( e ) {
  
          if ( pJS . interatividade . el  ==  janela ) {
            var  pos_x  =  e . clientX ,
                pos_y  =  e . clientY ;
          }
          mais {
            var  pos_x  =  e . offsetX  ||  e . clientX ,
                pos_y  =  e . offsetY  ||  e . clientY ;
          }
  
          pJS . interatividade . mouse . pos_x  =  pos_x ;
          pJS . interatividade . mouse . pos_y  =  pos_y ;
  
          if ( pJS . tmp . retina ) {
            pJS . interatividade . mouse . pos_x * = pJS . lona . pxratio ;
            pJS . interatividade . mouse . pos_y * = pJS . lona . pxratio ;
          }
  
          pJS . interatividade . status  =  'mousemove' ;
  
        } ) ;
  
        / * el onmouseleave * /
        pJS . interatividade . el . addEventListener ( 'mouseleave' ,  function ( e ) {
  
          pJS . interatividade . mouse . pos_x  = nulo ;
          pJS . interatividade . mouse . pos_y  = nulo ;
          pJS . interatividade . status  =  'ratoeira' ;
  
        } ) ;
  
      }
  
      / * no evento de clique * /
      if ( pJS . interatividade . eventos . onclick . ativar ) {
  
        pJS . interatividade . el . addEventListener ( 'clique' ,  função ( ) {
  
          pJS . interatividade . mouse . click_pos_x  =  pJS . interatividade . mouse . pos_x ;
          pJS . interatividade . mouse . click_pos_y  =  pJS . interatividade . mouse . pos_y ;
          pJS . interatividade . mouse . click_time  =  nova  data ( ) . getTime ( ) ;
  
          if ( pJS . interatividade . eventos . onclick . ativar ) {
  
            switch ( pJS . interatividade . eventos . onclick . modo ) {
  
              case  'push' :
                if ( pJS . particulas . move . enable ) {
                  pJS . fn . modos . pushParticles ( pJS . interatividade . modos . push . particulas_nb ,  pJS . interatividade . mouse ) ;
                } mais {
                  if ( pJS . interatividade . modos . push . particulas_nb  ==  1 ) {
                    pJS . fn . modos . pushParticles ( pJS . interatividade . modos . push . particulas_nb ,  pJS . interatividade . mouse ) ;
                  }
                   caso contrário, se ( pJS . interatividade . modos . empurrar . particulas_nb  >  1 ) {
                    pJS . fn . modos . pushParticles ( pJS . interatividade . modos . push . particulas_nb ) ;
                  }
                }
              quebrar ;
  
              caso  'remover' :
                pJS . fn . modos . removeParticles ( pJS . interatividade . modos . remove . particulas_nb ) ;
              quebrar ;
  
              caso  "bolha" :
                pJS . tmp . bubble_clicking  =  true ;
              quebrar ;
  
              caso  'repulsa' :
                pJS . tmp . repulse_clicking  =  true ;
                pJS . tmp . repulse_count  =  0 ;
                pJS . tmp . repulse_finish  =  false ;
                setTimeout ( function ( ) {
                  pJS . tmp . repulse_clicking  =  false ;
                } ,  PJS . interatividade . modos . repulsa . duração * 1000 )
              quebrar ;
  
            }
  
          }
  
        } ) ;
          
      }
  
  
    } ;
  
    pJS . fn . fornecedores . densityAutoParticles  =  function ( ) {
  
      if ( pJS . partículas . número . densidade . habilitar ) {
  
        / * área de calcário * /
         área  var =  pJS . lona . el . largura * pJS . lona . el . height / 1000 ;
        if ( pJS . tmp . retina ) {
          area  =  area / ( pJS . canvas . pxratio * 2 ) ;
        }
  
        / * número calculado de partículas com base na área de densidade * /
        var  nb_particles  =  área * pJS . partículas . número . valor / pJS . partículas . número . densidade . value_area ;
  
        / * adicione ou remova partículas X * /
        var  missing_particles  =  PJS . partículas . array . comprimento  -  nb_particles ;
        se ( missing_particles  <  0 )  PJS . fn . modos . pushParticles ( Math . abs ( falta_particles ) ) ;
        mais  pJS . fn . modos . removeParticles ( missing_particles ) ;
  
      }
  
    } ;
  
  
    pJS . fn . fornecedores . checkOverlap  =  function ( p1 ,  posição ) {
      para ( var  i  =  0 ;  i  <  pJS . partículas . matriz . comprimento ;  i ++ ) {
        var  p2  =  pJS . partículas . matriz [ i ] ;
  
        var  dx  =  p1 . x  -  p2 . x ,
            dy  =  p1 . y  -  p2 . y ,
            dist  =  Math . sqrt ( dx * dx  +  dy * dy ) ;
  
        if ( dist <= p1 . raio  +  p2 . raio ) {
          p1 . x  =  posição ? posição . x : matemática . random ( ) * pJS . lona . w ;
          p1 . y  =  posição ? posição . y : Matemática . random ( ) * pJS . lona . h ;
          pJS . fn . fornecedores . checkOverlap ( p1 ) ;
        }
      }
    } ;
  
  
    pJS . fn . fornecedores . createSvgImg  =  function ( p ) {
  
      / * define a cor para o elemento svg * /
      var  svgXml  =  pJS . tmp . source_svg ,
          rgbHex  =  / # ( [ 0-9A-F ] { 3,6 } ) / gi ,
          coloredSvgXml  =  svgXml . substituir ( rgbHex ,  função  ( m ,  r ,  g ,  b )  {
            if ( p . cor . rgb ) {
              var  color_value  =  'rgba (' + p . cor . rgb . r + ',' + p . cor . rgb . g + ',' + p . cor . rgb . b + ',' + p . opacidade + ') ' ;
            } mais {
              var  color_value  =  'hsla (' + p . cor . hsl . h + ',' + p . cor . hsl . s + '%,' + p . cor . hsl . l + '%,' + p . opacidade + ')' ;
            }
            retornar  color_value ;
          } ) ;
  
      / * prepare-se para criar img com svg colorido * /
      var  svg  =  novo  Blob ( [ coloredSvgXml ] ,  { tipo : 'image / svg + xml; charset = utf-8' } ) ,
          DOMURL  =  janela . URL  ||  janela . webkitURL  ||  janela ,
          url  =  DOMURL . createObjectURL ( svg ) ;
  
      / * criar partícula img obj * /
      var  img  =  nova  imagem ( ) ;
      img . addEventListener ( 'load' ,  function ( ) {
        p . img . obj  =  img ;
        p . img . carregado  =  verdadeiro ;
        DOMURL . revokeObjectURL ( url ) ;
        pJS . tmp . count_svg ++ ;
      } ) ;
      img . src  =  url ;
  
    } ;
  
  
    pJS . fn . fornecedores . destroypJS  =  function ( ) {
      cancelAnimationFrame ( pJS . fn . drawAnimFrame ) ;
      canvas_el . remove ( ) ;
      pJSDom  = nulo ;
    } ;
  
  
    pJS . fn . fornecedores . drawShape  =  function ( c ,  startX ,  startY ,  sideLength ,  sideCountNumerator ,  sideCountDenominator ) {
  
      // Por Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
      var  sideCount  =  sideCountNumerator * sideCountDenominator ;
      var  decimalSides  =  sideCountNumerator / sideCountDenominator ;
      var  interiorAngleDegrees  =  ( 180 * ( casas decimais  -  2 ) ) / casas decimais ;
      var  interiorAngle  =  Matemática . PI  -  Matemática . PI * interiorAngleDegrees / 180 ;  // converter para radianos
      c . save ( ) ;
      c . beginPath ( ) ;
      c . traduzir ( startX ,  startY ) ;
      c . moveTo ( 0 , 0 ) ;
      for  ( var  i  =  0 ;  i  <  sideCount ;  i ++ )  {
        c . lineTo ( sideLength , 0 ) ;
        c . traduzir ( sideLength , 0 ) ;
        c . girar ( interiorAngle ) ;
      }
      //c.stroke ();
      c . fill ( ) ;
      c . restore ( ) ;
  
    } ;
  
    pJS . fn . fornecedores . exportImg  =  function ( ) {
      janela . open ( pJS . canvas . el . toDataURL ( 'image / png' ) ,  '_blank' ) ;
    } ;
  
  
    pJS . fn . fornecedores . loadImg  =  função ( tipo ) {
  
      pJS . tmp . img_error  = indefinido ;
  
      if ( pJS . partículas . forma . imagem . src ! = '' ) {
  
        if ( digite  ==  'svg' ) {
  
          var  xhr  =  novo  XMLHttpRequest ( ) ;
          xhr . aberto ( 'GET' ,  pJS . partículas . forma . imagem . src ) ;
          xhr . onreadystatechange  =  function  ( data )  {
            if ( xhr . readyState  ==  4 ) {
              if ( xhr . status  ==  200 ) {
                pJS . tmp . source_svg  =  dados . currentTarget . resposta ;
                pJS . fn . fornecedores . checkBeforeDraw ( ) ;
              } mais {
                console . log ( 'Erro pJS - Imagem não encontrada' ) ;
                pJS . tmp . img_error  =  true ;
              }
            }
          }
          xhr . send ( ) ;
  
        } mais {
  
          var  img  =  nova  imagem ( ) ;
          img . addEventListener ( 'load' ,  function ( ) {
            pJS . tmp . img_obj  =  img ;
            pJS . fn . fornecedores . checkBeforeDraw ( ) ;
          } ) ;
          img . src  =  pJS . partículas . forma . imagem . src ;
  
        }
  
      } mais {
        console . log ( 'Erro pJS - No image.src' ) ;
        pJS . tmp . img_error  =  true ;
      }
  
    } ;
  
  
    pJS . fn . fornecedores . draw  =  function ( ) {
  
      if ( pJS . partículas . forma . tipo  ==  'imagem' ) {
  
        if ( pJS . tmp . img_type  ==  'svg' ) {
  
          if ( pJS . tmp . count_svg > = pJS . partículas . número . valor ) {
            pJS . fn . particulasDraw ( ) ;
            if ( ! pJS . particulas . move . enable )  cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
            mais  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendedores . draw ) ;
          } mais {
            //console.log('still loading ... ');
            if ( ! pJS . tmp . img_error )  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendedores . draw ) ;
          }
  
        } mais {
  
          if ( pJS . tmp . img_obj ! = indefinido ) {
            pJS . fn . particulasDraw ( ) ;
            if ( ! pJS . particulas . move . enable )  cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
            mais  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendedores . draw ) ;
          } mais {
            if ( ! pJS . tmp . img_error )  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendedores . draw ) ;
          }
  
        }
  
      } mais {
        pJS . fn . particulasDraw ( ) ;
        if ( ! pJS . particulas . move . enable )  cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
        mais  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendedores . draw ) ;
      }
  
    } ;
  
  
    pJS . fn . fornecedores . checkBeforeDraw  =  function ( ) {
  
      // se forma é imagem
      if ( pJS . partículas . forma . tipo  ==  'imagem' ) {
  
        if ( pJS . tmp . img_type  ==  'svg'  &&  pJS . tmp . source_svg  == indefinido ) {
          pJS . tmp . checkAnimFrame  =  requestAnimFrame ( cheque ) ;
        } mais {
          //console.log('images loaded! cancel check ');
          cancelRequestAnimFrame ( pJS . tmp . checkAnimFrame ) ;
          if ( ! pJS . tmp . img_error ) {
            pJS . fn . fornecedores . init ( ) ;
            pJS . fn . fornecedores . draw ( ) ;
          }
          
        }
  
      } mais {
        pJS . fn . fornecedores . init ( ) ;
        pJS . fn . fornecedores . draw ( ) ;
      }
  
    } ;
  
  
    pJS . fn . fornecedores . init  =  function ( ) {
  
      / * tela inicial + partículas * /
      pJS . fn . retinaInit ( ) ;
      pJS . fn . canvasInit ( ) ;
      pJS . fn . canvasSize ( ) ;
      pJS.fn.canvasPaint();
      pJS.fn.particlesCreate();
      pJS.fn.vendors.densityAutoParticles();
  
      /* particles.line_linked - convert hex colors to rgb */
      pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  
    };
  
  
    pJS.fn.vendors.start = function(){
  
      if(isInArray('image', pJS.particles.shape.type)){
        pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
        pJS.fn.vendors.loadImg(pJS.tmp.img_type);
      }else{
        pJS . fn . fornecedores . checkBeforeDraw ( ) ;
      }
  
    } ;
  
  
  
  
    / * ---------- pJS - start ------------ * /
  
  
    pJS . fn . fornecedores . eventsListeners ( ) ;
  
    pJS . fn . fornecedores . start ( ) ;
    
  
  
  } ;
  
  / * ---------- funções globais - fornecedores ------------ * /
  
  Objeto . deepExtend  =  função ( destino ,  origem )  {
    for  ( propriedade var  na origem ) {   
      if  ( fonte [ propriedade ]  &&  fonte [ propriedade ] . construtor  &&
       fonte [ propriedade ] . constructor  ===  Object )  {
        destination [ property ]  =  destination [ property ]  ||  { } ;
        argumentos . chamada ( destino [ propriedade ] ,  fonte [ propriedade ] ) ;
      }  mais  {
        destino [ propriedade ]  =  origem [ propriedade ] ;
      }
    }
     destino de retorno ;
  } ;
  
  janela . requestAnimFrame  =  ( function ( ) {
      janela de retorno . requestAnimationFrame  ||
      janela . webkitRequestAnimationFrame  ||
      janela . mozRequestAnimationFrame     ||
      janela . oRequestAnimationFrame       ||
      janela . msRequestAnimationFrame      ||
      função ( retorno de chamada ) {
        janela . setTimeout ( chamada de retorno ,  1000 / 60 ) ;
      } ;
  } ) ( ) ;
  
  janela . cancelRequestAnimFrame  =  (  function ( )  {
     janela de retorno . cancelAnimationFrame          ||
      janela . webkitCancelRequestAnimationFrame  ||
      janela . mozCancelRequestAnimationFrame     ||
      janela . oCancelRequestAnimationFrame       ||
      janela . msCancelRequestAnimationFrame      ||
      clearTimeout
  }  ) ( ) ;
  
  função  hexToRgb ( hex ) {
    // Por Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expanda o formato abreviado (por exemplo, "03F") para o formulário completo (por exemplo, "0033FF")
    var  shorthandRegex  =  / ^ #? ( [ af \ d ] ) ( [ af \ d ] ) ( [ af \ d ] ) $ / i ;
    hex  =  hex . substituir ( shorthandRegex ,  função ( m ,  r ,  g ,  b )  {
       retornar  r  +  r  +  g  +  g  +  b  +  b ;
    } ) ;
     resultado  var =  / ^ #? ( [ af \ d ] { 2 } ) ( [ af \ d ] { 2 } ) ( [ af \ d ] { 2 } ) $ / i . exec ( hex ) ;
    retornar  resultado ? {
        r : parseInt ( resultado [ 1 ] ,  16 ) ,
        g : parseInt ( resultado [ 2 ] ,  16 ) ,
        b : parseInt ( resultado [ 3 ] ,  16 )
    } : nulo ;
  } ;
  
   grampo de função ( número ,  min ,  max )  {
    retornar  Math . min ( Math . max ( número ,  min ) ,  max ) ;
  } ;
  
  função  isInArray ( valor ,  matriz )  {
     matriz de retorno . indexOf ( valor )  >  - 1 ;
  }
  
  
  / * ---------- partículas.js funções - início ------------ * /
  
  janela . pJSDom  =  [ ] ;
  
  janela . particulasJS  =  função ( tag_id ,  params ) {
  
    //console.log(params);
  
    / * nenhuma identificação de string? portanto, são parâmetros de objeto e defina a identificação com a identificação padrão * /
    if ( typeof ( tag_id ) ! = 'string' ) {
      params  =  tag_id ;
      tag_id  =  'partículas-js' ;
    }
  
    / * sem identificação? defina o id como padrão * /
    if ( ! tag_id ) {
      tag_id  =  'partículas-js' ;
    }
  
    / * elementos pJS * /
    var  pJS_tag  =  documento . getElementById ( tag_id ) ,
        pJS_canvas_class  =  'particulas-js-canvas-el' ,
        exist_canvas  =  pJS_tag . getElementsByClassName ( pJS_canvas_class ) ;
  
    / * remova a tela se existir na tag de destino pJS * /
    if ( exist_canvas . length ) {
      while ( exist_canvas . length  >  0 ) {
        pJS_tag . removeChild ( exist_canvas [ 0 ] ) ;
      }
    }
  
    / * criar elemento de tela * /
    var  canvas_el  =  documento . createElement ( 'tela' ) ;
    canvas_el . className  =  pJS_canvas_class ;
  
    / * definir tamanho da tela * /
    canvas_el . estilo . largura  =  "100%" ;
    canvas_el . estilo . altura  =  "100%" ;
  
    / * acrescentar tela * /
    var  canvas  =  documento . getElementById ( tag_id ) . appendChild ( canvas_el ) ;
  
    / * iniciar particle.js * /
    if ( canvas ! = null ) {
      pJSDom . push ( novo  pJS ( tag_id ,  params ) ) ;
    }
  
  } ;
  
  janela . particulasJS . load  =  function ( tag_id ,  path_config_json ,  retorno de chamada ) {
  
    / * carregar configuração json * /
    var  xhr  =  novo  XMLHttpRequest ( ) ;
    xhr . open ( 'GET' ,  caminho_config_json ) ;
    xhr . onreadystatechange  =  function  ( data )  {
      if ( xhr . readyState  ==  4 ) {
        if ( xhr . status  ==  200 ) {
          var  params  =  JSON . análise ( data . currentTarget . response ) ;
          janela . particulasJS ( tag_id ,  params ) ;
          if ( retorno de chamada )  retorno de chamada ( ) ;
        } mais {
          console . log ( 'Erro pJS - XMLHttpRequest status:' + xhr . status ) ;
          console . log ( 'Erro pJS - Configuração do arquivo não encontrada' ) ;
        }
      }
    } ;
    xhr . send ( ) ;
  
  } ;