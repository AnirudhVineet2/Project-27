class Chain{
    constructor(bodyA,bodyB){
    var options={

        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 4.8127211111111111111111490124,
        length : 10,
    
        };
        this.chain = Constraint.create(options);
        World.add(world,this.chain); 
}
display(){
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}

}