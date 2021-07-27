class Form{
    constructor(){
    this.button = createButton("input");
    this.title = createImg("sprites/title.png","game title");
    this.greeting= createElement('h2');
    this.input= createInput("").attribute("placeholder","enter your name");
    }

    setElementPosition(){
        this.button.position(width/2-100,height/2-10);
        this.title.position(120,100)
        this.greeting.position(width/2-300,height/2-60);
        this.input.position(width/2-120,height/2-70)
    }
    setElementStyle(){
        this.title.class("gameTitle");
        this.input.class("customInput");
        this.button.class("customButton");
        this.greeting.class("greeting");
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
    HandleMousePressed(){
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var msg=`
            hello ${this.input.value()}
            </br>wait for another to join`;
            this.greeting.html(msg);
            //playerCount+=1
            //player.name=this.input.value();
            //player.index=playerCount();

        

        })

    }
    
    display(){
        this.setElementPosition();
        this.setElementStyle();
        this.HandleMousePressed();
    }
 
}


