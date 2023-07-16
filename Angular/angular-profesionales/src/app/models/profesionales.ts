export class Profesionales {

    public firstName : String;
    public lastName: String;
    public age: Number;
    public weight: Number;
    public height: Number;
    public isRetired: Boolean;
    public nacionality: String;
    public oscarNumber: Number;
    public profession: String;

    constructor(firstName:string,lastName:String, age:Number, weight:Number, height:Number, isRetired:boolean, nacionality:String, oscarNumber:Number, profession:String){

        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.weight = weight
        this.height = height
        this.isRetired = isRetired
        this.nacionality = nacionality
        this.oscarNumber = oscarNumber
        this.profession = profession
    }

}
