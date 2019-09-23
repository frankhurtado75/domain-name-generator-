
window.onload = () => {
    document.querySelector('#new_domain').innerHTML = generateDomain();
    console.log('hola aqui tu nuevo dominio')
};

let generateDomain = () => {
    let pronoun = ['A', 'The']
    let subject = ['tu', 'carro', 'perro', 'metro'];
    let action = ['tookmy','threwmy','yelledatmy','stolemy'];
    let possetion = ['homework','toe','car','shoe'];
    let where = ['onthesecret','inmyhouse'];

    let proIndx = Math.floor(Math.random() *pronoun.length); 
    let subjIndx = Math.floor(Math.random() *subject.length); 
    let actionIndex = Math.floor(Math.random() *action.length); 
    let possetionIndex = Math.floor(Math.random() *possetion.length); 
    let whereIndex = Math.floor(Math.random() *where.length);
    
    return pronoun[proIndx] + subject[subjIndx] +  action[actionIndex] +  possetion[possetionIndex] +  where[whereIndex] + '.com';
}